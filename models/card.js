export default class Card {
    constructor({
        team,
        init,
        bonus,
        logger,
    }) {
        this.team = team;
        this.init = init;
        this.bonus = bonus;
        this.logger = logger;
        this.logger.log(100, 'constructor card');
    }
}
