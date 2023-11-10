import Creature from "./creature.js";
import armorBuilder from "./armor-options.js";
import weaponBuilder from "./weapon-options.js";
import shieldBuilder from "./shield-options.js";
import races from "./races.js";
import charClasses from "./monster-classes.js";
import StatBump from "./stat-bumps.js";
import { AGILITY, SKILL, STRENGTH, INIT, MANUAL } from "../utils/enums.js";
import Weapon from "./weapon.js";
import Armor from "./armor.js";
import Shield from "./shield.js";
import monsterBuilder from "./monsters.js";

export const creatureListBuilder = (logger) => {
    const armorOptions = armorBuilder(logger);
    const weapons = weaponBuilder(logger);
    const shields = shieldBuilder(logger);
    let incrementId = 0;
    const manualId = incrementId++;
    const manual = [
        () => new Creature({
            name: 'Slighter',
            id: manualId,
            type: MANUAL,
            race: races.human,
            charClass: charClasses.soldier,
            statBump: new StatBump([SKILL, STRENGTH]),
            levels: [
                [ SKILL, AGILITY ],
                [ INIT, STRENGTH ],
            ],
            shield: shields.largeShield,
            weapon: weapons.armingSword,
            armor: armorOptions.gambeson,
            logger,
        })
    ];
    const monsters = monsterBuilder(armorOptions, weapons, shields).map(data => {
        if (!data.weapon) data.weapon = weapons.noWeapon;
        if (!data.shield) data.shield = shields.noShield;
        if (!data.armor) data.armor = armorOptions.noArmor;
        const weapon = data.weapon.enhanced ? data.weapon : new Weapon({ ...data.weapon, logger });
        const shield = data.shield.enhanced ? data.shield : new Shield({ ...data.shield, logger });
        const armor = data.armor.enhanced ? data.armor : new Armor({ ...data.armor, logger });
        const id = incrementId++;

        return () => new Creature({
            name: data.name,
            id: id,
            type: data.type,
            race: data.race,
            minorMove: data.minorMove,
            majorMove: data.majorMove,
            charClass: data.charClass,
            statBump: new StatBump(data.statBumps),
            levels: data.levels,
            minion: data.minion,
            shield: shield,
            weapon: weapon,
            armor: armor,
            features: data.features,
            logger,
        });
    });

    return [...manual, ...monsters];
};

export default logger => {
    const creatures = {};
    creatureListBuilder(logger).forEach(creature => {
        creatures[creature().name] = creature;
    });
    return creatures;
};
