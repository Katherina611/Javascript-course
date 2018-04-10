class CryptoAPI {
    //get all the cryptocurrencies
    async getCryptoCurrenciesList(){
       const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
       //return this as a json
        const cryptoCurrencies = await url.json();
       //return the object
        return {
            cryptoCurrencies
        }
    }
}