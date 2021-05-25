(() =>{
    const currencyFormat = new Intl.NumberFormat('pt', {
        style: 'currency',
        currency: 'MZN'
    });
    class CurrencyManager{
        static format(value){
            return currencyFormat.format(value);
        }
    }

    window.CurrencyManager = CurrencyManager;
} 
)();