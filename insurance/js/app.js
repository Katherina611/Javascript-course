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
            console.log("alright");
        }
    });
}

//objects
function HTMLUI(){

}
//displays the latest 20 years in the select
HTMLUI.prototype.displayYear = function(){
    //max and minimum years
    const max = new Date().getFullYear(),
          min = max - 20;
    console.log(min);
    //generate the list with the latest 20 years
    const selectYears = document.getElementById('year');
    //print the values
    for (let i = max; i>= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }

};
//prints an error
HTMLUI.prototype.displayError = function(message){
    //create a div
    const div = document.createElement('div');
    div.classList = 'error';
    //insert the message
    div.innerHTML = `
        <p>${message}</p>
    `;
    form.insertBefore(div, document.querySelector('.form-group'));
    //remove the error
    setTimeout(function(){
        document.querySelector('.error').remove();
    },3000);
};