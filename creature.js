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
        logger.debug('constructor creature');
    }

    takeAction(enemyTeam, isBonus) {
        this.logger.debug('takeAction', this.team.name, enemyTeam.name, isBonus);

        if (isBonus) {
            this.bonusAction(enemyTeam);
        } else if (this.usedMajorAction) {
            this.minorAction(enemyTeam);
        } else {
            this.majorAction(enemyTeam);
        }
    }

    minorAction(enemyTeam) {
        this.logger.debug('minorAction', this.name, enemyTeam.name);
    }

    majorAction(enemyTeam) {
        this.logger.debug('majorAction', this.name, enemyTeam.name);
        const target = enemyTeam.target();

        if (target) {
            this.logger.log(`${this.name} is attacking ${target.name}`);
        }
    }

    bonusAction(enemyTeam) {
        this.logger.debug('bonusAction', this.name, enemyTeam.name);
        const target = enemyTeam.target();

        if (target) {
            this.logger.log(`${this.name} has bonus attack against ${target.name}`);
        } 
    }

    alive() {
        return this.currentHealth > 0;
    }

    dead() {
        return this.currentHealth <= 0;
    }
}
