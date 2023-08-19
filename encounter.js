import Deck from "./deck.js";
import { ask, close } from "./utils.js";

export default class Encounter {
    constructor({
        team1,
        team2,
        logger,
    }) {
        this.team1 = team1;
        this.team2 = team2;
        this.logger = logger;
        this.deck = new Deck({ logger });
        logger.debug('constructor encounter');
    }

    async fight() {
        this.logger.debug('fight');
        this.createDeck();
        while (!this.encounterFinished()) {
            if (this.startOfRound()) {
                this.initRound();
            }
            this.doTurn();
            this.logger.pause && await ask('Proceed?');
        }

        close();
    }

    get creatures() {
        return [...this.team1.creatures, ...this.team2.creatures ];
    }

    createDeck() {
        this.logger.debug('createDeck');
        this.creatures.forEach(creature => this.deck.addInit(creature.init));
    }

    initRound() {
        this.logger.debug('initRound');
        this.deck.shuffle();
        this.creatures.forEach(creature => creature.usedMajorAction = false);
        this.creatures.forEach(creature => creature.usedHeroicAction = false);
    }

    encounterFinished() {
        this.logger.debug('encounterFinished');
        return false;
    }

    startOfRound() {
        this.logger.debug('startOfRound');
        return this.deck.drawPile.length === 0;
    }

    creaturesWithMatchingInit(init) {
        this.logger.debug('creaturesWithMatchingInit', init);
        return this.creatures.filter(creature => creature.init === init);
    }

    doTurn() {
        this.logger.debug('doTurn');
        const card = this.deck.drawCard();
        const creatures = this.creaturesWithMatchingInit(card.init);
        creatures.forEach(creature => creature.takeAction(this, creature.team === this.team1 ? this.team2 : this.team1));
    }
}
