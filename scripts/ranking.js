import Logger from "../utils/logger.js";
import { creatureList } from "../models/creatures.js";
import { close } from "../utils/utils.js";
import Ranking from "../models/rankings.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 10;
const creatures = creatureList(logger);

const rankings = new Ranking(creatures, count, logger);
await rankings.rank();

rankings.report().forEach(creature => {
    const msg = `${creature.name}: ${creature.percentage.toFixed(2)}`
    logger.log(0, msg);
});

close();
