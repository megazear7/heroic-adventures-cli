import Creature from "./creature.js";
import armorBuilder from "./armor-options.js";
import weaponBuilder from "./weapon-options.js";
import shieldBuilder from "./shield-options.js";
import races from "./races.js";
import charClasses from "./char-classes.js";
import StatBump from "./stat-bumps.js";
import { AGILITY, SKILL, STRENGTH, INIT } from "../utils/enums.js";
import Weapon from "./weapon.js";
import Armor from "./armor.js";
import Shield from "./shield.js";
import monsterBuilder from "./monsters.js";

export default logger => {
    const armorOptions = armorBuilder(logger);
    const weapons = weaponBuilder(logger);
    const shields = shieldBuilder(logger);
    const manual = [
        () => new Creature({
            name: 'Slighter',
            race: races.human,
            charClass: charClasses.soldier,
            statBump: new StatBump([SKILL, STRENGTH]),
            levels: [
                [ SKILL, AGILITY ],
                [ INIT, STRENGTH ],
            ],
            shield: shields.large,
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

        return () => new Creature({
            name: data.name,
            race: data.race,
            charClass: data.charClass,
            statBump: new StatBump(data.statBumps),
            levels: data.levels,
            shield: shield,
            weapon: weapon,
            armor: armor,
            features: data.features,
            logger,
        });
    });

    const creatures = {};
    [...manual, ...monsters].forEach(creature => {
        creatures[creature().name] = creature;
    });

    return creatures;
};
