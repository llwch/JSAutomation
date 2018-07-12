const Fan = require('./devices/objects/fan');
const TV = require('./devices/objects/tv');
const WashingMachine = require('./devices/objects/washing_machine');

let fan = new Fan ('Fan #1', 'bedroom', 900, 1400, false, false, 9000);
let tv = new TV ('TV #1','main room', 111, 1222, true, false, 90);
let wm = new WashingMachine ('WM #1', 'bathroom', 10000, 1400, false, false, 'Soft');
console.log(fan.fanSpeed + ' ' + fan.power + ' ' + fan.room);
console.log(tv.numberofChannels + ' ' + tv.power + ' ' + tv.room);
console.log(wm.mode + ' ' + wm.power + ' ' +wm.room);

let devices = [fan, tv, wm];

//по 1 парам
devices.sort(function(a, b){
    return b.power - a.power;
})

for (let i=0; i < devices.length; i++){
    console.log(devices[i].name + ' ' + devices[i].power)
};

//по мощн
let allPower = 0;

for (let t=0; t < devices.length; t++){
    allPower = allPower + devices[t].power;
};
console.log('Суммарная мощность:' + ' ' + allPower);

function PowerON (name){
    for (q=0; q<devices.length;q++){
        if (devices[q].name === name){
            devices[q].isTurnedOn = true;
        }
    }
};

PowerON('TV #1');
console.log(tv.isTurnedOn);

//readline-sync