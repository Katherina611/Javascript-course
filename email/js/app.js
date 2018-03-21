//variables
const sendBtn = document.querySelector('#sendBtn'),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message');

//event listener
eventListener();
function eventListener(){
    //app init
    document.addEventListener('DOMContentLoaded', appInit);
    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

//functions
//app initialization
function appInit(){
    //disablethe send button on load
    sendBtn.disabled = true;
}
//validate the fields
function validateField(){
    let errors;
    //validate the length of the field
    validateLength(this);
    //validate the email
    if(this.type === 'email'){
        validateEmail(this)
    }
}
//valifdate the length of the fields
function validateLength(field){
    if(field.value.length>0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//validate email (chechs for @ in the value)
function validateEmail(field){
    let emailText = field.value;
    //check if the eailText contains @ sign
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}