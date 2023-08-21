import rlp from 'readline';
import { NO_EXPLODE, EXPLODE, CRIT, NO_CRIT } from './enums.js';

export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const wait = async function(seconds) {
    return new Promise(resolve => setTimeout(() => resolve(), seconds * 1000));
}

export const random = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const dice = function(size) {
    return random(1, size);
}

export const diceExplode = function(size) {
    const roll = random(1, size);
    return roll === size ? roll + diceExplode(size) : roll;
}

/**
 * '1d12'
 * '1d12'
 * '2d4'
 * '1d6+2d8'
 * '1d6 + 2d8'
 */
export const roll = function(diceArg, crit = NO_CRIT, explode = NO_EXPLODE) {
    const diceVals = diceArg.split('+');
    let total = 0;
    diceVals.forEach(diceVal => {
        const [ count, size ] = diceVal.split('d');
        const diceCount = parseInt(count) + (crit === CRIT ? 1 : 0);
        for (var i = 0; i < diceCount; i++) {
            total += explode === EXPLODE ? diceExplode(parseInt(size)) : dice(parseInt(size));
        }
    });
    return total;
}

export const rollExplode = function(dice) {
    return roll(dice, EXPLODE);
}

const rl = rlp.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function ask(msg) {
    return new Promise(resolve => {
        rl.question(msg, input => resolve(input));
    });
}

export function close() {
    rl.close();
}
