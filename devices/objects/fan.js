MainDevice = require('../mainDevice');

class Fan extends MainDevice {
    constuctor (speed) {
        this.speed = speed;
    }
};

module.exports = Fan;