//instanciate the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

//create the variables
const form = document.getElementById('form');

//add event listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //read currency
    const currencySelect = document.getElementById('currency').value;
    //read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;
    //validate that selects have sth
    if(currencySelect === '' || cryptoCurrencySelect ===""){
        //display an error
        console.log('error');
    }else{
        console.log('success');
    }

})

