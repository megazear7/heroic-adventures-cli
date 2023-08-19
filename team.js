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
    }
}
