import Encounter from "./encounter.js";
import Logger from "./logger.js";
import CombatStats from "./stats.js";
import Team from "./team.js";
import creaturesBuilder from "./creatures.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 1000;
const creatures = creaturesBuilder(logger);

const team1 = new Team({
    name: 'Team 1',
    creatures: [
        creatures.goblinSkirmisher(),
        creatures.goblinSkirmisher(),
        creatures.goblinSkirmisher(),
        creatures.goblinSkirmisher(),
    ],
    logger,
});

const team2 = new Team({
    name: 'Team 2',
    creatures: [
        creatures.goblinSkirmisher().warband()
    ],
    logger,
});

const encounter = new Encounter({
    team1,
    team2,
    logger,
});

const combatStats = new CombatStats({ encounter, count, logger });
await combatStats.repeat();
combatStats.report();
