import CreatureVsCreature from "../encounters/creature-vs-creature.js";

export default class Ranking {
    constructor(creatures, count, logger) {
        this.creatures = creatures;
        this.count = count;
        this.logger = logger;
        this.stats = {};
        creatures.forEach(creatureBuilder => {
            const creature = creatureBuilder();
            this.stats[creature.id] = {
                wins: 0,
                level: creature.level,
                name: creature.name,
            };
        });
        this.fullReportNames = [];
    }

    giveFullReport(name) {
        this.fullReportNames.push(name);
    }

    async rank() {
        for (let creature1 of this.creatures) {
            for (let creature2 of this.creatures) {
                const creature1Name = creature1().id;
                const creature2Name = creature2().id;
                if (creature1Name !== creature2Name) {
                    const results = await new CreatureVsCreature({ creature1, creature2, count: this.count, logger: this.logger }).play();
                    this.updateStats(creature1Name, results.team1.wins, creature2Name);
                    this.updateStats(creature2Name, results.team2.wins, creature1Name);
                }
            }
        }

        return this;
    }

    updateStats(name, wins, opponent) {
        this.stats[name].wins += wins;

        if (this.fullReportNames.includes(name)) {
            const key = `vs. ${opponent}`;
            if (!this.stats[name][key]) {
                this.stats[name][key] = 0;
            }
            this.stats[name][key] += wins;
        }
    }

    max() {
        return Object.keys(this.stats)
            .map(creatureName => this.stats[creatureName].wins)
            .sort((a, b) => b - a)[0];
    }

    report() {
        return Object.keys(this.stats).map(creatureName => ({
            name: creatureName,
            wins: this.stats[creatureName].wins,
            percentage: (this.stats[creatureName].wins / this.max()) * 100,
            level: this.stats[creatureName].level,
        })).sort((a, b) => a.percentage - b.percentage);
    }

    fullReport() {
        return Object.keys(this.stats).map(name => {
            if (this.fullReportNames.includes(name)) {
                return {
                    name,
                    ...this.stats[name],
                };
            } else {
                return undefined;
            }
        }).filter(obj => obj != undefined);
    }
}