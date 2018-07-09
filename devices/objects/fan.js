MainDevice = require('../mainDevice');

class Fan extends MainDevice {
    fanMode (/*room, power, weight,*/ speed) {
        //super(room, room, power, weight);
        this.speed = speed;
    }
};

module.exports = Fan;