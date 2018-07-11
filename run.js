const Fan = require('./devices/objects/fan');
const TV = require('./devices/objects/tv');
const WashingMachine = require('./devices/objects/washing_machine');

const fan = new Fan ('bedroom', 900, 1400, false, true, 9000);
const tv = new TV ('main room', 111, 1222, true, false, 90);
const wm = new WashingMachine ('bathroom', 10000, 1400, false, false, 'Soft');
console.log(fan.fanSpeed + ' ' + fan.power + ' ' + fan.room);
console.log(tv.numberofChannels + ' ' + tv.power + ' ' + tv.room);
console.log(wm.mode + ' ' + wm.power + ' ' +wm.room);

