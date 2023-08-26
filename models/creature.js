import { rollExplode, roll } from "../utils/utils.js";
import { CRIT, NO_CRIT, WARBAND, HOST, LEGION, SKILL, AGILITY, ARCANA, WILLPOWER, STRENGTH, INIT, MONSTER } from "../utils/enums.js";
import Unit from "./unit.js";

export default class Creature {
    constructor({
        name,
        type,
        id,
        race,
        charClass,
        statBump,
        levels,
        minion,
        weapon,
        shield,
        armor,
        features,
        minorMove,
        majorMove,
        logger,
    }) {
        this.name = name;
        this.type = type || MONSTER;
        this.innerId = id;
        this.race = race;
        this.charClass = charClass;
        this.statBump = statBump;
        this.levels = levels || [];
        this.minion = minion || 0;
        this.weapon = weapon;
        this.shield = shield;
        this.armor = armor;
        this.features = features;
        this.minorMove = minorMove || race.minorMove;
        this.majorMove = majorMove || race.majorMove;
        this.logger = logger;
        this.usedMajorAction = false;
        this.logger.log(100, 'constructor creature');
    }

    get id() {
        return `${this.name} (${this.innerId})`;
    }

    get healthFromLevels() {
        let levelBonus = 0;
        this.levels.forEach(() => levelBonus += this.race.healthIncrease + this.charClass.healthIncrease);
        return Math.round(levelBonus);
    }

    get minionHealthDrop() {
        if (!this.minion) {
            return 0;
        } else {
            let level1Health = this.race.health + this.charClass.health + this.statBump.health;
            return Math.round((level1Health * this.minion) / 3);
        }
    }

    get level() {
        if (this.minion) {
            return '1/' + (this.minion + 1);
        } else {
            return this.levels.length + 1 + '';
        }
    }

    get health() {
        return this.race.health + this.charClass.health + this.statBump.health + this.healthFromLevels - this.minionHealthDrop;
    }

    get skill() {
        return this.race.skill + this.statBump.skill + this.levelBumps(SKILL);
    }

    get agility() {
        return this.race.agility + this.statBump.agility + this.levelBumps(AGILITY) + this.armor.agility;
    }

    get arcana() {
        return this.race.arcana + this.statBump.arcana + this.levelBumps(ARCANA);
    }

    get willpower() {
        return this.race.willpower + this.statBump.willpower + this.levelBumps(WILLPOWER);
    }

    get strength() {
        return this.race.strength + this.statBump.strength + this.levelBumps(STRENGTH);
    }

    get init() {
        const calculatedInit = this.race.init + this.weapon.init + this.shield.init + this.statBump.init + this.levelBumps(INIT);
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

    levelBumps(stat) {
        return this.levels.filter(level => level.includes(stat)).length;
    }

    data() {
        return {
            name: this.name,
            type: this.type,
            level: this.level,
            race: this.race,
            minorMove: this.minorMove,
            majorMove: this.majorMove,
            charClass: this.charClass,
            statBump: this.statBump,
            levels: this.levels,
            minion: this.minion,
            weapon: this.weapon,
            shield: this.shield,
            armor: this.armor,
            features: this.features,
            stats: this.calculatedStats(),
            explain: this.stats(),
        };
    }

    calculatedStats() {
        return {
            health: this.health,
            skill: this.skill,
            agility: this.agility,
            arcana: this.arcana,
            willpower: this.willpower,
            strength: this.strength,
            toughness: this.toughness,
            init: this.init,
        }
    }

    stats() {
        return {
            health: `${this.health}: ${this.race.health} (race) + ${this.charClass.health} (class) + ${this.statBump.health} (creation) + ${this.healthFromLevels} (levels) - ${this.minionHealthDrop} (minion)`,
            skill: `${this.skill}: ${this.race.skill} (race) + ${this.statBump.skill} (creation) + ${this.levelBumps(SKILL)} (level)`,
            agility: `${this.agility}: ${this.race.agility} (race) + ${this.statBump.agility} (creation) + ${this.levelBumps(AGILITY)} (level) - ${Math.abs(this.armor.agility)} (armor)`,
            arcana: `${this.arcana}: ${this.race.arcana} (race) + ${this.statBump.arcana} (creation) + ${this.levelBumps(ARCANA)} (level)`,
            willpower: `${this.willpower}: ${this.race.willpower} (race) + ${this.statBump.willpower} (creation) + ${this.levelBumps(WILLPOWER)} (level)`,
            strength: `${this.strength}: ${this.race.strength} (race) + ${this.statBump.strength} (creation) + ${this.levelBumps(STRENGTH)} (level)`,
            init: `${this.init}: ${this.race.init} (race) + ${this.weapon.init} (weapon) - ${Math.abs(this.shield.init)} (shield) + ${this.statBump.init} (creation) + ${this.levelBumps(INIT)} (level)`,
        };
    }

    status() {
        return `${this.name} (${this.currentHealth}/${this.health})`;
    }

    reset() {
        this.currentHealth = this.health;
    }

    takeAction(enemyTeam, isBonus) {
        this.logger.log(50, 'takeAction', this.name, enemyTeam.name, isBonus);

        if (this.alive()) {
            if (isBonus) {
                this.bonusAction(enemyTeam);
            } else if (this.usedMajorAction) {
                this.minorAction(enemyTeam);
            } else {
                this.majorAction(enemyTeam);
            }
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
            this.logger.log(25, `${this.name} ${attackRoll.crit ? 'critically ' : ''}hit ${target.name}`);
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
