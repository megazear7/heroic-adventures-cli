import Logger from "../utils/logger.js";
import { creatureListBuilder } from "../models/creatures.js";
import Ranking from "../models/rankings.js";
import { close } from "../utils/utils.js";
import { MONSTER } from "../utils/enums.js";

const logger = Logger.consoleLogger(0, false);
const creaturesList = creatureListBuilder(logger);
const ranking = await new Ranking(creaturesList, 100, logger).rank();
const rankings = ranking.report();
const monsters = creaturesList.filter(creature => [ MONSTER ].includes(creature().type));
monsters.sort((a, b) =>  a().name - b().name);

monsters.sort((a, b) => {
    const nameA = a().race.name.toUpperCase();
    const nameB = b().race.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
});

console.log(JSON.stringify(monsters.map(monster => {
    const creature = monster();
    const rank = rankings.find(a => a.name == creature.id);
    return {
        ...creature.data(),
        combatDifficulty: rank.percentage.toFixed(0)
    };
}), undefined, 4));

close();
