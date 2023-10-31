import races from "./races.js";
import charClasses from "./char-classes.js";
import { SKILL, AGILITY, ARCANA, WILLPOWER, STRENGTH, INIT, FEATURE, HEROIC_ACTION, DOUBLE_HEROIC_ACTION, HUNTER, DRUID } from "../utils/enums.js";

export default (armor, weapons, shields) => ([
    {
        name: 'Angel',
        race: races.angel,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Divine sword',
            damage: '2d8',
            init: 4,
        },
        shield: {
            name: 'Divine Shield',
            block: 3,
            init: -2,
        },
        armor: {
            name: 'Divine Armor',
            toughness: 8,
            agility: -2,
        },
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Fly: When making a major move, angels may may fly over obstacles'
        }, {
            type: FEATURE,
            desc: 'Incomporeal: Damage from non magical weapons is halved'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Smite: Make a ranged 10 arcana vs. willpower attack that does 3d12 damage and ignores armor'
        }]
    },
    {
        name: 'Cherubim',
        race: races.angel,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Divine sword',
            damage: '2d8',
            init: 4,
        },
        shield: {
            name: 'Divine Shield',
            block: 3,
            init: -2,
        },
        armor: {
            name: 'Divine Armor',
            toughness: 8,
            agility: -2,
        },
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, INIT ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Fly: When making a major move, angels may may fly over obstacles'
        }, {
            type: FEATURE,
            desc: 'Incomporeal: Damage from non magical weapons is halved'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Smite: Make a ranged 10 arcana vs. willpower attack that does 4d12 damage and ignores armor'
        }]
    },
    {
        name: 'Ape',
        race: races.ape,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fists',
            damage: '1d10',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Strangle: Critical hits leave the target prone and without actions for the remainder of the round'
        }]
    },
    {
        name: 'Gorilla',
        race: races.ape,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fists',
            damage: '1d10',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Strangle: Critical hits leave the target prone and without actions for the remainder of the round'
        }]
    },
    {
        name: 'Bat',
        race: races.bat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 4,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ SKILL, AGILITY ],
        minion: 2,
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Bats can always move without drawing opportunity attacks'
        }]
    },
    {
        name: 'Terror Bats',
        race: races.bat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 4,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL, STRENGTH, ARCANA ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Bats can always move without drawing opportunity attacks'
        }, {
            type: FEATURE,
            desc: 'Gain 1 damage for every other Terror Bat adjacent to the target'
        }]
    },
    {
        name: 'Bobcat',
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL, STRENGTH, WILLPOWER ],
        minion: 2,
        levels: [
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Frenzy: Make an attack with advantage'
        }]
    },
    {
        name: 'Mountain Lion',
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '1d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL, STRENGTH, WILLPOWER ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Leap: Make a major move without drawing opportunity actions'
        }, {
            type: HEROIC_ACTION,
            desc: 'Frenzy: Make an attack with advantage'
        }]
    },
    {
        name: 'Lion',
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL, STRENGTH, WILLPOWER ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Overwhelm: Attack twice'
        }]
    },
    {
        name: 'Tiger',
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL, STRENGTH, WILLPOWER ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, SKILL ]
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Overwhelm: Attack twice'
        }, {
            type: FEATURE,
            desc: 'You cannot gain advantage against tigers by flanking'
        }]
    },
    {
        name: 'Minor Demon',
        race: races.demon,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Hellblade',
            damage: '1d8',
            init: 4,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hellskin',
            toughness: 3,
            agility: -2,
        },
        statBumps: [ ARCANA, SKILL, AGILITY, STRENGTH ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Attacks from demons target willpower'
        }, {
            type: FEATURE,
            desc: 'Demons take half damage from magic'
        }]
    },
    {
        name: 'Lesser Demon',
        race: races.demon,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Hellblade',
            damage: '1d8',
            init: 4,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hellskin',
            toughness: 4,
            agility: -2,
        },
        statBumps: [ ARCANA, SKILL, AGILITY, STRENGTH ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Attacks from demons are arcana vs. willpower. Shields can still be used.'
        }, {
            type: FEATURE,
            desc: 'Demons take half damage from magic'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Hellfire: Make an attack that ignores shields and armor'
        }]
    },
    {
        name: 'Demon Fire Wielder',
        race: races.demon,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Molten rocks',
            damage: '2d8',
            init: 4,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hellskin',
            toughness: 4,
            agility: -2,
        },
        statBumps: [ ARCANA, SKILL ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Molten rocks are ranged 10 attacks.'
        }, {
            type: FEATURE,
            desc: 'Demons take half damage from magic'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Hellfire: Make an attack that ignores shields and armor'
        }]
    },
    {
        name: 'Greater Demon',
        race: races.demon,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Hellblade',
            damage: '2d8',
            init: 4,
        },
        shield: shields.smallShield,
        armor: {
            name: 'Hellskin',
            toughness: 6,
            agility: -2,
        },
        statBumps: [ ARCANA, SKILL, AGILITY, STRENGTH ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Attacks from demons are arcana vs. willpower and ignores shields.'
        }, {
            type: FEATURE,
            desc: 'Demons take half damage from magic'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Hellfire: Make an attack that ignores shields and armor'
        }]
    },
    {
        name: 'Demon Lord',
        race: races.demon,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Hellblade',
            damage: '3d8',
            init: 4,
        },
        shield: shields.smallShield,
        armor: {
            name: 'Iron Chain',
            toughness: 8,
            agility: -2,
        },
        statBumps: [ ARCANA, SKILL, AGILITY, STRENGTH ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ ARCANA, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Attacks from demons are arcana vs. willpower and ignores shields'
        }, {
            type: FEATURE,
            desc: 'Demon Lords take one fourth damage from magic'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Hellfire: Make an attack that ignores shields and armor'
        }]
    },
    {
        name: 'Young Dragon',
        race: races.dragon,
        minorMove: 4,
        majorMove: 10,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Fly: When making a minor move, dragons may begin flying.'
        }, {
            type: FEATURE,
            desc: 'Dragons take half damage from spells'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Fire breath: Arcana vs. willpower attack against all creatures in a an adjacent 3x3 area. 2d6 damage that ignores armor.'
        }]
    },
    {
        name: 'Adult Dragon',
        race: races.dragon,
        minorMove: 6,
        majorMove: 12,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '3d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 6,
            agility: -2,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Fly: When making a minor move, dragons may begin flying.'
        }, {
            type: FEATURE,
            desc: 'Dragons take half damage from spells'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Fire breath: Arcana vs. willpower attack against all creatures in a an adjacent 4x4 area. 3d6 damage that ignores armor.'
        }]
    },
    {
        name: 'Ancient Dragon',
        race: races.dragon,
        minorMove: 8,
        majorMove: 14,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '4d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 8,
            agility: -4,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ STRENGTH, SKILL ],
            [ ARCANA, INIT ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Fly: When making a minor move, dragons may begin flying'
        }, {
            type: FEATURE,
            desc: 'Dragons take half damage from spells'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Fire breath: Arcana vs. willpower attack against all creatures in a an adjacent 5x5 area. 4d6 damage that ignores armor.'
        }]
    },
    {
        name: 'Druskin',
        race: races.druskin,
        charClass: charClasses.soldier,
        weapon: weapons.spear,
        shield: shields.largeShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, STRENGTH, AGILITY, INIT ],
        levels: [
            [ AGILITY, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Druskin gain +3 from advantage'
        }]
    },
    {
        name: 'Druskin Scout',
        race: races.druskin,
        charClass: charClasses.soldier,
        weapon: weapons.longbow,
        shield: shields.noShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, INIT ],
        levels: [
            [ AGILITY, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Druskin gain +3 from advantage'
        }]
    },
    {
        name: 'Druskin Raider',
        race: races.druskin,
        minorMove: 4,
        majorMove: 10,
        charClass: charClasses.soldier,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, STRENGTH ],
        levels: [
            [ AGILITY, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Druskin Raiders are mounted on Krungin'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Charge 4 or more spaces and gain advantage on the attack'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Make a thrown spear attack with range 10 that does 2d8 damage.'
        }]
    },
    {
        name: 'Druskin Desert Chief',
        race: races.druskin,
        charClass: charClasses.soldier,
        weapon: weapons.spear,
        shield: shields.largeShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, STRENGTH, AGILITY, INIT ],
        levels: [
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Druskin gain +3 from advantage'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'One other druskin may make an attack with advantage'
        }]
    },
    {
        name: 'Dwarf Warrior',
        race: races.dwarf,
        charClass: charClasses.soldier,
        weapon: weapons.battleAxe,
        shield: shields.largeShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        features: [{
            type: FEATURE,
            desc: 'Attacks ignore shields'
        }]
    },
    {
        name: 'Dwarf Runeleader',
        race: races.dwarf,
        charClass: charClasses.soldier,
        weapon: weapons.battleAxe,
        shield: shields.noShield,
        armor: armor.fullplate,
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        levels: [
            [ SKILL, STRENGTH ],
            [ WILLPOWER, ARCANA ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Heal 2d6 from one ally'
        }]
    },
    {
        name: 'Dwarf Runecaster',
        race: races.dwarf,
        charClass: charClasses.soldier,
        weapon: weapons.staff,
        shield: shields.noShield,
        armor: armor.gambeson,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ AGILITY, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'All dwarves withen 10 spaces ignore half magic damage'
        }, {
            type: FEATURE,
            desc: 'Attack: Arcana vs. willpower. 2d4 damage that ignores armor'
        }]
    },
    {
        name: 'Dwarf Runelord',
        race: races.dwarf,
        charClass: charClasses.soldier,
        weapon: weapons.battleAxe,
        shield: shields.largeShield,
        armor: armor.fullplate,
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        levels: [
            [ SKILL, STRENGTH ],
            [ WILLPOWER, ARCANA ],
            [ SKILL, STRENGTH ],
            [ WILLPOWER, ARCANA ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Inspire: Up to 4 dwarf allies within 10 spaces regain 2d6 hitpoints'
        }, {
            type: FEATURE,
            desc: 'Overwhelm: Attacks target willpower instead of agility'
        }]
    },
    {
        name: 'Elf Warrior',
        race: races.elf,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword.artisan(),
        shield: shields.largeShield,
        armor: armor.scalemail.artisan(),
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        levels: [
            [ INIT, AGILITY ],
        ],
    },
    {
        name: 'Elf Captain',
        race: races.elf,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword.mastercrafted(),
        shield: shields.largeShield,
        armor: armor.scalemail.mastercrafted(),
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        levels: [
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make two attacks'
        }]
    },
    {
        name: 'Elf Mage',
        race: races.elf,
        charClass: charClasses.soldier,
        weapon: weapons.staff,
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ ARCANA, INIT, WILLPOWER, AGILITY ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ INIT, AGILITY ],
            [ ARCANA, WILLPOWER ],
            [ INIT, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Elf mages have 6 mana and access to the following spells: magic missle, jump lightning, time warp.'
        }]
    },
    {
        name: 'Elf Lord',
        race: races.elf,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword.mastercrafted(),
        shield: shields.largeShield,
        armor: armor.scalemail.mastercrafted(),
        statBumps: [ SKILL, STRENGTH, WILLPOWER, ARCANA ],
        levels: [
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Up to 3 allied elves within 10 spaces may make an attack'
        }]
    },
    {
        name: 'Lesser Fire Elemental',
        race: races.elemental,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fire',
            damage: '1d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL, STRENGTH, INIT ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Non magical attacks do half damage against elementals'
        }, {
            type: FEATURE,
            desc: 'Elementals ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Fire explosion: Arcana vs. willpower attack against all adjacent creatures that does normal damage'
        }]
    },
    {
        name: 'Greater Fire Elemental',
        race: races.elemental,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fire',
            damage: '2d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL, STRENGTH, INIT ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Non magical attacks do half damage against elementals'
        }, {
            type: FEATURE,
            desc: 'Elementals ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Fire explosion: Arcana vs. willpower attack against all adjacent creatures that does normal damage'
        }]
    },
    {
        name: 'Lesser Water Elemental',
        race: races.elemental,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Water Blast',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL, STRENGTH, INIT ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Non magical attacks do half damage against elementals'
        }, {
            type: FEATURE,
            desc: 'Elementals ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Fire explosion: Arcana vs. willpower attack against all adjacent creatures that does normal damage'
        }]
    },
    {
        name: 'Greater Water Elemental',
        race: races.elemental,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Water Blast',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL, STRENGTH, INIT ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
            [ AGILITY, SKILL ],
            [ STRENGTH, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Non magical attacks do half damage against elementals'
        }, {
            type: FEATURE,
            desc: 'Elementals ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Deluge: Make an agility vs. init attack against all adjacent creatures. If hit, they fall prone cannot take actions until the next round'
        }]
    },
    {
        name: 'Gator Pig',
        race: races.gatorPig,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scaly Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: 'If the target is adjacent to two or more gator pigs, attacks target willpower'
        }]
    },
    {
        name: 'Ghost',
        race: races.ghost,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Weaken',
            damage: '1d6',
            init: 2,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ INIT, ARCANA, AGILITY, WILLPOWER ],
        levels: [
            [ ARCANA, STRENGTH ],
            [ SKILL, INIT ],
            [ ARCANA, STRENGTH ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Ghost attacks target willpower'
        }, {
            type: FEATURE,
            desc: 'Ghosts ignore all damage reduction and shields.'
        }, {
            type: FEATURE,
            desc: 'Ghosts ignore damage from non magical sources'
        }]
    },
    {
        name: 'Ghoul',
        race: races.ghoul,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d8',
            init: 2,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ AGILITY, SKILL ],
        levels: [
            [ AGILITY, SKILL ],
            [ AGILITY, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'If hit by a ghoul attack, you cannot take actions until the next round.'
        }]
    },
    {
        name: 'Fire Giant',
        race: races.giant,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fire Fists',
            damage: '2d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Giant attacks ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Stomp: Skill vs. Initiative attack that does 4d12 damage and ignores armor and shields'
        }]
    },
    {
        name: 'Hill Giant',
        race: races.giant,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Enormous Spear',
            damage: '2d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Giant attacks ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Stomp: Skill vs. Initiative attack that does 4d12 damage and ignores armor and shields'
        }]
    },
    {
        name: 'Ice Giant',
        race: races.giant,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Ice Maul',
            damage: '2d10',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Giant attacks ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Stomp: Skill vs. Initiative attack that does 4d12 damage and ignores armor and shields'
        }, {
            type: FEATURE,
            desc: 'Freeze: You cannot make bonus attacks against ice giants'
        }]
    },
    {
        name: 'Mountain Giant',
        race: races.giant,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Fist and Feet',
            damage: '2d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Iron Hide',
            toughness: 10,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Giant attacks ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Stomp: Skill vs. Initiative attack that does 4d12 damage and ignores armor and shields'
        }]
    },
    {
        name: 'Storm Giant',
        race: races.giant,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Storm Sword',
            damage: '3d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, INIT ],
            [ STRENGTH, WILLPOWER ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Storm Giant attacks target arcana'
        }, {
            type: HEROIC_ACTION,
            desc: 'Storm Lightning: Make an arcana vs. arcana attack against all enemies within 10 spaces that does 3d8 damage'
        }]
    },
    {
        name: 'Goblin Skirmisher',
        race: races.goblin,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
    },
    {
        name: 'Goblin Archer',
        race: races.goblin,
        charClass: charClasses.skirmisher,
        weapon: weapons.shortbow,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ SKILL, INIT ],
    },
    {
        name: 'Goblin Spider Rider',
        race: races.goblin,
        charClass: charClasses.skirmisher,
        weapon: weapons.shortbow,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ SKILL, INIT ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Make a ranged attack without drawing opportunity attacks.'
        }, {
            type: FEATURE,
            desc: 'Spider Riders can make minor movements on vertical surfaces.'
        }]
    },
    {
        name: 'Goblin Chief',
        race: races.goblin,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.scalemail,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ AGILITY, INIT ],
            [ ARCANA, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Up to 4 goblin allies may make a major movement without drawing opportunity attacks'
        }]
    },
    {
        name: 'Goblin Assassin',
        race: races.goblin,
        charClass: charClasses.assassin,
        weapon: weapons.dagger,
        secondary: 'Dagger',
        statBumps: [ SKILL, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'If you have advantage, ignore any toughness that is gained by equipment'
        }]
    },
    {
        name: 'Goblin Villager',
        race: races.goblin,
        charClass: charClasses.tribePerson,
        weapon: weapons.club,
        statBumps: [ AGILITY, WILLPOWER ],
    },
    {
        name: 'Gremik',
        race: races.gremik,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        features: [{
            type: FEATURE,
            desc: 'Gremik gain +3 from advantage'
        }, {
            type: HEROIC_ACTION,
            desc: 'Make a thrown spear attack of range 10 that does 2d6 damage.'
        }]
    },
    {
        name: 'Human Soldier',
        race: races.human,
        charClass: charClasses.soldier,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
    },
    {
        name: 'Human Archer',
        race: races.human,
        charClass: charClasses.soldier,
        weapon: weapons.crossbow,
        shield: shields.noShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
    },
    {
        name: 'Human Knight',
        race: races.human,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword,
        shield: shields.largeShield,
        armor: armor.fullplate,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
        levels: [
            [ SKILL, WILLPOWER ],
            [ AGILITY, STRENGTH ],
        ],
    },
    {
        name: 'Human Captain',
        race: races.human,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword,
        shield: shields.largeShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
        levels: [
            [ SKILL, ARCANA ],
            [ AGILITY, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Attack with advantage'
        }]
    },
    {
        name: 'Human Lord',
        race: races.human,
        charClass: charClasses.soldier,
        weapon: weapons.armingSword,
        shield: shields.largeShield,
        armor: armor.chainmail,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
        levels: [
            [ SKILL, ARCANA ],
            [ AGILITY, STRENGTH ],
            [ SKILL, ARCANA ],
            [ AGILITY, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Attack with advantage'
        }, {
            type: HEROIC_ACTION,
            desc: 'Up to 2 human allies within 10 spaces may make an attack'
        }]
    },
    {
        name: 'Krimkar Warrior',
        race: races.krimkar,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Make a thrown spear attack with range 15 that does 2d8 damage.'
        }]
    },
    {
        name: 'Krimkar Raider',
        race: races.krimkar,
        minorMove: 5,
        majorMove: 10,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ AGILITY, INIT ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Krimkar raiders are mounted on a warhorse'
        }, {
            type: FEATURE,
            desc: 'When charging do one extra damage dice'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Make a thrown spear attack with range 15 that does 2d8 damage.'
        }]
    },
    {
        name: 'Krimkar Warchief',
        race: races.krimkar,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.gambeson,
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'When activating: Krimkar allies who have not yet taken a major action this turn may take a major action'
        }]
    },
    {
        name: 'Kram Krimkar',
        race: races.krimkar,
        charClass: charClasses.warrior,
        weapon: weapons.spear.mastercrafted(),
        shield: shields.smallShield,
        armor: armor.gambeson.mastercrafted(),
        statBumps: [ SKILL, AGILITY ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'When activating: Choose 1 Krimkar ally to charge or make an attack'
        }, {
            type: FEATURE,
            desc: 'Only a heroes death: Take half damage from spells'
        }, {
            type: HEROIC_ACTION,
            desc: 'Attack all enemies within 2 spaces'
        }]
    },
    {
        name: 'Jungle Terror',
        race: races.jungleTerror,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Claws',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ INIT, AGILITY ],
        levels: [
            [ INIT, AGILITY ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'When a creature makes a ranged attack or spell attack against you, jump up to 6 spaces and make an attack against them.'
        }, {
            type: FEATURE,
            desc: 'Gain advantage when making opportunity attacks'
        }]
    },
    {
        name: 'Kobold Spearmen',
        race: races.kobold,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: {
            name: 'Scales',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ INIT, SKILL, AGILITY, ARCANA ],
        features: [{
            type: FEATURE,
            desc: 'Kobolds gain +3 from advantage'
        }, {
            type: FEATURE,
            desc: 'Kobolds make skill vs. init attacks against creatures adjacent to three or more kobolds'
        }, {
            type: FEATURE,
            desc: 'Kobolds with spears have range 2 and may attack through allies'
        }]
    },
    {
        name: 'Kobold Archer',
        race: races.kobold,
        charClass: charClasses.skirmisher,
        weapon: weapons.shortbow,
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ INIT, SKILL, AGILITY, ARCANA ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Use this action when an enemy moves adjacent to you: Make a ranged attack without drawing opportunity attacks'
        }]
    },
    {
        name: 'Kobold Tribe Chief',
        race: races.kobold,
        charClass: charClasses.skirmisher,
        weapon: weapons.staff,
        shield: shields.noShield,
        armor: armor.scalemail,
        statBumps: [ ARCANA, SKILL, AGILITY, INIT ],
        levels: [
            [ ARCANA, INIT ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Send in the Gang: Three kobold allies may take a major action'
        }, {
            type: HEROIC_ACTION,
            desc: 'Use this action when an enemy moves adjacent to a kobold ally. Two other kobold allies may make a major movement and attack.'
        }, {
            type: HEROIC_ACTION,
            desc: 'Scurry: All kobold allies may take a major movement without drawing opportunity attacks'
        }]
    },
    {
        name: 'Kobold Tribe Shaman',
        race: races.kobold,
        charClass: charClasses.skirmisher,
        weapon: weapons.staff,
        shield: shields.noShield,
        armor: armor.scalemail,
        statBumps: [ ARCANA, SKILL, AGILITY, INIT ],
        levels: [
            [ ARCANA, INIT ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: "Kobold Tribe Shaman's have 6 mana and access to the following spells: Magic Missile, Fire Blast, Blizzard, Time Warp"
        }]
    },
    {
        name: 'Kraken',
        race: races.kraken,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Tenticle Swipe',
            damage: '3d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ STRENGTH, WILLPOWER, INIT, SKILL ],
        levels: [
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
            [ STRENGTH, INIT ],
            [ WILLPOWER, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Kraken attacks target init and target all creatures in a 2x3 area'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Bite: Make a normal attack that does 4d8 damage that ignores shields and armor'
        }]
    },
    {
        name: 'Kruelkin',
        race: races.kruelkin,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        features: [{
            type: FEATURE,
            desc: 'Kruelkin have toughness 4 when adjacent to two other Kruelkin'
        }]
    },
    {
        name: 'Lizardmen',
        race: races.lizardmen,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ AGILITY, SKILL ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Lizardmen can swim at full speed in water and gain advantage against creatures in water'
        }]
    },
    {
        name: 'Lizardmen Archer',
        race: races.lizardmen,
        charClass: charClasses.skirmisher,
        weapon: weapons.shortbow,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ AGILITY, SKILL ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Lizardmen can swim at full speed in water and gain advantage against creatures in water'
        }]
    },
    {
        name: 'Mind Slayer',
        race: races.mindSlayer,
        charClass: charClasses.soldier,
        weapon: weapons.staff,
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
            [ ARCANA, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ ARCANA, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ ARCANA, WILLPOWER ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Mind Slayers can spend 3 mana per round and has access to any spell any creature within 10 spaces has access to.'
        }, {
            type: FEATURE,
            desc: 'Make a ranged 10 Arcana vs. Willpower attack. If successful, the target is under your control for the remainder of the turn.'
        }, {
            type: HEROIC_ACTION,
            desc: 'All creatures under your control may move and attack the nearest enemy creature.'
        }]
    },
    {
        name: 'Minotaur Dungeon Dweller',
        race: races.minotaur,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Axe',
            damage: '1d10',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ INIT, WILLPOWER ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Fury: Make two attacks'
        }, {
            type: HEROIC_ACTION,
            desc: 'Rage: Make an attack with double damage dice'
        }, {
            type: HEROIC_ACTION,
            desc: 'Gore: Make a skill vs. init attack that does 2d6 damage'
        }]
    },
    {
        name: 'Minotaur Dungeon Lord',
        race: races.minotaur,
        charClass: charClasses.warrior,
        weapon: {
            name: "Hell's Axe",
            damage: '1d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ INIT, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ INIT, WILLPOWER ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Fury: Make two attacks'
        }, {
            type: HEROIC_ACTION,
            desc: 'Rage: Make an attack with double damage dice'
        }, {
            type: HEROIC_ACTION,
            desc: 'Gore: Make a skill vs. init attack that does 2d6 damage'
        }]
    },
    {
        name: 'Ocean Lord',
        race: races.oceanLord,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Trident',
            damage: '2d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Ocean Scales',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ ARCANA, AGILITY, SKILL, INIT ],
        levels: [
            [ ARCANA, AGILITY ],
            [ SKILL, INIT ],
            [ ARCANA, AGILITY ],
            [ SKILL, INIT ],
            [ ARCANA, AGILITY ],
            [ SKILL, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: "Ocean Lord's have 10 mana and access to the following spells: Gathering Storm, Force Field, Storm of Ice"
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: "Water Strike: Make an arcana vs. willpower attack that does 2d8 damage that ignores armor"
        }, {
            type: FEATURE,
            desc: "Ocean Lord's gain disadvantage when away from water"
        }]
    },
    {
        name: 'Ogre',
        race: races.ogre,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Huge Club',
            damage: '1d12',
            init: -2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, WILLPOWER ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Ogre attacks ignore shields'
        }]
    },
    {
        name: 'Ogre Warrior',
        race: races.ogre,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Greataxe',
            damage: '1d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Metal Cladding',
            toughness: 6,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, WILLPOWER ],
            [ SKILL, STRENGTH ],
            [ AGILITY, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Ogre attacks ignore shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Make an attack with advantage'
        }]
    },
    {
        name: 'Ogre Chief',
        race: races.ogre,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Greatsword',
            damage: '1d12',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Raw Hide',
            toughness: 5,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, ARCANA ],
            [ SKILL, STRENGTH ],
            [ AGILITY, ARCANA ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Ogre attacks ignore shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Two other ogres may make attacks'
        }]
    },
    {
        name: 'Orc Soldier',
        race: races.orc,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.hide,
        statBumps: [ SKILL, STRENGTH, AGILITY, WILLPOWER ],
    },
    {
        name: 'Orc Archer',
        race: races.orc,
        charClass: charClasses.warrior,
        weapon: weapons.shortbow,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ SKILL, STRENGTH, AGILITY, WILLPOWER ],
    },
    {
        name: 'Orc Berserker',
        race: races.orc,
        charClass: charClasses.warrior,
        weapon: weapons.battleAxe,
        shield: shields.smallShield,
        armor: armor.noArmor,
        statBumps: [ SKILL, STRENGTH, AGILITY, WILLPOWER ],
        levels: [
            [ AGILITY, STRENGTH ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make two attacks'
        }]
    },
    {
        name: 'Orc Captain',
        race: races.orc,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.chainmail,
        statBumps: [ AGILITY, STRENGTH, SKILL, WILLPOWER ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, WILLPOWER ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'An orc ally may charge'
        }]
    },
    {
        name: 'Orc Chief',
        race: races.orc,
        charClass: charClasses.warrior,
        weapon: weapons.battleAxe,
        shield: shields.smallShield,
        armor: armor.halfplate,
        statBumps: [ AGILITY, STRENGTH, SKILL, WILLPOWER ],
        levels: [
            [ SKILL, STRENGTH ],
            [ AGILITY, WILLPOWER ],
            [ SKILL, STRENGTH ],
            [ AGILITY, WILLPOWER ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make an attack with advantage and an extra damage dice'
        }]
    },
    {
        name: 'Ratmen Slave',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        minion: 2,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
    },
    {
        name: 'Ratmen Slinger',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        minion: 2,
        weapon: {
            name: 'Sling',
            damage: '1d6',
            init: 2,
        },
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
    },
    {
        name: 'Ratmen Skirmisher',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        minion: 1,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
    },
    {
        name: 'Ratbeast',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Tail whip: Make an init vs init attack that does 2d8 damage'
        }]
    },
    {
        name: 'Ratswarm Captain',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.smallShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Two other ratmen may attack'
        }]
    },
    {
        name: 'Ratswarm Seer',
        race: races.ratmen,
        charClass: charClasses.skirmisher,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ AGILITY, SKILL, INIT, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: "Swarm Seer's have 6 mana and access to the following spells: Magic Missile and Jump Lightning"
        }]
    },
    {
        name: 'Rokum',
        race: races.rokum,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Beak',
            damage: '2d12',
            init: 1,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Claw: Make an attack that does 2d12 damage and ignored armor and shields'
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: 'Fly: Rokum can begin flying when making a major movement'
        }]
    },
    {
        name: 'Dusty Bones',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: {
            name: 'Bony Hands',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ ARCANA, WILLPOWER ],
        minion: 1,
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: "Piercing attacks do half damage against skeletons"
        }]
    },
    {
        name: 'Skeleton Warrior',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: weapons.armingSword,
        shield: shields.largeShield,
        armor: armor.scalemail,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: "Piercing attacks do half damage against skeletons"
        }]
    },
    {
        name: 'Skeleton Archer',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: weapons.longbow,
        shield: shields.noShield,
        armor: armor.scalemail,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: "Piercing attacks do half damage against skeletons"
        }]
    },
    {
        name: 'Skeleton Knight',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: weapons.armingSword,
        shield: shields.largeShield,
        armor: armor.halfplate,
        statBumps: [ SKILL, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ ARCANA, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: "Piercing attacks do half damage against skeletons"
        }]
    },
    {
        name: 'Skeleton Lord',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: weapons.greatSword,
        shield: shields.noShield,
        armor: armor.fullplate,
        statBumps: [ SKILL, STRENGTH ],
        levels: [
            [ SKILL, STRENGTH ],
            [ ARCANA, WILLPOWER ],
            [ SKILL, STRENGTH ],
            [ ARCANA, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: "Piercing attacks do half damage against skeletons"
        }, {
            type: FEATURE,
            desc: "Bonus Attack: Attack with advantage"
        }, {
            type: FEATURE,
            desc: "Skeletons gain +2 toughness when within 5 spaces of a skeleton lord"
        }]
    },
    {
        name: 'Skeleton Mage',
        race: races.skeleton,
        charClass: charClasses.skirmisher,
        weapon: weapons.greatSword,
        shield: shields.noShield,
        armor: armor.fullplate,
        statBumps: [ ARCANA, SKILL ],
        levels: [
            [ ARCANA, SKILL ],
            [ INIT, WILLPOWER ],
            [ ARCANA, SKILL ],
            [ INIT, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: "Skeleton Mage's have 10 mana and access to the following spells: Magic Missle, Force Field, Time Warp"
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: "Raise one fallen skeleton back to life with full hit points"
        }, {
            type: DOUBLE_HEROIC_ACTION,
            desc: "Raise one fallen skeleton back to life with 1 hit point"
        }]
    },
    {
        name: 'Large Snake',
        race: races.snake,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL ],
        features: [{
            type: FEATURE,
            desc: "Attacks are range 3"
        }]
    },
    {
        name: 'Slithering Behemoth',
        race: races.snake,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 4,
            agility: -2,
        },
        statBumps: [ AGILITY, SKILL ],
        levels: [
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ],
            [ AGILITY, SKILL ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: FEATURE,
            desc: "Attacks are range 4"
        }]
    },
    {
        name: 'Large Spider',
        race: races.spider,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d4',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: '',
            toughness: 0,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL ],
        minion: 2
    },
    {
        name: 'Huge Spider',
        race: races.spider,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d4',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: '',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ AGILITY, SKILL ],
        minion: 1
    },
    {
        name: 'Giant Spider',
        race: races.spider,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d6',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: '',
            toughness: 2,
            agility: -1,
        },
        statBumps: [ AGILITY, SKILL, STRENGTH, WILLPOWER ],
    },
    {
        name: 'Massive Spider',
        race: races.spider,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '1d8',
            init: 1,
        },
        shield: shields.noShield,
        armor: {
            name: '',
            toughness: 3,
            agility: -2,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
        ],
    },
    {
        name: 'Gargantuan Spider',
        race: races.spider,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Fangs',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: '',
            toughness: 4,
            agility: -3,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, ARCANA ],
        ],
    },
    {
        name: 'Swamp Behemoth',
        race: races.swampBehemoth,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Claws',
            damage: '4d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ STRENGTH, SKILL, WILLPOWER, ARCANA ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
        ],
    },
    {
        name: 'Swamp Monster',
        race: races.swampMonster,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Claws',
            damage: '2d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ STRENGTH, SKILL, WILLPOWER, ARCANA ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'After hitting with an attack, make a minor movement and drag the target of the attack with you.'
        }, {
            type: FEATURE,
            desc: 'After missing with an attack, make a minor movement.'
        }, {
            type: FEATURE,
            desc: 'If in waste deep water or deeper, the swamp monster may dissapear into the water'
        }]
    },
    {
        name: 'Sproutling',
        race: races.ent,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Tree Strike',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Barkskin',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ INIT, AGILITY ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Attacks target init'
        }, {
            type: FEATURE,
            desc: 'Gain advantage against strangled creatures'
        }]
    },
    {
        name: 'Treefolk',
        race: races.ent,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Tree Strike',
            damage: '1d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Barkskin',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ WILLPOWER, STRENGTH, ARCANA, SKILL ],
        levels: [
            [ SKILL, AGILITY ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Strangle: Medium sized and smaller reatures are considered strangled until the end of the round after being damaged by an entling attack'
            
        }, {
            type: FEATURE,
            desc: 'Strangled creatures cannot move for the rest of the round'
        }, {
            type: FEATURE,
            desc: 'Gain advantage against strangled creatures'
        }]
    },
    {
        name: 'Tree Shepherd',
        race: races.ent,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Tree Strike',
            damage: '2d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Barkskin',
            toughness: 8,
            agility: 0,
        },
        statBumps: [ WILLPOWER, STRENGTH, ARCANA, SKILL ],
        levels: [
            [ SKILL, WILLPOWER ],
            [ STRENGTH, ARCANA ],
            [ SKILL, WILLPOWER ],
            [ STRENGTH, ARCANA ],
            [ SKILL, WILLPOWER ],
            [ STRENGTH, ARCANA ],
            [ SKILL, WILLPOWER ],
            [ STRENGTH, ARCANA ],
            [ SKILL, WILLPOWER ],
            [ STRENGTH, ARCANA ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Smash: Make a skill vs. init attack that does 4d12 damage'
            
        }, {
            type: HEROIC_ACTION,
            desc: 'Throw: Make a normal attack against a target. If you hit, throw the target 3d6 spaces and do the same amount of damage that ignores armor'
        }, {
            type: FEATURE,
            desc: 'Tree shepherds are immune to spells other than fire based spells.'
        }]
    },
    {
        name: 'Swamp Troll',
        race: races.troll,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Tree Trunk',
            damage: '1d10',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, INIT ],
        levels: [
            [ ARCANA, SKILL ],
            [ AGILITY, INIT ],
            [ ARCANA, SKILL ],
            [ AGILITY, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Heal: After each round of combat heal 1d6 damage'
        }, {
            type: HEROIC_ACTION,
            desc: 'Puke: Make an arcana vs. willpower attack against all creatures in a 2x2 adjacent area that does 2d6 damage that ignores armor'
        }, {
            type: HEROIC_ACTION,
            desc: 'Stench: Make an arcana vs. willpower attack against all adjacent creatures that does 2d6 damage that ignores armor'
        }]
    },
    {
        name: 'Hill Troll',
        race: races.troll,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Spiked Club',
            damage: '1d12',
            init: -1,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, WILLPOWER, INIT ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, AGILITY ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Hill Trolls ignore armor and shields'
        }, {
            type: FEATURE,
            desc: 'Advantage provides +3 to your attack roll'
        }]
    },
    {
        name: 'Mountain Troll',
        race: races.troll,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Huge Mace',
            damage: '1d10',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Rock Hide',
            toughness: 6,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, WILLPOWER, INIT ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, AGILITY ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Mountain Trolls ignore armor and shields'
        }, {
            type: HEROIC_ACTION,
            desc: 'Make an attack against two adjacent targets and damage either or both targets if you succeed in your attack'
        }]
    },
    {
        name: 'Cave Troll',
        race: races.troll,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Huge Spear',
            damage: '1d8',
            init: 2,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, WILLPOWER, INIT ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, AGILITY ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, INIT ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Huge spear has range 3 and can attack through allies'
        }, {
            type: HEROIC_ACTION,
            desc: 'Overwhelm: Make an attack against willpower'
        }, {
            type: HEROIC_ACTION,
            desc: 'Rush: Make an attack against init'
        }]
    },
    {
        name: 'Werecat Warrior',
        race: races.werecat,
        charClass: charClasses.warrior,
        weapon: weapons.spear,
        shield: shields.noShield,
        armor: armor.hide,
        statBumps: [ STRENGTH, AGILITY, SKILL, INIT ],
        levels: [
            [ STRENGTH, AGILITY ],
            [ SKILL, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Gain advantage when both you and your target are adjacent to no other creatures'
        }, {
            type: FEATURE,
            desc: 'Gain 1d4 damage dice when you have advantage'
        }]
    },
    {
        name: 'Werewolf',
        race: races.werewolf,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Claws',
            damage: '2d8',
            init: 3,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, AGILITY, SKILL, INIT ],
        levels: [
            [ STRENGTH, AGILITY ],
            [ SKILL, INIT ],
            [ STRENGTH, AGILITY ],
            [ SKILL, INIT ],
            [ STRENGTH, AGILITY ],
            [ SKILL, INIT ]
        ],
        features: [{
            type: FEATURE,
            desc: 'Normal and artisan weapons do half damage against werewolves'
        }, {
            type: FEATURE,
            desc: 'Gain 1d8 damage dice when you have advantage'
        }]
    },
    {
        name: 'Wolf',
        race: races.wolf,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Claws',
            damage: '1d8',
            init: 3,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ STRENGTH, AGILITY, SKILL, INIT ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Gain +3 from advantage'
        }]
    },
    {
        name: 'Yeti',
        race: races.yeti,
        charClass: charClasses.warrior,
        weapon: {
            name: 'Claws',
            damage: '2d8',
            init: 3,
        },
        shield: shields.noShield,
        armor: {
            name: 'Tough Hide',
            toughness: 6,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL ],
        levels: [
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ],
            [ STRENGTH, SKILL ],
            [ WILLPOWER, ARCANA ]
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make an attack against willpower that does 3d8 damage and ignored shields'
        }]
    },
    {
        name: 'Shambling Zombie',
        race: races.zombie,
        charClass: charClasses.skirmisher,
        weapon: {
            name: 'Hands',
            damage: '1d4',
            init: -2,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ WILLPOWER, STRENGTH, SKILL, INIT ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: "Zombie attacks target willpower when two or more zombies are adjacent to the target"
        }]
    },
    {
        name: 'Frenzied Zombie',
        race: races.zombie,
        charClass: charClasses.skirmisher,
        weapon: {
            name: 'Hands',
            damage: '1d4',
            init: -2,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ WILLPOWER, STRENGTH, SKILL, INIT ],
        levels: [
            [ SKILL, AGILITY ]
        ],
        features: [{
            type: FEATURE,
            desc: "Zombie attacks target willpower when two or more zombies are adjacent to the target"
        }]
    },

    // -------------------------------------- //
    // ----- Character class creatures ------ //
    // -------------------------------------- //

    {
        name: 'Wolf',
        label: 'This is for the hunter class',
        type: HUNTER,
        race: races.wolf,
        charClass: charClasses.monsterClass,
        override: {
            init: 'n/a',
        },
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: '(2) Help: Give an adjacent ally advantage on an agility roll'
        }, {
            type: FEATURE,
            desc: '(2) Bite: Make an attack against your prey'
        }, {
            type: FEATURE,
            desc: '(3) Chase: Make a major movement without drawing opportunity attacks and then make an attack against any creature'
        }]
    },
    {
        name: 'Bear',
        label: 'This is for the hunter class',
        type: HUNTER,
        race: races.bear,
        charClass: charClasses.monsterClass,
        override: {
            init: 'n/a',
        },
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: '(3) Maul: Make an attack against your prey'
        }, {
            type: FEATURE,
            desc: '(1) Overpower: Make a strength vs. strength check against your prey. If successful, move that creature 2 spaces.'
        }]
    },
    {
        name: 'Panther',
        label: 'This is for the hunter class',
        type: HUNTER,
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        override: {
            init: 'n/a',
        },
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: '(2) Bite: Make an attack against your prey'
        }, {
            type: FEATURE,
            desc: '(4) Pounce: Make a major movement without drawing opportunity attacks and then attack twice against any creature'
        }]
    },
    {
        name: 'Snake',
        label: 'This is for the hunter class',
        type: HUNTER,
        race: races.snake,
        charClass: charClasses.monsterClass,
        override: {
            init: 'n/a',
        },
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ ARCANA, AGILITY, INIT, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: '(2) Bite: Make an attack against any creature'
        }, {
            type: FEATURE,
            desc: '(4) Sly Strike: Make an arcana vs. arcana attack that ignores armor against any creature'
        }, {
            type: FEATURE,
            desc: '(2) Serpentine Power: Give one enhancement to a spell or scroll that is being cast by the owner of this pet'
        }]
    },
    {
        name: 'Hawk',
        label: 'This is for the hunter class',
        type: HUNTER,
        race: races.hawk,
        charClass: charClasses.monsterClass,
        override: {
            init: 'n/a',
        },
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: '(1) Talons: Make an attack against your prey'
        }, {
            type: FEATURE,
            desc: '(2) Distract: Make an arcana vs. arcana attack against your prey. If successful, that creature has disadvantage on agility until the end of the next round.'
        }, {
            type: FEATURE,
            desc: '(2) Primal Protection: Reduce the damage taken by you or your owner by half. You must be within 8 spaces of your owner.'
        }]
    },
    {
        name: 'Rat',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.rat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ SKILL, AGILITY ],
        levels: [
        ],
        features: [{
            type: FEATURE,
            desc: 'Rats are tiny and can into through small openings and pass by unnoticed'
        }, {
            type: FEATURE,
            desc: 'Rats gain +5 to sneak checks'
        }]
    },
    {
        name: 'Eagle',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.hawk,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ ARCANA, WILLPOWER ],
        levels: [
        ]
    },
    {
        name: 'Lizard',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.animalLizard,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY ],
        levels: [
        ],
    },
    {
        name: 'Wolf',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.wolf,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make a major movement without drawing opportunity attacks and make an attack with advantage'
        }]
    },
    {
        name: 'Bear',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.bear,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Do this action as soon as an ally damages an adjacent enemy. Make two attacks against that creature.'
        }]
    },
    {
        name: 'Snake',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.snake,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d4',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Scales',
            toughness: 1,
            agility: 0,
        },
        statBumps: [ ARCANA, AGILITY, INIT, WILLPOWER ],
        levels: [
        ],
    },
    {
        name: 'Tiger',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.largeCat,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite and Claw',
            damage: '2d10',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ STRENGTH, SKILL, AGILITY, INIT ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
            [ AGILITY, INIT ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Maul: Attack twice'
        }]
    },
    {
        name: 'Gorilla',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.ape,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Pummel',
            damage: '2d8',
            init: 0,
        },
        shield: {
            name: 'Swipe away',
            block: 2,
            init: 0,
        },
        armor: {
            name: 'Thick skin',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, ARCANA ],
        levels: [
            [ STRENGTH, ARCANA ],
            [ SKILL, AGILITY ],
            [ STRENGTH, ARCANA ],
            [ SKILL, AGILITY ],
            [ STRENGTH, ARCANA ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Strangle: If any damage dice explode, the target is grappled and cannot move until the end of the next round.'
        }]
    },
    {
        name: 'Shark',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.shark,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '2d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ STRENGTH, SKILL ],
        levels: [
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
            [ AGILITY, WILLPOWER ],
            [ STRENGTH, SKILL ],
        ],
        features: [{
            type: FEATURE,
            desc: 'A shark can only move in deep water and attack creatures that are within 1 space of the edge of deep water.'
        }]
    },
    {
        name: 'Bramblebaum',
        race: races.ent,
        charClass: charClasses.monsterClass,
        override: {
            minorMove: 2,
            majorMove: 4,
        },
        weapon: {
            name: 'Thorn strike',
            damage: '1d8',
            init: 0,
        },
        shield: shields.noShield,
        armor: armor.noArmor,
        statBumps: [ SKILL, AGILITY, WILLPOWER, STRENGTH ],
        levels: [
            [ SKILL, AGILITY ],
            [ WILLPOWER, STRENGTH ],
            [ SKILL, AGILITY ],
            [ WILLPOWER, STRENGTH ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: FEATURE,
            desc: 'This form only lasts until the end of the encounter'
        }, {
            type: FEATURE,
            desc: 'Each time you take an attack action, make three attacks'
        }, {
            type: FEATURE,
            desc: 'Your melee attacks are range 4'
        }]
    },
    {
        name: 'Treefolk',
        race: races.ent,
        charClass: charClasses.animalClass,
        weapon: {
            name: 'Tree Strike',
            damage: '2d12',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Punch',
            toughness: 4,
            agility: 0,
        },
        statBumps: [ WILLPOWER, STRENGTH, ARCANA, SKILL ],
        levels: [
            [ SKILL, STRENGTH ],
            [ ARCANA, WILLPOWER ],
            [ SKILL, STRENGTH ],
            [ ARCANA, WILLPOWER ],
            [ SKILL, STRENGTH ],
        ],
        features: [{
            type: FEATURE,
            desc: 'Strangle: Medium sized and smaller reatures are considered strangled and cannot move until the end of the round after being damaged'
        }]
    },
    {
        name: 'Dire Wolf',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.wolf,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '1d6',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 2,
            agility: 0,
        },
        statBumps: [ SKILL, AGILITY, STRENGTH, WILLPOWER ],
        levels: [
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Make a major movement without drawing opportunity attacks and make an attack with advantage'
        }]
    },
    {
        name: 'Cave Bear',
        label: 'This is for the druid class',
        type: DRUID,
        race: races.bear,
        charClass: charClasses.monsterClass,
        weapon: {
            name: 'Bite',
            damage: '2d10',
            init: 0,
        },
        shield: shields.noShield,
        armor: {
            name: 'Hide',
            toughness: 3,
            agility: 0,
        },
        statBumps: [ STRENGTH, WILLPOWER ],
        levels: [
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ],
            [ SKILL, AGILITY ],
            [ STRENGTH, WILLPOWER ]
        ],
        features: [{
            type: HEROIC_ACTION,
            desc: 'Do this action as soon as an ally damages an adjacent enemy. Make two attacks against that creature.'
        }]
    },
]);
