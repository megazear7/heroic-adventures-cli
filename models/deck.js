import Card from "./card.js";
import { shuffle } from "../utils/utils.js";

export default class Deck {
    constructor({
        logger,
    }) {
        this.discardPile = [];
        this.drawPile = [];
        this.logger = logger;
        this.logger.log(100, 'constructor deck');
    }

    addInit(team, init) {
        this.logger.log(90, 'addInit', init);

        const count = {
            1: 2,
            2: 2,
            3: 2,
            4: 2,
            5: 3,
            6: 3,
            7: 3,
            8: 3,
            9: 3,
            10: 4,
            11: 4,
            12: 4,
            13: 4,
            14: 4,
            15: 4,
        }[init];

        if (this.allCards().find(card => card.init === init && card.team === team)) {
            this.logger.log(50, 'deck already has init for team', team, init);
            return;
        }

        if (!count) {
            this.logger.error('no count found for initiative', init);
        }

        for (let i = 0; i < count; i++) {
            const card = new Card({
                team,
                init,
                bonus: i === 0,
                logger: this.logger,
            });
            this.logger.log(90, 'adding card', card);
            this.discardPile.push(card);
        }
    }

    allCards() {
        this.logger.log(90, 'allCards');
        return shuffle([ ...this.discardPile, ... this.drawPile ]);
    }

    shuffle() {
        this.logger.log(95, 'shuffle');
        this.drawPile = this.allCards();
        this.discardPile = [];
        this.logger.log(97, 'drawPile', this.drawPile);
        this.logger.log(97, 'discardPile', this.discardPile);
    }

    drawCard() {
        this.logger.log(95, 'drawCard');
        const card = this.drawPile.pop();
        this.discardPile.push(card);
        this.logger.log(97, 'drawPile', this.drawPile.length);
        this.logger.log(97, 'discardPile', this.discardPile.length);
        return card;
    }
}