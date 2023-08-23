import Creature from "./creature.js";
import armorBuilder from "./armor-options.js";
import weaponBuilder from "./weapon-options.js";
import shieldBuilder from "./shield-options.js";

export default logger => {
    const armor = armorBuilder(logger);
    const weapons = weaponBuilder(logger);
    const shields = shieldBuilder(logger);
    
    return {
        slighter: () =>  new Creature({
            name: 'Slighter',
            health: 15,
            skill: 1,
            agility: 1,
            arcana: 1,
            willpower: 1,
            strength: 1,
            init: 1,
            shield: shields.large,
            weapon: weapons.armingSword,
            armor: armor.gambeson,
            logger,
        }),
        goblinSkirmisher: () => new Creature({
            name: 'Goblin Skirmisher',
            health: 7,
            skill: 2,
            agility: 2,
            arcana: 1,
            willpower: 1,
            strength: 2,
            init: 5,
            shield: shields.small,
            weapon: weapons.dagger,
            armor: armor.hide,
            logger,
        }),
    }
};
