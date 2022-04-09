/*
 * HuntShowdownLoadoutRandomizer v1.5.3
 * by GrafKnusprig 2022/04/09
 */

var primaryType = type.SMALL;
var version = 'v1.5.3';

//helper method for data formatting
function addMeleeAttribute(object) {
    object.forEach((element) => {
        element.melee = melee.NORMAL;
    });
    return object;
}

//helper method for data formatting
function sortByName(object) {
    object.sort(compare);
    return object;
}

//helper method for data formatting
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function validateData() {
    var allItems = [...weapons, ...tools, ...consumables, ...ammunition];

    var searchRecursive = (unlockName) => {
        if (unlockName === '') return true;

        var filtered = allItems.filter((x) => x.name === unlockName);

        if (filtered && filtered.length > 0) {
            var parent = filtered[0];
            if (typeof parent.rank !== 'undefined') {
                return true;
            } else if (typeof parent.unlock !== 'undefined') {
                return searchRecursive(parent.unlock);
            }
        }

        return false;
    };

    var faultyItems = [];

    //check if every unlock leads to a ranked item:
    allItems.forEach((item) => {
        if (typeof item.unlock !== 'undefined') {
            if (!searchRecursive(item.unlock)) {
                faultyItems.push(item.name);
            }
        } else if (item.rank === 'undefined') {
            faultyItems.push(item.name);
        }
    });

    if (faultyItems.length > 0) {
        console.log(faultyItems);
    } else {
        console.log('All good :)');
    }
}

function randomize() {
    //disable button
    var $btnGo = $('#btnGo');
    $btnGo.addClass('disabled');
    $btnGo.prop('disabled', true);
    $('#totalCost').css('animation', '');
    $('#totalCost').css('opacity', 0);

    $('#totalCost').text('$' + 0);

    emptyAllContainers();
    var totalCost = generateWeapons();

    if (totalCost <= userConfig.priceLimit - userConfig.priceLimit * 0.1) {
        $('#totalCost').css('color', '#00A300');
        $('#totalCost').css('border-color', '#00A300');
    } else if (totalCost <= userConfig.priceLimit) {
        $('#totalCost').css('color', '#fcba03');
        $('#totalCost').css('border-color', '#fcba03');
    } else {
        $('#totalCost').css('color', '#B50505');
        $('#totalCost').css('border-color', '#B50505');
    }

    $('#weapons ul').playSpin({
        time: 1000,
        easing: 'easeOutBack',
        endNum: [1, 1, 1, 1, 1, 1],
        onFinish: function () {
            $btnGo.removeClass('disabled');
            $btnGo.prop('disabled', false);
            $('#totalCost').text('$' + totalCost);
            $('#totalCost').css('animation', 'pulse 0.5s linear 0.2s forwards');
        },
    });

    $('#tools ul').playSpin({
        time: 1000,
        easing: 'easeOutBack',
        endNum: [1, 1, 1, 1],
    });

    $('#consumables ul').playSpin({
        time: 1000,
        easing: 'easeOutBack',
        endNum: [1, 1, 1, 1],
    });
}

function openSettingsDialog() {
    $('#settingsDialog').dialog({
        autoOpen: true,
        maxWidth: 780,
        maxHeight: 580,
        width: 780,
        height: 580,
        resizable: false,
        modal: true,
        title: 'Randomizer Settings',
        buttons: {
            Save: function () {
                saveClicked();
                $(this).dialog('close');
            },
            Cancel: function () {
                $(this).dialog('close');
            },
        },
        close: function () {
            $('.ui-dialog-buttonpane').find('#credits').remove();
        },
        open: function () {
            $('.ui-dialog-buttonpane').prepend('<div id="credits"><span>' + version + ' by GrafKnusprig</span><img src="images/logo/logo.png"/></a></div>');
        },
    });

    loadConfig();
}

function emptyAllContainers() {
    $('ul').empty();
}

