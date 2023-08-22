import { rollExplode, roll } from "./utils.js";
import { CRIT, NO_CRIT } from "./enums.js";

export default class Creature {
    constructor({
        name,
        health,
        skill,
        agility,
        arcana,
        willpower,
        strength,
        init,
        block,
        damage,
        toughness,
        logger,
    }) {
        this.name = name;
        this.health = health;
        this.currentHealth = health;
        this.skill = skill;
        this.agility = agility;
        this.arcana = arcana;
        this.willpower = willpower;
        this.strength = strength;
        this.init = init;
        this.block = block;
        this.damage = damage;
        this.toughness = toughness;
        this.logger = logger;
        this.usedMajorAction = false;
        this.logger.log(100, 'constructor creature');
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
        const dieRoll = roll('1d12');
        return {
            roll: dieRoll + this.skill,
            crit: dieRoll === 12,
        };
    }

    rollAgility() {
        const dieRoll = roll('1d12');
        return {
            roll: dieRoll + this.agility,
            blocked: roll <= this.block,
        };
    }
    
    rollDamage(crit) {
        return rollExplode(this.damage, crit ? CRIT : NO_CRIT) + this.strength;
    }

    takeDamage(damage) {
        const netDamage = damage > this.toughness ? damage - this.toughness : 0;
        this.logger.log(20, `${this.name} was hit for ${damage} - ${this.toughness} and took ${netDamage} damage`);
        this.currentHealth -= netDamage;
    }

    checkAttackResult(attackRoll, defenseRoll) {
        if (defenseRoll.blocked) {
            return {
                hit: false,
                msg: 'was blocked',
            };
        } else if (attackRoll.crit && attackRoll.roll > defenseRoll.roll) {
            return {
                hit: true,
                msg: 'critically hit',
            };
        } else if (attackRoll.roll > defenseRoll.roll) {
            return {
                hit: true,
                msg: 'hit',
            };
        } else {
            return {
                hit: false,
                msg: 'missed',
            };
        }
    }

    makeAttack(target) {
        const attackRoll = this.rollSkill();
        const defenseRoll = target.rollAgility();
        const results = this.checkAttackResult(attackRoll, defenseRoll);
        this.logger.log(20, `${this.name} is attacking ${target.name}: ${attackRoll.roll} vs. ${defenseRoll.roll} ${results.msg}`);

        if (results.hit) {
            this.logger.log(20, `${this.name} ${attackRoll.crit ? 'critically' : ''} hit ${target.name}`);
            target.takeDamage(this.rollDamage(attackRoll.crit));
        }
    }

    alive() {
        return this.currentHealth > 0;
    }

    dead() {
        return this.currentHealth <= 0;
    }
}
