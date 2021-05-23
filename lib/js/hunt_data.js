//valid randomizer file

var weapons =
[
	{
		name: "Bomb Lance",
		cost: 199,
		rank: 78,
		type: "long"
	},
	{
		name: "Caldwell Rival 78",
		cost: 100,
		rank: 18,
		ammo:
		[
			"Shotgun Flechette",
			"Shotgun Slug",
			"Shotgun Penny Shot"
		],
		type: "long"
	},
	{
		name: "Crossbow",
		cost: 55,
		unlock: "Hand Crossbow",
		ammo:
		[
			[
				"Crossbow Shot Bolt",
				"Crossbow Explosive Bolt"
			],
			[
				"Crossbow Shot Bolt",
				"Crossbow Explosive Bolt"
			]
		],
		type: "long"
	},
	{
		name: "Crown & King Auto-5",
		cost: 600,
		rank: 82,
		ammo:
		[
			"Shotgun Penny Shot",
			"Shotgun Slug"
		],
		type: "long"
	},
	{
		name: "Lebel 1886",
		cost: 397,
		rank: 52,
		ammo:
		[
			"Lebel 1886 Incendiary",
			"Lebel 1886 Spitzer"
		],
		type: "long"
	},
	{
		name: "Lebel 1886 Marksman",
		cost: 437,
		unlock: "Lebel 1886 Talon",
		ammo:
		[
			"Lebel 1886 Incendiary",
			"Lebel 1886 Spitzer"
		],
		type: "long"
	},
	{	
		name: "Lebel 1886 Talon",
		cost: 422,
		unlock: "Lebel 1886",
		ammo:
		[
			"Lebel 1886 Incendiary",
			"Lebel 1886 Spitzer"
		],
		type: "long"
	},
	{
		name: "Martini-Henry IC1",
		cost: 122,
		rank: 16,
		ammo:
		[
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini-Henry IC1 Deadeye",
		cost: 145,
		unlock: "Martini-Henry IC1",
		ammo:
		[
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini-Henry IC1 Marksman",
		cost: 173,
		unlock: "Martini-Henry IC1 Riposte",
		ammo:
		[
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini-Henry IC1 Riposte",
		cost: 164,
		unlock: "Martini-Henry IC1 Deadeye",
		ammo:
		[
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
			[
				"Martini Henry Incendiary",
				"Martini Henry FMJ",
				"Martini Henry Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891",
		cost: 490,
		rank: 72,
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Avtomat",
		cost: 1250,
		unlock: "Mosin-Nagant M1891 Sniper",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Bayonet",
		cost: 540,
		unlock: "Mosin-Nagant M1891 Obrez",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Sniper",
		cost: 550,
		unlock: "Mosin-Nagant M1891 Obrez Mace",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "long"
	},
	{
		name: "Nagant M1895 Officer Carbine",
		cost: 155,
		unlock: "Nagant M1895 Officer Brawler",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "long"
	},
	{
		name: "Nagant M1895 Officer Carbine Deadeye",
		cost: 211,
		unlock: "Nagant M1895 Officer Carbine",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "long"
	},
	{
		name: "Nitro Express Rifle",
		cost: 1015,
		rank: 88,
		ammo:
		[
			"Nitro Express DumDum",
			"Nitro Express Explosive"
		],
		type: "long"
	},
	{
		name: "Romero 77",
		cost: 34,
		rank: 1,
		ammo:
		[
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			],
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			]
		],
		type: "long"
	},
	{
		name: "Romero 77 Talon",
		cost: 59,
		unlock: "Romero 77 Handcannon",
		ammo:
		[
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			],
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			]
		],
		type: "long"
	},
	{
		name: "Sparks LRR",
		cost: 30,
		rank: 26,
		ammo:
		[
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			],
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			]
		],
		type: "long"
	},
	{
		name: "Sparks LRR Silencer",
		cost: 150,
		unlock: "Sparks LRR",
		ammo:
		[
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			],
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			]
		],
		type: "long"
	},
	{
		name: "Sparks LRR Sniper",
		cost: 199,
		unlock: "Sparks LRR Silencer",
		ammo:
		[
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			],
			[
				"Sparks LRR Incendiary",
				"Sparks LRR Poison",
				"Sparks LRR FMJ"
			]
		],
		type: "long"
	},
	{
		name: "Specter 1882",
		cost: 188,
		rank: 58,
		ammo:
		[
			"Shotgun Dragonbreath",
			"Shotgun Slug",
			"Shotgun Flechette",
			"Shotgun Penny Shot"
		],
		type: "long"
	},
	{
		name: "Specter 1882 Bayonet",
		cost: 223,
		unlock: "Specter 1882 Compact",
		ammo:
		[
			"Shotgun Dragonbreath",
			"Shotgun Slug",
			"Shotgun Flechette",
			"Shotgun Penny Shot"
		],
		type: "long"
	},
	{
		name: "Springfield 1866",
		cost: 38,
		rank: 1,
		ammo:
		[
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			],
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			]
		],
		type: "long"
	},
	{
		name: "Springfield 1866 Marksman",
		cost: 73,
		unlock: "Springfield 1866",
		ammo:
		[
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			],
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			]
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner",
		cost: 105,
		rank: 6,
		ammo:
		[
			"Vetterli Karabiner Incendiary",
			"Vetterli Karabiner FMJ"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Bayonet",
		cost: 155,
		unlock: "Vetterli 71 Karabiner Deadeye",
		ammo:
		[
			"Vetterli Karabiner Incendiary",
			"Vetterli Karabiner FMJ"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Deadeye",
		cost: 130,
		unlock: "Vetterli 71 Karabiner",
		ammo:
		[
			"Vetterli Karabiner Incendiary",
			"Vetterli Karabiner FMJ"
		],
		type: "long"
	},
	{
		name: "Winfield M1873",
		cost: 75,
		rank: 42,
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873 Aperture",
		cost: 80,
		unlock: "Winfield M1873",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873 Musket Bayonet",
		cost: 137,
		unlock: "Winfield M1873 Swift",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873 Swift",
		cost: 128,
		unlock: "Winfield M1873 Talon",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873 Talon",
		cost: 100,
		unlock: "Winfield M1873 Aperture",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873C",
		cost: 41,
		rank: 1,
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873C Marksman",
		cost: 56,
		unlock: "Winfield M1873C Silencer",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873C Silencer",
		cost: 55,
		unlock: "Winfield M1873C",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "long"
	},
	{
		name: "Bornheim No. 3 Match",
		cost: 224,
		unlock: "Bornheim No. 3 Extended",
		ammo:
		[
			"Bornheim No3 Incendiary",
			"Bornheim No3 High Velocity"
		],
		type: "medium"
	},
	{
		name: "Caldwell Rival 78 Handcannon",
		cost: 85,
		unlock: "Caldwell Rival 78",
		ammo:
		[
			"Shotgun Flechette",
			"Shotgun Slug",
			"Shotgun Penny Shot"
		],
		type: "medium"
	},
	{
		name: "Combat Axe",
		cost: 5,
		rank: 1,
		type: "medium"
	},
	{
		name: "Dolch 96 Precision",
		cost: 790,
		unlock: "Dolch 96",
		type: "medium"
	},
	{
		name: "Hand Crossbow",
		cost: 35,
		rank: 4,
		ammo:
		[
			[
				"Handcrossbow Choke Bolt",
				"Handcrossbow Chaos Bolt",
				"Handcrossbow Poison Bolt"
			],
			[
				"Handcrossbow Choke Bolt",
				"Handcrossbow Chaos Bolt",
				"Handcrossbow Poison Bolt"
			]
		],
		type: "small"
	},
	{
		name: "Mosin-Nagant M1891 Obrez",
		cost: 290,
		unlock: "Mosin-Nagant M1891",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "medium"
	},
	{
		name: "Mosin-Nagant M1891 Obrez Drum",
		cost: 350,
		unlock: "Mosin-Nagant M1891 Sniper",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "medium"
	},
	{
		name: "Mosin-Nagant M1891 Obrez Mace",
		cost: 310,
		unlock: "Mosin-Nagant M1891 Bayonet",
		ammo:
		[
			"Mosin-Nagant Incendiary",
			"Mosin-Nagant Spitzer"
		],
		type: "medium"
	},
	{
		name: "Nagant M1895 Deadeye",
		cost: 42,
		unlock: "Nagant M1895 Silencer",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "medium"
	},
	{
		name: "Nagant M1895 Precision",
		cost: 29,
		unlock: "Nagant M1895",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "medium"
	},
	{
		name: "Romero 77 Handcannon",
		cost: 26,
		unlock: "Romero 77",
		ammo:
		[
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			],
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			]
		],
		type: "medium"
	},
	{
		name: "Romero 77 Hatchet",
		cost: 62,
		unlock: "Romero 77 Talon",
		ammo:
		[
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			],
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Penny Shot",
				"Shotgun Slug"
			]
		],
		type: "medium"
	},
	{
		name: "Specter 1882 Compact",
		cost: 164,
		unlock: "Specter 1882",
		ammo:
		[
			"Shotgun Dragonbreath",
			"Shotgun Slug",
			"Shotgun Flechette",
			"Shotgun Penny Shot"
		],
		type: "medium"
	},
	{
		name: "Springfield 1866 Compact",
		cost: 33,
		unlock: "Springfield 1866 Marksman",
		ammo:
		[
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			],
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			]
		],
		type: "medium"
	},
	{
		name: "Springfield 1866 Compact Deadeye",
		cost: 46,
		unlock: "Springfield 1866 Compact Striker",
		ammo:
		[
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			],
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			]
		],
		type: "medium"
	},
	{
		name: "Springfield 1866 Compact Striker",
		cost: 56,
		unlock: "Springfield 1866 Compact",
		ammo:
		[
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			],
			[
				"Springfield 1866 DumDum",
				"Springfield 1866 Explosive"
			]
		],
		type: "medium"
	},
	{
		name: "Winfield M1873C Vandal",
		cost: 35,
		unlock: "Winfield M1873C Marksman",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "medium"
	},
	{
		name: "Winfield M1873C Vandal Striker",
		cost: 39,
		unlock: "Winfield M1873C Vandal",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "medium"
	},
	{
		name: "Winfield M1873C Vandal Deadeye",
		cost: 45,
		unlock: "Winfield M1873C Vandal Striker",
		ammo:
		[
			"Winfield M1873 Incendiary",
			"Winfield M1873 High Velocity"
		],
		type: "medium"
	},
	{
		name: "Bornheim No. 3",
		cost: 201,
		rank: 30,
		ammo:
		[
			"Bornheim No3 Incendiary",
			"Bornheim No3 High Velocity"
		],
		type: "small",
		pair: true
	},
	{
		name: "Bornheim No. 3 Extended",
		cost: 306,
		unlock: "Bornheim No. 3",
		ammo:
		[
			"Bornheim No3 Incendiary",
			"Bornheim No3 High Velocity"
		],
		type: "small",
		pair: true
	},
	{
		name: "Caldwell Conversion Chain Pistol",
		cost: 50,
		unlock: "Caldwell Conversion Pistol",
		ammo:
		[
			"Caldwell Conversion DumDum",
			"Caldwell Conversion FMJ"
		],
		type: "small",
		pair: true
	},
	{
		name: "Caldwell Conversion Pistol",
		cost: 26,
		rank: 22,
		ammo:
		[
			"Caldwell Conversion DumDum",
			"Caldwell Conversion FMJ"
		],
		type: "small",
		pair: true
	},
	{
		name: "Caldwell Conversion Uppercut",
		cost: 275,
		unlock: "Caldwell Conversion Chain Pistol",
		ammo:
		[
			"Caldwell Conversion Uppercut Incendiary",
			"Caldwell Conversion Uppercut Explosive"
		],
		type: "small",
		pair: true
	},
	{
		name: "Caldwell Pax",
		cost: 100,
		rank: 10,
		ammo:
		[
			"Caldwell Pax Incendiary",
			"Caldwell Pax DumDum"
		],
		type: "small",
		pair: true
	},
	{
		name: "Caldwell Pax Claw",
		cost: 125,
		unlock: "Caldwell Pax",
		ammo:
		[
			"Caldwell Pax Incendiary",
			"Caldwell Pax DumDum"
		],
		type: "small",
		pair: true
	},
	{
		name: "Cavalry Saber",
		cost: 60,
		rank: 62,
		type: "small",
		pair: false
	},
	{
		name: "Dolch 96",
		cost: 750,
		rank: 68,
		type: "small",
		pair: true
	},
	{
		name: "LeMat Mark II Revolver",
		cost: 95,
		rank: 46,
		ammo:
		[
			[
				"LeMat MarkII Incendiary",
				"LeMat MarkII FMJ"
			],
			[
				"Shotgun Starshell",
				"Shotgun Dragonbreath",
				"Shotgun Slug"
			]
		],
		type: "small",
		pair: true
	},
	{
		name: "Machete",
		cost: 18,
		rank: 12,
		type: "small",
		pair: false
	},
	{
		name: "Nagant M1895",
		cost: 24,
		rank: 1,
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "small",
		pair: true
	},
	{
		name: "Nagant M1895 Officer",
		cost: 66,
		rank: 36,
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "small",
		pair: true
	},
	{
		name: "Nagant M1895 Officer Brawler",
		cost: 80,
		unlock: "Nagant M1895 Officer",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "small",
		pair: true
	},
	{
		name: "Nagant M1895 Silencer",
		cost: 53,
		unlock: "Nagant M1895 Precision",
		ammo:
		[
			"Nagant M1895 High Velocity",
			"Nagant M1895 Poison"
		],
		type: "small",
		pair: true
	},
	{
		name: "Winfield 1887 Terminus",
		cost: 309,
		rank: 64,
		ammo:
		[
			"Shotgun Flechette",
			"Shotgun Penny Shot",
			"Shotgun Slug"
		],
		type: "long"
	},
	{
		name: "Winfield 1887 Terminus Handcannon",
		cost: 289,
		unlock: "Winfield 1887 Terminus",
		ammo:
		[
			"Shotgun Flechette",
			"Shotgun Penny Shot",
			"Shotgun Slug"
		],
		type: "medium"
	},
	{
		name: "Winfield M1876 Centennial",
		cost: 277,
		rank: 64,
		ammo:
		[
			"Winfield M1876 Centennial Poison",
			"Winfield M1876 Centennial FMJ"
		],
		type: "long"
	},
	{
		name: "Winfield M1876 Centennial Sniper",
		cost: 298,
		unlock: "Winfield M1876 Centennial FMJ",
		ammo:
		[
			"Winfield M1876 Centennial Poison",
			"Winfield M1876 Centennial FMJ"
		],
		type: "long"
	}
];

