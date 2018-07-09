//const MainDevice = require('./devices/mainDevice');
const Fan = require('./devices/objects/fan');



const fan = new Fan (1,2,3,'true', 'true', 34, 44);
//fan.fanMode(34);
console.log(fan.speed + ' ' + fan.power + ' ' +fan.room);
//const wMashine = new WashingMachine (11,22,33,'true', 'true');
//console.log(wMashine.power);
