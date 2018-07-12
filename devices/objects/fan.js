const MainDevice = require('../mainDevice');

class Fan extends MainDevice {
    constructor (name, room, power, weight, isPowerOn, isTurnedOn, fanSpeed) {
        super(name, room, power, weight, isPowerOn, isTurnedOn);
        this.fanSpeed = fanSpeed;
    }
};

module.exports = Fan;