function generateWeapons() {
    var cost = 0;
    var found = false;
    if (userConfig.priceLimit < 2000) {
        //user has set a limit
        //do some cheap tricks to get a cheap loadout :)

        var nrTools = 4;
        var nrCons = 4;
        var singleWeapon = false;

        for (var j = 0; j < 8; j++) {
            if (found) break;
            var generated = null;
            for (var i = 0; i < 15; i++) {
                if (found) break;
                generated = getRandoms(singleWeapon, nrTools, nrCons);
                if (generated.totalCost <= userConfig.priceLimit) {
                    appendRandoms(generated);
                    cost = generated.totalCost;
                    found = true;
                }
            }
            if (j % 2 === 1) nrTools--;
            if (j % 2 === 0) nrCons--;
            if (j > 3) singleWeapon = true;
        }
    }
    if (!found) {
        var generated = getRandoms(false, 4, 4);
        appendRandoms(generated);
        cost = generated.totalCost;
    }

    appendRandoms(getRandoms(false, 4, 4));
    appendRandoms(getRandoms(false, 4, 4));
    appendRandoms(getRandoms(false, 4, 4));
    appendRandoms(getRandoms(false, 4, 4));
    return cost;
}

function replaceSpaces(itemName) {
    return itemName.replace(/ /g, '_');
}

//returnes a cloned array
function filterExcludedItems(items) {
    //filter items
    return items.filter((item) => userConfig.usedItems.includes(item.name));
}

function getRandoms(singleSlot = false, nuberOfTools = 4, numberOfConsumables = 4) {
    var totalCost = 0;
    primaryTypeParam = type.SMALL;

    var primary = getRandomPrimary();
    var primaryAmmo = null;
    if (primary !== null && primary.weapon !== 'undefined' && primary.weapon !== null) {
        if (primary.dual) {
            primaryTypeParam = type.MEDIUM;
            totalCost += primary.weapon.cost * 2;
        } else {
            primaryTypeParam = primary.weapon.type;
            totalCost += primary.weapon.cost;
        }

        primaryAmmo = getRandomAmmoForWeapon(primary.weapon);
        if (primaryAmmo !== null) {
            if (primaryAmmo.ammo1 !== 'undefined' && primaryAmmo.ammo1 !== null) {
                totalCost += primaryAmmo.ammo1.cost;
            }
            if (primaryAmmo.ammo2 !== 'undefined' && primaryAmmo.ammo2 !== null) {
                totalCost += primaryAmmo.ammo2.cost;
            }
        }
    }

    var secondary = null;
    var secondaryAmmo = null;
    if (!singleSlot) {
        secondary = getRandomSecondary(primaryTypeParam);
        if (secondary !== null && secondary.weapon !== 'undefined' && secondary.weapon !== null) {
            if (secondary.dual) {
                totalCost += secondary.weapon.cost * 2;
            } else {
                totalCost += secondary.weapon.cost;
            }
            var secondaryAmmo = getRandomAmmoForWeapon(secondary.weapon);
            if (secondaryAmmo !== null) {
                if (secondaryAmmo.ammo1 !== 'undefined' && secondaryAmmo.ammo1 !== null) {
                    totalCost += secondaryAmmo.ammo1.cost;
                }
                if (secondaryAmmo.ammo2 !== 'undefined' && secondaryAmmo.ammo2 !== null) {
                    totalCost += secondaryAmmo.ammo2.cost;
                }
            }
        }
    }

    var weaponMelee = melee.NORMAL;
    if (
        primary !== 'undefined' &&
        primary !== null &&
        primary.weapon !== 'undefined' &&
        primary.weapon !== null &&
        primary.weapon.melee !== 'undefined' &&
        primary.weapon.melee !== null
    )
        weaponMelee |= primary.weapon.melee;
    if (
        secondary !== 'undefined' &&
        secondary !== null &&
        secondary.weapon !== 'undefined' &&
        secondary.weapon !== null &&
        secondary.weapon.melee !== 'undefined' &&
        secondary.weapon.melee !== null
    )
        weaponMelee |= secondary.weapon.melee;

    var randomTools = getRandomTools(nuberOfTools, weaponMelee);
    if (randomTools !== 'undefined' && randomTools !== null) {
        if (randomTools.tool1 !== 'undefined' && randomTools.tool1 !== null) totalCost += randomTools.tool1.cost;
        if (randomTools.tool2 !== 'undefined' && randomTools.tool2 !== null) totalCost += randomTools.tool2.cost;
        if (randomTools.tool3 !== 'undefined' && randomTools.tool3 !== null) totalCost += randomTools.tool3.cost;
        if (randomTools.tool4 !== 'undefined' && randomTools.tool4 !== null) totalCost += randomTools.tool4.cost;
    }

    var randomConsumables = getRandomConsumables(numberOfConsumables);
    if (randomConsumables !== 'undefined' && randomConsumables !== null) {
        if (randomConsumables.consumable1 !== 'undefined' && randomConsumables.consumable1 !== null) totalCost += randomConsumables.consumable1.cost;
        if (randomConsumables.consumable2 !== 'undefined' && randomConsumables.consumable2 !== null) totalCost += randomConsumables.consumable2.cost;
        if (randomConsumables.consumable3 !== 'undefined' && randomConsumables.consumable3 !== null) totalCost += randomConsumables.consumable3.cost;
        if (randomConsumables.consumable4 !== 'undefined' && randomConsumables.consumable4 !== null) totalCost += randomConsumables.consumable4.cost;
    }

    return {
        totalCost: totalCost,
        primary: primary,
        primaryAmmo: primaryAmmo,
        secondary: secondary,
        secondaryAmmo: secondaryAmmo,
        tools: randomTools,
        consumables: randomConsumables,
    };
}

