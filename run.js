//const MainDevice = require('./devices/mainDevice');
const Fan = require('./devices/objects/fan.js');

const fan = new Fan;
fan.constructor('34');
console.log(fan.power);
