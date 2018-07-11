const MainDevice = require('../mainDevice');

class WashingMachine extends MainDevice {
    constructor (room, power, weight, isPowerOn, isTurnedOn, mode) {
        super(room, power, weight, isPowerOn, isTurnedOn);
        this.mode = mode;
    }
};

module.exports = WashingMachine;
