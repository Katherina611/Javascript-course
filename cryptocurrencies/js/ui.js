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
    displayResult(result, currency){
        //read the currency
        let currencyName;
        currencyName = 'price_' + currency.toLowerCase();
        //read the result from the object
        const value = result[currencyName];
        //remove the previous result
        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        let HTMLTemplate='';
        HTMLTemplate += `
        <div class = "card cyan darken-3">
            <div class = "card-content with-text">
                <span class = "card-title">Result</span>
                <p>The price of ${result.name} from ${currency} is $ ${value}</p>
                <p>Last hour: ${result.percent_change_1h}%</p>
                <p>Last day: ${result.percent_change_24h}%</p>
                <p>Last 7 days: ${result.percent_change_7d}%</p>
            </div>
        </div>
        `;

        //print the spinner
        this.showSpinner();
        //after 3s print the result and remove the spinner
        setTimeout(() =>{
            //print the result
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;
            //hide spinner
            document.querySelector('.spinner img').remove();

        },3000);

    }
    //prints the spinner
    showSpinner(){
        const spinnerGif = document.createElement('img');
        spinnerGif.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGif);


    }

}