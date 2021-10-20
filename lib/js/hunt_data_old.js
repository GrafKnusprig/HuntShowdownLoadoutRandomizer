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
			"Caldwell Rival 78 Flechette",
			"Caldwell Rival 78 Slug",
			"Caldwell Rival 78 Penny Shot"
		],
		type: "long"
	},
	{
		name: "Crossbow",
		cost: 50,
		unlock: "Hand Crossbow Poison Bolt",
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
			"Crown & King Auto-5 Penny Shot",
			"Crown & King Auto-5 Slug"
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
		unlock: "Lebel 1886 Aperture",
		ammo:
		[
			"Lebel 1886 Incendiary",
			"Lebel 1886 Spitzer"
		],
		type: "long"
	},
	{	
		name: "Lebel 1886 Aperture",
		cost: 425,
		unlock: "Lebel 1886 Incendiary",
		ammo:
		[
			"Lebel 1886 Incendiary",
			"Lebel 1886 Spitzer"
		],
		type: "long"
	},
	{
		name: "Martini Henry IC1",
		cost: 122,
		rank: 16,
		ammo:
		[
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini Henry IC1 Deadeye",
		cost: 145,
		unlock: "Martini Henry IC1 Incendiary",
		ammo:
		[
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini Henry IC1 Marksman",
		cost: 173,
		unlock: "Martini Henry IC1 Riposte",
		ammo:
		[
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
		],
		type: "long"
	},
	{
		name: "Martini Henry IC1 Riposte",
		cost: 164,
		unlock: "Martini Henry IC1 FMJ",
		ammo:
		[
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
			],
			[
				"Martini Henry IC1 Incendiary",
				"Martini Henry IC1 FMJ",
				"Martini Henry IC1 Explosive"
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
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Avtomat",
		cost: 1250,
		unlock: "Mosin-Nagant M1891 Sniper",
		ammo:
		[
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Bayonet",
		cost: 540,
		unlock: "Mosin-Nagant M1891 Obrez",
		ammo:
		[
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "long"
	},
	{
		name: "Mosin-Nagant M1891 Sniper",
		cost: 550,
		unlock: "Mosin-Nagant M1891 Obrez Mace",
		ammo:
		[
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "long"
	},
	{
		name: "Nagant M1895 Officer Carbine",
		cost: 155,
		unlock: "Nagant M1895 Officer Brawler",
		ammo:
		[
			"Nagant M1895 Officer High Velocity",
			"Nagant M1895 Officer Poison"
		],
		type: "long"
	},
	{
		name: "Nagant M1895 Officer Carbine Deadeye",
		cost: 211,
		unlock: "Nagant M1895 Officer Carbine",
		ammo:
		[
			"Nagant M1895 Officer High Velocity",
			"Nagant M1895 Officer Poison"
		],
		type: "long"
	},
	{
		name: "Nitro Express Rifle",
		cost: 1015,
		rank: 88,
		ammo:
		[
			"Nitro Express Rifle DumDum",
			"Nitro Express Rifle Explosive"
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
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
			],
			[
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
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
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
			],
			[
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
			]
		],
		type: "long"
	},
	{
		name: "Sparks LRR",
		cost: 130,
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
			"Specter 1882 Dragonbreath",
			"Specter 1882 Slug",
			"Specter 1882 Flechette",
			"Specter 1882 Penny Shot"
		],
		type: "long"
	},
	{
		name: "Specter 1882 Bayonet",
		cost: 223,
		unlock: "Specter 1882 Compact",
		ammo:
		[
			"Specter 1882 Dragonbreath",
			"Specter 1882 Slug",
			"Specter 1882 Flechette",
			"Specter 1882 Penny Shot"
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
			"Vetterli 71 Karabiner Incendiary",
			"Vetterli 71 Karabiner FMJ",
			"Vetterli 71 Karabiner High Velocity"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Bayonet",
		cost: 155,
		unlock: "Vetterli 71 Karabiner FMJ",
		ammo:
		[
			"Vetterli 71 Karabiner Incendiary",
			"Vetterli 71 Karabiner FMJ",
			"Vetterli 71 Karabiner High Velocity"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Deadeye",
		cost: 130,
		unlock: "Vetterli 71 Karabiner",
		ammo:
		[
			"Vetterli 71 Karabiner Incendiary",
			"Vetterli 71 Karabiner FMJ",
			"Vetterli 71 Karabiner High Velocity"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Marksman",
		cost: 190,
		unlock: "Vetterli 71 Karabiner Incendiary",
		ammo:
		[
			"Vetterli 71 Karabiner Incendiary",
			"Vetterli 71 Karabiner FMJ",
			"Vetterli 71 Karabiner High Velocity"
		],
		type: "long"
	},
	{
		name: "Vetterli 71 Karabiner Silencer",
		cost: 150,
		unlock: "Vetterli 71 Karabiner Bayonet",
		ammo:
		[
			"Vetterli 71 Karabiner Incendiary",
			"Vetterli 71 Karabiner FMJ",
			"Vetterli 71 Karabiner High Velocity"
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
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873C Marksman",
		cost: 56,
		unlock: "Winfield M1873C Silencer",
		ammo:
		[
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
		],
		type: "long"
	},
	{
		name: "Winfield M1873C Silencer",
		cost: 55,
		unlock: "Winfield M1873C",
		ammo:
		[
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
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
			"Caldwell Rival 78 Flechette",
			"Caldwell Rival 78 Slug",
			"Caldwell Rival 78 Penny Shot"
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
		cost: 30,
		rank: 4,
		ammo:
		[
			[
				"Hand Crossbow Choke Bolt",
				"Hand Crossbow Chaos Bolt",
				"Hand Crossbow Poison Bolt"
			],
			[
				"Hand Crossbow Choke Bolt",
				"Hand Crossbow Chaos Bolt",
				"Hand Crossbow Poison Bolt"
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
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "medium"
	},
	{
		name: "Mosin-Nagant M1891 Obrez Drum",
		cost: 350,
		unlock: "Mosin-Nagant M1891 Sniper",
		ammo:
		[
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
		],
		type: "medium"
	},
	{
		name: "Mosin-Nagant M1891 Obrez Mace",
		cost: 310,
		unlock: "Mosin-Nagant M1891 Bayonet",
		ammo:
		[
			"Mosin-Nagant M1891 Incendiary",
			"Mosin-Nagant M1891 Spitzer"
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
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
			],
			[
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
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
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
			],
			[
				"Romero 77 Starshell",
				"Romero 77 Dragonbreath",
				"Romero 77 Penny Shot",
				"Romero 77 Slug"
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
			"Specter 1882 Dragonbreath",
			"Specter 1882 Slug",
			"Specter 1882 Flechette",
			"Specter 1882 Penny Shot"
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
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
		],
		type: "medium"
	},
	{
		name: "Winfield M1873C Vandal Striker",
		cost: 39,
		unlock: "Winfield M1873C Vandal",
		ammo:
		[
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
		],
		type: "medium"
	},
	{
		name: "Winfield M1873C Vandal Deadeye",
		cost: 45,
		unlock: "Winfield M1873C Vandal Striker",
		ammo:
		[
			"Winfield M1873C Incendiary",
			"Winfield M1873C High Velocity"
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
				"LeMat Mark II Incendiary",
				"LeMat Mark II FMJ"
			],
			[
				"LeMat Mark II Starshell",
				"LeMat Mark II Dragonbreath",
				"LeMat Mark II Slug"
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
		cost: 96,
		rank: 36,
		ammo:
		[
			"Nagant M1895 Officer High Velocity",
			"Nagant M1895 Officer Poison"
		],
		type: "small",
		pair: true
	},
	{
		name: "Nagant M1895 Officer Brawler",
		cost: 110,
		unlock: "Nagant M1895 Officer",
		ammo:
		[
			"Nagant M1895 Officer High Velocity",
			"Nagant M1895 Officer Poison"
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
			"Winfield 1887 Terminus Flechette",
			"Winfield 1887 Terminus Penny Shot",
			"Winfield 1887 Terminus Slug"
		],
		type: "long"
	},
	{
		name: "Winfield 1887 Terminus Handcannon",
		cost: 289,
		unlock: "Winfield 1887 Terminus",
		ammo:
		[
			"Winfield 1887 Terminus Flechette",
			"Winfield 1887 Terminus Penny Shot",
			"Winfield 1887 Terminus Slug"
		],
		type: "medium"
	},
	{
		name: "Winfield M1876 Centennial",
		cost: 157,
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
		cost: 229,
		unlock: "Winfield M1876 Centennial FMJ",
		ammo:
		[
			"Winfield M1876 Centennial Poison",
			"Winfield M1876 Centennial FMJ"
		],
		type: "long"
	},
	{
		name: "Scottfield Model 3",
		cost: 77,
		rank: 1,
		ammo:
		[
			"Scottfield Model 3 Incendiary",
			"Scottfield Model 3 FMJ"
		],
		type: "small"
	},
	{
		name: "Hunting Bow",
		cost: 57,
		rank: 1,
		ammo:
		[
			"Hunting Bow Poison Arrows",
			"Hunting Bow Concertina Arrows",
			"Hunting Bow Frag Arrows"
		],
		type: "medium"
	}
];

var tools =	
[
	{
		name: "Alert Trip Mines",
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
		name: "Concertina Trip Mines",
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
		unlock: "Fusees"
	},
	{
		name: "Fusees",
		cost: 10,
		unlock: "Electric Lamp"
	},
	{
		name: "Heavy Knife",
		cost: 25,
		unlock: "Throwing Knives"
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
		name: "Poison Trip Mines",
		cost: 60,
		unlock: "Hive Bomb"
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
	},
	{
		name: "Throwing Axes",
		cost: 60,
		unlock: "Heavy Knife"
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
		cost: 80,
		unlock: "Weak Antidote Shot"
	},
	{
		name: "Big Dynamite Bundle",
		cost: 110,
		unlock: "Frag Bomb"
	},
	{
		name: "Chaos Bomb",
		cost: 15,
		unlock: "Alert Trip Mines"
	},
	{
		name: "Concertina Bomb",
		cost: 48,
		unlock: "Flash Bomb"
	},
	{
		name: "Dynamite Bundle",
		cost: 75,
		unlock: "Sticky Bomb"
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
		unlock: "Concertina Trip Mines"
	},
	{
		name: "Frag Bomb",
		cost: 70,
		unlock: "Dynamite Bundle"
	},
	{
		name: "Hellfire Bomb",
		cost: 70,
		unlock: "Liquid Fire Bomb"
	},
	{
		name: "Hive Bomb",
		cost: 40,
		unlock: "Antidote Shot"
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
		cost: 100,
		unlock: "Vitality Shot"
	},
	{
		name: "Sticky Bomb",
		cost: 64,
		unlock: "Waxed Dynamite Stick"
	},
	{
		name: "Vitality Shot",
		cost: 65,
		unlock: "Weak Regeneration Shot"
	},
	{
		name: "Waxed Dynamite Stick",
		cost: 24,
		unlock: "Dynamite Stick"
	},
	{
		name: "Weak Antidote Shot",
		cost: 50,
		unlock: "Poison Bomb"
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
	},
	{
		name: "Weak Regeneration Shot",
		cost: 65,
		unlock: "Weak Stamina Shot"
	},
	{
		name: "Regeneration Shot",
		cost: 110,
		unlock: "Stamina Shot"
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
		unlock: "Hand Crossbow Choke Bolt"
	},
	{
		name: "Crossbow Shot Bolt",
		cost: 80,
		unlock: "Crossbow Explosive Bolt"
	},
	{
		name: "Springfield 1866 DumDum",
		cost: 50,
		unlock: "Springfield 1866 Marksman"
	},
	{
		name: "Springfield 1866 Explosive",
		cost: 90,
		unlock: "Springfield 1866 Compact Deadeye"
	},
	{
		name: "Winfield M1876 Centennial FMJ",
		cost: 45,
		unlock: "Winfield M1876 Centennial Poison"
	},
	{
		name: "Winfield M1876 Centennial Poison",
		cost: 40,
		unlock: "Winfield M1876 Centennial"
	},
	{
		name: "Winfield M1873C High Velocity",
		cost: 75,
		unlock: "Winfield M1873C Vandal"
	},
	{
		name: "Winfield M1873C Incendiary",
		cost: 25,
		unlock: "Winfield M1873C High Velocity"
	},
	{
		name: "Winfield M1873 High Velocity",
		cost: 75,
		unlock: "Winfield M1873 Talon"
	},
	{
		name: "Winfield M1873 Incendiary",
		cost: 25,
		unlock: "Winfield M1873 Aperture"
	},
	{
		name: "Sparks LRR Incendiary",
		cost: 35,
		unlock: "Sparks LRR"
	},
	{
		name: "Sparks LRR Poison",
		cost: 60,
		unlock: "Sparks LRR Silencer"
	},
	{
		name: "Sparks LRR FMJ",
		cost: 60,
		unlock: "Sparks LRR Sniper"
	},
	{
		name: "Romero 77 Starshell",
		cost: 10,
		unlock: "Romero 77 Handcannon"
	},
	{
		name: "Romero 77 Slug",
		cost: 200,
		unlock: "Romero 77 Hatchet"
	},
	{
		name: "Caldwell Rival 78 Slug",
		cost: 200,
		unlock: "Caldwell Rival 78 Penny Shot"
	},
	{
		name: "Specter 1882 Slug",
		cost: 200,
		unlock: "Specter 1882 Penny Shot"
	},
	{
		name: "Winfield 1887 Terminus Slug",
		cost: 200,
		unlock: "Winfield 1887 Terminus Dragonbreath"
	},
	{
		name: "Crown & King Auto-5 Slug",
		cost: 200,
		unlock: "Crown & King Auto-5 Penny Shot"
	},
	{
		name: "Romero 77 Penny Shot",
		cost: 10,
		unlock: "Romero 77 Talon"
	},
	{
		name: "Caldwell Rival 78 Penny Shot",
		cost: 10,
		unlock: "Caldwell Rival 78 Handcannon"
	},
	{
		name: "Specter 1882 Penny Shot",
		cost: 10,
		unlock: "Specter 1882 Bayonet"
	},
	{
		name: "Winfield 1887 Terminus Penny Shot",
		cost: 10,
		unlock: "Winfield 1887 Terminus Handcannon"
	},
	{
		name: "Crown & King Auto-5 Penny Shot",
		cost: 10,
		unlock: "Crown & King Auto-5"
	},
	{
		name: "Caldwell Rival 78 Flechette",
		cost: 45,
		unlock: "Caldwell Rival 78"
	},
	{
		name: "Specter 1882 Flechette",
		cost: 45,
		unlock: "Specter 1882"
	},
	{
		name: "Winfield 1887 Terminus Flechette",
		cost: 45,
		unlock: "Winfield 1887 Terminus"
	},
	{
		name: "Romero 77 Dragonbreath",
		cost: 50,
		unlock: "Romero 77 Starshell"
	},
	{
		name: "Specter 1882 Dragonbreath",
		cost: 50,
		unlock: "Specter 1882 Compact"
	},
	{
		name: "Winfield 1887 Terminus Dragonbreath",
		cost: 50,
		unlock: "Winfield 1887 Terminus Penny Shot"
	},
	{
		name: "Nitro Express Rifle Explosive",
		cost: 200,
		unlock: "Nitro Express Rifle DumDum"
	},
	{
		name: "Nitro Express Rifle DumDum",
		cost: 150,
		unlock: "Nitro Express Rifle"
	},
	{
		name: "Nagant M1895 High Velocity",
		cost: 75,
		unlock: "Nagant M1895 Poison"
	},
	{
		name: "Nagant M1895 Poison",
		cost: 35,
		unlock: "Nagant M1895 Deadeye"
	},
	{
		name: "Nagant M1895 Officer High Velocity",
		cost: 75,
		unlock: "Nagant M1895 Officer Carbine"
	},
	{
		name: "Nagant M1895 Officer Poison",
		cost: 35,
		unlock: "Nagant M1895 Officer Brawler"
	},
	{
		name: "Mosin-Nagant M1891 Spitzer",
		cost: 220,
		unlock: "Mosin-Nagant M1891 Sniper"
	},
	{
		name: "Mosin-Nagant M1891 Incendiary",
		cost: 35,
		unlock: "Mosin-Nagant M1891 Obrez"
	},
	{
		name: "Martini Henry IC1 Incendiary",
		cost: 35,
		unlock: "Martini Henry IC1"
	},
	{
		name: "Martini Henry IC1 FMJ",
		cost: 60,
		unlock: "Martini Henry IC1 Deadeye"
	},
	{
		name: "Martini Henry IC1 Explosive",
		cost: 120,
		unlock: "Martini Henry IC1 Marksman"
	},
	{
		name: "LeMat Mark II Incendiary",
		cost: 25,
		unlock: "LeMat Mark II Starshell"
	},
	{
		name: "LeMat Mark II FMJ",
		cost: 35,
		unlock: "LeMat Mark II Dragonbreath"
	},
	{
		name: "LeMat Mark II Dragonbreath",
		cost: 50,
		unlock: "LeMat Mark II Incendiary"
	},
	{
		name: "LeMat Mark II Starshell",
		cost: 10,
		unlock: "LeMat Mark II Revolver"
	},
	{
		name: "LeMat Mark II Slug",
		cost: 200,
		unlock: "LeMat Mark II FMJ"
	},
	{
		name: "Lebel 1886 Spitzer",
		cost: 220,
		unlock: "Lebel 1886 Marksman"
	},
	{
		name: "Lebel 1886 Incendiary",
		cost: 35,
		unlock: "Lebel 1886"
	},
	{
		name: "Hand Crossbow Poison Bolt",
		cost: 25,
		unlock: "Hand Crossbow"
	},
	{
		name: "Hand Crossbow Choke Bolt",
		cost: 20,
		unlock: "Hand Crossbow Chaos Bolt"
	},
	{
		name: "Hand Crossbow Chaos Bolt",
		cost: 10,
		unlock: "Crossbow"
	},
	{
		name: "Caldwell Pax Incendiary",
		cost: 30,
		unlock: "Caldwell Pax"
	},
	{
		name: "Caldwell Pax DumDum",
		cost: 50,
		unlock: "Caldwell Pax Claw"
	},
	{
		name: "Caldwell Conversion Uppercut Incendiary",
		cost: 35,
		unlock: "Caldwell Conversion Uppercut"
	},
	{
		name: "Caldwell Conversion Uppercut Explosive",
		cost: 120,
		unlock: "Caldwell Conversion Uppercut Incendiary"
	},
	{
		name: "Caldwell Conversion FMJ",
		cost: 35,
		unlock: "Caldwell Conversion DumDum"
	},
	{
		name: "Caldwell Conversion DumDum",
		cost: 40,
		unlock: "Caldwell Conversion Chain Pistol"
	},
	{
		name: "Bornheim No3 Incendiary",
		cost: 25,
		unlock: "Bornheim No. 3"
	},
	{
		name: "Bornheim No3 High Velocity",
		cost: 75,
		unlock: "Bornheim No. 3 Match"
	},
	{
		name: "Vetterli 71 Karabiner Incendiary",
		cost: 30,
		unlock: "Vetterli 71 Karabiner Deadeye"
	},
	{
		name: "Vetterli 71 Karabiner FMJ",
		cost: 45,
		unlock: "Vetterli 71 Karabiner Marksman"
	},
	{
		name: "Vetterli 71 Karabiner High Velocity",
		cost: 90,
		unlock: "Vetterli 71 Karabiner Silencer"
	},
	{
		name: "Scottfield Model 3 FMJ",
		cost: 45,
		unlock: "Scottfield Model 3 Incendiary"
	},
	{
		name: "Scottfield Model 3 Incendiary",
		cost: 30,
		unlock: "Scottfield Model 3"
	},
	{
		name: "Hunting Bow Poison Arrows",
		cost: 65,
		unlock: "Hunting Bow"
	},
	{
		name: "Hunting Bow Concertina Arrows",
		cost: 85,
		unlock: "Hunting Bow Poison Arrows"
	},
	{
		name: "Hunting Bow Frag Arrows",
		cost: 77,
		unlock: "Hunting Bow Concertina Arrows"
	}
];
