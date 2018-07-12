const MainDevice = require('../mainDevice');

class TV extends MainDevice {
    constructor (name, room, power, weight, isPowerOn, isTurnedOn, numberofChannels) {
        super(name, room, power, weight, isPowerOn, isTurnedOn);
        this.numberofChannels = numberofChannels;
    }
};

module.exports = TV;
