import Logger from "../utils/logger.js";
import creatureBuilder, { creatureListBuilder } from "../models/creatures.js";
import { close } from "../utils/utils.js";
import Ranking from "../models/rankings.js";
import { DRUID, HUNTER } from "../utils/enums.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 100;
const creatures = creatureBuilder(logger);
const creaturesList = creatureListBuilder(logger).filter(creature => ![ DRUID, HUNTER ].includes(creature().type));
const rankings = new Ranking(creaturesList, count, logger);
rankings.giveFullReport(creatures['Gorilla']().id);
await rankings.rank();

rankings.report().forEach(creature => {
    const msg = `${creature.name.replace(/ \(\d*\)/, '').padEnd(25, ' ')} Difficulty ${creature.percentage.toFixed(0).padStart(3, ' ')}%   Level ${creature.level}`;
    logger.log(0, msg);
});

//logger.log(0, JSON.stringify(rankings.fullReport(), undefined, 4));

close();
