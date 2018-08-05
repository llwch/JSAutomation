const Fan = require('../objects/fan');
const TV = require('../objects/tv');
const WashingMachine = require('../objects/washing_machine');

function Executor (){

    let fan = new Fan ('Fan #1', 'bedroom', 900, 1400, false, false, 9000);
    let tv = new TV ('TV #1','main room', 111, 1222, false, false, 200);
    let wm = new WashingMachine ('WM #1', 'bathroom', 10000, 1400, false, false, 'Soft');
    
    let devices = [fan, tv, wm];

    //по мощности
    devices.sort(function(a, b){
        return b.power - a.power;
    })

    for (let i=0; i < devices.length; i++){
        console.log(devices[i].name + ' ' + devices[i].power)
    };

    //Сумма мощностей
    let allPower = 0;

    for (let t=0; t < devices.length; t++){
        allPower = allPower + devices[t].power;
    };
    console.log('Total power:' + ' ' + allPower);

    function PowerON (name){
        for (q=0; q<devices.length;q++){
            if (devices[q].name === name){
                devices[q].isTurnedOn = true;
            }
        }
    };
    
    //по нескольким параметрам
    function filterByPowerAndTurnON (devices){
        let filterResult = [];
        for (j=0; j<devices.length;j++){
            if (devices[j].isTurnedOn === false && devices[j].power >= 500){
                filterResult.push(devices[j]);
            }
        }
        return filterResult;
    }
    let result = filterByPowerAndTurnON(devices);
    //devices.filter(filterByPowerAndTurnON);

    PowerON('TV #1');
    //console.log(devices);
    console.log(tv.name + ' ' + 'is turned on? -- ' + ' ' + tv.isTurnedOn);
    console.log(fan.name + ' ' + 'is turned on? -- ' + ' ' + fan.isTurnedOn);
    console.log(wm.name + ' ' + 'is turned on? -- ' + ' ' + wm.isTurnedOn);
    console.log(result);
};

module.exports = Executor;