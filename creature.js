export default class Creature {
    constructor({
        name,
        skill,
        agility,
        arcana,
        willpower,
        strength,
        init,
        logger,
    }) {
        this.name = name;
        this.skill = skill;
        this.agility = agility;
        this.arcana = arcana;
        this.willpower = willpower;
        this.strength = strength;
        this.init = init;
        this.logger = logger;
        this.usedMajorAction = false;
        this.usedHeroicAction = false;
        logger.debug('constructor creature');
    }

    takeAction(encounter) {
        this.logger.debug('takeAction');
    }
}
