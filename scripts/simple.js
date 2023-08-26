import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import CreatureVsCreature from "../encounters/creature-vs-creature.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(20, false);
const count = 1000;
const creatures = creaturesBuilder(logger);
const creature1 = creatures['Kobold Spearmen'];
const creature2 = creatures['Kobold Archer'];

const results = await new CreatureVsCreature({
    creature1,
    creature2,
    count,
    logger
}).play();

logger.log(0, `
${creature1().name}: ${results.team1.wins}
${creature2().name}: ${results.team2.wins}
`.trim());
