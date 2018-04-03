document.querySelector('#generate-names').addEventListener('submit', loadNames);

//execute the function to query the API
function loadNames(event){
    event.preventDefault();
    //read the vaues from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //build the URl
    let url = 'http://uinames.com/api/?';
    //read the origin and append to the url
    if(origin !== ''){
        url += `region=${origin}&`;
    }

    //read the genre and append to the url
    if(genre !== ''){
        url += `gender=${genre}&`;
    }

    //read the amount and append to the url
    if(amount !== ''){
        url += `amount=${amount}&`;
        console.log(url);
    }

    // ajax call
    const xhr = new XMLHttpRequest();

    //open the conection
    xhr.open('GET', url, true);

    //execute the function
    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText);
            //insert into the HTML
            let html = '<h2>Generated names</h2>';
            html += '<ul class = "list">';
            names.forEach(function(name){
                html += `
                <li>${name.name}</li>
                `
            });
            html += '</ul>';
            document.querySelector('#result').innerHTML = html;


        }
    };

    //send the request
    xhr.send();






}