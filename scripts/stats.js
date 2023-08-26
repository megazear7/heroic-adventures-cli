import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import { close } from "../utils/utils.js";

const logger = Logger.consoleLogger(0, false);
const creatures = creaturesBuilder(logger);

console.log(creatures['Kobold Spearmen']().stats());
console.log(creatures['Kobold Archer']().stats());

close();
