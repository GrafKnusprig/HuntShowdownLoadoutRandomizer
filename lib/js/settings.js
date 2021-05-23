/*
*v1.3.2:
*	Added Changes and new items that came with Hunt Patch 1.5.2
*v1.3.1:
*	Fixed a bug when too few weapon were selected
*	Fixed a bug where second custom ammo of primary weapon was not shown
*	Fixed a bug where custom ammo was only available at rank 100
*	Fixed a bug with primary weapons css
*   Fixed a bug where an exception occured when meele weapon was forced but none was selected
*	Fixed spelling for Caldwell Conversion Uppercut
*
*v1.3 Custom Ammunition 2021/03/09
*
*HuntShowdownLoadoutRandomizer v1.2
*by GrafKnusprig 2021/01/22
*/

var userConfig;

function searchList() {
	
	var filter = $('#inventorySearch').val().toUpperCase();
	var inventory = $('#inventory');
	var labels = inventory.find('label');

	var i, label;
	for (i = 0; i < labels.length; i++)
	{
		label = labels[i];
		txtValue = label.textContent || label.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			labels[i].style.display = "";
		} else {
			labels[i].style.display = "none";
		}
	}
}

function fillList(rank)
{
	var sortItems = [...weapons, ...tools, ...consumables, ...ammunition].sort((a, b) => {
		if(a.name < b.name)
		{
			return -1;
		}
		else if(a.name > b.name)
		{
			return 1;
		}
		else
		{
			return 0;
		}
	});
	
	//filter rank
	if(rank < 100)
	{
		sortItems = sortItems.filter(item =>typeof item.unlock !== 'undefined' || (item.rank && item.rank <= rank));
		
		var searchItem = (unlock) =>
		{
			if(unlock === "")
			{
				return true;
			}
			else
			{
				var filtered = sortItems.filter((element) => element.name === unlock);
				
				if(filtered &&
				filtered.length > 0)
				{
					if(typeof filtered[0].rank !== 'undefined')
					{
						return true;
					}
					else if(typeof filtered[0].unlock !== 'undefined')
					{
						return searchItem(filtered[0].unlock);
					}
				}
				
				return false;
			}
		};
		
		sortItems = sortItems.filter((item) =>
		{
			if(typeof item.rank !== 'undefined')
			{
				return true;
			}
			if(typeof item.unlock !== 'undefined')
			{
				return searchItem(item.unlock);
			}
		});
	}

	var inventory = $('#inventory');
	inventory.empty();
	sortItems.forEach(entry => {
		var checked = userConfig.usedItems.includes(entry.name) ? ' checked' : '';
		inventory.append('<label class="container">' + entry.name + '<input type="checkbox"' + checked + '><span class="checkmark"></span></label>')
	});
}

function inventoryClick(e)
{
	e.children[0].checked = !e.children[0].checked
}

function loadConfig()
{
	var myStorage = window.localStorage.getItem('userConfig');
	if(myStorage)
	{
		userConfig = JSON.parse(myStorage);
	}
	else
	{
		userConfig = defaultConfig;
	}
	
	$('#rank').val(userConfig.rank);
	$('#budget').val(userConfig.cost);
	$('#quartermaster').prop('checked', userConfig.quartermaster);
	$('#firstAidKit').prop('checked', userConfig.firstAidKit);
	$('#melee').prop('checked', userConfig.melee);
	$('#dualChance').val(userConfig.dualChance * 100);
	
	setRank();
	setDualChance();
	fillList(userConfig.rank);
	searchList();
}

function saveConfig()
{
	//remove filter
	$('#inventorySearch').val('');
	searchList();
	
	//get unchecked items
	var inventory = $('#inventory label');
	var usedItems = [];
	inventory.each((i) => 
	{
		var label = $(inventory[i]);
		if(label.find('input').prop('checked'))
		{
			usedItems.push(label.text());
		}
	});
	
	userConfig =
	{
		rank: parseInt($('#rank').val()),
		cost: parseInt($('#budget').val()),
		quartermaster: $('#quartermaster').prop('checked'),
		firstAidKit: $('#firstAidKit').prop('checked'),
		melee: $('#melee').prop('checked'),
		dualChance: parseInt($('#dualChance').val()) / 100,
		usedItems: usedItems
	};
	
	window.localStorage.setItem('userConfig', JSON.stringify(userConfig));
}

function saveClicked()
{
	saveConfig();
}

function selectAll(checked)
{
	var inventory = $('#inventory label');
	inventory.each((i) => 
	{
		var label = $(inventory[i]);
		if(label.is(':visible'))
		{
			label.find('input').prop('checked', checked);
		}
	});
}

function setRank()
{
	var rank = parseInt($('#rank').val());
	if(Number.isInteger(rank) &&
	rank >= 1 &&
	rank <= 100)
	{
		fillList(rank);
		$('#rankValue').text(rank);
		searchList();
	}
	
}

function setDualChance()
{
	$('#dualChanceValue').text($('#dualChance').val() + '%');
}