var tools =	
[
	{
		name: "Alert Trip Mine",
		cost: 60,
		unlock: "Decoys"
	},
	{
		name: "Blank Fire Decoys",
		cost: 45,
		unlock: "Chaos Bomb"
	},
	{
		name: "Choke Bomb",
		cost: 25,
		rank: 11
	},
	{
		name: "Concertina Trip Mine",
		cost: 90,
		rank: 40
	},
	{
		name: "Decoy Fuses",
		cost: 60,
		unlock: "Blank Fire Decoys"
	},
	{
		name: "Decoys",
		cost: 6,
		rank: 32
	},
	{
		name: "Dusters",
		cost: 15,
		rank: 20
	},
	{
		name: "Electric Lamp",
		cost: 5,
		rank: 1
	},
	{
		name: "First Aid Kit",
		cost: 30,
		rank: 1
	},
	{
		name: "Flare Pistol",
		cost: 36,
		unlock: ""
	},
	{
		name: "Fusees",
		cost: 10,
		unlock: ""
	},
	{
		name: "Heavy Knife",
		cost: 25,
		unlock: "Knife"
	},
	{
		name: "Knife",
		cost: 20,
		rank: 1
	},
	{
		name: "Knuckle Knife",
		cost: 15,
		unlock: "Dusters"
	},
	{
		name: "Poison Trip Mine",
		cost: 60,
		unlock: ""
	},
	{
		name: "Quad Derringer",
		cost: 30,
		rank: 66
	},
	{
		name: "Spyglass",
		cost: 8,
		rank: 24
	},
	{
		name: "Throwing Knives",
		cost: 40,
		unlock: "Knife"
	}
];

