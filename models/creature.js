import { rollExplode, roll } from "../utils/utils.js";
import { CRIT, NO_CRIT, WARBAND, HOST, LEGION } from "../utils/enums.js";
import Unit from "./unit.js";

export default class Creature {
    constructor({
        name,
        race,
        charClass,
        statBump,
        weapon,
        shield,
        armor,
        logger,
    }) {
        this.name = name;
        this.race = race;
        this.charClass = charClass;
        this.statBump = statBump;
        this.weapon = weapon;
        this.shield = shield;
        this.armor = armor;
        this.logger = logger;
        this.usedMajorAction = false;
        this.logger.log(100, 'constructor creature');
    }

    get health() {
        return this.race.health + this.charClass.health + this.statBump.health;
    }

    get skill() {
        return this.race.skill + this.statBump.skill;
    }

    get agility() {
        return this.race.agility + this.statBump.agility;
    }

    get arcana() {
        return this.race.arcana + this.statBump.arcana;
    }

    get willpower() {
        return this.race.willpower + this.statBump.willpower;
    }

    get strength() {
        return this.race.strength + this.statBump.strength;
    }

    get init() {
        const calculatedInit = this.race.init + this.weapon.init + this.shield.init + this.statBump.init;
        if (calculatedInit < 1) {
            return 1;
        } else if (calculatedInit > 15) {
            return 15;
        } else {
            return calculatedInit;
        }
    }

    get toughness() {
        return this.armor.toughness;
    }

    get damage() {
        return this.weapon.damage;
    }

    get block() {
        return this.shield.block;
    }

    reset() {
        this.currentHealth = this.health;
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
            roll: dieRoll + this.agility + this.armor.agility,
            blocked: dieRoll <= this.block,
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
            this.logger.log(20, `${this.name} ${attackRoll.crit ? 'critically ' : ''}hit ${target.name}`);
            target.takeDamage(this.rollDamage(attackRoll.crit));
        }
    }

    alive() {
        return this.currentHealth > 0;
    }

    dead() {
        return ! this.alive();
    }

    warband() {
        return new Unit({
            creature: this,
            type: WARBAND,
            logger: this.logger,
        });
    }

    host() {
        return new Unit({
            creature: this,
            type: HOST,
            logger: this.logger,
        });
    }

    legion() {
        return new Unit({
            creature: this,
            type: LEGION,
            logger: this.logger,
        });
    }
}
