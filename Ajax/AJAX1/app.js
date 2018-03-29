document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //create new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    //open the conection
    xhr.open('GET', 'data.txt', true);
    //execution of the ajax call
    /*
    xhr.onload = function(){
        //codes
        //200 = correct
        //403 = forbidden
        //404 = not found

        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.response}</h1>`;
        }
    };
    */
    //another way to ajac call
    xhr.onreadystatechange = function () {
        console.log('ready state', xhr.readyState);
        //ready states
        //0 = unsent
        //1 = opened
        //2 = received
        //3 = loading
        //4 = done
        if(this.status === 200 && this.readyState ===  4){
            document.getElementById('output').innerHTML = `<h1>${this.response}</h1>`;
        }
    }
    //send the request
    xhr.send();
}