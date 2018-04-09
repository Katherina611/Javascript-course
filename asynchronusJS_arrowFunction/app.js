//callbacks
const cities = ['London', 'Madrid', 'Paris', 'Berlin'];

//inline callbacks
cities.forEach(function(city){
    console.log(city);
});

//calback with function declaration
function callback(city){
    console.log(city)
}

cities.forEach(callback);

//second example
const countries = ['France', 'Poland', 'Australia', 'England'];

function newCountry(country, callback){
    setTimeout(function(){
        //add the new country
        countries.push(country);
        //execute the callback
        callback();
    },2000);
}
//display the countries after 1 second
function displayCountries(){
    setTimeout(function(){
        let html = '';
        countries.forEach(function(country){
            html += `<li>${country}</li>`;
        });
        document.body.innerHTML = html;
    },1000);
}
//add a new country
newCountry('Spain', displayCountries);
//print the countries
displayCountries();

//promises
const applyDiscount = new Promise(function(resolve, reject){
    //resolve is going to execute the function is succesful
    //reject when the function or the rask has failed
    const discount = false;
    if(discount){
        resolve('Discount applied');
    }else{
        reject('Discount failed...');
    }

});
applyDiscount.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
});

//arrow function
const  learning = (message,tech)=> console.log(`${message} ${tech}`);
const  learning1 = ()=> ({message: 'hello'});
learning('lerning','JavaScript');
learning1();

//arrow function with a callback
const shoppingCart = ['album', 'shirt','guitar'];
const productQuantityLength = shoppingCart.map(product => product.length);
console.log(productQuantityLength);

//arrow function with forEach
shoppingCart.forEach(product => console.log(product));

//async await
async function getClients(){
    //create a new promise
    const clients = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Client list downloaded ...')

        },1000)
    });
    const error = false;
    if(!error){
        const response = await clients;//hild until clients is executed
        return response;
    }else{
        await Promise.reject('There was an error')
    }
}
getClients()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//async await with a REST API
async  function getPosts(){
    //wait until the post are downloaded
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //execute then
    const data = await response.json();
    //console log until the second await finishececuting
    return data;
}
getPosts()
    .then(post => console.log(post));


