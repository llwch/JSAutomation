class MainDevice {
    constructor(name, room, power, weight, isPowerOn, isTurnedOn ) {
        this.name = name;
        this.room = room;
        this.power = power;
        this.weight = weight;
        this.isPowerOn = isPowerOn !== 'false' ? true : false;
        this.isTurnedOn = isTurnedOn !== 'false' ? true : false;
    }
};
module.exports = MainDevice;