class UI {
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }
    //prints the <option> for the form
    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;
                //build the <select> from the REST API
                const select = document.getElementById('cryptocurrency');
                cryptoCurrencies.forEach(currency =>{
                    //add the <option>
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })

            })
    }
}