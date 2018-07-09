//const MainDevice = require('./devices/mainDevice');
const Fan = require('./devices/objects/fan');



const fan = new Fan ('bedroom', 900, 1400, false, true, 9000);
//fan.fanMode(34);
console.log(fan.fanSpeed + ' ' + fan.power + ' ' +fan.room);
//const wMashine = new WashingMachine (11,22,33,'true', 'true');
//console.log(wMashine.power);
