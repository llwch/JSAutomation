const MainDevice = require('../mainDevice');

class TV extends MainDevice {
    constructor (room, power, weight, isPowerOn, isTurnedOn, numberofChannels) {
        super(room, power, weight, isPowerOn, isTurnedOn);
        this.numberofChannels = numberofChannels;
    }
};

module.exports = TV;
