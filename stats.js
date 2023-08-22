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
        this.logger.log(0, JSON.stringify({
            team1: this.formatWins(this.encounter.team1.wins),
            team2: this.formatWins(this.encounter.team2.wins),
        }, undefined, 4));
    }

    formatWins(wins) {
        return ((wins / this.count).toFixed(2) * 100) + '%';
    }
}
