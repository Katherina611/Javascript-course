//instanciate both class
const eventbrite = new EventBrite();
const ui = new UI();

//event listener for the submit butto
document.getElementById('submitBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    //get values from form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;
    //console.log(eventName + ':' + category);
    if(eventName !== ''){
        //query event brite API

    }else{
        //print a message
        ui.printMessage('Add an event or city', 'text-center alert alert-danger mt-4')
    }

});
