MainDevice = require('../mainDevice');

class WashingMachine extends MainDevice {
    constructor (room, power, weight, mode) {
        super(room, room, power, weight);
        this.mode = [];
    }
}

module.exports = WashingMachine;