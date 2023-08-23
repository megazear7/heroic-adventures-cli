import { SKILL, AGILITY, ARCANA, WILLPOWER, STRENGTH, INIT } from "../utils/enums.js";

export default class StatBump {
    constructor(bumps) {
        this.bumps = bumps;
    }

    get skill() {
        return this.bumpValue(SKILL);
    }

    get agility() {
        return this.bumpValue(AGILITY);
    }

    get arcana() {
        return this.bumpValue(ARCANA);
    }

    get willpower() {
        return this.bumpValue(WILLPOWER);
    }

    get strength() {
        return this.bumpValue(STRENGTH);
    }

    get init() {
        return this.bumpValue(INIT);
    }

    get health() {
        if (this.bumps.length === 4) {
            return 4;
        } else if (this.bumps.length === 3) {
            return 6;
        } else if (this.bumps.length === 2) {
            return 2;
        }
    }

    bumpValue(stat) {
        if (this.bumps.length === 4) {
            return this.bumpValueOption3(stat);
        } else if (this.bumps.length === 3) {
            return this.bumpValueOption2(stat);
        } else if (this.bumps.length === 2) {
            return this.bumpValueOption1(stat);
        }

        this.throwStatBumpError();
    }

    bumpValueOption1(stat) {
        if (stat === this.bumps[0]) {
            return 2;
        } else if (stat === this.bumps[1]) {
            return 2;
        }

        return 0;
    }

    bumpValueOption2(stat) {
        if (stat === this.bumps[0]) {
            return 2;
        } else if (stat === this.bumps[1]) {
            return 1;
        } else if (stat === this.bumps[2]) {
            return 1;
        }

        return 0;
    }

    bumpValueOption3(stat) {
        if (stat === this.bumps[0]) {
            return 2;
        } else if (stat === this.bumps[1]) {
            return 1;
        } else if (stat === this.bumps[2]) {
            return 1;
        } else if (stat === this.bumps[3]) {
            return 1;
        }

        return 0;
    }

    throwStatBumpError() {
        console.log('Error in StatBump.bumpValue. Length needs to be 2, 3, or 4. bumps: ' + this.bumps.join(', '));
        process.exit(1);
    }
}