var consumables =
[
	{
		name: "Ammo Box",
		cost: 65,
		rank: 80
	},
	{
		name: "Antidote Shot",
		cost: 55,
		unlock: ""
	},
	{
		name: "Big Dynamite Bundle",
		cost: 110,
		unlock: ""
	},
	{
		name: "Chaos Bomb",
		cost: 15,
		unlock: "Alert Trip Mine"
	},
	{
		name: "Concertina Bomb",
		cost: 48,
		unlock: ""
	},
	{
		name: "Dynamite Bundle",
		cost: 75,
		unlock: ""
	},
	{
		name: "Dynamite Stick",
		cost: 18,
		rank: 8
	},
	{
		name: "Fire Bomb",
		cost: 18,
		rank: 1
	},
	{
		name: "Flash Bomb",
		cost: 47,
		unlock: ""
	},
	{
		name: "Frag Bomb",
		cost: 70,
		unlock: ""
	},
	{
		name: "Hellfire Bomb",
		cost: 70,
		unlock: "Fire Bomb"
	},
	{
		name: "Hive Bomb",
		cost: 40,
		unlock: ""
	},
	{
		name: "Liquid Fire Bomb",
		cost: 23,
		unlock: "Fire Bomb"
	},
	{
		name: "Poison Bomb",
		cost: 25,
		rank: 48
	},
	{
		name: "Stamina Shot",
		cost: 40,
		unlock: ""
	},
	{
		name: "Sticky Bomb",
		cost: 64,
		unlock: ""
	},
	{
		name: "Vitality Shot",
		cost: 65,
		unlock: "Weak Vitality Shot"
	},
	{
		name: "Waxed Dynamite Stick",
		cost: 24,
		unlock: "Dynamite Stick"
	},
	{
		name: "Weak Antidote Shot",
		cost: 25,
		unlock: ""
	},
	{
		name: "Weak Stamina Shot",
		cost: 10,
		unlock: "Weak Vitality Shot"
	},
	{
		name: "Weak Vitality Shot",
		cost: 10,
		rank: 1
	}
];

