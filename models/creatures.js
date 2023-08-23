import Creature from "./creature.js";
import armorBuilder from "./armor-options.js";
import weaponBuilder from "./weapon-options.js";
import shieldBuilder from "./shield-options.js";
import races from "./races.js";
import charClasses from "./char-classes.js";
import StatBump from "./stat-bumps.js";
import { AGILITY, SKILL, STRENGTH, INIT } from "../utils/enums.js";

export default logger => {
    const armor = armorBuilder(logger);
    const weapons = weaponBuilder(logger);
    const shields = shieldBuilder(logger);
    
    return {
        slighter: () =>  new Creature({
            name: 'Slighter',
            race: races.human,
            charClass: charClasses.soldier,
            statBump: new StatBump([SKILL, STRENGTH]),
            shield: shields.large,
            weapon: weapons.armingSword,
            armor: armor.gambeson,
            logger,
        }),
        goblinSkirmisher: () => new Creature({
            name: 'Goblin Skirmisher',
            race: races.goblin,
            charClass: charClasses.skirmisher,
            statBump: new StatBump([AGILITY, SKILL, INIT, STRENGTH]),
            shield: shields.small,
            weapon: weapons.dagger,
            armor: armor.hide,
            logger,
        }),
    }
};
