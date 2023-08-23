import Weapon from "./weapon.js";

export default logger => ({
    armingSword: new Weapon({
        name: 'Arming Sword',
        damage: '1d6',
        init: 2,
        logger,
    }),
});
