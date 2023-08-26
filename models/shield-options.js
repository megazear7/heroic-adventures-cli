import Shield from "./shield.js";

export default logger => ({
    noShield: new Shield({
        name: '',
        block: 0,
        init: 0,
        logger,
    }),
    smallShield: new Shield({
        name: 'Small Shield',
        block: 1,
        init: -3,
        logger,
    }),
    largeShield: new Shield({
        name: 'Large Shield',
        block: 2,
        init: -5,
        logger,
    }),
});
