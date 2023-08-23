export default class CombatStats {
    constructor({
        encounter,
        count,
        logger,
    }) {
        this.encounter = encounter;
        this.count = count;
        this.logger = logger;
    }

    async repeat() {
        for (let i = 0; i < this.count; i++) {
            this.encounter.reset();
            const result = await this.encounter.fight();
            result.winner.wins++;
            result.loser.losses++;
        }
    }

    report() {
        const results = {
            count: this.count,
            team1: {
                creatures: this.encounter.team1.creatures.map(creatures => creatures.name),
                wins: this.formatWins(this.encounter.team1.wins),
            },
            team2: {
                creatures: this.encounter.team2.creatures.map(creatures => creatures.name),
                wins:  this.formatWins(this.encounter.team2.wins),
            },
        };
        this.logger.log(10, JSON.stringify(results, undefined, 4));
        return results;
    }

    formatWins(wins) {
        return Math.round(((wins / this.count) * 100));
    }
}
