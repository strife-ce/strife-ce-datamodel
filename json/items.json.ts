export const items = {
    "basic": [
        {
            "id": "Item_GlovesOfHaste",
            "label": "Agility Stone",
            "cost": 835,
            "craftingValue": 2,
            "filters": [
                "attack_speed_comp1",
                "attack_speed_comp",
                "components"
            ],
            "constants": {
                "baseattackspeed": 0.15
            },
            "description": "15 Attack Speed"
        },
        {
            "id": "Item_Warpcleft",
            "label": "Agility Relic",
            "cost": 2000,
            "craftingValue": 5,
            "filters": [
                "attack_speed_comp2",
                "attack_speed_comp",
                "components"
            ],
            "constants": {
                "baseattackspeed": 0.36
            },
            "description": "36 Attack Speed"
        },
        {
            "id": "Item_Healthstone",
            "label": "Health Shard",
            "cost": 450,
            "craftingValue": 1,
            "filters": [
                "health_comp1",
                "health_comp",
                "components"
            ],
            "constants": {
                "maxhealth": 85
            },
            "description": "85 Health"
        },
        {
            "id": "Item_Booster",
            "label": "Health Crystal",
            "cost": 1215,
            "craftingValue": 3,
            "filters": [
                "health_comp2",
                "health_comp",
                "components"
            ],
            "constants": {
                "maxhealth": 230
            },
            "description": "230 Health"
        },
        {
            "id": "Item_Heart",
            "label": "Health Relic",
            "cost": 2010,
            "craftingValue": 5,
            "filters": [
                "health_comp3",
                "health_comp",
                "components"
            ],
            "constants": {
                "maxhealth": 380
            },
            "description": "380 Health"
        },
        {
            "id": "Item_Mender",
            "label": "Vitality Shard",
            "cost": 430,
            "craftingValue": 1,
            "filters": [
                "health_regen_comp1",
                "health_comp",
                "components",
                "health_regen_comp"
            ],
            "constants": {
                "basehealthregen": 2
            },
            "description": "2 Health/sec"
        },
        {
            "id": "Item_Sustainer",
            "label": "Vitality Stone",
            "cost": 815,
            "craftingValue": 2,
            "filters": [
                "health_regen_comp2",
                "health_comp",
                "components",
                "health_regen_comp"
            ],
            "constants": {
                "basehealthregen": 3.8
            },
            "description": "3.8 Health/sec"
        },
        {
            "id": "Item_Manastone",
            "label": "Mana Shard",
            "cost": 390,
            "craftingValue": 1,
            "filters": [
                "mana_comp1",
                "mana_comp",
                "components"
            ],
            "constants": {
                "maxmana": 60
            },
            "description": "60 Mana"
        },
        {
            "id": "Item_Diamond",
            "label": "Mana Stone",
            "cost": 780,
            "craftingValue": 2,
            "filters": [
                "mana_comp2",
                "mana_comp",
                "components"
            ],
            "constants": {
                "maxmana": 120
            },
            "description": "120 Mana"
        },
        {
            "id": "Item_Brain",
            "label": "Mana Crystal",
            "cost": 1105,
            "craftingValue": 3,
            "filters": [
                "mana_comp3",
                "mana_comp",
                "components"
            ],
            "constants": {
                "maxmana": 170
            },
            "description": "170 Mana"
        },
        {
            "id": "Item_Manaregen1",
            "label": "Clarity Shard",
            "cost": 410,
            "craftingValue": 1,
            "filters": [
                "mana_regen_comp1",
                "mana_regen_comp",
                "components"
            ],
            "constants": {
                "basemanaregen": 1.0
            },
            "description": "1.0 Mana/sec"
        },
        {
            "id": "Item_Manaregen2",
            "label": "Clarity Stone",
            "cost": 840,
            "craftingValue": 2,
            "filters": [
                "mana_regen_comp2",
                "mana_regen_comp",
                "components"
            ],
            "constants": {
                "basemanaregen": 2.0
            },
            "description": "2.0 Mana/sec"
        },
        {
            "id": "Item_Blade",
            "label": "Power Shard",
            "cost": 450,
            "craftingValue": 1,
            "filters": [
                "power_comp1",
                "power_comp",
                "components"
            ],
            "constants": {
                "power": 6
            },
            "description": "6 Power (Increases the damage of basic attacks and other orange-text effects by 6%)"
        },
        {
            "id": "Item_Staff",
            "label": "Power Crystal",
            "cost": 1200,
            "craftingValue": 3,
            "filters": [
                "power_comp2",
                "power_comp",
                "components"
            ],
            "constants": {
                "power": 16
            },
            "description": "16 Power (Increases the damage of basic attacks and other orange-text effects by 16%)"
        },
        {
            "id": "Item_Relic",
            "label": "Power Relic",
            "cost": 2025,
            "craftingValue": 5,
            "filters": [
                "power_comp3",
                "power_comp",
                "components"
            ],
            "constants": {
                "power": 27
            },
            "description": "27 Power (Increases the damage of basic attacks and other orange-text effects by 27%)"
        }
    ],
    "recipes": [
        {
            "id": "Item_AssasinsShroud",
            "label": "Shadowveil",
            "cost": 1010,
            "components": [
                "Item_Manastone",
                "Item_Staff"
            ],
            "craftingValue": 4,
            "cooldownTime": 30000,
            "filters": [
                "activatable",
                "other_mobility",
                "stealth",
                "utility",
                "defense",
                "hp"
            ],
            "constants": {
                "duration": 8,
                "movespeed": 40
            },
            "complexDescription": "+100 Max Health\n\n^091Activate: apply shrouded for $duration$ seconds.  While shrouded, gain $movespeed$ Movement Speed and enemies must be within 600 range to see you.^*",
            "description": "Grants Max Health\n^091Activate: become Shrouded and gain Movement Speed.^*",
            "empoweredEffects": {
                "Item_AssasinsShroud_Empower_1": {
                    "id": "Malice",
                    "cost": 1200,
                    "constants": {
                        "damage_enchant": 25
                    },
                    "complexDescription": "Deal $damage_enchant$ bonus damage when attacking from shrouded."
                },
                "Item_AssasinsShroud_Empower_2": {
                    "id": "Diligence",
                    "cost": 1100,
                    "constants": {
                        "cd_enchant": 50
                    },
                    "complexDescription": "Cooldown reduced by $cd_enchant$%, but shrouded no longer grants Movement Speed."
                }
            }
        },
        {
            "id": "Item_Codex",
            "label": "Pyrostaff",
            "cost": 1170,
            "components": [
                "Item_Staff",
                "Item_Manastone",
                "Item_Manastone"
            ],
            "craftingValue": 5,
            "cooldownTime": 45000,
            "filters": [
                "activatable",
                "ability"
            ],
            "constants": {
                "damage": 200
            },
            "complexDescription": "^091Activate: deal^* ^o$damage$ Magic damage^* ^091to a target.^*",
            "description": "^091Activate: deal Magic damage to a target.^*",
            "empoweredEffects": {
                "Item_Codex_Empower_1": {
                    "id": "Cauterizing",
                    "cost": 1275,
                    "constants": {
                        "heal_enchant": 50
                    },
                    "complexDescription": "Activating will heal you for $heal_enchant$% of the damage dealt."
                },
                "Item_Codex_Empower_2": {
                    "id": "Marksmanship",
                    "cost": 1350,
                    "constants": {
                        "range_enchant": 150
                    },
                    "complexDescription": "Increases the cast range by $range_enchant$."
                },
                "Item_Codex_Empower_3": {
                    "id": "Perfection",
                    "cost": 1315,
                    "constants": {
                        "damage": 220,
                        "damage_enchant": 20
                    },
                    "complexDescription": "Increases the damage dealt by $damage_enchant$."
                }
            }
        },
        {
            "id": "Item_Dark_Bargain",
            "label": "Dark Bargain",
            "cost": 2000,
            "components": [
                "Item_Warpcleft",
                "Item_GlovesOfHaste",
                "Item_Staff"
            ],
            "craftingValue": 10,
            "cooldownTime": 0,
            "filters": [
                "activatable",
                "attack",
                "attack_damage"
            ],
            "constants": {
                "damage": 40,
                "bonus": 20,
                "perm_bonus": 5,
                "gold": 500
            },
            "complexDescription": "^o+$damage$ Attack Damage^*\n\n^091Activate: Spend 500 gold to gain ^o+$perm_bonus$ Attack Damage permanently and ^o+$bonus$ Attack Damage^* ^091temporarily for 8 seconds. No cooldown. Can be stacked.^*",
            "description": "Bonus ^oAttack Damage^*. \n^091Activate: Trade gold for more ^oAttack Damage.^*",
            "empoweredEffects": {
                "Item_Dark_Bargain_Empower_1": {
                    "id": "Diligence",
                    "cost": 2500,
                    "constants": {
                        "duration_enchant": 2
                    },
                    "complexDescription": "Increase bonus damage duration by $duration_enchant$ seconds."
                },
                "Item_Dark_Bargain_Empower_2": {
                    "id": "Restraint",
                    "cost": 2000,
                    "constants": {
                        "perm_bonus": 2,
                        "bonus": 8,
                        "gold_enchant": 250
                    },
                    "complexDescription": "Reduces activation cost by $gold_enchant$. Attack Damage bonus becomes ^o+$perm_bonus$ permanent and ^o+$bonus$ temporary."
                }
            }
        },
        {
            "id": "Item_DemonEdge",
            "label": "Demon Fang",
            "cost": 900,
            "components": [
                "Item_Blade",
                "Item_Blade",
                "Item_GlovesOfHaste"
            ],
            "craftingValue": 4,
            "cooldownTime": 0,
            "filters": [
                "attack_damage",
                "attack"
            ],
            "constants": {
                "damage": 18
            },
            "complexDescription": "^o+$damage$ Attack Damage^*",
            "description": "Bonus ^oAttack Damage^*",
            "empoweredEffects": {
                "Item_DemonEdge_Empower_2": {
                    "id": "Desolation",
                    "cost": 1050,
                    "constants": {
                        "damage_neutrals_enchant": 15
                    },
                    "complexDescription": "Grants $damage_neutrals_enchant$% bonus damage to non-hero units."
                },
                "Item_DemonEdge_Empower_3": {
                    "id": "Brutality",
                    "cost": 1255,
                    "constants": {
                        "damage_enchant": 5
                    },
                    "complexDescription": "Increases Attack Damage by $damage_enchant$."
                }
            }
        },
        {
            "id": "Item_DesperationsEdge",
            "label": "Crystalline Shiv",
            "cost": 720,
            "components": [
                "Item_Blade",
                "Item_Blade",
                "Item_Manaregen1"
            ],
            "craftingValue": 3,
            "cooldownTime": 0,
            "filters": [
                "power",
                "ability",
                "mana_regen",
                "attack"
            ],
            "constants": {
                "power": 20,
                "manaregen": 2
            },
            "complexDescription": "Grants up to $power$ Power and up to $manaregen$ Mana/sec based on how full your health bar is.",
            "description": "Grants bonus Power and Mana Regen based on current Health",
            "empoweredEffects": {
                "Item_DesperationsEdge_Empower_1": {
                    "id": "Perfection",
                    "cost": 895,
                    "constants": {
                        "power_poke_enchant": 10
                    },
                    "complexDescription": "When at full hp, increases Power by $power_poke_enchant$."
                },
                "Item_DesperationsEdge_Empower_2": {
                    "id": "Wit",
                    "cost": 955,
                    "constants": {
                        "power_enchant": 4,
                        "manaregen_enchant": 0.5
                    },
                    "complexDescription": "Increases bonus Power by $power_enchant$ and Mana/sec by $manaregen_enchant$"
                },
                "Item_DesperationsEdge_Empower_4": {
                    "id": "Siphoning",
                    "cost": 900,
                    "constants": {
                        "spellsteal_enchant": 3
                    },
                    "complexDescription": "Grants $spellsteal_enchant$% Magic Lifesteal."
                }
            }
        },
        {
            "id": "Item_FellBlade",
            "label": "Fel Blade",
            "cost": 300,
            "components": [
                "Item_Blade"
            ],
            "craftingValue": 1,
            "cooldownTime": 0,
            "filters": [
                "power",
                "ability",
                "attack"
            ],
            "constants": {
                "power": 8
            },
            "complexDescription": "Recipe grants an additional $power$ power.",
            "description": "Cheap, efficient Power increase",
            "empoweredEffects": {
                "Item_FellBlade_Empower_1": {
                    "id": "Bloodlust",
                    "cost": 360,
                    "constants": {
                        "power_legendary": 4,
                        "power": 13
                    },
                    "complexDescription": "On hero kill/assist, increases Power by $power_legendary$ for 2 minutes."
                },
                "Item_FellBlade_Empower_3": {
                    "id": "Haste",
                    "cost": 405,
                    "constants": {
                        "movespeed": 5
                    },
                    "complexDescription": "Grants $movespeed$ Movement Speed."
                }
            }
        },
        {
            "id": "Item_Frostbrand",
            "label": "Frost Prism",
            "cost": 1150,
            "components": [
                "Item_GlovesOfHaste",
                "Item_Staff"
            ],
            "craftingValue": 5,
            "cooldownTime": 0,
            "filters": [
                "utility",
                "attack",
                "attack_damage",
                "debuff_enemy",
                "attack_mod"
            ],
            "constants": {
                "slow": 20,
                "damage": 10
            },
            "complexDescription": "^o+$damage$ Attack Damage^*\nAttacks apply $slow$% movement slow to target.  Lasts 2.0 seconds.\nSlow is less powerful for ranged attackers.",
            "description": "Bonus ^oAttack Damage^* and causes your attacks to slow enemies",
            "empoweredEffects": {
                "Item_Frostbrand_Empower_1": {
                    "id": "Swiftness",
                    "cost": 1400,
                    "constants": {
                        "movespeed_enchant": 16
                    },
                    "complexDescription": "Grants $movespeed_enchant$ Movement Speed for 2.5 seconds on attack."
                },
                "Item_Frostbrand_Empower_2": {
                    "id": "Fatigue",
                    "cost": 1400,
                    "constants": {
                        "attackspeed_enchant": 10
                    },
                    "complexDescription": "Attacks also slow enemy Attack Speed by $attackspeed_enchant$."
                },
                "Item_Frostbrand_Empower_3": {
                    "id": "Focus",
                    "cost": 1150,
                    "constants": {
                        "slowincrease_enchant": 5,
                        "basedamage_enchant": 4
                    },
                    "complexDescription": "Increases the slow percent by $slowincrease_enchant$ but decreases Attack Damage by $basedamage_enchant$."
                }
            }
        },
        {
            "id": "Item_Gauntlet",
            "label": "Empowered Bracer",
            "cost": 450,
            "components": [
                "Item_Blade",
                "Item_Healthstone"
            ],
            "craftingValue": 2,
            "cooldownTime": 0,
            "filters": [
                "defense",
                "ability",
                "attack",
                "power",
                "health"
            ],
            "constants": {
                "power": 9,
                "hp": 130
            },
            "complexDescription": "+$power$ Power\n+$hp$ Health",
            "description": "Cheap source of Health and Power",
            "empoweredEffects": {
                "Item_Gauntlet_Empower_1": {
                    "id": "Strength",
                    "cost": 590,
                    "constants": {
                        "hp_bonus": 2,
                        "power_req": 3
                    },
                    "complexDescription": "For every $power_req$ Power above 100, gain $hp_bonus$ Health."
                },
                "Item_Gauntlet_Empower_3": {
                    "id": "Might",
                    "cost": 520,
                    "constants": {
                        "boss_enchant": 15
                    },
                    "complexDescription": "Increase damage vs Cindara and Baldir by $boss_enchant$%."
                },
                "Item_Gauntlet_Empower_4": {
                    "id": "Bounty",
                    "cost": 550,
                    "constants": {
                        "gold_enchant": 15
                    },
                    "complexDescription": "Increase gold gained from hero kills/assists by $gold_enchant$."
                }
            }
        },
        {
            "id": "Item_Hellflower",
            "label": "Cursed Wand",
            "cost": 1010,
            "components": [
                "Item_Staff",
                "Item_Manastone"
            ],
            "craftingValue": 4,
            "cooldownTime": 50000,
            "filters": [
                "attack",
                "caster",
                "debuff_enemy",
                "utility",
                "activatable",
                "power"
            ],
            "constants": {
                "duration": 4,
                "resistance": 35,
                "power": 10
            },
            "complexDescription": "+$power$ Power\n\n^091Activate: Target an enemy to reduce their Resistance by $resistance$ and slow them by 30% for $duration$ seconds.^*",
            "description": "Grants Power\n^091Activate: Target enemy to slow and reduce Resistance.^*",
            "empoweredEffects": {
                "Item_Hellflower_Empower_1": {
                    "id": "Restraint",
                    "cost": 1235,
                    "constants": {
                        "slow_enchant": 10
                    },
                    "complexDescription": "Increases the percent of the slow effect by $slow_enchant$."
                },
                "Item_Hellflower_Empower_3": {
                    "id": "Ruin",
                    "cost": 1150,
                    "constants": {
                        "penetration_enchant": 10
                    },
                    "complexDescription": "Increases the Resistance reduction by $penetration_enchant$. Removes slow."
                }
            }
        },
        {
            "id": "Item_InfernoBrand",
            "label": "Inferno Brand",
            "cost": 1400,
            "components": [
                "Item_Relic",
                "Item_Healthstone",
                "Item_Sustainer"
            ],
            "craftingValue": 8,
            "cooldownTime": 50000,
            "filters": [
                "magic_armor",
                "armor",
                "defense",
                "ability",
                "resistance"
            ],
            "constants": {
                "damage": 25,
                "resistance": 10
            },
            "complexDescription": "+$resistance$ Resistance\nPassively deals ^o$damage$ Magic damage/sec^* to enemies in a $radius$ radius.",
            "description": "Grants Resistance and constantly burns nearby enemies",
            "empoweredEffects": {
                "Item_InfernoBrand_Empower_1": {
                    "id": "Influence",
                    "cost": 1615,
                    "constants": {
                        "radius_enchant": 75
                    },
                    "complexDescription": "Increases the area of effect by $radius_enchant$."
                },
                "Item_InfernoBrand_Empower_3": {
                    "id": "Virtue",
                    "cost": 1605,
                    "constants": {
                        "resistance_enchant": 3
                    },
                    "complexDescription": "Gain $resistance_enchant$ Resistance for each enemy hero being damaged."
                },
                "Item_InfernoBrand_Empower_4": {
                    "id": "Focus",
                    "cost": 1400,
                    "constants": {
                        "damage_enchant": 10,
                        "damage_real": 35,
                        "area_enchant": 150
                    },
                    "complexDescription": "Increases damage done by $damage_enchant$ but decrease area of effect by $area_enchant$."
                }
            }
        },
        {
            "id": "Item_Malevolence",
            "label": "Grimoire",
            "cost": 1150,
            "components": [
                "Item_Staff",
                "Item_Manastone",
                "Item_Manaregen1"
            ],
            "craftingValue": 5,
            "cooldownTime": 50000,
            "filters": [
                "power",
                "ability"
            ],
            "constants": {
                "power": 14,
                "resistance": 35
            },
            "complexDescription": "+$power$ Power\nSpells ignore $resistance$% Resistance",
            "description": "Grants Power and ability Resistance penetration",
            "empoweredEffects": {
                "Item_Malevolence_Empower_1": {
                    "id": "Rejuvenation",
                    "cost": 1480,
                    "constants": {
                        "manaregen_enchant": 10
                    },
                    "complexDescription": "Grants $manaregen_enchant$% increased Mana/sec."
                },
                "Item_Malevolence_Empower_2": {
                    "id": "Siphoning",
                    "cost": 1455,
                    "constants": {
                        "spellsteal_enchant": 5
                    },
                    "complexDescription": "$spellsteal_enchant$% Magic Lifesteal."
                }
            }
        },
        {
            "id": "Item_Mask_Of_Madman",
            "label": "Berserkers Mask",
            "cost": 1300,
            "components": [
                "Item_Staff",
                "Item_Staff",
                "Item_Healthstone"
            ],
            "craftingValue": 7,
            "cooldownTime": 22000,
            "filters": [
                "other_mobility",
                "attack_speed",
                "activatable",
                "attack"
            ],
            "constants": {
                "vamp": 8,
                "attackspeed": 45,
                "movespeed": 40
            },
            "complexDescription": "+$vamp$% Attack Lifesteal\n\n^091Activate: increase attack speed by $attackspeed$ and movement by $movespeed$ for 6 seconds.  Increases damage taken by 15% while active.^*",
            "description": "Grants Lifesteal\n^091Activate: increase Attack Speed and Movespeed - but take more damage.^*",
            "empoweredEffects": {
                "Item_Mask_Of_Madman_Empower_1": {
                    "id": "Resilience",
                    "cost": 1575,
                    "constants": {
                        "reduction_enchant": 5
                    },
                    "complexDescription": "Decreases the percent damage taken by $reduction_enchant$."
                },
                "Item_Mask_Of_Madman_Empower_2": {
                    "id": "Destruction",
                    "cost": 1450,
                    "constants": {
                        "building_enchant": 15
                    },
                    "complexDescription": "Adds $building_enchant$% damage vs. structures by while active."
                },
                "Item_Mask_Of_Madman_Empower_3": {
                    "id": "Madness",
                    "cost": 1500,
                    "constants": {
                        "building_enchant": 15
                    },
                    "complexDescription": "Cooldown refreshes when participating in a hero kill."
                }
            }
        },
        {
            "id": "Item_Riftshards",
            "label": "Woundsplitter",
            "cost": 1500,
            "components": [
                "Item_Relic",
                "Item_GlovesOfHaste",
                "Item_GlovesOfHaste"
            ],
            "craftingValue": 9,
            "cooldownTime": 22000,
            "filters": [
                "power",
                "attack",
                "crit",
                "attack_damage"
            ],
            "constants": {
                "attack_damage": 10,
                "critchance": 20
            },
            "complexDescription": "^o+$attack_damage$ Attack Damage^*\nGrants a $critchance$% chance to deal 2x the damage on an attack.",
            "description": "Bonus ^oAttack Damage^* and a chance to deal 2x damage",
            "empoweredEffects": {
                "Item_Riftshards_Empower_1": {
                    "id": "Ruin",
                    "cost": 1900,
                    "constants": {
                        "reduceresistance_enchant": 12,
                        "reduceresistance_duration_enchant": 3
                    },
                    "complexDescription": "Attacking the enemy reduces their Resistance by $reduceresistance_enchant$ for $reduceresistance_duration_enchant$ seconds. Non-stacking."
                },
                "Item_Riftshards_Empower_2": {
                    "id": "Fortune",
                    "cost": 1680,
                    "constants": {
                        "crit_enchant": 2
                    },
                    "complexDescription": "Increases percent chance to critical by $crit_enchant$."
                }
            }
        },
        {
            "id": "Item_ScalingPower",
            "label": "Reapers Scythe",
            "cost": 440,
            "components": [
                "Item_Mender",
                "Item_Blade"
            ],
            "craftingValue": 2,
            "cooldownTime": 22000,
            "filters": [
                "power",
                "ability",
                "health",
                "attack"
            ],
            "constants": {
                "power_scale": 3.0,
                "health_scale": 30
            },
            "complexDescription": "Each kill/assist grants $power_scale$ Power and $health_scale$ Health. One charge is lost upon death. While at max charges (5), grants a bonus 10 Movement Speed.",
            "description": "Grants Health & Power for each hero kill/assist",
            "empoweredEffects": {
                "Item_ScalingPower_Empower_1": {
                    "id": "Glory",
                    "cost": 470,
                    "constants": {},
                    "complexDescription": "Killing Cindara or Baldir will now add a charge."
                },
                "Item_ScalingPower_Empower_2": {
                    "id": "Power",
                    "cost": 705,
                    "constants": {
                        "power_enchant": 5
                    },
                    "complexDescription": "Grants $power_enchant$ Power"
                },
                "Item_ScalingPower_Empower_3": {
                    "id": "Ages",
                    "cost": 640,
                    "constants": {
                        "charges_enchant": 2
                    },
                    "complexDescription": "Increases max charges by $charges_enchant$."
                }
            }
        },
        {
            "id": "Item_ShadowCloneStone",
            "label": "Shadowclonestone",
            "cost": 900,
            "components": [],
            "craftingValue": 0,
            "cooldownTime": 45000,
            "filters": [
                "power",
                "ability",
                "health",
                "attack"
            ],
            "constants": {},
            "complexDescription": "",
            "description": "",
            "empoweredEffects": {
                "Item_ScalingPower_Empower_1": {
                    "id": "Glory",
                    "cost": 470,
                    "constants": {},
                    "complexDescription": "Killing Cindara or Baldir will now add a charge."
                },
                "Item_ScalingPower_Empower_2": {
                    "id": "Power",
                    "cost": 705,
                    "constants": {
                        "power_enchant": 5
                    },
                    "complexDescription": "Grants $power_enchant$ Power"
                },
                "Item_ScalingPower_Empower_3": {
                    "id": "Ages",
                    "cost": 640,
                    "constants": {
                        "charges_enchant": 2
                    },
                    "complexDescription": "Increases max charges by $charges_enchant$."
                }
            }
        },
        {
            "id": "Item_Shieldbreaker",
            "label": "Crushing Mace",
            "cost": 1150,
            "components": [
                "Item_Staff",
                "Item_Healthstone",
                "Item_Healthstone"
            ],
            "craftingValue": 5,
            "cooldownTime": 45000,
            "filters": [
                "attack",
                "attack_mod",
                "attack_damage"
            ],
            "constants": {
                "attack_damage": 5,
                "resistance": 40
            },
            "complexDescription": "^o+$attack_damage$ Attack Damage^*\nBasic attacks ignore $resistance$% of enemy Resistance.",
            "description": "Bonus ^oAttack Damage^* and basic attack Resistance penatration",
            "empoweredEffects": {
                "Item_Shieldbreaker_Empower_1": {
                    "id": "Sundering",
                    "cost": 1500,
                    "constants": {
                        "damagebonus_enchant": 0.8
                    },
                    "complexDescription": "Your attack deals bonus damage equal to $damagebonus_enchant$% of the target's Max Health."
                },
                "Item_Shieldbreaker_Empower_3": {
                    "id": "Vampirism",
                    "cost": 1375,
                    "constants": {
                        "lifesteal_enchant": 2.4
                    },
                    "complexDescription": "Grants $lifesteal_enchant$% Attack Lifesteal."
                }
            }
        },
        {
            "id": "Item_Slayer",
            "label": "Numbing Lantern",
            "cost": 750,
            "components": [
                "Item_GlovesOfHaste",
                "Item_Blade",
                "Item_Healthstone"
            ],
            "craftingValue": 4,
            "cooldownTime": 45000,
            "filters": [
                "attack",
                "attack_mod"
            ],
            "constants": {
                "power_reduction": 25,
                "health": 150
            },
            "complexDescription": "+$health$ Health\nWhen you harm an enemy 3 times, their Power is lowered by $power_reduction$%. Lasts 6 seconds.",
            "description": "Grants Attack Speed. Reduces enemy Power after 3 attacks.",
            "empoweredEffects": {
                "Item_Slayer_Empower_1": {
                    "id": "Ruin",
                    "cost": 1000,
                    "constants": {
                        "damage_enchant": 4
                    },
                    "complexDescription": "Debuffed targets also take $damage_enchant$% increased damage."
                },
                "Item_Slayer_Empower_2": {
                    "id": "Ages",
                    "cost": 950,
                    "constants": {
                        "duration_enchant": 2
                    },
                    "complexDescription": "Increases duration by $duration_enchant$ seconds."
                },
                "Item_Slayer_Empower_3": {
                    "id": "Focus",
                    "cost": 800,
                    "constants": {
                        "powerreduction_enchant": 30
                    },
                    "complexDescription": "Increases Power reduction to $powerreduction_enchant$%."
                }
            }
        },
        {
            "id": "Item_Soulstealer",
            "label": "Soulstealer",
            "cost": 1250,
            "components": [
                "Item_Manastone",
                "Item_Relic"
            ],
            "craftingValue": 6,
            "cooldownTime": 45000,
            "filters": [
                "ability",
                "spell_vamp",
                "lifesteal",
                "maxmana",
                "mana"
            ],
            "constants": {
                "vamp": 25,
                "manamax": 100
            },
            "complexDescription": "+$manamax$ Mana\n$vamp$% Magic Lifesteal. Half for area of effect abilities.",
            "description": "Grants Mana and Magic Lifesteal",
            "empoweredEffects": {
                "Item_Soulstealer_Empower_1": {
                    "id": "Mana Draining",
                    "cost": 1490,
                    "constants": {
                        "mana_enchant": 6
                    },
                    "complexDescription": "Restores $mana_enchant$ Mana upon killing an enemy unit."
                },
                "Item_Soulstealer_Empower_2": {
                    "id": "Dominion",
                    "cost": 1550,
                    "constants": {
                        "power_enchant": 0.5,
                        "stacks_enchant": 20
                    },
                    "complexDescription": "Each unit killed grants you $power_enchant$ Power.  Stacks up to $stacks_enchant$ times. These stacks are lost if you die."
                },
                "Item_Soulstealer_Empower_3": {
                    "id": "Defense",
                    "cost": 1250,
                    "constants": {
                        "resistance_enchant": 10,
                        "mana_enchant": 100
                    },
                    "complexDescription": "Grants $resistance_enchant$ Resistance but removes $mana_enchant$ Mana."
                }
            }
        },
        {
            "id": "Item_Spellblade",
            "label": "Mystic Dagger",
            "cost": 1010,
            "components": [
                "Item_Staff",
                "Item_Manastone"
            ],
            "craftingValue": 4,
            "cooldownTime": 0,
            "filters": [
                "attack",
                "attack_mod",
                "ability",
                "power"
            ],
            "constants": {
                "power": 6,
                "damage": 45
            },
            "complexDescription": "+$power$ Power\nUsing an ability that costs mana grants ^o$damage$ bonus damage^* on your next attack.",
            "description": "Grants Power. Using an ability grants ^obonus damage^* on next attack.",
            "empoweredEffects": {
                "Item_Spellblade_Empower_1": {
                    "id": "Energy",
                    "cost": 1155,
                    "constants": {
                        "mana_enchant": 10
                    },
                    "complexDescription": "Grants $mana_enchant$ mana on hit while dagger is active."
                },
                "Item_Spellblade_Empower_3": {
                    "id": "Combustion",
                    "cost": 1150,
                    "constants": {
                        "mana_enchant": 10
                    },
                    "complexDescription": "Bonus damage now splashes."
                }
            }
        },
        {
            "id": "Item_Supercharger",
            "label": "Power Conduit",
            "cost": 1485,
            "components": [
                "Item_Relic",
                "Item_Diamond",
                "Item_Booster"
            ],
            "craftingValue": 10,
            "cooldownTime": 0,
            "filters": [
                "power",
                "ability",
                "attack"
            ],
            "constants": {
                "power": 29,
                "percent_manarestore": 25
            },
            "complexDescription": "+$power$ Power\nKills and assists restore $percent_manarestore$% of your Mana over 2.5 seconds. ",
            "description": "Massive Power increase.  Kills and assists restore mana over time.",
            "empoweredEffects": {
                "Item_Supercharger_Empower_1": {
                    "id": "Might",
                    "cost": 1840,
                    "constants": {
                        "powerpercent_enchant": 4
                    },
                    "complexDescription": "Grants $powerpercent_enchant$% bonus Power."
                },
                "Item_Supercharger_Empower_3": {
                    "id": "Focus",
                    "cost": 1585,
                    "constants": {
                        "power_enchant": 8
                    },
                    "complexDescription": "Increases Power by $power_enchant$ but no longer restores Mana."
                }
            }
        },
        {
            "id": "Item_ThunderClaw",
            "label": "Thundercaller",
            "cost": 950,
            "components": [
                "Item_Blade",
                "Item_Manastone",
                "Item_GlovesOfHaste"
            ],
            "craftingValue": 4,
            "cooldownTime": 0,
            "filters": [
                "attack_mod",
                "attack",
                "ability"
            ],
            "constants": {
                "damage": 60
            },
            "complexDescription": "Every 5 attacks will cause chain lightning for ^o$damage$ Magic damage^*, bouncing up to 7 times.  \n\nDeals 150% damage to non-hero units.",
            "description": "Grants chance that your attacks will cause chain lightning",
            "empoweredEffects": {
                "Item_ThunderClaw_Empower_1": {
                    "id": "Devastation",
                    "cost": 1195,
                    "constants": {
                        "resistance_reduction_enchant": 6
                    },
                    "complexDescription": "Targets hit by lightning have their Resistance decreased by $resistance_reduction_enchant$."
                },
                "Item_ThunderClaw_Empower_2": {
                    "id": "Redirection",
                    "cost": 1050,
                    "constants": {
                        "bounce_enchant": 12
                    },
                    "complexDescription": "Increases bounce limit to $bounce_enchant$."
                },
                "Item_ThunderClaw_Empower_3": {
                    "id": "Fortune",
                    "cost": 1250,
                    "constants": {
                        "chance_enchant": 1
                    },
                    "complexDescription": "Decreased hits to trigger by $chance_enchant$."
                }
            }
        },
        {
            "id": "Item_Timewarper",
            "label": "Wizards Hourglass",
            "cost": 1425,
            "components": [
                "Item_Staff",
                "Item_Manaregen2",
                "Item_Booster"
            ],
            "craftingValue": 8,
            "cooldownTime": 0,
            "filters": [
                "ability",
                "cd_reduction",
                "power"
            ],
            "constants": {
                "power": 15,
                "cd": 25
            },
            "complexDescription": "+$power$ Power\n+$cd$% Cooldown Reduction",
            "description": "Grants Power and Cooldown Reduction",
            "empoweredEffects": {
                "Item_Timewarper_Empower_1": {
                    "id": "Efficiency",
                    "cost": 1705,
                    "constants": {
                        "manaregen_enchant": 3,
                        "manaregen_duration_enchant": 4
                    },
                    "complexDescription": "Each spell cast increases Mana/sec by $manaregen_enchant$ for $manaregen_duration_enchant$ seconds. Non-stacking."
                },
                "Item_Timewarper_Empower_3": {
                    "id": "Siphoning",
                    "cost": 1730,
                    "constants": {
                        "spellsteal_enchant": 5
                    },
                    "complexDescription": "Grants $spellsteal_enchant$% Magic Lifesteal."
                }
            }
        },
        {
            "id": "Item_Tinders_Chalice",
            "label": "Clerics Chalice",
            "cost": 650,
            "components": [
                "Item_Blade",
                "Item_Manaregen1"
            ],
            "craftingValue": 2,
            "cooldownTime": 0,
            "filters": [
                "defense",
                "heal",
                "mana",
                "mana_regen"
            ],
            "constants": {
                "percent": 40,
                "regen": 0.95
            },
            "complexDescription": "$regen$ Mana/sec\nHeals you for $percent$% of mana spent.",
            "description": "Grants Mana Regen and heals you as you spend mana.",
            "empoweredEffects": {
                "Item_Tinders_Chalice_Empower_1": {
                    "id": "Benevolence",
                    "cost": 800,
                    "constants": {
                        "mana_enchant": 5
                    },
                    "complexDescription": "$mana_enchant$% of mana spent by nearby allies also heals you."
                },
                "Item_Tinders_Chalice_Empower_2": {
                    "id": "Youth",
                    "cost": 715,
                    "constants": {
                        "percent_enchant": 4
                    },
                    "complexDescription": "Increases heal percent by $percent_enchant$."
                },
                "Item_Tinders_Chalice_Empower_3": {
                    "id": "Protection",
                    "cost": 825,
                    "constants": {
                        "support_enchant": 3
                    },
                    "complexDescription": "Grants $support_enchant$% effectiveness to heals & shield cast by you."
                }
            }
        },
        {
            "id": "Item_Titanslayer",
            "label": "Titanslayer",
            "cost": 1050,
            "components": [
                "Item_Warpcleft",
                "Item_Staff",
                "Item_Healthstone"
            ],
            "craftingValue": 9,
            "cooldownTime": 0,
            "filters": [
                "attack",
                "attack_damage"
            ],
            "constants": {},
            "complexDescription": "Attacks deal additional damage equal to ^o$healthdamage$%^* of your target's Max Health.",
            "description": "Bonus ^oAttack Damage^* based on target's Health",
            "empoweredEffects": {
                "Item_Titanslayer_Empower_1": {
                    "id": "Devastation",
                    "cost": 1650,
                    "constants": {
                        "damage_enchant": 0.4
                    },
                    "complexDescription": "Attacks add $damage_enchant$% of your Max Health in damage."
                },
                "Item_Titanslayer_Empower_2": {
                    "id": "Marksmanship",
                    "cost": 1400,
                    "constants": {
                        "range_enchant": 30
                    },
                    "complexDescription": "+$range_enchant$ Attack Range."
                },
                "Item_Titanslayer_Empower_3": {
                    "id": "Constitution",
                    "cost": 1400,
                    "constants": {
                        "healthdamage_bonus": 0.5
                    },
                    "complexDescription": "Increases bonus percentage by ^o$healthdamage_bonus$^* when above 75% health."
                }
            }
        },
        {
            "id": "Item_TwinFang",
            "label": "Arcane Emblem",
            "cost": 750,
            "components": [
                "Item_Blade",
                "Item_Blade",
                "Item_Blade"
            ],
            "craftingValue": 3,
            "cooldownTime": 0,
            "filters": [
                "power",
                "ability"
            ],
            "constants": {
                "power": 5,
                "penetration": 18
            },
            "complexDescription": "+5 Power\nMagic attacks now penetrate 18 Resistance.",
            "description": "Grants Power and ability Resistance penetration",
            "empoweredEffects": {
                "Item_TwinFang_Empower_1": {
                    "id": "Siphoning",
                    "cost": 930,
                    "constants": {
                        "spellsteal_enchant": 3
                    },
                    "complexDescription": "$spellsteal_enchant$% Magic Lifesteal."
                },
                "Item_TwinFang_Empower_2": {
                    "id": "Focus",
                    "cost": 850,
                    "constants": {
                        "resistance": 5,
                        "penetration_enchant": 5
                    },
                    "complexDescription": "Additional $penetration_enchant$ Magical Penetration, but lose $resistance$ Resistance."
                },
                "Item_TwinFang_Empower_3": {
                    "id": "Heritage",
                    "cost": 1000,
                    "constants": {
                        "mana": 4
                    },
                    "complexDescription": "Upon dealing magic damage to an enemy hero, permanently gain +$mana$ mana. Stacks 25 times."
                }
            }
        },
        {
            "id": "Item_VampiricBlade",
            "label": "Vampiric Dagger",
            "cost": 1020,
            "components": [
                "Item_GlovesOfHaste",
                "Item_Mender",
                "Item_Blade"
            ],
            "craftingValue": 4,
            "cooldownTime": 0,
            "filters": [
                "lifesteal",
                "attack"
            ],
            "constants": {
                "vamp": 12,
                "resistance": 10
            },
            "complexDescription": "+$vamp$% Attack Lifesteal\n+$resistance$ Resistance",
            "description": "Grants Lifesteal",
            "empoweredEffects": {
                "Item_VampiricBlade_Empower_1": {
                    "id": "Absorption",
                    "cost": 1245,
                    "constants": {
                        "healthrestore_creep_enchant": 5
                    },
                    "complexDescription": "Killing a non-hero with an attack restores $healthrestore_creep_enchant$% of the enemy's max health to you."
                },
                "Item_VampiricBlade_Empower_2": {
                    "id": "Desolation",
                    "cost": 1140,
                    "constants": {
                        "bonusdamage_enchant": 80,
                        "bonusdamage_chance_enchant": 25
                    },
                    "complexDescription": "Grants a $bonusdamage_chance_enchant$% chance to deal $bonusdamage_enchant$ damage to non-hero units."
                },
                "Item_VampiricBlade_Empower_3": {
                    "id": "Thirst",
                    "cost": 1305,
                    "constants": {
                        "healthrestore_kill_enchant": 12,
                        "healthrestore_killduration_enchant": 3
                    },
                    "complexDescription": "Kills and assists restore $healthrestore_kill_enchant$% of your Max Health over $healthrestore_killduration_enchant$ seconds."
                }
            }
        },
        {
            "id": "Item_Zealotsblade",
            "label": "Zealots Blade",
            "cost": 1270,
            "components": [
                "Item_Warpcleft",
                "Item_Healthstone"
            ],
            "craftingValue": 6,
            "cooldownTime": 0,
            "filters": [
                "other_mobility",
                "attack_speed",
                "attack"
            ],
            "constants": {
                "attackspeed": 27,
                "movespeed": 35
            },
            "complexDescription": "+$attackspeed$ Attack Speed\n+$movespeed$ Movement Speed",
            "description": "Grants bonus Movement Speed and Attack Speed",
            "empoweredEffects": {
                "Item_Zealotsblade_Empower_1": {
                    "id": "Rhythm",
                    "cost": 1590,
                    "constants": {
                        "power_enchant": 4,
                        "power_duration_enchant": 3
                    },
                    "complexDescription": "Grants $power_enchant$ Power each attack, stacking up to 3 times.  Expires after $power_duration_enchant$ seconds of not attacking."
                },
                "Item_Zealotsblade_Empower_2": {
                    "id": "Vampirism",
                    "cost": 1650,
                    "constants": {
                        "lifesteal_enchant": 4
                    },
                    "complexDescription": "Grants $lifesteal_enchant$% Attack Lifesteal."
                },
                "Item_Zealotsblade_Empower_3": {
                    "id": "Haste",
                    "cost": 1485,
                    "constants": {
                        "movespeed_enchant": 10
                    },
                    "complexDescription": "Increases Movement Speed by $movespeed_enchant$."
                }
            }
        },
        {
            "id": "Item_BarrierToken",
            "label": "Barrier Token",
            "cost": 900,
            "components": [
                "Item_Booster",
                "Item_Mender"
            ],
            "craftingValue": 4,
            "cooldownTime": 25000,
            "filters": [
                "defense",
                "magic_armor",
                "resistance"
            ],
            "constants": {
                "resistance": 20,
                "reduction": 35
            },
            "complexDescription": "+$resistance$ Resistance\nReduces Magic damage by $reduction$% for 2 seconds before taking Magic damage.  25 sec cd.",
            "description": "Grants Resistance and anti-magic burst defense",
            "empoweredEffects": {
                "Item_BarrierToken_Empower_1": {
                    "id": "Warding",
                    "cost": 1075,
                    "constants": {
                        "spelltrigger_enchant": 15
                    },
                    "complexDescription": "The spell which triggers barrier token is reduced by an additional $spelltrigger_enchant$%."
                },
                "Item_BarrierToken_Empower_2": {
                    "id": "Diligence",
                    "cost": 1050,
                    "constants": {
                        "cooldown_enchant": 5
                    },
                    "complexDescription": "Decreases cooldown by $cooldown_enchant$ seconds."
                },
                "Item_BarrierToken_Empower_3": {
                    "id": "Simplicity",
                    "cost": 200,
                    "constants": {
                        "resistance_enchant": 20
                    },
                    "complexDescription": "No longer gives $resistance_enchant$ Resistance."
                }
            }
        },
        {
            "id": "Item_Blessed_Orb",
            "label": "Blessed Orb",
            "cost": 990,
            "components": [
                "Item_Blade",
                "Item_Booster"
            ],
            "craftingValue": 4,
            "cooldownTime": 25000,
            "filters": [
                "power",
                "ability",
                "heal"
            ],
            "constants": {
                "power": 10,
                "amp": 15
            },
            "complexDescription": "+$power$ Power\nIncreases heals & shield bars you provide by $amp$%.",
            "description": "Grants Power. Enhances your heals and shields.",
            "empoweredEffects": {
                "Item_Blessed_Orb_Empower_1": {
                    "id": "Charity",
                    "cost": 1240,
                    "constants": {
                        "heal_enchant": 30,
                        "heal_chance_enchant": 25
                    },
                    "complexDescription": "Casting a spell has a $heal_chance_enchant$% chance to heal the lowest health nearby hero by $heal_enchant$."
                },
                "Item_Blessed_Orb_Empower_3": {
                    "id": "Focus",
                    "cost": 990,
                    "constants": {
                        "mana_enchant": 95,
                        "power_enchant": 10
                    },
                    "complexDescription": "Grants $mana_enchant$ Mana but removes $power_enchant$ Power."
                }
            }
        },
        {
            "id": "Item_Buckler",
            "label": "Silver Buckler",
            "cost": 270,
            "components": [
                "Item_Mender"
            ],
            "craftingValue": 1,
            "cooldownTime": 25000,
            "filters": [
                "armor",
                "defense",
                "resistance",
                "mitigation"
            ],
            "constants": {
                "resistance": 8,
                "mitigation": 3
            },
            "complexDescription": "+$resistance$ Resistance\n+$mitigation$ Mitigation",
            "description": "Cheap, efficient Resistance and Mitigation",
            "empoweredEffects": {
                "Item_Buckler_Empower_1": {
                    "id": "Recovery",
                    "cost": 390,
                    "constants": {
                        "regen_enchant": 1.5
                    },
                    "complexDescription": "Increases Health/sec by $regen_enchant$ for 3 seconds after taking damage."
                },
                "Item_Buckler_Empower_3": {
                    "id": "Resistance",
                    "cost": 355,
                    "constants": {
                        "resistance_enchant": 3
                    },
                    "complexDescription": "Grants an additional $resistance_enchant$ Resistance."
                }
            }
        },
        {
            "id": "Item_CrusaderShield",
            "label": "Captains Crest",
            "cost": 650,
            "components": [
                "Item_Blade",
                "Item_Healthstone"
            ],
            "craftingValue": 2,
            "cooldownTime": 25000,
            "filters": [
                "defense",
                "utility",
                "armor",
                "resistance",
                "mitigation"
            ],
            "constants": {
                "resistance": 10,
                "mitigation": 5,
                "regen_aura": 6,
                "tower_buff": 20,
                "splash_buff": 40
            },
            "complexDescription": "+$resistance$ Resistance\n+$mitigation$ Mitigation\nReduces damage taken from towers by $tower_buff$% and splash damage taken by $splash_buff$% to all nearby brawlers.",
            "description": "Grants Resistance and a defence bonus to your brawlers",
            "empoweredEffects": {
                "Item_CrusaderShield_Empower_1": {
                    "id": "Authority",
                    "cost": 795,
                    "constants": {
                        "attackspeed_enchant": 8
                    },
                    "complexDescription": "Nearby allied brawlers also have their Attack Speed increased by $attackspeed_enchant$%."
                },
                "Item_CrusaderShield_Empower_2": {
                    "id": "Preservation",
                    "cost": 855,
                    "constants": {
                        "aura_boost_enchant": 10
                    },
                    "complexDescription": "Adds Regen to allied brawlers of $aura_boost_enchant$ Health/sec."
                },
                "Item_CrusaderShield_Empower_3": {
                    "id": "Focus",
                    "cost": 650,
                    "constants": {
                        "sacrifice_enchant": 5,
                        "tower_reduction_enchant": 30
                    },
                    "complexDescription": "-$sacrifice_enchant$ Resistance. Increases brawlers tower damage reduction to $tower_reduction_enchant$%."
                }
            }
        },
        {
            "id": "Item_DragonShield",
            "label": "Dragonshield",
            "cost": 1100,
            "components": [],
            "craftingValue": 0,
            "cooldownTime": 6000,
            "filters": [],
            "constants": {
                "shield": 175
            },
            "complexDescription": "",
            "description": "",
            "empoweredEffects": {
                "Item_CrusaderShield_Empower_1": {
                    "id": "Authority",
                    "cost": 795,
                    "constants": {
                        "attackspeed_enchant": 8
                    },
                    "complexDescription": "Nearby allied brawlers also have their Attack Speed increased by $attackspeed_enchant$%."
                },
                "Item_CrusaderShield_Empower_2": {
                    "id": "Preservation",
                    "cost": 855,
                    "constants": {
                        "aura_boost_enchant": 10
                    },
                    "complexDescription": "Adds Regen to allied brawlers of $aura_boost_enchant$ Health/sec."
                },
                "Item_CrusaderShield_Empower_3": {
                    "id": "Focus",
                    "cost": 650,
                    "constants": {
                        "sacrifice_enchant": 5,
                        "tower_reduction_enchant": 30
                    },
                    "complexDescription": "-$sacrifice_enchant$ Resistance. Increases brawlers tower damage reduction to $tower_reduction_enchant$%."
                }
            }
        },
        {
            "id": "Item_ElderStone",
            "label": "Elder Stone",
            "cost": 650,
            "components": [
                "Item_Mender",
                "Item_Manastone"
            ],
            "craftingValue": 2,
            "cooldownTime": 6000,
            "filters": [
                "defense",
                "mana",
                "health",
                "maxmana",
                "resistance"
            ],
            "constants": {
                "hp": 70,
                "mp": 40,
                "hp_gain": 13,
                "mp_gain": 6
            },
            "complexDescription": "+$hp$ Max Health\n+$mp$ Mana\n+10 Resistance\nEach minute, grants an additional $hp_gain$ Max Health and $mp_gain$ Mana. Caps after 10 minutes.",
            "description": "Grants Resistance and additional Health and Mana over time",
            "empoweredEffects": {
                "Item_ElderStone_Empower_1": {
                    "id": "Heritage",
                    "cost": 775,
                    "constants": {
                        "resistance_enchant": 5
                    },
                    "complexDescription": "When at max charges, increases Resistance further by $resistance_enchant$."
                },
                "Item_ElderStone_Empower_3": {
                    "id": "Ages",
                    "cost": 760,
                    "constants": {
                        "max_charges_enchant": 3
                    },
                    "complexDescription": "Increases max charges by $max_charges_enchant$."
                },
                "Item_ElderStone_Empower_4": {
                    "id": "Wisdom",
                    "cost": 835,
                    "constants": {
                        "cooldown_enchant": 5
                    },
                    "complexDescription": "Grants $cooldown_enchant$% cooldown reduction."
                }
            }
        },
        {
            "id": "Item_EnduringHelm",
            "label": "Enduring Helm",
            "cost": 320,
            "components": [
                "Item_Healthstone"
            ],
            "craftingValue": 1,
            "cooldownTime": 6000,
            "filters": [
                "defense",
                "health"
            ],
            "constants": {
                "hp": 120
            },
            "complexDescription": "+$hp$ Health",
            "description": "Cheap, efficient Max Health",
            "empoweredEffects": {
                "Item_EnduringHelm_Empower_1": {
                    "id": "Dominion",
                    "cost": 440,
                    "constants": {
                        "hp_bonus": 1
                    },
                    "complexDescription": "Each unit killed grants $hp_bonus$ Health.  Stacks up to 50 times."
                },
                "Item_EnduringHelm_Empower_3": {
                    "id": "Fortitude",
                    "cost": 420,
                    "constants": {
                        "tower_reduction": 20
                    },
                    "complexDescription": "Reduces tower damage by $tower_reduction$%."
                }
            }
        },
        {
            "id": "Item_GiantsVisage",
            "label": "Giants Visage",
            "cost": 1200,
            "components": [
                "Item_Booster",
                "Item_Booster"
            ],
            "craftingValue": 6,
            "cooldownTime": 6000,
            "filters": [
                "magic_armor",
                "armor",
                "defense",
                "health",
                "power",
                "resistance"
            ],
            "constants": {
                "power": 0.90,
                "resistance": 15
            },
            "complexDescription": "+$resistance$ Resistance\nProvides Power equal to $power$% of your Max Health.",
            "description": "Grants Resistance and Power based on Health",
            "empoweredEffects": {
                "Item_GiantsVisage_Empower_1": {
                    "id": "Constitution",
                    "cost": 1470,
                    "constants": {
                        "hp_enchant": 2.5
                    },
                    "complexDescription": "Boosts Max Health by $hp_enchant$%."
                },
                "Item_GiantsVisage_Empower_2": {
                    "id": "Restoration",
                    "cost": 1500,
                    "constants": {
                        "regen_enchant": 0.1
                    },
                    "complexDescription": "Grants Health/sec equal to $regen_enchant$% of your Max Health."
                },
                "Item_GiantsVisage_Empower_3": {
                    "id": "Might",
                    "cost": 1430,
                    "constants": {
                        "power_enchant": 1.0,
                        "armor_enchant": 10
                    },
                    "complexDescription": "Increases Power bonus to $power_enchant$% of your Max Health."
                }
            }
        },
        {
            "id": "Item_HeadressOfRejuvenation",
            "label": "Blood Pendant",
            "cost": 290,
            "components": [
                "Item_Mender"
            ],
            "craftingValue": 1,
            "cooldownTime": 6000,
            "filters": [
                "defense",
                "health_regen"
            ],
            "constants": {
                "regen": 2.7
            },
            "complexDescription": "+$regen$ Health/sec.",
            "description": "Cheap, efficient Health Regeneration",
            "empoweredEffects": {
                "Item_HeadressOfRejuvenation_Empower_3": {
                    "id": "Vampirism",
                    "cost": 440,
                    "constants": {
                        "lifesteal": 2
                    },
                    "complexDescription": "Grants $lifesteal$% Attack Lifesteal."
                },
                "Item_HeadressOfRejuvenation_Empower_4": {
                    "id": "Potency",
                    "cost": 370,
                    "constants": {
                        "potion_bonus": 20
                    },
                    "complexDescription": "Grants $potion_bonus$% increased potion effectiveness."
                }
            }
        },
        {
            "id": "Item_Indestructible",
            "label": "Immortal Gaze",
            "cost": 1400,
            "components": [
                "Item_Heart",
                "Item_Healthstone",
                "Item_Sustainer"
            ],
            "craftingValue": 8,
            "cooldownTime": 180000,
            "filters": [
                "defense",
                "health",
                "health_regen"
            ],
            "constants": {
                "hp": 20,
                "percent_hp": 15
            },
            "complexDescription": "Grants $hp$% additional Max Health.\n\n^091Upon death, you will be revived with $percent_hp$% Health and Mana.^*",
            "description": "Grants massive Health and revives upon death",
            "empoweredEffects": {
                "Item_Indestructible_Empower_1": {
                    "id": "Desperation",
                    "cost": 1655,
                    "constants": {
                        "hpregen_mult": 15
                    },
                    "complexDescription": "Boosts Health/sec by $hpregen_mult$% when below 20% Health."
                },
                "Item_Indestructible_Empower_3": {
                    "id": "Swiftness",
                    "cost": 1575,
                    "constants": {
                        "movespeed": 25
                    },
                    "complexDescription": "Grants $movespeed$ Movement Speed while at full health."
                }
            }
        },
        {
            "id": "Item_IronShield",
            "label": "IronShield",
            "cost": 585,
            "components": [],
            "craftingValue": 0,
            "cooldownTime": 180000,
            "filters": [
                "defense",
                "health",
                "health_regen"
            ],
            "constants": {},
            "complexDescription": "",
            "description": "",
            "empoweredEffects": {
                "Item_Indestructible_Empower_1": {
                    "id": "Desperation",
                    "cost": 1655,
                    "constants": {
                        "hpregen_mult": 15
                    },
                    "complexDescription": "Boosts Health/sec by $hpregen_mult$% when below 20% Health."
                },
                "Item_Indestructible_Empower_3": {
                    "id": "Swiftness",
                    "cost": 1575,
                    "constants": {
                        "movespeed": 25
                    },
                    "complexDescription": "Grants $movespeed$ Movement Speed while at full health."
                }
            }
        },
        {
            "id": "Item_Kingsmail",
            "label": "Golden Protector",
            "cost": 845,
            "components": [
                "Item_Booster",
                "Item_Mender"
            ],
            "craftingValue": 4,
            "cooldownTime": 180000,
            "filters": [
                "defense",
                "armor",
                "health_regen",
                "resistance",
                "mitigation"
            ],
            "constants": {
                "hp_regen": 5
            },
            "complexDescription": "+$mitigation$ Mitigation\n+$hp_regen$ Health Regen",
            "description": "Grants Mitigation, and Health Regeneration",
            "empoweredEffects": {
                "Item_Kingsmail_Empower_1": {
                    "id": "Adaptation",
                    "cost": 1090,
                    "constants": {
                        "mitigation_enchant": 2,
                        "mitigation_duration_enchant": 3,
                        "stack_enchant": 4
                    },
                    "complexDescription": "Increases Mitigation by $mitigation_enchant$ for $mitigation_duration_enchant$ seconds upon being attacked.  Stacks up to $stack_enchant$ times."
                },
                "Item_Kingsmail_Empower_2": {
                    "id": "Restoration",
                    "cost": 1015,
                    "constants": {
                        "healthregen_percent_enchant": 5
                    },
                    "complexDescription": "Grants $healthregen_percent_enchant$% increased Health/sec."
                },
                "Item_Kingsmail_Empower_3": {
                    "id": "Focus",
                    "cost": 845,
                    "constants": {
                        "healthregen_enchant": 0,
                        "mitigation_enchant": 5
                    },
                    "complexDescription": "Grants $mitigation_enchant$ more Mitigation but removes the health regeneration."
                }
            }
        },
        {
            "id": "Item_Mana_Shield",
            "label": "Spirit Ward",
            "cost": 1015,
            "components": [
                "Item_Diamond",
                "Item_Diamond"
            ],
            "craftingValue": 4,
            "cooldownTime": 40000,
            "filters": [
                "defense",
                "activatable"
            ],
            "constants": {
                "shield_manapercent": 40,
                "resistance": 5
            },
            "complexDescription": "+$resistance$ Resistance\n\n^091Activate: grant a shield to nearby allies equal to $shield_manapercent$% of your mana pool. Lasts 6 seconds.^*",
            "description": "Grants Resistance\n^091Activate: Grants a shield to nearby allies.^*",
            "empoweredEffects": {
                "Item_Mana_Shield_Empower_1": {
                    "id": "Conversion",
                    "cost": 1150,
                    "constants": {
                        "mana_restore_enchant": 12
                    },
                    "complexDescription": "Mana Shield also restores $mana_restore_enchant$% of the damage the shield absorbs in Mana."
                },
                "Item_Mana_Shield_Empower_2": {
                    "id": "Charity",
                    "cost": 1125,
                    "constants": {
                        "heal_enchant": 20
                    },
                    "complexDescription": "If the shield expires, $heal_enchant$% of the remaining shield will heal the target."
                },
                "Item_Mana_Shield_Empower_3": {
                    "id": "Protection",
                    "cost": 1185,
                    "constants": {
                        "support_enchant": 4
                    },
                    "complexDescription": "Grants $support_enchant$% effectiveness to heals & shield cast by you."
                }
            }
        },
        {
            "id": "Item_OraclesTrinket",
            "label": "Oracles Trinket",
            "cost": 1125,
            "components": [
                "Item_Staff",
                "Item_Manaregen2"
            ],
            "craftingValue": 5,
            "cooldownTime": 60000,
            "filters": [
                "utility",
                "activatable",
                "defense",
                "resistance"
            ],
            "constants": {
                "heal": 180,
                "resistance": 5
            },
            "complexDescription": "+$resistance$ Resistance\n\n^091Activate: remove all stuns/slows/debuffs and provide 50% stun/slow reduction for 2 seconds. \n\nIf crowd control is successfully removed, heal for^* ^o$heal$^* ^091Health.^*",
            "description": "Grants Resistance\n^091Activate: Stun/Slow removal and self heal^*",
            "empoweredEffects": {
                "Item_OraclesTrinket_Empower_1": {
                    "id": "Concentration",
                    "cost": 1250,
                    "constants": {
                        "mana_enchant": 100
                    },
                    "complexDescription": "Successfully removing crowd-control also restores $mana_enchant$ Mana."
                },
                "Item_OraclesTrinket_Empower_2": {
                    "id": "Protection",
                    "cost": 1525,
                    "constants": {
                        "mana_enchant": 100
                    },
                    "complexDescription": "Cleanses all allies in a 500 radius."
                }
            }
        },
        {
            "id": "Item_PendantofDefiance",
            "label": "Dampening Cloak",
            "cost": 645,
            "components": [
                "Item_Healthstone",
                "Item_Mender"
            ],
            "craftingValue": 2,
            "cooldownTime": 60000,
            "filters": [
                "defense",
                "magic_armor",
                "health",
                "resistance"
            ],
            "constants": {
                "resistance": 15,
                "hp": 135
            },
            "complexDescription": "+$hp$ Health\n+$resistance$ Resistance",
            "description": "Grants Resistance and Health",
            "empoweredEffects": {
                "Item_PendantofDefiance_Empower_1": {
                    "id": "Masochism",
                    "cost": 825,
                    "constants": {
                        "manareturn_enchant": 2
                    },
                    "complexDescription": "For every 2% health lost, grants $manareturn_enchant$ mana."
                },
                "Item_PendantofDefiance_Empower_2": {
                    "id": "Resistance",
                    "cost": 750,
                    "constants": {
                        "resistance_enchant": 5
                    },
                    "complexDescription": "Increases Resistance by $resistance_enchant$."
                },
                "Item_PendantofDefiance_Empower_3": {
                    "id": "Peace",
                    "cost": 795,
                    "constants": {
                        "regen_enchant": 2
                    },
                    "complexDescription": "Provides $regen_enchant$ Health/sec while out of combat."
                }
            }
        },
        {
            "id": "Item_ResilientVest",
            "label": "Rangers Vest",
            "cost": 775,
            "components": [
                "Item_Healthstone",
                "Item_Healthstone",
                "Item_Mender"
            ],
            "craftingValue": 3,
            "cooldownTime": 60000,
            "filters": [
                "defense",
                "health"
            ],
            "constants": {
                "hp": 225,
                "block": 15
            },
            "complexDescription": "+$resistance$ Resistance\n+$hp$ Health\nBlock $block$ damage against non-hero units.\nIncrease damage dealt against non-hero units by 10%.",
            "description": "Grants Resistance, increases Max Health and makes you stronger against non-heroes",
            "empoweredEffects": {
                "Item_ResilientVest_Empower_1": {
                    "id": "Recovery",
                    "cost": 890,
                    "constants": {
                        "heal_enchant": 4
                    },
                    "complexDescription": "When blocking an attack, restores $heal_enchant$ Health."
                },
                "Item_ResilientVest_Empower_2": {
                    "id": "Reflection",
                    "cost": 855,
                    "constants": {
                        "reflect_enchant": 20
                    },
                    "complexDescription": "Grants 100% Damage Reflect on blocked attacks."
                },
                "Item_ResilientVest_Empower_3": {
                    "id": "Fortitude",
                    "cost": 800,
                    "constants": {
                        "reflect_enchant": 20
                    },
                    "complexDescription": "Block works against tower attacks."
                }
            }
        },
        {
            "id": "Item_ShamanHeaddress",
            "label": "Guardian Helm",
            "cost": 1350,
            "components": [
                "Item_Booster",
                "Item_Booster",
                "Item_Sustainer"
            ],
            "craftingValue": 8,
            "cooldownTime": 60000,
            "filters": [
                "defense",
                "magic_armor",
                "health_regen",
                "resistance"
            ],
            "constants": {
                "resistance": 40,
                "magicheal": 20
            },
            "complexDescription": "+$resistance$ Resistance\n$magicheal$% of Magic damage is healed back over time.",
            "description": "Grants a lot of Resistance and regenerates a portion of Magic damage taken",
            "empoweredEffects": {
                "Item_ShamanHeaddress_Empower_1": {
                    "id": "Desperation",
                    "cost": 1720,
                    "constants": {
                        "resistance_enchant": 20
                    },
                    "complexDescription": "Increases Resistance by $resistance_enchant$ while under 20% health."
                },
                "Item_ShamanHeaddress_Empower_2": {
                    "id": "Mending",
                    "cost": 1550,
                    "constants": {
                        "heal_enchant": 2,
                        "magichealenchant": 22
                    },
                    "complexDescription": "Increases the heal percent by $heal_enchant$ and heals twice as fast."
                }
            }
        },
        {
            "id": "Item_Shardplate",
            "label": "Iceforged Plate",
            "cost": 1350,
            "components": [
                "Item_Heart",
                "Item_Healthstone",
                "Item_Sustainer"
            ],
            "craftingValue": 8,
            "cooldownTime": 60000,
            "filters": [
                "defense",
                "armor",
                "debuff_enemy",
                "resistance",
                "mitigation"
            ],
            "constants": {
                "attackspeedslow": 20
            },
            "complexDescription": "+$resistance$ Resistance\n+$mitigation$ Mitigation\nEnemies that attack you have their attack speed slowed by $attackspeedslow$%.",
            "description": "Grants Mitigation, Resistance, and slows the Attack Speed of attackers",
            "empoweredEffects": {
                "Item_Shardplate_Empower_1": {
                    "id": "Desperation",
                    "cost": 1720,
                    "constants": {
                        "resistance_enchant": 20
                    },
                    "complexDescription": "Increases Resistance by $resistance_enchant$ while under 20% Health."
                },
                "Item_Shardplate_Empower_2": {
                    "id": "Vigor",
                    "cost": 1520,
                    "constants": {
                        "regenpercent_enchant": 5
                    },
                    "complexDescription": "Grants $regenpercent_enchant$% increased Health/sec."
                },
                "Item_Shardplate_Empower_3": {
                    "id": "Command",
                    "cost": 1550,
                    "constants": {
                        "damagereduction_enchant": 5
                    },
                    "complexDescription": "Grants allies around you $damagereduction_enchant$% physical damage reduction that gets transferred to you."
                }
            }
        },
        {
            "id": "Item_StoneSkin",
            "label": "Stone Skin",
            "cost": 1300,
            "components": [
                "Item_Booster",
                "Item_Staff"
            ],
            "craftingValue": 6,
            "cooldownTime": 45000,
            "filters": [
                "defense",
                "utility",
                "cc_resist",
                "activatable",
                "other_mobility"
            ],
            "constants": {
                "resistance": 80
            },
            "complexDescription": "^o+$damage$ Attack Damage^*\n\n^091Activate: gain $resistance$ Resistance for 8 seconds.^*",
            "description": "Grants ^oAttack Damage^*\n^091Activate: gain massive Resistance for a duration.^*",
            "empoweredEffects": {
                "Item_StoneSkin_Empower_1": {
                    "id": "Diligence",
                    "cost": 1475,
                    "constants": {
                        "cooldown_enchant": 6,
                        "cooldown": 39
                    },
                    "complexDescription": "Reduces the cooldown by $cooldown_enchant$ seconds."
                },
                "Item_StoneSkin_Empower_2": {
                    "id": "Regeneration",
                    "cost": 1300,
                    "constants": {
                        "healthregen_enchant": 3.7,
                        "attack_enchant": 8
                    },
                    "complexDescription": "Grants $healthregen_enchant$ Health/sec but removes $attack_enchant$ Attack Damage."
                }
            }
        },
        {
            "id": "Item_AncientGem",
            "label": "Glacial Gem",
            "cost": 305,
            "components": [
                "Item_Manaregen1"
            ],
            "craftingValue": 1,
            "cooldownTime": 45000,
            "filters": [
                "mana",
                "mana_regen"
            ],
            "constants": {
                "regen": 1.7
            },
            "complexDescription": "Recipe grants additional $regen$ Mana/sec.",
            "description": "Cheap, efficient Mana Regeneration",
            "empoweredEffects": {
                "Item_AncientGem_Empower_3": {
                    "id": "Siphoning",
                    "cost": 415,
                    "constants": {
                        "lifesteal": 2
                    },
                    "complexDescription": "Provides $lifesteal$% Magic Lifesteal."
                },
                "Item_AncientGem_Empower_4": {
                    "id": "Haste",
                    "cost": 400,
                    "constants": {
                        "movespeed": 5
                    },
                    "complexDescription": "Grants $movespeed$ Movement Speed."
                }
            }
        },
        {
            "id": "Item_CircletOfTheSage",
            "label": "Sage Circlet",
            "cost": 220,
            "components": [
                "Item_Manastone"
            ],
            "craftingValue": 1,
            "cooldownTime": 45000,
            "filters": [
                "mana",
                "maxmana",
                "cd_reduction"
            ],
            "constants": {
                "mana": 130
            },
            "complexDescription": "+4% Cooldown Reduction.\nRecipe grants an additional $mana$ Mana.",
            "description": "Cheap, efficient Mana increase and Cooldown Reduction",
            "empoweredEffects": {
                "Item_CircletOfTheSage_Empower_1": {
                    "id": "Intellect",
                    "cost": 385,
                    "constants": {
                        "max_mana_enchant": 10
                    },
                    "complexDescription": "Grants $max_mana_enchant$% bonus Mana."
                },
                "Item_CircletOfTheSage_Empower_3": {
                    "id": "Alchemy",
                    "cost": 310,
                    "constants": {
                        "gold_enchant": 5
                    },
                    "complexDescription": "Gain $gold_enchant$ Gold when you hit an enemy with a spell. 15 second cooldown."
                },
                "Item_CircletOfTheSage_Empower_4": {
                    "id": "Mastery",
                    "cost": 370,
                    "constants": {
                        "magic_damage_enchant": 1.5
                    },
                    "complexDescription": "Grants $magic_damage_enchant$% increased Magic Damage."
                }
            }
        },
        {
            "id": "Item_HealingScepter",
            "label": "Healing Rod",
            "cost": 550,
            "components": [
                "Item_Mender",
                "Item_Blade"
            ],
            "craftingValue": 2,
            "cooldownTime": 30000,
            "filters": [
                "defense",
                "heal",
                "activatable"
            ],
            "constants": {
                "heal": 110
            },
            "complexDescription": "^091Activate: Heal target for^* ^o$heal$ Health^* ^091.^*",
            "description": "^091Activate: restore Health to target.^*",
            "empoweredEffects": {
                "Item_HealingScepter_Empower_2": {
                    "id": "Diligence",
                    "cost": 700,
                    "constants": {},
                    "complexDescription": "Cooldown reduced."
                },
                "Item_HealingScepter_Empower_3": {
                    "id": "Generosity",
                    "cost": 650,
                    "constants": {
                        "areaheal_enchant": 25
                    },
                    "complexDescription": "Also heals nearby allies for $areaheal_enchant$% effectiveness."
                }
            }
        },
        {
            "id": "Item_MaxManaPower",
            "label": "Diadem",
            "cost": 1215,
            "components": [
                "Item_Diamond",
                "Item_Brain"
            ],
            "craftingValue": 5,
            "cooldownTime": 30000,
            "filters": [
                "power",
                "ability",
                "mana"
            ],
            "constants": {
                "power": 4.0
            },
            "complexDescription": "Provides Power equal to $power$% of your Mana.",
            "description": "Grants additional Power based on Mana",
            "empoweredEffects": {
                "Item_MaxManaPower_Empower_1": {
                    "id": "Blood",
                    "cost": 1350,
                    "constants": {
                        "maxmana_health_enchant": 10
                    },
                    "complexDescription": "$maxmana_health_enchant$% of Max Mana is added to Health."
                },
                "Item_MaxManaPower_Empower_2": {
                    "id": "Mastery",
                    "cost": 1420,
                    "constants": {
                        "magicdamage_enchant": 3
                    },
                    "complexDescription": "Grants $magicdamage_enchant$% Magic Damage."
                },
                "Item_MaxManaPower_Empower_3": {
                    "id": "Rejuvenation",
                    "cost": 1380,
                    "constants": {
                        "maxmana_manaregen_health_enchant": 0.2
                    },
                    "complexDescription": "Regen $maxmana_manaregen_health_enchant$% of your Max Mana per second."
                }
            }
        },
        {
            "id": "Item_RingOfSorcery",
            "label": "Archmages Ring",
            "cost": 750,
            "components": [
                "Item_Blade",
                "Item_Healthstone",
                "Item_Manastone"
            ],
            "craftingValue": 3,
            "cooldownTime": 35000,
            "filters": [
                "mana",
                "activatable",
                "utility",
                "buff_team",
                "maxmana"
            ],
            "constants": {
                "mana": 20,
                "manamax": 50
            },
            "complexDescription": "+$manamax$ Mana\n\n^091Activate: restore mana equal to $mana$% of your Max Mana to nearby allies.^*",
            "description": "Grants Mana\n^091Activate: to restore Mana to nearby allies.^*",
            "empoweredEffects": {
                "Item_RingOfSorcery_Empower_1": {
                    "id": "Concentration",
                    "cost": 935,
                    "constants": {
                        "maxmana_restore_enchant": 24
                    },
                    "complexDescription": "Increases the mana restore to $maxmana_restore_enchant$% of your Max Mana."
                },
                "Item_RingOfSorcery_Empower_2": {
                    "id": "Mana",
                    "cost": 1030,
                    "constants": {
                        "maxmana_enchant": 50
                    },
                    "complexDescription": "Increases Mana by $maxmana_enchant$."
                },
                "Item_RingOfSorcery_Empower_3": {
                    "id": "Influence",
                    "cost": 900,
                    "constants": {
                        "area_enchant": 300
                    },
                    "complexDescription": "Increases area of effect by $area_enchant$."
                }
            }
        },
        {
            "id": "Item_ScepterOfClearcasting",
            "label": "Runed Scepter",
            "cost": 815,
            "components": [
                "Item_Manaregen1",
                "Item_Blade",
                "Item_Blade"
            ],
            "craftingValue": 3,
            "cooldownTime": 35000,
            "filters": [
                "mana",
                "maxmana",
                "ability",
                "cd_reduction"
            ],
            "constants": {
                "mana": 95,
                "cd_reduction": 15
            },
            "complexDescription": "$cd_reduction$% Cooldown Reduction\n+$mana$ Mana",
            "description": "Grants Cooldown Reduction and Mana",
            "empoweredEffects": {
                "Item_ScepterOfClearcasting_Empower_1": {
                    "id": "Empowerment",
                    "cost": 1055,
                    "constants": {
                        "power_enchant": 3,
                        "stacks_enchant": 5
                    },
                    "complexDescription": "Each spell cast increases your Power by $power_enchant$ for 5 seconds.  Stacks up to $stacks_enchant$ times."
                },
                "Item_ScepterOfClearcasting_Empower_2": {
                    "id": "Wisdom",
                    "cost": 975,
                    "constants": {
                        "cd_enchant": 3
                    },
                    "complexDescription": "Increases percent of cooldown reduction by $cd_enchant$."
                }
            }
        },
        {
            "id": "Item_Unstable_Shard",
            "label": "Unstable Shard",
            "cost": 1430,
            "components": [
                "Item_Brain",
                "Item_Brain",
                "Item_Relic"
            ],
            "craftingValue": 11,
            "cooldownTime": 180000,
            "filters": [
                "mana",
                "power",
                "ability"
            ],
            "constants": {
                "cd_reduction": 10,
                "mana": 1000,
                "damage": 1500,
                "enemy_damage": 250,
                "cd_lower": 15,
                "refresh_enchant": 100
            },
            "complexDescription": "Each kill/assist grants a $cd_lower$% reduction of current cooldowns.\n\n^091Activate: Instantly regenerate 1000 mana. Gain +500 max mana & 75% Cooldown Reduction for 9 seconds.\n\nOn expiration, you take 1500 Pure Damage & a mini-stun while dealing 250 Pure Damage to nearby enemies within 250 AoE.^*",
            "description": "Kills and assists reduce current cooldowns.\n^091Activate: Gain Cooldown Reduction, then explode.^*",
            "empoweredEffects": {
                "Item_Unstable_Shard_Empower_1": {
                    "id": "Greed",
                    "cost": 2265,
                    "constants": {},
                    "complexDescription": "Gain 90% Cooldown Reduction on activation, but take +750 additional Pure Damage on expiration."
                },
                "Item_Unstable_Shard_Empower_2": {
                    "id": "Wisdom",
                    "cost": 2015,
                    "constants": {
                        "refresh_enchant": 100
                    },
                    "complexDescription": "Refreshes all abilities. Kills you on expiration regardless of invulnerability."
                }
            }
        },
        {
            "id": "Item_Energizer",
            "label": "Windrush",
            "cost": 750,
            "components": [
                "Item_Blade",
                "Item_Healthstone",
                "Item_Manastone"
            ],
            "craftingValue": 3,
            "cooldownTime": 35000,
            "filters": [
                "utility",
                "other_mobility",
                "activatable",
                "buff_team"
            ],
            "constants": {
                "movespeed": 10
            },
            "complexDescription": "+$movespeed$ Movement Speed. \n\n^091Activate: provide 100 Movement Speed to nearby allies for a 4 seconds.^*",
            "description": "Grants Movespeed\n^091Activate: provide a burst of move speed to nearby allies.^*",
            "empoweredEffects": {
                "Item_Energizer_Empower_1": {
                    "id": "Tenacity",
                    "cost": 840,
                    "constants": {
                        "slowresist_enchant": 20
                    },
                    "complexDescription": "Windrush also provides $slowresist_enchant$% Slow-Reduction while active."
                },
                "Item_Energizer_Empower_2": {
                    "id": "Diligence",
                    "cost": 900,
                    "constants": {
                        "cooldown_enchant": 5
                    },
                    "complexDescription": "Decrease cooldown by $cooldown_enchant$ seconds."
                },
                "Item_Energizer_Empower_4": {
                    "id": "Swiftness",
                    "cost": 750,
                    "constants": {
                        "active_movespeed_enchant": 50,
                        "active_duration_enchant": 2
                    },
                    "complexDescription": "Increases active Movement Speed by $active_movespeed_enchant$ and reduces duration to $active_duration_enchant$ seconds."
                }
            }
        },
        {
            "id": "Item_Eye_Of_Tempra",
            "label": "Eye of Tempra",
            "cost": 1430,
            "components": [
                "Item_Brain",
                "Item_Brain",
                "Item_Relic"
            ],
            "craftingValue": 11,
            "cooldownTime": 45000,
            "filters": [
                "utility",
                "activatable",
                "mana"
            ],
            "constants": {
                "cd_reduction": 10,
                "regen": 10
            },
            "complexDescription": "+$cd_reduction$% Cooldown Reduction\n+$regen$ Mana/sec. \n\n^091Activate: Cast an impassable frozen sphere at target location. Everything inside is frozen and unable to take damage.^*",
            "description": "Grants Cooldown Reduction and Mana Regen. \n^091Activate: Cast a Frozen Sphere at target location.",
            "empoweredEffects": {
                "Item_Eye_Of_Tempra_Empower_1": {
                    "id": "Sundering",
                    "cost": 1515,
                    "constants": {},
                    "complexDescription": "Activating casts Eye of Tempra immediately on yourself. AOE increased by 100."
                }
            }
        },
        {
            "id": "Item_FrostfieldPlate",
            "label": "Everwinter Charm",
            "cost": 1105,
            "components": [
                "Item_Booster",
                "Item_Diamond"
            ],
            "craftingValue": 5,
            "cooldownTime": 30000,
            "filters": [
                "utility",
                "activatable",
                "debuff_enemy",
                "ability",
                "defense",
                "armor",
                "magic_armor",
                "resistance"
            ],
            "constants": {
                "damage": 65,
                "resistance": 5
            },
            "complexDescription": "+$resistance$ Resistance\n\n^091Activate: slow nearby enemies and deal^* ^o$damage$ Magic damage^* ^091to them.^*",
            "description": "Grants Resistance\n^091Activate: slow and damage nearby enemies.^*",
            "empoweredEffects": {
                "Item_FrostfieldPlate_Empower_1": {
                    "id": "Virtue",
                    "cost": 1345,
                    "constants": {
                        "resistance_active_enchant": 5,
                        "resistance_activeduration_enchant": 4
                    },
                    "complexDescription": "Increases Resistance by $resistance_active_enchant$ for each enemy hero hit. Lasts $resistance_activeduration_enchant$ seconds."
                },
                "Item_FrostfieldPlate_Empower_2": {
                    "id": "Lasting",
                    "cost": 1200,
                    "constants": {
                        "linger_enchant": 0.5
                    },
                    "complexDescription": "When activated Everwinter Charm will linger on the ground for $linger_enchant$ seconds."
                },
                "Item_FrostfieldPlate_Empower_3": {
                    "id": "Restraint",
                    "cost": 1350,
                    "constants": {
                        "duration_enchant": 1
                    },
                    "complexDescription": "Increases the duration of the slow by $duration_enchant$ second."
                }
            }
        },
        {
            "id": "Item_Lasthit",
            "label": "Throwing Axe",
            "cost": 280,
            "components": [
                "Item_Mender"
            ],
            "craftingValue": 1,
            "cooldownTime": 12000,
            "filters": [
                "attack",
                "activatable"
            ],
            "constants": {
                "cooldown": 2,
                "heal": 15
            },
            "complexDescription": "Passive: increases your attack damage vs. non-hero units by $damage$%. \n\n^091Activate: deal 1.2x attack damage to a non-hero unit.^*",
            "description": "Grants bonus Attack Damage vs non-heroes.\n^091Activate: damage target non-hero unit.^*",
            "empoweredEffects": {
                "Item_Lasthit_Empower_1": {
                    "id": "Prosperity",
                    "cost": 330,
                    "constants": {
                        "gold_enchant": 4
                    },
                    "complexDescription": "Killing a unit with the throwing axe grants an additional $gold_enchant$ gold."
                },
                "Item_Lasthit_Empower_2": {
                    "id": "Desolation",
                    "cost": 380,
                    "constants": {
                        "damage": 25,
                        "damage_enchant": 10
                    },
                    "complexDescription": "Deal $damage_enchant$% more damage to non-hero units."
                },
                "Item_Lasthit_Empower_5": {
                    "id": "The Hunt",
                    "cost": 380,
                    "constants": {
                        "heal_enchant": 15
                    },
                    "complexDescription": "Killing a unit with the throwing axe heals you for $heal_enchant$ Health."
                }
            }
        },
        {
            "id": "Item_Orb_Of_Revelation",
            "label": "Seers Eye",
            "cost": 750,
            "components": [
                "Item_Manaregen1",
                "Item_Blade",
                "Item_Blade"
            ],
            "craftingValue": 3,
            "cooldownTime": 30000,
            "filters": [
                "utility",
                "mana",
                "activatable"
            ],
            "constants": {
                "cooldown": 0,
                "health": 125
            },
            "complexDescription": "+$resistance$ Resistance\n+$health$ Health\n\n^091Activate: Target an area to reveal the area for 8 seconds.^*",
            "description": "Grants Health and Resistance. \n^091Activate: reveal target area.^*",
            "empoweredEffects": {
                "Item_Orb_Of_Revelation_Empower_1": {
                    "id": "Restraint",
                    "cost": 940,
                    "constants": {
                        "slow_enchant": 10,
                        "slow_duration_enchant": 3
                    },
                    "complexDescription": "Provides Seer's Eye with a $slow_enchant$% slow on revealed enemies for $slow_duration_enchant$ seconds."
                },
                "Item_Orb_Of_Revelation_Empower_3": {
                    "id": "Diligence",
                    "cost": 925,
                    "constants": {
                        "cooldown_enchant": 6
                    },
                    "complexDescription": "Decreases cooldown by $cooldown_enchant$ seconds."
                }
            }
        },
        {
            "id": "Item_SheepStick",
            "label": "Hexbane",
            "cost": 1455,
            "components": [
                "Item_Brain",
                "Item_Manaregen2",
                "Item_Staff"
            ],
            "craftingValue": 8,
            "cooldownTime": 45000,
            "filters": [
                "utility",
                "activatable",
                "defense",
                "health"
            ],
            "constants": {
                "cooldown": 0
            },
            "complexDescription": "^091Activate: applies Transfigured to target for 2.5 seconds. \n\nTransfigured enemies cannot attack or use abilities.^*",
            "description": "^091Activate: Disable an enemy briefly.^*",
            "empoweredEffects": {
                "Item_SheepStick_Empower_1": {
                    "id": "Greed",
                    "cost": 1000,
                    "constants": {
                        "cd_enchant": 60
                    },
                    "complexDescription": "Increases cooldown to $cd_enchant$ from 30 seconds."
                },
                "Item_SheepStick_Empower_2": {
                    "id": "Wisdom",
                    "cost": 1590,
                    "constants": {
                        "cooldown_enchant": 5
                    },
                    "complexDescription": "Grants $cooldown_enchant$% cooldown reduction."
                },
                "Item_SheepStick_Empower_3": {
                    "id": "Restraint",
                    "cost": 1800,
                    "constants": {
                        "slow_enchant": 25
                    },
                    "complexDescription": "Grants a slow effect of $slow_enchant$% while the target is Transfigured."
                }
            }
        },
        {
            "id": "Item_Stormspirit",
            "label": "Void Key",
            "cost": 700,
            "components": [
                "Item_Healthstone",
                "Item_Manastone",
                "Item_Manaregen2"
            ],
            "craftingValue": 4,
            "cooldownTime": 35000,
            "filters": [
                "utility",
                "activatable"
            ],
            "constants": {
                "cooldown_analog": 0
            },
            "complexDescription": "^091Activate: become invulnerable and disabled for 2 seconds.^*",
            "description": "^091Activate: become invulnerable and disabled for 2 seconds.^*",
            "empoweredEffects": {
                "Item_Stormspirit_Empower_2": {
                    "id": "Diligence",
                    "cost": 805,
                    "constants": {
                        "cooldown_bonus": 5
                    },
                    "complexDescription": "Reduces cooldown by $cooldown_bonus$ seconds."
                },
                "Item_Stormspirit_Empower_3": {
                    "id": "Swiftness",
                    "cost": 825,
                    "constants": {
                        "movespeed_enchant": 100
                    },
                    "complexDescription": "Grants $movespeed_enchant$ Movement Speed for 2 seconds after using Void Key."
                }
            }
        }
    ]
}
