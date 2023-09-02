import Encounter from "../models/encounter.js";
import CombatStats from "../models/combat-stats.js";
import Team from "../models/team.js";
import { CREATURE_MAPPING } from "../models/unit.js";

export default class UnitVsCreature {
    constructor({
        creature,
        type,
        count,
        logger,
    }) {
        this.creature = creature;
        this.type = type;
        this.count = count;
        this.logger = logger;

        this.logger.log(100, 'UnitVsCreature constructor', this.creature, this.count);
    }

    async play() {
        this.logger.log(100, 'UnitVsCreature play');

        const creatures = [];

        for (let i = 0; i < CREATURE_MAPPING[this.type]; i++) {
            creatures.push(this.creature());
        }

        const team1 = new Team({
            name: 'Team 1',
            creatures,
            logger: this.logger,
        });
        
        const team2 = new Team({
            name: 'Team 2',
            creatures: [
                this.creature().unit(this.type)
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
