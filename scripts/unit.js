import Logger from "../utils/logger.js";
import { creatureListBuilder } from "../models/creatures.js";
import { close, avg } from "../utils/utils.js";
import UnitVsCreature from "../encounters/unit-vs-creature.js";
import { DRUID, HUNTER, HOST, LEGION, WARBAND } from "../utils/enums.js";

// Logger level can be between 0 and 100. The higher the level, the more logs you will see.
const logger = Logger.consoleLogger(0, false);
const count = 100;
const creaturesList = creatureListBuilder(logger)
    .filter(creatureBuilder => {
        const creature = creatureBuilder();
        if ([ DRUID, HUNTER ].includes(creature.type)) {
            return false;
        }
        if (creature.health > 16) {
            return false;
        }

        return true;
    });
const results = [];

for (let creature of creaturesList) {
    const name = creature().name;
    const result = { name }
    for (let type of [ WARBAND, HOST, LEGION ]) {
        const report = await new UnitVsCreature({ creature, type, count, logger }).play();
        result[type] = report;
    }
    result.avg = avg([ result[WARBAND].team2.wins, result[HOST].team2.wins, result[LEGION].team2.wins ]);
    results.push(result);
}

results.sort((a, b) => a[WARBAND].team2.wins - b[WARBAND].team2.wins);

const formatWins = report => report.team2.wins.toFixed().padStart(4, ' ');
results.forEach(result => {
    const name = result.name.padEnd(25, ' ');
    const warbandWins = formatWins(result[WARBAND]);
    const hostWins = formatWins(result[HOST]);
    const legionWins = formatWins(result[LEGION]);
    console.log(`${name} ${warbandWins} ${hostWins} ${legionWins}`);
});

console.log(''.padEnd(25 + 15, '-'));

const avgText = 'Average'.padEnd(25, ' ');
const warbandAvg = avg(results.map(result => result[WARBAND].team2.wins)).toFixed(0).padStart(4, ' ');
const hostAvg = avg(results.map(result => result[HOST].team2.wins)).toFixed(0).padStart(4, ' ');
const legionAvg = avg(results.map(result => result[LEGION].team2.wins)).toFixed(0).padStart(4, ' ');
console.log(`${avgText} ${warbandAvg} ${hostAvg} ${legionAvg}`);
const totalAvgText = 'Total average'.padEnd(25, ' ');
const totalAvg = avg(results.map(result => result.avg)).toFixed(0).padStart(4, ' ');
console.log(`${totalAvgText} ${totalAvg}`)

console.log(`
If the averages are high, that means that
the unit is stronger than the individual
monsters
`)

close();
