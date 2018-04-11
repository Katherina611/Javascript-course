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
    //print a message 2 parameters, message and classes
    printMessage(message, className){
        const div = document.createElement('div');
        //add the classes
        div.className = className;
        //add the message
        div.appendChild(document.createTextNode(message));
        const messagesDiv = document.querySelector('.messages');
        messagesDiv.appendChild(div);
        //remove the messages
        setTimeout(() =>{
            document.querySelector('.messages div').remove();
        },3000)
    }
    //print the result of the valuation/rate
    displayResult(result){
        console.log(result);
    }

}