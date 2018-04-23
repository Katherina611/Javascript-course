class UI{
    //displays a custom message
    printMessage(message, className){
        const div = document.createElement('div');
        //add the HTML
        div.innerHTML = `
            <div class="alert alert-dismissible alert-${className}">
                <button type="button" class="close" data-dismiss="alert">x</button>
                ${message} 
            </div>
        `;
        //insert before
        const refernce = document.querySelector('.jumbotron h1');
        const parentNode = refernce.parentElement;
        parentNode.insertBefore(div,refernce);
        //remove after 3s
        setTimeout(() =>{
            document.querySelector('.alert').remove();
        },3000);

    }
}