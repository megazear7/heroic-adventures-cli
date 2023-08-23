export default class Armor {
    constructor({
        name,
        toughness,
        agility,
        logger,
    }) {
        this.name = name;
        this.toughness = toughness;
        this.agility = agility;
        this.logger = logger;
        this.logger.log(100, 'constructor armor');
    }

    artisan() {
        return new Armor({
            name: 'Artisan ' + this.name,
            toughness: this.toughness + 1,
            agility: this.agility,
            logger:  this.logger,
        });
    }

    artisan() {
        return new Armor({
            name: 'Mastercrafted ' + this.name,
            toughness: this.toughness + 2,
            agility: this.agility,
            logger:  this.logger,
        });
    }
}
