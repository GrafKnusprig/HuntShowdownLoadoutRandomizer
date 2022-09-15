/*
 * HuntShowdownLoadoutRandomizer v1.5.2
 * by GrafKnusprig 2021/10/21
 */

var userConfig;

function searchList() {
    var filter = $('#inventorySearch').val().toUpperCase();
    var inventory = $('#inventory');
    var labels = inventory.find('label');

    if (
        filter === 'SPECIAL' ||
        filter === 'AMMO' ||
        filter === 'SMALL' ||
        filter === 'MEDIUM' ||
        filter === 'LARGE' ||
        filter === 'CONSUMABLE' ||
        filter === 'TOOL' ||
        filter === 'DUAL' ||
        filter === 'BLUNT' ||
        filter === 'SHARP' ||
        filter === 'MELEE'
    ) {
        searchList_filterSpecial(labels, filter);
        return;
    }

    var i, label;
    for (i = 0; i < labels.length; i++) {
        label = labels[i];
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            labels[i].style.display = '';
        } else {
            labels[i].style.display = 'none';
        }
    }
}

function searchList_filterSpecial(labels, filter) {
    var filterList = [];
    if (filter === 'SPECIAL' || filter === 'AMMO')
        filterList = ammunition.map((a) => {
            return a.name.toUpperCase();
        });
    else if (filter === 'SMALL') {
        filterList = weapons.map((w) => {
            if (w.type === type.SMALL) return w.name.toUpperCase();
        });
    } else if (filter === 'MEDIUM') {
        filterList = weapons.map((w) => {
            if (w.type === type.MEDIUM) return w.name.toUpperCase();
        });
    } else if (filter === 'LARGE') {
        filterList = weapons.map((w) => {
            if (w.type === type.LARGE) return w.name.toUpperCase();
        });
    } else if (filter === 'CONSUMABLE') {
        filterList = consumables.map((a) => {
            return a.name.toUpperCase();
        });
    } else if (filter === 'TOOL') {
        filterList = tools.map((a) => {
            return a.name.toUpperCase();
        });
    } else if (filter === 'DUAL') {
        filterList = weapons.map((w) => {
            if (w.pair && w.pair === true) return w.name.toUpperCase();
        });
    } else if (filter === 'BLUNT') {
        filterList = weapons.map((w) => {
            if (w.melee === melee.BLUNT) return w.name.toUpperCase();
        });
        filterList = filterList.concat(
            tools.map((t) => {
                if (t.melee === melee.BLUNT) return t.name.toUpperCase();
            })
        );
    } else if (filter === 'SHARP') {
        filterList = weapons.map((w) => {
            if (w.melee === melee.SHARP) return w.name.toUpperCase();
        });
        filterList = filterList.concat(
            tools.map((t) => {
                if (t.melee === melee.BLUNT) return t.name.toUpperCase();
            })
        );
    } else if (filter === 'MELEE') {
        var melee = meleeWeapons.map((x) => x.toUpperCase());
        filterList = tools.map((t) => {
            if (melee.includes(t.name.toUpperCase())) return t.name.toUpperCase();
        });
    }

    for (i = 0; i < labels.length; i++) {
        label = labels[i];
        txtValue = label.textContent || label.innerText;
        if (filterList.includes(txtValue.toUpperCase())) {
            labels[i].style.display = '';
        } else {
            labels[i].style.display = 'none';
        }
    }
}

function fillList(rank) {
    var sortItems = [...weapons, ...tools, ...consumables, ...ammunition].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });

    //filter rank
    if (rank < 100) {
        sortItems = sortItems.filter((item) => typeof item.unlock !== 'undefined' || (item.rank && item.rank <= rank));

        var searchItem = (unlock) => {
            if (unlock === '') {
                return true;
            } else {
                var filtered = sortItems.filter((element) => element.name === unlock);

                if (filtered && filtered.length > 0) {
                    if (typeof filtered[0].rank !== 'undefined') {
                        return true;
                    } else if (typeof filtered[0].unlock !== 'undefined') {
                        return searchItem(filtered[0].unlock);
                    }
                }

                return false;
            }
        };

        sortItems = sortItems.filter((item) => {
            if (typeof item.rank !== 'undefined') {
                return true;
            }
            if (typeof item.unlock !== 'undefined') {
                return searchItem(item.unlock);
            }
        });
    }

    var inventory = $('#inventory');
    inventory.empty();
    sortItems.forEach((entry) => {
        var checked = userConfig.usedItems.includes(entry.name) ? ' checked' : '';
        inventory.append('<label class="container">' + entry.name + '<input type="checkbox"' + checked + '><span class="checkmark"></span></label>');
    });
}

function inventoryClick(e) {
    e.children[0].checked = !e.children[0].checked;
}

function loadConfig() {
    var myStorage = window.localStorage.getItem('userConfig');
    if (myStorage) {
        userConfig = JSON.parse(myStorage);
    } else {
        userConfig = defaultConfig;
    }

    $('#rank').val(userConfig.rank);
    $('#quartermaster').prop('checked', userConfig.quartermaster);
    $('#firstAidKit').prop('checked', userConfig.firstAidKit);
    $('#melee').prop('checked', userConfig.melee);
    $('#dualChance').val(userConfig.dualChance * 100);
    $('#priceLimit').val(userConfig.priceLimit);

    setRank();
    setDualChance();
    setPriceLimit();
    fillList(userConfig.rank);
    searchList();
}

function saveConfig() {
    //remove filter
    $('#inventorySearch').val('');
    searchList();

    //get unchecked items
    var inventory = $('#inventory label');
    var usedItems = [];
    inventory.each((i) => {
        var label = $(inventory[i]);
        if (label.find('input').prop('checked')) {
            usedItems.push(label.text());
        }
    });

    userConfig = {
        rank: parseInt($('#rank').val()),
        quartermaster: $('#quartermaster').prop('checked'),
        firstAidKit: $('#firstAidKit').prop('checked'),
        melee: $('#melee').prop('checked'),
        dualChance: parseInt($('#dualChance').val()) / 100,
        usedItems: usedItems,
        priceLimit: parseInt($('#priceLimit').val()),
    };

    window.localStorage.setItem('userConfig', JSON.stringify(userConfig));
}

function saveClicked() {
    saveConfig();
}

function selectAll(checked) {
    var inventory = $('#inventory label');
    inventory.each((i) => {
        var label = $(inventory[i]);
        if (label.is(':visible')) {
            label.find('input').prop('checked', checked);
        }
    });
}

function setRank() {
    var rank = parseInt($('#rank').val());
    if (Number.isInteger(rank) && rank >= 1 && rank <= 100) {
        fillList(rank);
        $('#rankValue').text(rank);
        searchList();
    }
}

function setDualChance() {
    $('#dualChanceValue').text($('#dualChance').val() + '%');
}

function setPriceLimit() {
    var price = parseInt($('#priceLimit').val());
    if (price >= 2000) price = 'no limit';
    else price = '$' + price;
    $('#priceLimitValue').text(price);
}
