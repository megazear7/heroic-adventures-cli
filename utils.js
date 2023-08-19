import rlp from 'readline';

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
