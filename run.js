//const MainDevice = require('./devices/mainDevice');
const Fan = require('./devices/objects/fan');

const fan = new Fan;
fan.fanMode(34);
fan.deviceMode(1,2,3,'true', 'true');
console.log(fan.speed + ' ' + fan.power);
