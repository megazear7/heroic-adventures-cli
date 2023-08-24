import Shield from "./shield.js";

export default logger => ({
    noShield: new Shield({
        name: 'No Shield',
        block: 0,
        init: 0,
        logger,
    }),
    small: new Shield({
        name: 'Small Shield',
        block: 1,
        init: -3,
        logger,
    }),
    large: new Shield({
        name: 'Large Shield',
        block: 2,
        init: -5,
        logger,
    }),
});