function appendRandoms(randomsObject) {
    //append primary
    if (
        randomsObject.primary !== 'undefined' &&
        randomsObject.primary !== null &&
        randomsObject.primary.weapon !== 'undefined' &&
        randomsObject.primary.weapon !== null
    ) {
        appendWeapon('#primary', randomsObject.primary.weapon, randomsObject.primary.dual);
        if (randomsObject.primaryAmmo !== null && randomsObject.primaryAmmo.ammo1 !== 'undefined' && randomsObject.primaryAmmo.ammo2 !== 'undefined') {
            appendAmmo(randomsObject.primaryAmmo.ammo1, '#primaryAmmo1', randomsObject.primaryAmmo.ammo2, '#primaryAmmo2');
        } else {
            appendEmptyAmmo('#primaryAmmo1', '#primaryAmmo2');
        }
    } else {
        appendEmptyWeapon('#primary');
        appendEmptyAmmo('#primaryAmmo1', '#primaryAmmo2');
    }

    //append secondary
    if (
        randomsObject.secondary !== 'undefined' &&
        randomsObject.secondary !== null &&
        randomsObject.secondary.weapon !== 'undefined' &&
        randomsObject.secondary.weapon !== null
    ) {
        appendWeapon('#secondary', randomsObject.secondary.weapon, randomsObject.secondary.dual);
        if (randomsObject.secondary !== null && randomsObject.secondaryAmmo.ammo1 !== 'undefined' && randomsObject.secondaryAmmo.ammo2 !== 'undefined') {
            appendAmmo(randomsObject.secondaryAmmo.ammo1, '#secondaryAmmo1', randomsObject.secondaryAmmo.ammo2, '#secondaryAmmo2');
        } else {
            appendEmptyAmmo('#secondaryAmmo1', '#secondaryAmmo2');
        }
    } else {
        appendEmptyWeapon('#secondary');
        appendEmptyAmmo('#secondaryAmmo1', '#secondaryAmmo2');
    }

    if (randomsObject.tools !== 'undefined' && randomsObject.tools !== null) appendTools(randomsObject.tools);

    if (randomsObject.consumables !== 'undefined' && randomsObject.consumables !== null) appendConsumables(randomsObject.consumables);
}

function getRandomPrimary() {
    var filteredWeapons = filterExcludedItems(weapons);
    if (filteredWeapons && filteredWeapons.length > 0) {
        var random = filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
        if (random.type === type.SMALL && random.pair && random.pair === true && Math.random() < userConfig.dualChance) {
            return { weapon: random, dual: true };
        } else {
            return { weapon: random, dual: false };
        }
    } else {
        return null;
    }
}

