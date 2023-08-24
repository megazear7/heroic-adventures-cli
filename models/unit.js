import { addDice, rollExplode } from "../utils/utils.js";
import { CRIT, NO_CRIT } from "../utils/enums.js";

export default class Unit {
    constructor({
        creature,
        type,
        logger,
    }) {
        this.creature = creature;
        this.type = type;
        this.logger = logger;
        this.creatures = {
            WARBAND: 5,
            HOST:    10,
            LEGION:  20,
        }[type];
        this.statBump = {
            WARBAND: 2,
            HOST:    3,
            LEGION:  4,
        }[type];
        this.name = {
            WARBAND: this.creature.name + ' warband',
            HOST:    this.creature.name + ' host',
            LEGION:  this.creature.name + ' legion',
        }[type];
        this.damageDiceBump = {
            WARBAND: 1,
            HOST:    2,
            LEGION:  3,
        }[type];
        this.init = this.creature.init;
        this.team = this.creature.team;
        this.damage = addDice(this.creature.damage, this.damageDiceBump);
        this.casualties = 0;
    }

    status() {
        return `${this.name} (${this.casualties}/${this.creatures})`;
    }

    reset() {
        this.casualties = 0;
    }

    takeAction(enemyTeam, isBonus) {
        this.logger.log(50, 'takeAction', this.name, enemyTeam.name, isBonus);

        if (isBonus) {
            this.bonusAction(enemyTeam);
        } else if (this.usedMajorAction) {
            this.minorAction(enemyTeam);
        } else {
            this.majorAction(enemyTeam);
        }
    }

    minorAction(enemyTeam) {
        this.logger.log(40, 'minorAction', this.name);
    }

    majorAction(enemyTeam) {
        this.logger.log(40, 'majorAction', this.name);
        const target = enemyTeam.target();

        if (target) {
            this.makeAttack(target);
        }
    }

    bonusAction(enemyTeam) {
        this.logger.log(40, 'bonusAction', this.name);
        const target = enemyTeam.target();

        if (target) {
            this.makeAttack(target);
        }
    }

    rollSkill() {
        const result = this.creature.rollSkill();
        return {
            roll: result.roll + this.statBump,
            crit: result.crit,
        }
    }

    rollAgility() {
        const result = this.creature.rollAgility();
        return {
            roll: result.roll + this.statBump,
            blocked: result.blocked,
        }
    }
    
    rollDamage(crit) {
        return rollExplode(this.damage, crit ? CRIT : NO_CRIT) + this.creature.strength + this.statBump;
    }

    takeDamage(damage) {
        const netDamage = damage > this.creature.toughness ? damage - this.creature.toughness : 0;
        const casualties = Math.round(netDamage / this.creature.health);
        this.logger.log(20, `${this.name} was hit for ${damage} - ${this.creature.toughness} and took ${casualties} ${casualties === 1 ? 'casualty' : 'casualties'} `);
        this.casualties += casualties;
    }

    makeAttack(target) {
        const attackRoll = this.rollSkill();
        const defenseRoll = target.rollAgility();
        const results = this.creature.checkAttackResult(attackRoll, defenseRoll);
        this.logger.log(20, `${this.name} is attacking ${target.name}: ${attackRoll.roll} vs. ${defenseRoll.roll} ${results.msg}`);

        if (results.hit) {
            this.logger.log(20, `${this.name} ${attackRoll.crit ? 'critically ' : ''}hit ${target.name}`);
            target.takeDamage(this.rollDamage(attackRoll.crit));
        }
    }

    alive() {
        return this.casualties < this.creatures;
    }

    dead() {
        return ! this.alive();
    }
}