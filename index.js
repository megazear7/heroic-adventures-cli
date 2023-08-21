import Creature from "./creature.js";
import Encounter from "./encounter.js";
import Logger from "./logger.js";
import Team from "./team.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(30, true);

const team1 = new Team({
    name: 'Characters',
    creatures: [new Creature({
        name: 'Slighter',
        health: 10,
        skill: 1,
        agility: 1,
        arcana: 1,
        willpower: 1,
        strength: 1,
        init: 5,
        block: 1,
        damage: '1d6',
        toughness: 2,
        logger: logger,
    })],
    logger: logger,
});

const team2 = new Team({
    name: 'Monsters',
    creatures: [new Creature({
        name: 'Orc',
        health: 10,
        skill: 1,
        agility: 1,
        arcana: 1,
        willpower: 1,
        strength: 1,
        init: 1,
        block: 1,
        damage: '1d6',
        toughness: 2,
        logger: logger,
    })],
    logger: logger,
});

const encounter = new Encounter({
    team1,
    team2,
    logger: logger,
});

await encounter.fight();
