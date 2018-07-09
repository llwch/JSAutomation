class MainDevice {
    deviceMode(room, power, weight, electricityGrid, isTurnedOn ) {
        this.room = room;
        this.power = power;
        this.weight = weight;
        this.electricityGrid = electricityGrid;
        this.isTurnedOn = isTurnedOn;
    }
};
module.exports = MainDevice;