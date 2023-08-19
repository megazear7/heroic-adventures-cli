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
        this.previousCard = undefined;
        this.currentCard = undefined;
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
        this.creatures.forEach(creature => this.deck.addInit(creature.team, creature.init));
    }

    initRound() {
        this.logger.debug('initRound');
        this.deck.shuffle();
        this.creatures.forEach(creature => creature.usedMajorAction = false);
    }

    encounterFinished() {
        this.logger.debug('encounterFinished');
        return false;
    }

    startOfRound() {
        this.logger.debug('startOfRound');
        return this.deck.drawPile.length === 0;
    }

    creaturesWithMatchingInit(team, init) {
        this.logger.debug('creaturesWithMatchingInit', team.name, init);
        return team.creatures.filter(creature => creature.init === init);
    }

    isBonus() {
        return this.currentCard.bonus && this.currentCard?.init > this.previousCard?.init;
    }

    doTurn() {
        this.logger.debug('doTurn', this.previousCard?.init, this.currentCard?.init);
        this.previousCard = this.currentCard;
        this.currentCard = this.deck.drawCard();
        const creatures = this.creaturesWithMatchingInit(this.currentCard.team, this.currentCard.init);
        creatures.forEach(creature => creature.takeAction(creature.team === this.team1 ? this.team2 : this.team1, this.isBonus()));
    }
}