function getRandomSecondary(primaryTypeParam) {
    var filter = null;
    switch (primaryTypeParam) {
        case type.LARGE:
            if (userConfig.quartermaster) {
                filter = type.MEDIUM;
            } else {
                filter = type.SMALL;
            }
            break;
        case type.MEDIUM:
            if (userConfig.quartermaster) {
                filter = type.LARGE;
            } else {
                filter = type.MEDIUM;
            }
            break;
        default:
            //small
            filter = type.LARGE;
    }

    var filteredWeapons = weapons.filter((x) => {
        return filter === type.LARGE || (filter === type.MEDIUM && x.type !== type.LARGE) || (filter === type.SMALL && x.type === type.SMALL);
    });

    filteredWeapons = filterExcludedItems(filteredWeapons);

    if (filteredWeapons && filteredWeapons.length > 0) {
        var random = filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
        if (
            random.type === type.SMALL &&
            (filter === type.MEDIUM || filter === type.LARGE) &&
            random.pair &&
            random.pair === true &&
            Math.random() < userConfig.dualChance
        ) {
            return { weapon: random, dual: true };
        } else {
            return { weapon: random, dual: false };
        }
    } else {
        return null;
    }
}

function appendWeapon(id, weapon, dual = false) {
    var imageName = replaceSpaces(weapon.name);

    if (dual) {
        $(id).append(
            '<li><div class="img-title">Double ' +
                weapon.name +
                '</div><img src="images/items/' +
                imageName +
                '.webp"/><img src="images/items/' +
                imageName +
                '.webp"/></li>'
        );
    } else {
        $(id).append('<li><div class="img-title">' + weapon.name + '</div><img src="images/items/' + imageName + '.webp"/></li>');
    }
}

function appendEmptyWeapon(id) {
    $(id).append('<li><div class="img-title"></div></li>');
}

function getRandomAmmoForWeapon(weapon) {
    if (weapon === null) return null;
    var ammo = weapon.ammo;
    var randomAmmo1 = null;
    var randomAmmo2 = null;

    if (ammo !== 'undefined' && Array.isArray(ammo)) {
        if (Array.isArray(ammo[0])) {
            //weapon has 2 ammo slots
            //Get ammunition objects
            var ammunition1 = [];
            ammo[0].forEach((name) => ammunition1.push(ammunition.find((x) => x.name === name)));

            var ammunition2 = [];
            ammo[1].forEach((name) => ammunition2.push(ammunition.find((x) => x.name === name)));

            ammunition1 = filterExcludedItems(ammunition1);
            ammunition1.push(ammunition.find((x) => x.name === 'Standard Projectile')); //Hack for standard ammunition.
            ammunition2 = filterExcludedItems(ammunition2);
            ammunition2.push(ammunition.find((x) => x.name === 'Standard Projectile')); //Hack for standard ammunition.

            randomAmmo1 = ammunition1[Math.floor(Math.random() * ammunition1.length)];
            randomAmmo2 = ammunition2[Math.floor(Math.random() * ammunition2.length)];
        } //just one ammo slot
        else {
            //Get ammunition objects
            var ammunition1 = [];
            ammo.forEach((name) => ammunition1.push(ammunition.find((x) => x.name === name)));
            var ammunition1 = filterExcludedItems(ammunition1);
            ammunition1.push(ammunition.find((x) => x.name === 'Standard Projectile')); //Hack for standard ammunition.

            randomAmmo1 = ammunition1[Math.floor(Math.random() * ammunition1.length)];
        }
    }
    return { ammo1: randomAmmo1, ammo2: randomAmmo2 };
}

function appendEmptyAmmo(ammoId1, ammoId2) {
    $(ammoId1).append('<li><div class="ammo-title"></div><img/></li>');
    $(ammoId2).append('<li><div class="ammo-title"></div><img/></li>');
    return;
}

function appendAmmo(randomAmmo1, ammoId1, randomAmmo2, ammoId2) {
    if (randomAmmo1 !== null) {
        var randomAmmo1ImageName = replaceSpaces(randomAmmo1.name);
        $(ammoId1).append('<li><div class="ammo-title">' + randomAmmo1.name + '</div><img src="images/items/' + randomAmmo1ImageName + '.webp"/></li>');
    } else {
        $(ammoId1).append('<li><div class="ammo-title"></div><img/></li>');
    }
    if (randomAmmo2 !== null) {
        var randomAmmo2ImageName = replaceSpaces(randomAmmo2.name);
        $(ammoId2).append('<li><div class="ammo-title">' + randomAmmo2.name + '</div><img src="images/items/' + randomAmmo2ImageName + '.webp"/></li>');
    } else {
        $(ammoId2).append('<li><div class="ammo-title"></div><img/></li>');
    }
}

