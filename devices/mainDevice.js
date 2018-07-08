export default class MainDevice {
    constructor(room, power, weight, electricityGrid, isTurnedOn ) {
        this.room = room;
        this.power = power;
        this.electricityGrid = electricityGrid;
        this.isTurnedOn = false;
    }
};