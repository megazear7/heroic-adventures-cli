import Creature from "./creature.js";
import Encounter from "./encounter.js";
import Logger from "./logger.js";

const logger = Logger.debug;

const creature1 = new Creature({
    name: 'Slighter',
    skill: 1,
    agility: 1,
    arcana: 1,
    willpower: 1,
    strength: 1,
    init: 5,
    logger: logger,
});

const creature2 = new Creature({
    name: 'Orc',
    skill: 1,
    agility: 1,
    arcana: 1,
    willpower: 1,
    strength: 1,
    init: 1,
    logger: logger,
});

const encounter = new Encounter({
    creatures: [creature1, creature2],
    logger: logger,
});

await encounter.fight();
