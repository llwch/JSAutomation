const MainDevice = require('../mainDevice');

class WashingMachine extends MainDevice {
    constructor (name, room, power, weight, isPowerOn, isTurnedOn, mode) {
        super(name, room, power, weight, isPowerOn, isTurnedOn);
        this.mode = mode;
    }
};

module.exports = WashingMachine;
