import Creature from "./creature.js";

export default logger => ({
    slighter:() =>  new Creature({
        name: 'Slighter',
        health: 15,
        skill: 1,
        agility: 1,
        arcana: 1,
        willpower: 1,
        strength: 1,
        init: 1,
        block: 1,
        damage: '1d6',
        toughness: 2,
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
        block: 1,
        damage: '1d6',
        toughness: 2,
        logger,
    }),
});
