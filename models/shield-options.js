import Shield from "./shield.js";

export default logger => ({
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
