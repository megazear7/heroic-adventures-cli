import Creature from "./creature.js";
import Encounter from "./encounter.js";
import Logger from "./logger.js";
import Team from "./team.js";

const logger = Logger.debug;

const team1 = new Team({
    name: 'Characters',
    creatures: [new Creature({
        name: 'Slighter',
        skill: 1,
        agility: 1,
        arcana: 1,
        willpower: 1,
        strength: 1,
        init: 5,
        logger: logger,
    })],
    logger: logger,
});

const team2 = new Team({
    name: 'Monsters',
    creatures: [new Creature({
        name: 'Orc',
        skill: 1,
        agility: 1,
        arcana: 1,
        willpower: 1,
        strength: 1,
        init: 1,
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
