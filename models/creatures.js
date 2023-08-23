import Creature from "./creature.js";
import armorBuilder from "./armor-options.js";
import weaponBuilder from "./weapon-options.js";
import shieldBuilder from "./shield-options.js";
import races from "./races.js";
import charClasses from "./char-classes.js";

export default logger => {
    const armor = armorBuilder(logger);
    const weapons = weaponBuilder(logger);
    const shields = shieldBuilder(logger);
    
    return {
        slighter: () =>  new Creature({
            name: 'Slighter',
            race: races.human,
            charClass: charClasses.soldier,
            shield: shields.large,
            weapon: weapons.armingSword,
            armor: armor.gambeson,
            logger,
        }),
        goblinSkirmisher: () => new Creature({
            name: 'Goblin Skirmisher',
            race: races.goblin,
            charClass: charClasses.skirmisher,
            shield: shields.small,
            weapon: weapons.dagger,
            armor: armor.hide,
            logger,
        }),
    }
};