var ammunition = [
	{
		name: "Standard Projectile",
		cost: 0,
		rank: 1
	},
	{
		name: "Crossbow Explosive Bolt",
		cost: 70,
		unlock: "Crossbow"
	},
	{
		name: "Crossbow Shot Bolt",
		cost: 80,
		unlock: "Crossbow"
	},
	{
		name: "Springfield 1866 DumDum",
		cost: 90,
		unlock: "Springfield 1866"
	},
	{
		name: "Springfield 1866 Explosive",
		cost: 90,
		unlock: "Springfield 1866"
	},
	{
		name: "Winfield M1876 Centennial FMJ",
		cost: 75,
		unlock: "Winfield M1876 Centennial"
	},
	{
		name: "Winfield M1876 Centennial Poison",
		cost: 45,
		unlock: "Winfield M1876 Centennial"
	},
	{
		name: "Winfield M1873 High Velocity",
		cost: 90,
		unlock: "Winfield M1873C"
	},
	{
		name: "Winfield M1873 Incendiary",
		cost: 50,
		unlock: "Winfield M1873C"
	},
	{
		name: "Sparks LRR Incendiary",
		cost: 70,
		unlock: "Sparks LRR"
	},
	{
		name: "Sparks LRR Poison",
		cost: 60,
		unlock: "Sparks LRR"
	},
	{
		name: "Sparks LRR FMJ",
		cost: 60,
		unlock: "Sparks LRR Poison"
	},
	{
		name: "Shotgun Starshell",
		cost: 10,
		rank: 1
	},
	{
		name: "Shotgun Slug",
		cost: 200,
		rank: 1
	},
	{
		name: "Shotgun Penny Shot",
		cost: 25,
		rank: 1
	},
	{
		name: "Shotgun Flechette",
		cost: 45,
		rank: 1
	},
	{
		name: "Shotgun Dragonbreath",
		cost: 50,
		rank: 1
	},
	{
		name: "Nitro Express Explosive",
		cost: 200,
		unlock: "Nitro Express Rifle"
	},
	{
		name: "Nitro Express DumDum",
		cost: 150,
		unlock: "Nitro Express Rifle"
	},
	{
		name: "Nagant M1895 High Velocity",
		cost: 90,
		unlock: "Nagant M1895"
	},
	{
		name: "Nagant M1895 Poison",
		cost: 35,
		unlock: "Nagant M1895"
	},
	{
		name: "Mosin-Nagant Spitzer",
		cost: 220,
		unlock: "Mosin-Nagant M1891"
	},
	{
		name: "Mosin-Nagant Incendiary",
		cost: 70,
		unlock: "Mosin-Nagant M1891"
	},
	{
		name: "Martini Henry Incendiary",
		cost: 70,
		unlock: "Martini-Henry IC1"
	},
	{
		name: "Martini Henry FMJ",
		cost: 85,
		unlock: "Martini-Henry IC1"
	},
	{
		name: "Martini Henry Explosive",
		cost: 90,
		unlock: "Martini-Henry IC1"
	},
	{
		name: "LeMat MarkII Incendiary",
		cost: 50,
		unlock: "LeMat Mark II Revolver"
	},
	{
		name: "LeMat MarkII FMJ",
		cost: 60,
		unlock: "LeMat Mark II Revolver"
	},
	{
		name: "Lebel 1886 Spitzer",
		cost: 220,
		unlock: "Lebel 1886"
	},
	{
		name: "Lebel 1886 Incendiary",
		cost: 70,
		unlock: "Lebel 1886"
	},
	{
		name: "Handcrossbow Poison Bolt",
		cost: 25,
		unlock: "Hand Crossbow"
	},
	{
		name: "Handcrossbow Choke Bolt",
		cost: 20,
		unlock: "Hand Crossbow"
	},
	{
		name: "Handcrossbow Chaos Bolt",
		cost: 10,
		unlock: "Hand Crossbow"
	},
	{
		name: "Caldwell Pax Incendiary",
		cost: 60,
		unlock: "Caldwell Pax"
	},
	{
		name: "Caldwell Pax DumDum",
		cost: 90,
		unlock: "Caldwell Pax"
	},
	{
		name: "Caldwell Conversion Uppercut Incendiary",
		cost: 70,
		unlock: "Caldwell Conversion Uppercut"
	},
	{
		name: "Caldwell Conversion Uppercut Explosive",
		cost: 120,
		unlock: "Caldwell Conversion Uppercut Incendiary"
	},
	{
		name: "Caldwell Conversion FMJ",
		cost: 60,
		unlock: "Caldwell Conversion Pistol"
	},
	{
		name: "Caldwell Conversion DumDum",
		cost: 60,
		unlock: "Caldwell Conversion Pistol"
	},
	{
		name: "Bornheim No3 Incendiary",
		cost: 50,
		unlock: "Bornheim No. 3"
	},
	{
		name: "Bornheim No3 High Velocity",
		cost: 90,
		unlock: "Bornheim No. 3"
	},
	{
		name: "Vetterli Karabiner Incendiary",
		cost: 60,
		unlock: "Vetterli 71 Karabiner"
	},
	{
		name: "Vetterli Karabiner FMJ",
		cost: 75,
		unlock: "Vetterli 71 Karabiner"
	}
];