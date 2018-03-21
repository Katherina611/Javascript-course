//variables
const sendBtn = document.querySelector('#sendBtn'),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message'),
      reset = document.querySelector('#resetBtn'),
      sendEmailForm = document.querySelector('#email-form');

//event listener
eventListener();
function eventListener(){
    //app init
    document.addEventListener('DOMContentLoaded', appInit);
    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    //send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    reset.addEventListener('click', resetForm);
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
    //both will return erros, then chech if there're any errors
    errors = document.querySelectorAll('.error');
    console.log(errors);
    //check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            //the button should be enabled
            sendBtn.disabled = false;
        }

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
//reset the form
function resetForm(){
    sendEmailForm.reset();

}
//send email
function sendEmail(event){
    event.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
    //hide spinner then show sen email image
    setTimeout(function(){
        //hide the spinner
        spinner.style.display = 'none';
        //show the image
        document.querySelector('#loaders').appendChild(sendEmailImg);
        //after 5 s, hide the image and reset the form
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();
        },5000);
    },3000);

}