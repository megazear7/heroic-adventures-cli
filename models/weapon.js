import { addDice } from "../utils/utils.js";

export default class Weapon {
    constructor({
        name,
        damage,
        init,
        logger,
    }) {
        this.name = name;
        this.damage = damage;
        this.init = init;
        this.logger = logger;
        this.logger.log(100, 'constructor weapon');
    }

    artisan() {
        return new Weapon({
            name: 'Artisan ' + this.name,
            damage: this.damage + ' reroll',
            init: this.init,
            logger:  this.logger,
        });
    }

    mastercrafted() {
        return new Weapon({
            name: 'Mastercrafted ' + this.name,
            damage: addDice(this.damage, 1),
            init: this.init,
            logger:  this.logger,
        });
    }
}
