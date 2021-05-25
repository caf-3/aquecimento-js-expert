function updateOutput(value){
    const output = document.querySelector('output');
    output.innerText = value; 
}

window.inputMonitor = (value) => updateOutput(CurrencyManager.format(value));