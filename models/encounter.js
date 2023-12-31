import Deck from "./deck.js";
import { ask, close } from "../utils/utils.js";

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
        this.logger.log(100, 'constructor encounter');
    }

    reset() {
        this.team1.reset();
        this.team2.reset();
    }

    stats() {
        return {
            team1: this.team1.stats(),
            team2: this.team2.stats(),
        }
    }

    status() {
        return {
            team1: this.team1.status(),
            team2: this.team2.status(),
        }
    }

    async fight() {
        this.logger.log(50, 'fight');
        this.logger.log(80, this.stats());
        this.createDeck();
        while (!this.encounterFinished()) {
            if (this.startOfRound()) {
                this.initRound();
            }
            this.logger.log(80, this.status());
            this.doTurn();
            this.logger.pause && await ask('Proceed?');
        }

        const winner = this.team1.lost() ? this.team2 : this.team1;
        const loser = this.team1.lost() ? this.team1 : this.team2;
        this.logger.log(20, `${winner.name} defeated ${loser.name}`);

        close();

        return { winner, loser };
    }

    get creatures() {
        return [...this.team1.creatures, ...this.team2.creatures ];
    }

    createDeck() {
        this.logger.log(70, 'createDeck');
        this.creatures.forEach(creature => this.deck.addInit(creature.team, creature.init));
    }

    initRound() {
        this.logger.log(70, 'initRound');
        this.deck.shuffle();
        this.previousCard = undefined;
        this.currentCard = undefined;
        this.creatures.forEach(creature => creature.usedMajorAction = false);
    }

    encounterFinished() {
        return this.team1.lost() || this.team2.lost();
    }

    startOfRound() {
        this.logger.log(60, 'startOfRound');
        return this.deck.drawPile.length === 0;
    }

    creaturesWithMatchingInit(team, init) {
        this.logger.log(80, 'creaturesWithMatchingInit', team.name, init);
        return team.creatures.filter(creature => creature.init === init);
    }

    isBonus() {
        if (this.currentCard.bonus && !this.previousCard) {
            this.logger.log(80, 'Bonus card came up at start of round');
        }
        return this.currentCard.bonus && (this.currentCard.init > this.previousCard?.init || !this.previousCard);
    }

    doTurn() {
        this.logger.log(90, 'doTurn');
        this.previousCard = this.currentCard;
        this.currentCard = this.deck.drawCard();
        const creatures = this.creaturesWithMatchingInit(this.currentCard.team, this.currentCard.init);
        creatures.forEach(creature => creature.takeAction(creature.team === this.team1 ? this.team2 : this.team1, this.isBonus()));
    }
}