function getRandomTools(numberOfTools, weaponMelee = melee.NORMAL) {
    var filteredTools = filterExcludedItems(tools);
    var getRandomTool = () => {
        if (filteredTools && filteredTools.length > 0) {
            var random = filteredTools[Math.floor(Math.random() * filteredTools.length)];
            if (random) {
                filteredTools = filteredTools.filter((x) => x.name !== random.name);
                return random;
            }
        }
        return null;
    };
    var getMedkit = () => {
        var availableMedkit = filteredTools.filter((item) => item.name === 'First Aid Kit');
        if (availableMedkit && availableMedkit.length > 0) {
            availableMedkit = availableMedkit[0];
            filteredTools = filteredTools.filter((x) => x.name !== availableMedkit.name);

            return availableMedkit;
        }
        return getRandomTool();
    };
    var getMelee = () => {
        var availableMeleeTools = filteredTools.filter((item) => meleeWeapons.includes(item.name));
        //filter melee type to match the primary and secondary weapon melee type.
        if ((weaponMelee & melee.BLUNT) === melee.BLUNT) {
            availableMeleeTools = availableMeleeTools.filter((x) => x.melee !== melee.BLUNT);
        }
        if ((weaponMelee & melee.SHARP) === melee.SHARP) {
            availableMeleeTools = availableMeleeTools.filter((x) => x.melee !== melee.SHARP);
        }
        //delete all melee weapons from filter list after one is found or none is needed.
        //KoenigMax decided this is the best way to go if you choose fix meele weapon in the setting.
        //that way you only have one, that also fits the weapons.
        filteredTools = filteredTools.filter((x) => !meleeWeapons.includes(x.name));

        if (availableMeleeTools && availableMeleeTools.length > 0) {
            var randomMelee = availableMeleeTools[Math.floor(Math.random() * availableMeleeTools.length)];
            if (randomMelee) {
                return randomMelee;
            }
        }
        return getRandomTool();
    };

    return {
        tool1: numberOfTools >= 1 ? (userConfig.melee ? getMelee() : getRandomTool()) : null,
        tool2: numberOfTools >= 2 ? (userConfig.firstAidKit ? getMedkit() : getRandomTool()) : null,
        tool3: numberOfTools >= 3 ? getRandomTool() : null,
        tool4: numberOfTools >= 4 ? getRandomTool() : null,
    };
}

function appendTools(toolsObject) {
    var appendTool = (tool, toolId) => {
        if (tool !== null) {
            var toolName = tool.name,
                imageName = replaceSpaces(toolName);

            $('#' + toolId).append('<li><div class="img-title">' + toolName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
        } else {
            $('#' + toolId).append('<li><div class="img-title"></div></li>');
        }
    };
    if (toolsObject !== 'undefined' && toolsObject !== null) {
        appendTool(toolsObject.tool1, 'tool1');
        appendTool(toolsObject.tool2, 'tool2');
        appendTool(toolsObject.tool3, 'tool3');
        appendTool(toolsObject.tool4, 'tool4');
    }
}

function getRandomConsumables(numberOfConsumables) {
    var filteredConsumables = filterExcludedItems(consumables);
    var getConsumable = () => {
        if (filteredConsumables && filteredConsumables.length > 0) {
            return filteredConsumables[Math.floor(Math.random() * filteredConsumables.length)];
        }
        return null;
    };
    return {
        consumable1: numberOfConsumables >= 1 ? getConsumable() : null,
        consumable2: numberOfConsumables >= 2 ? getConsumable() : null,
        consumable3: numberOfConsumables >= 3 ? getConsumable() : null,
        consumable4: numberOfConsumables >= 4 ? getConsumable() : null,
    };
}

function appendConsumables(consumables) {
    var appendConsumable = (consumable, consumableId) => {
        if (consumable !== null) {
            var consumableName = consumable.name,
                imageName = replaceSpaces(consumableName);

            $('#' + consumableId).append('<li><div class="img-title">' + consumableName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
        } else {
            $('#' + consumableId).append('<li><div class="img-title"></div></li>');
        }
    };

    if (consumables !== 'undefined' && consumables !== null) {
        appendConsumable(consumables.consumable1, 'cons1');
        appendConsumable(consumables.consumable2, 'cons2');
        appendConsumable(consumables.consumable3, 'cons3');
        appendConsumable(consumables.consumable4, 'cons4');
    }
}
