export default class Encounter {
    constructor({
        creatures,
        logger,
    }) {
        this.creatures = creatures;
        this.logger = logger;
        logger.debug('constructor encounter');
    }
}
