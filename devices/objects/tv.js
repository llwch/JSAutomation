MainDevice = require('../mainDevice');

class TV extends MainDevice {
    constructor (room, power, weight, numberofChannels) {
        super(room, room, power, weight);
        this.numberofChannels = numberofChannels;
    }
}

module.exports = TV;