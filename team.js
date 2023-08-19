export default class Team {
    constructor({
        name,
        creatures,
        logger,
    }) {
        this.name = name;
        this.creatures = creatures;
        this.logger = logger;
        this.creatures.forEach(creature => creature.team = this);
        this.logger.log(100, 'constructor team');
    }

    target() {
        return this.creatures.find(creature => creature.alive());
    }
}
