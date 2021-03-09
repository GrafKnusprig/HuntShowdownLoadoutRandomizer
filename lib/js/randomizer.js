/*
*HuntShowdownLoadoutRandomizer v1.2
*by GrafKnusprig 2021/01/22
*/

var primaryType = "small";
var totalCost = 0;

function validateData() {
	var allItems = [...weapons, ...tools, ...consumables, ...ammunition];
	
	var searchRecursive = (unlockName) =>
	{
		if(unlockName === "")
			return true;
		
		var filtered = allItems.filter(x => x.name === unlockName);
		
		if(filtered &&
		filtered.length > 0)
		{
			var parent = filtered[0];
			if(typeof parent.rank !== 'undefined')
			{
				return true;
			}
			else if(typeof parent.unlock !== 'undefined')
			{	
				return searchRecursive(parent.unlock);
			}
		}
		
		return false;
		
	};
	
	var faultyItems = [];
	
	//check if every unlock leads to a ranked item:
	allItems.forEach((item) =>
	{
		if(typeof item.unlock !== 'undefined')
		{
			if(!searchRecursive(item.unlock))
			{
				faultyItems.push(item.name);
			}
		}	
	});
	
	if(faultyItems.length > 0)
	{
		console.log(faultyItems);
	}
	else
	{
		console.log('All good :)');
	}
}

function randomize()
{
	//disable button
	var $btnGo = $('#btnGo');
	$btnGo.addClass('disabled');
	$btnGo.prop('disabled', true);
	$('#totalCost').css('animation','');
	$('#totalCost').css('opacity',0);
	
	totalCost = 0;
	$('#totalCost').text('$' + totalCost);
	
	emptyAllContainers();
	generateWeapons();
	
	$('#weapons ul').playSpin({
		time: 1000,
		easing: 'easeOutBack',
		endNum: [1, 1, 1, 1, 1, 1],
		onFinish: function() {
			$btnGo.removeClass('disabled');
			$btnGo.prop('disabled', false);
			$('#totalCost').text('$' + totalCost);
			$('#totalCost').css('animation', 'pulse 0.5s linear 0.2s forwards');
		}
	});
		
	$('#tools ul').playSpin({
		time: 1000,
		easing: 'easeOutBack',
		endNum: [1, 1, 1, 1]
	});
		
	$('#consumables ul').playSpin({
		time: 1000,
		easing: 'easeOutBack',
		endNum: [1, 1, 1, 1]
	});
}

