//variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();

//event listeners
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', function(){
        //create the <option> for the years
        html.displayYear();
    });

//when the form is submitted
    form.addEventListener('submit', function(event){
        event.preventDefault();
        //read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;
        //read the radio button
        const level = document.querySelector('input[name="level"]:checked').value;
        //checked that all the fields have something
        if(make === '' || year === '' ||level === ''){
            html.displayError('All the fields are mandatory');
        }else{
            //clear the previous quote
            const prevResult = document.querySelector('#result div');
            if(prevResult !== null){
                prevResult.remove();
            }
            //make the quotation
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            //print the result from the HTMLUI()
            html.showResult(price, insurance);
        }
    });
}

