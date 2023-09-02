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

export const addDice = function(diceArg, amount) {
    return diceArg.split('+').map(diceVal => {
        const [ count, size ] = diceVal.split('d');
        const diceCount = parseInt(count) + amount;
        return diceCount + 'd' + size;
    }).join('+');
}

export const sum = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

export const avg = function(arr) {
    return sum(arr) / arr.length;
}

export const removeSmallest = function(arr) {
    return arr.sort((a, b) => a - b).slice(1, arr.length);
}

/**
 * '1d12'
 * '1d12'
 * '2d4'
 * '1d6+2d8'
 * '1d6 + 2d8'
 */
export const roll = function(diceArg, crit = NO_CRIT, explode = NO_EXPLODE) {
    const log = false;
    const reroll = diceArg.includes('reroll');
    log && reroll && console.log('Doing reroll');
    const doExplode = explode === EXPLODE;
    const diceVals = diceArg.split('+');
    let rolls = [];
    diceVals.forEach(diceVal => {
        log && console.log('diceVal: ' + diceVal);
        const [ count, size ] = diceVal.split('d');
        const diceCount = parseInt(count) + (crit === CRIT ? 1 : 0) + (reroll ? 1 : 0);
        log && console.log(`diceCount: ${diceCount}`);
        const innerRolls = [];
        for (var i = 0; i < diceCount; i++) {
            const sizeInt = parseInt(size);
            const rollResult = doExplode ? diceExplode(sizeInt) : dice(sizeInt);
            log && console.log(`Rolling ${doExplode ? 'exploding ' : ''}1d${sizeInt} and got ${rollResult}`);
            innerRolls.push(rollResult);
        }
        log && console.log('innerRolls: ' + innerRolls);
        const innerFinalRolls = reroll ? removeSmallest(innerRolls) : innerRolls;
        log && console.log('innerFinalRolls: ' + innerFinalRolls);
        const innerTotal = sum(innerFinalRolls);
        rolls.push(innerTotal);
        log && console.log(`total: ${sum(rolls)}`);
    });
    return sum(rolls);
}

export const rollExplode = function(dice, crit = NO_CRIT) {
    return roll(dice, crit, EXPLODE);
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
