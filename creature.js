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
        this.logger.log(40, 'minorAction', this.name, enemyTeam.name);
    }

    majorAction(enemyTeam) {
        const target = enemyTeam.target();
        this.logger.log(40, 'majorAction', this.name, target.name);

        if (target) {
            this.logger.log(30, `${this.name} is attacking ${target.name}`);
        }
    }

    bonusAction(enemyTeam) {
        const target = enemyTeam.target();
        this.logger.log(40, 'bonusAction', this.name, target.name);

        if (target) {
            this.logger.log(30, `${this.name} has bonus attack against ${target.name}`);
        } 
    }

    alive() {
        return this.currentHealth > 0;
    }

    dead() {
        return this.currentHealth <= 0;
    }
}
