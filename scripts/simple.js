import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import CreatureVsCreature from "../encounters/creature-vs-creature.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 10000;
const creatures = creaturesBuilder(logger);

const results = await new CreatureVsCreature({
    creature1: creatures.slighter,
    creature2: creatures.goblinSkirmisher,
    count,
    logger
}).play();

logger.log(0, `
team1: ${results.team1.wins}
team2: ${results.team2.wins}
`.trim());
