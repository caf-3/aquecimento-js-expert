
const currencyFormat = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'MZN'
});
export default class CurrencyManager {
    static format(value) {
        return currencyFormat.format(value);
    }
}

//window.CurrencyManager = CurrencyManager;

