import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import { close } from "../utils/utils.js";

const logger = Logger.consoleLogger(0, false);
const creatures = creaturesBuilder(logger);
const creature1 = creatures['Minor Demon'];
const creature2 = creatures['Skeleton Knight'];

console.log(creature1().stats());
console.log(creature2().stats());

close();
