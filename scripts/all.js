import Logger from "../utils/logger.js";
import creaturesBuilder from "../models/creatures.js";
import UnitVsCreature from "../encounters/unit-vs-creature.js";
import CreatureVsCreature from "../encounters/creature-vs-creature.js";
import EncounterTracker from "../models/encounter-tracker.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 1000;
const creatures = creaturesBuilder(logger);

const results = await new EncounterTracker({
    encounters: [
        new UnitVsCreature({
            creature: creatures.goblinSkirmisher,
            count,
            logger
        }),
        new CreatureVsCreature({
            creature1: creatures.slighter,
            creature2: creatures.goblinSkirmisher,
            count,
            logger
        }),
    ],
    logger
}).play();

logger.log(0, JSON.stringify(results, undefined, 4));
