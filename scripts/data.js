import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import { close } from "../utils/utils.js";

const logger = Logger.consoleLogger(0, false);
const creatures = creaturesBuilder(logger);

console.log(JSON.stringify(Object.keys(creatures).map(creatureName => {
    return creatures[creatureName]().data();
}), undefined, 4));

close();
