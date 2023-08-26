export default class Shield {
    constructor({
        name,
        block,
        init,
        logger,
    }) {
        this.name = name;
        this.block = block;
        this.init = init;
        this.enhanced = true;
        this.logger = logger;
        this.logger.log(100, 'constructor armor');
    }

    artisan() {
        return new Armor({
            name: 'Artisan ' + this.name,
            block: this.block,
            init: this.init + 1,
            logger:  this.logger,
        });
    }

    mastercrafted() {
        return new Armor({
            name: 'Mastercrafted ' + this.name,
            block: this.block,
            init: this.init + 2,
            logger:  this.logger,
        });
    }
}
