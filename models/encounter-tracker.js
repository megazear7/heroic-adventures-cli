export default class EncounterTracker {
    constructor({
        encounters,
        logger,
    }) {
        this.encounters = encounters;
        this.logger = logger;

        this.logger.log(100, 'EncounterTracker constructor', this.encounters);
    }

    async play() {
        this.logger.log(100, 'EncounterTracker constructor', this.encounters);
        const results = [];
        for (const encounter of this.encounters) {
            results.push(await encounter.play());
        }
        return results;
    }
}