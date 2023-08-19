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
        logger.debug('constructor creature');
    }
}
