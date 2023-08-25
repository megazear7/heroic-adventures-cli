import CreatureVsCreature from "../encounters/creature-vs-creature.js";

export default class Ranking {
    constructor(creatures, count, logger) {
        this.creatures = creatures;
        this.count = count;
        this.logger = logger;
        this.stats = {};
        creatures.forEach(creature => {
            this.stats[creature().name] = {
                wins: 0,
            };
        });
    }

    async rank() {
        for (let creature1 of this.creatures) {
            for (let creature2 of this.creatures) {
                const creature1Name = creature1().name;
                const creature2Name = creature2().name;
                if (creature1Name !== creature2Name) {
                    const results = await new CreatureVsCreature({ creature1, creature2, count: this.count, logger: this.logger }).play();
                    this.stats[creature1Name].wins += results.team1.wins;
                    this.stats[creature2Name].wins += results.team2.wins;
                }
            }
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
        })).sort((a, b) => a.percentage - b.percentage);
    }
}