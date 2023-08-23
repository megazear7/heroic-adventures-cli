import { rollExplode, roll, close } from "../utils/utils.js";

const count = 1000;
let noExplode = 0;
let noRerollWithExplode = 0;
let rerollsWithExplode = 0;
let extraDice = 0;

for (let i = 0; i < count; i++) {
    noExplode += roll('1d6');
}

for (let i = 0; i < count; i++) {
    noRerollWithExplode += rollExplode('1d6');
}

for (let i = 0; i < count; i++) {
    rerollsWithExplode += rollExplode('1d6 reroll');
}

for (let i = 0; i < count; i++) {
    extraDice += rollExplode('2d6');
}

console.log(`
noExplode: ${noExplode / count}
noRerollWithExplode: ${noRerollWithExplode / count}
rerollsWithExplode: ${rerollsWithExplode / count}
extraDice: ${extraDice / count}
`)

close();