function openSettingsDialog()
{
	$('#settingsDialog').dialog({
        autoOpen: true,
        maxWidth:780,
        maxHeight: 580,
        width: 780,
        height: 580,
		resizable: false,
        modal: true,
		title: 'Randomizer Settings',
        buttons: {
            Save: function() {
				saveClicked();
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
			$('.ui-dialog-buttonpane').find('#credits').remove();
		},
		open: function() {
			$('.ui-dialog-buttonpane').prepend('<div id="credits"><span>v1.2 by GrafKnusprig</span><img src="images/logo/logo.png"/></a></div>');
		}
	});
	
	loadConfig();
}

function emptyAllContainers()
{
	$('ul').empty();
}

function generateWeapons()
{
	generatePrimary(true);
	generateSecondary(true);
	generateTools(true);
	generateConsumables(true);
	
	fillSlots(4);
}

// /* Randomize array in-place using Durstenfeld shuffle algorithm */
// function shuffleArray(array) {
    // for (var i = array.length - 1; i > 0; i--) {
        // var j = Math.floor(Math.random() * (i + 1));
        // var temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
    // }
// }

function fillSlots(quantity)
{
	var i = 0;
	for(i; i < quantity; i++)
	{
		generatePrimary();
		generateSecondary();
		generateTools();
		generateConsumables();
	}
}

function replaceSpaces(itemName)
{
	return itemName.replace(/ /g,'_')
}

//returnes a cloned array
function filterExcludedItems(items)
{
	//filter items
	return items.filter(item => userConfig.usedItems.includes(item.name));
}

function generatePrimary(sumCost = false)
{
	var filteredWeapons = filterExcludedItems(weapons);
	
	if(filteredWeapons && filteredWeapons.length > 0)
	{
		var random = filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
		
		if(sumCost)
		{
			totalCost += random.cost;
		}
		
		var name = random.name;
		var imageName = replaceSpaces(name);
		
		if(random.type === "small" &&
		random.pair &&
		random.pair === true &&
		Math.random() < userConfig.dualChance)
		{
			$('#primary').append('<li><div class="img-title">Double ' + name + '</div><img src="images/items/' + imageName + '.webp"/><img src="images/items/' + name.replace(/ /g,'_') + '.webp"/></li>');
			primaryType = "medium";
			
			if(sumCost)
			{
				totalCost += random.cost;
			}
		}
		else
		{
			$('#primary').append('<li><div class="img-title">' + name + '</div><img src="images/items/' + imageName + '.webp"/></li>');
			primaryType = random.type;
		}
		
		appendAmmo(random, '#primaryAmmo1', 'primaryAmmo2', sumCost);
	}
}

function generateSecondary(sumCost)
{
	var filter = null;
	
	switch(primaryType){
		case "long":
			if(userConfig.quartermaster)
			{
				filter = "medium";
			}
			else
			{
				filter = "small";
			}
		break;
		case "medium":
			if(userConfig.quartermaster)
			{
				filter = "long";
			}
			else
			{
				filter = "medium";
			}
		break;
		default: //small
			filter = "long";
	}
	
	var filteredWeapons = weapons.filter((x) =>
	{
		return filter === "long" ||
		(filter === "medium" && x.type !== "long") ||
		(filter === "small" && x.type === "small");
	});
	
	filteredWeapons = filterExcludedItems(filteredWeapons);
	
	if(filteredWeapons && filteredWeapons.length > 0)
	{
		var random = filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
		
		if(sumCost)
		{
			totalCost += random.cost;
		}
		
		var name = random.name;
		var imageName = replaceSpaces(name);
		
		if(random.type === "small" &&
		(filter === "medium" || filter === "long") &&
		random.pair &&
		random.pair === true &&
		Math.random() < userConfig.dualChance)
		{
			$('#secondary').append('<li><div class="img-title">Double ' + name + '</div><img src="images/items/' + imageName + '.webp"/><img src="images/items/' + name.replace(/ /g,'_') + '.webp"/></li>');
			
			if(sumCost)
			{
				totalCost += random.cost;
			}
		}
		else
		{
			$('#secondary').append('<li><div class="img-title">' + name + '</div><img src="images/items/' + imageName + '.webp"/></li>');
		}
		
		appendAmmo(random, '#secondaryAmmo1', '#secondaryAmmo2', sumCost);
	}
}

function appendAmmo(weapon, ammoId1, ammoId2, sumCost)
{
		var ammo = weapon.ammo;
		var randomAmmo1 = null;
		var randomAmmo2 = null;
		
		if(ammo !== 'undefined' && Array.isArray(ammo))
		{
			if(Array.isArray(ammo[0])) //weapon has 2 ammo slots
			{
				//Get ammunition objects
				var ammunition1 = [];
				ammo[0].forEach(name => ammunition1.push(ammunition.find(x => x.name === name)));
				
				var ammunition2 = [];
				ammo[1].forEach(name => ammunition2.push(ammunition.find(x => x.name === name)));

				
				ammunition1 = filterExcludedItems(ammunition1);
				ammunition1.push(ammunition.find(x => x.name === "Standard Projectile")); //Hack for standard ammunition.
				ammunition2 = filterExcludedItems(ammunition2);
				ammunition2.push(ammunition.find(x => x.name === "Standard Projectile")); //Hack for standard ammunition.
				
				randomAmmo1 = ammunition1[Math.floor(Math.random() * ammunition1.length)];
				randomAmmo2 = ammunition2[Math.floor(Math.random() * ammunition2.length)];
				
				if(sumCost)
				{
					totalCost += randomAmmo1.cost + randomAmmo2.cost;
				}
			}
			else //just one ammo slot
			{
				//Get ammunition objects
				var ammunition1 = [];
				ammo.forEach(name => ammunition1.push(ammunition.find(x => x.name === name)));
				
				var ammunition1 = filterExcludedItems(ammunition1);
				ammunition1.push(ammunition.find(x => x.name === "Standard Projectile")); //Hack for standard ammunition.
				
				randomAmmo1 = ammunition1[Math.floor(Math.random() * ammunition1.length)];
				
				if(sumCost)
				{
					totalCost += randomAmmo1.cost;
				}
			}
		}

		if(randomAmmo1 != null)
		{
			var randomAmmo1ImageName = replaceSpaces(randomAmmo1.name);
			$(ammoId1).append('<li><div class="ammo-title">' + randomAmmo1.name + '</div><img src="images/items/' + randomAmmo1ImageName + '.webp"/></li>');
		}
		else
		{
			$(ammoId1).append('<li><div class="ammo-title">' + "" + '</div><img/></li>');
		}
		if(randomAmmo2 != null)
		{
			var randomAmmo2ImageName = replaceSpaces(randomAmmo2.name);
			$(ammoId2).append('<li><div class="ammo-title">' + randomAmmo2.name + '</div><img src="images/items/' + randomAmmo2ImageName + '.webp"/></li>');
		}
		else
		{
			$(ammoId2).append('<li><div class="ammo-title">' + "" + '</div><img/></li>');
		}
}

function generateTools(sumCost)
{
	//clone and filter list
	var filteredTools = filterExcludedItems(tools);
	
	//get random tool and remove from temp list
	var getTool = () =>
	{
		if(filteredTools && filteredTools.length > 0)
		{
			var random = filteredTools[Math.floor(Math.random() * filteredTools.length)];
			filteredTools = filteredTools.filter(x => x.name !== random.name);
			return random;
		}
		else
		{
			return null;
		}
	}
	
	var appendTool = (toolId) =>
	{
		var tool = getTool();
		if(tool !== null)
		{
			var toolName = tool.name,
			imageName = replaceSpaces(toolName);
			
			$('#' + toolId).append('<li><div class="img-title">' + toolName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
			
			if(sumCost)
			{
				totalCost += tool.cost;
			}
		}
	};
	
	var appendMeleeTool = (toolId) =>
	{
		var availableMeleeTools = filteredTools.filter(item => meleeWeapons.includes(item.name));
		
		var randomMelee = availableMeleeTools[Math.floor(Math.random() * availableMeleeTools.length)];
		filteredTools = filteredTools.filter(x => x.name !== randomMelee.name);
		
		if(randomMelee) {
			var toolName = randomMelee.name,
			imageName = replaceSpaces(toolName);
			
			$('#' + toolId).append('<li><div class="img-title">' + toolName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
			
			if(sumCost)
			{
				totalCost += randomMelee.cost;
			}
		}
	};
	
	var appendMedkit = (toolId) =>
	{
		var availableMedkit = filteredTools.filter(item => item.name === "First Aid Kit");
		
		if(availableMedkit && availableMedkit.length > 0)
		{
			availableMedkit = availableMedkit[0];
			filteredTools = filteredTools.filter(x => x.name !== availableMedkit.name);
			
			var toolName = availableMedkit.name,
			imageName = replaceSpaces(toolName);
			
			$('#' + toolId).append('<li><div class="img-title">' + toolName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
			
			if(sumCost)
			{
				totalCost += availableMedkit.cost;
			}
		}
		else
		{
			appendTool(toolId);
		}
	};
	
	if(userConfig.melee)
	{
		appendMeleeTool('tool1');
	}
	else
	{
		appendTool('tool1');
	}
	
	if(userConfig.firstAidKit)
	{
		appendMedkit('tool2');
	}
	else
	{
		appendTool('tool2');
	}
	appendTool('tool3');
	appendTool('tool4');
}

function generateConsumables(sumCost)
{
	var filteredConsumables = filterExcludedItems(consumables);
	
	var getConsumable = () =>
	{
		if(filteredConsumables && filteredConsumables.length > 0)
		{
			return filteredConsumables[Math.floor(Math.random() * filteredConsumables.length)];
		}
		else
		{
			return null;
		}
	}
	
	var appendConsumable = (consumableId, consumableName) =>
	{
		var consumable = getConsumable();
		if(consumable !== null)
		{
			var consumableName = consumable.name,
			imageName = replaceSpaces(consumableName);
			
			$('#' + consumableId).append('<li><div class="img-title">' + consumableName + '</div><img src="images/items/' + imageName + '.webp"/></li>');
			
			if(sumCost)
			{
				totalCost += consumable.cost;
			}
		}
	};
	
	appendConsumable('cons1');
	appendConsumable('cons2');
	appendConsumable('cons3');
	appendConsumable('cons4');
}