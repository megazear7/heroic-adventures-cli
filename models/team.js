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
        this.wins = 0;
        this.losses = 0;
        this.logger.log(100, 'constructor team');
    }

    stats() {
        return this.creatures.map(creature => creature.stats());
    }

    status() {
        return this.creatures.map(creature => creature.status());
    }

    reset() {
        this.creatures.forEach(creature => creature.reset());
    }

    target() {
        return this.creatures.find(creature => creature.alive());
    }

    lost() {
        return this.creatures.filter(creature => creature.alive()).length === 0;
    }
}
