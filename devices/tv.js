import MainDevice from "./mainDevice";

class TV extends MainDevice {
    constructor (room, room, power, weight, numberofChannels) {
        super(room, room, power, weight);
        this.numberofChannels = numberofChannels;
    }
}