import MainDevice from "./mainDevice";

class Fan extends MainDevice {
    constructor (room, room, power, weight, speed) {
        super(room, room, power, weight);
        this.speed = speed;
    }
};