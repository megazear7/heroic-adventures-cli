import Encounter from "../models/encounter.js";
import CombatStats from "../models/combat-stats.js";
import Team from "../models/team.js";

export default class UnitVsCreature {
    constructor({
        creature,
        count,
        logger,
    }) {
        this.creature = creature;
        this.count = count;
        this.logger = logger;

        this.logger.log(100, 'UnitVsCreature constructor', this.creature, this.count);
    }

    async play() {
        this.logger.log(100, 'UnitVsCreature play');

        const team1 = new Team({
            name: 'Team 1',
            creatures: [
                this.creature(),
                this.creature(),
                this.creature(),
                this.creature(),
            ],
            logger: this.logger,
        });
        
        const team2 = new Team({
            name: 'Team 2',
            creatures: [
                this.creature().warband()
            ],
            logger: this.logger,
        });
        
        const encounter = new Encounter({
            team1,
            team2,
            logger: this.logger,
        });
        
        const combatStats = new CombatStats({ encounter, count: this.count, logger: this.logger });
        await combatStats.repeat();
        return combatStats.report();
    }
}
