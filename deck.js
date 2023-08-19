import Card from "./card.js";
import { shuffle } from "./utils.js";

export default class Deck {
    constructor({
        logger,
    }) {
        this.discardPile = [];
        this.drawPile = [];
        this.logger = logger;
        logger.debug('constructor deck');
    }

    addInit(init) {
        this.logger.debug('addInit', init);

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

        if (this.allCards().find(card => card.init === init)) {
            this.logger.debug('deck already has init', init);
            return;
        }

        if (!count) {
            this.logger.error('no count found for initiative', init);
        }

        for (let i = 0; i < count; i++) {
            const card = new Card({
                init: init,
                bonus: i === 0,
                logger: this.logger,
            });
            this.logger.debug('adding card', card);
            this.discardPile.push(card);
        }
    }

    allCards() {
        this.logger.debug('allCards');
        return shuffle([ ...this.discardPile, ... this.drawPile ]);
    }

    shuffle() {
        this.logger.debug('shuffle');
        this.drawPile = this.allCards();
        this.discardPile = [];
        this.logger.debug('drawPile', this.drawPile);
        this.logger.debug('discardPile', this.discardPile);
    }
}