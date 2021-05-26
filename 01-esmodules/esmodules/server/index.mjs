import CurrencyManager from '../shared/CurrencyManager.mjs';
function updateOutput(value){
    console.log(value);
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value));

const input = process.openStdin();
process.stdout.write('MZN amount: ');
input.addListener('data', inputMonitor);
