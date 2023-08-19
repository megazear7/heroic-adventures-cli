import Deck from "./deck.js";

export default class Encounter {
    constructor({
        creatures,
        logger,
    }) {
        this.creatures = creatures;
        this.logger = logger;
        this.deck = new Deck({ logger });
        logger.debug('constructor encounter');
    }

    fight() {
        this.logger.debug('fight');
        this.createDeck();
        //while (!this.encounterFinished()) {
            if (this.startOfRound()) {
                this.initRound();
            }
            this.doTurn();
        //}
    }

    createDeck() {
        this.logger.debug('createDeck');
        this.creatures.forEach(creature => this.deck.addInit(creature.init));
    }

    initRound() {
        this.logger.debug('initRound');
    }

    encounterFinished() {
        this.logger.debug('encounterFinished');
        return false;
    }

    startOfRound() {
        this.logger.debug('startOfRound');
        return true;
    }

    doTurn() {
        this.logger.debug('doTurn');
    }
}
