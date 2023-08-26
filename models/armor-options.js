import Armor from "./armor.js";

export default logger => ({
    noArmor: new Armor({
        name: '',
        toughness: 0,
        agility: 0,
        logger,
    }),
    hide: new Armor({
        name: 'Hide',
        toughness: 2,
        agility: -2,
        logger,
    }),
    gambeson: new Armor({
        name: 'Gambeson',
        toughness: 2,
        agility: -1,
        logger,
    }),
    scalemail: new Armor({
        name: 'Scalemail',
        toughness: 3,
        agility: -2,
        logger,
    }),
    chainmail: new Armor({
        name: 'Chainmail',
        toughness: 4,
        agility: -3,
        logger,
    }),
    halfplate: new Armor({
        name: 'Halfplate',
        toughness: 5,
        agility: -4,
        logger,
    }),
    fullplate: new Armor({
        name: 'Fullplate',
        toughness: 6,
        agility: -5,
        logger,
    }),
});
