const MainDevice = require('../mainDevice');

class Fan extends MainDevice {
    constuctor (room, power, weight, isPowerOn, isTurnedOn, fanSpeed) {
        //super(room, power, weight, isPowerOn, isTurnedOn);
        this.fanSpeed = fanSpeed;
    }
};

module.exports = Fan;