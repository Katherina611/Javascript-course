//destructuring
//the old way
/*
const client = {
    name:'Kasia',
    membership:'Premium'
};
let name = client.name,
    memberhip = client.membership;
console.log(name);
console.log(memberhip);
*/

//the new way
//let name, membership;

const client = {
    name:'Kasia',
    membership:'Premium',
    data:{
        clientLocation:{
            city:'Mexico',
            country:'Mexico'
        },
        account:{
            memberSince:'10-02-2012',
            balance:4000
        }
    }
};
/*
name = "Mary";
membership = 'Platinum';
({name,membership} = client);
console.log(name);
console.log(membership);
*/

//extract object that's inside another object

let {data:{clientLocation}} = client;
console.log(clientLocation);
console.log(clientLocation.city);
console.log(clientLocation.country);

let {data:{account}} = client;
console.log(account);
console.log(account.memberSince);
console.log(account.balance);

//default values when destructuring
const client1 = {
    name:'Kasia'
};
console.log(client1);
//desctructuring
let {name, membership = 'Standard', balance = 200} = client1;
console.log(name);
console.log(membership);
console.log(balance);

//destruuring with array
let cities =[, , , 'New York'];
let  [firstCitie, seconCity, another, newYork] = cities;
console.log(newYork);
//more in deepth example
const client2 = {
    membership:'Premium',
    balance:30000,
    data:{
        name:'Paul',
        lastName:'Banks',
        living:{
            city:'London',
            country:'UK'
        }
    },
    lastMovements:['12-03-2018', '12-07-2018','06-10-2018']
};

let {
    data:{living},
    lastMovements:[, , third]
} = client2;
console.log(living);
console.log(third);

//destructuring function (old method)
function reservation(complete, options){
    options = options || {};
    let payment = options.paymentMethod,
        amount = options.amount,
        days = options.days;
    console.log(payment);
    console.log(amount);
    console.log(days);
}
reservation(
    true,
    {
        paymentMethod:'creditCard',
        amount:3000,
        days:3
    }
);

//destructuring function (new method) with default parameters
function reservationNew(complete,
                        {
                            paymentMethod='cash',
                            amount = 0,
                            days = 0
                        } = {}
                        ){
    console.log(paymentMethod);
    console.log(amount);
    console.log(days);
}
reservationNew(
    true,
    {
        paymentMethod:'creditCard',
        amount:33000,
        days:5
    }
);

//symbols
const client3 = Symbol('client symbol');
console.log(client3);
//symbols are always different
console.log(Symbol() === Symbol());

let firstName = Symbol();
let lastName = Symbol();
//create an empty object
const person = {};
person[firstName] = 'Kasia';
person[lastName] = 'Gacek';
//standard properties
person.membership = 'Premium';
person.amount = 500;
console.log(person);

for(let i in person){
    console.log(`${person[i]}`);
}

//you can also add a description
let clientName = Symbol('client name');
let client4 = {};
client4[clientName] = 'Peter';
console.log(client4);
console.log(client4[clientName]);

//sets
let shoppingCart = new Set();
shoppingCart.add('shirt');
shoppingCart.add('album #1');
shoppingCart.add('album #1');
shoppingCart.add('guitar');


//get lenght of the set
console.log(shoppingCart.size);

//check if the value exist on the set
console.log(shoppingCart.has('guitar'));

//remove from the set
shoppingCart.delete('guitar');

//clear the set
//shoppingCart.clear();

//for each
shoppingCart.forEach((product,index, isPart) =>{
    console.log(`${index} : ${product}`);
    console.log(isPart === shoppingCart);
});

//convert set into an array
const shoppingCartArray = [...shoppingCart];
console.log(shoppingCartArray);

//maps
let client5 = new Map();
client5.set('name', 'Karen');
client5.set('membership', 'Premium');
//access the value
console.log(client5.get('name'));

//for each into a map
client5.forEach((clientInfo, index) =>{
    console.log(`${index} : ${clientInfo}`)
});
//map size
console.log(client5.size);

//chech if the values exist
console.log(client5.has('membership'));
console.log(client5.get('membership'));

//remove elements fro the map
client5.delete('name');
//client5.clear();

//default values into the map
const patient = new Map([['name', 'patients name'], ['room', 'not defined']]);
patient.set('name', 'Paul');
patient.set('room', '404');

console.log(patient);

//iterators
function createIterator(cart){
    let i = 0;
    return {
        nextProduct: function(){
            let end = (i >= cart.length);
            let value = !end ? cart[i++] : undefined;
            return {
                end:end,
                value: value
            }
        }
    }
}
const shopCart = ['product 1', 'product 2', 'product 3'];
const shopCartIterator = createIterator(shopCart);
console.log(shopCartIterator.nextProduct());
console.log(shopCartIterator.nextProduct());
console.log(shopCartIterator.nextProduct());
console.log(shopCartIterator.nextProduct());

//generators
function *createGenerator(){
    //yield
    yield  1;
    yield  'Name of the person';
    yield 3 + 3;
    yield true;
    yield 'hello from generator'
}
const iterator = createGenerator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);


function *newGenerator(cart){
    for(let i = 0; i < cart.length; i++){
        yield cart[i]
    }
}

const cart = ['product 1', 'product 2', 'product 3'];

//loop in the iterators
let iterators = newGenerator(cart);
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

//build iterator
const citiesArray = ['London', 'Paris', 'Madrid'];
const orders = new Set([123,231,131,102]);
const data = new Map();
data.set('learning', 'modern JS');
data.set('JSisGreat', true);
//entries
for(let entry of citiesArray.entries()){
    //console.log(entry[0]);
}

for(let entry of orders.entries()){
    //console.log(entry);
}

for(let entry of data.entries()){
    //console.log(entry);
}

//values
for(let entry of citiesArray){
    //console.log(entry);
}

for(let entry of orders.values()){
    //console.log(entry);
}

for(let entry of data.values()){
    console.log(entry);
}

//keys
for(let entry of citiesArray.keys()){
    //console.log(entry);
}

for(let entry of orders.keys()){
    //console.log(entry);
}

for(let entry of data.keys()){
    //console.log(entry);
}

//deafault
for(let entry of citiesArray){
    //console.log(entry);
}

for(let entry of orders){
    console.log(entry);
}

for(let entry of data){
    console.log(entry);
}

//iterate a string
const message = 'Learning JS';
//old way
for (let i = 0; i < message.length; i++){
    console.log(message[i]);
}
/*
for (let letter of message){
    console.log(message);
}
*/

const anchors = document.getElementsByTagName('a');
for (let anchor of anchors){
    console.log(anchor.href);
}

//regular expression
const exp1 = new RegExp('abc');
const exp2 = /abc/;
const year = 1993;//true
console.log(/[0-9]/.test(year));

//check if a date follows the pattern 20-10-2018
const dateRegExp = /\d{1,2}-\d{1,2}-\d{1,4}/; // old version /\d\d-\d\d-\d\d\d\d/
const date = '20-01-2018';
console.log(dateRegExp.test(date));

//check for the time 14:00
const timeRegExp = /\d\d:\d\d/;
const time = '10:15 AM';
console.log(timeRegExp.test(time));

//check for the time in 12 hours with AM/PM
const timeRegExpComplete = /\d\d:\d\d\D\D/;
let completeTime;
completeTime = '08:30 PM';
console.log(timeRegExpComplete.test(completeTime));
const numbersRegExp = /\d\d\d\d/;// or /\d+/
const digits = 1234;
console.log(numbersRegExp.test(digits));

//deny the expression
const denyRegExp = /\[^0-9]/;
const number = 1234;///false
console.log(denyRegExp.test(number));

//check for letters or numbers
const messageRegExp = /\w+/;
let message1;
message1 = 'test message';
message1 = 1234;
message1 = '';//false
message1 = 'hello@mail.com';
console.log(messageRegExp.test(message1));

//check for numbers
const checkNumbers = /([0-9])\w+/;
const numb = 1234;
console.log(checkNumbers.test(numb));

//evaluate to uppercase only
const checkForUpperCase = /([A-Z])\w+/;
let message2;
message2 = 1234;
message2 = 'message';
message2 = 'MESSAGE';
console.log(checkForUpperCase.test(message2));

//evaluate to lowwercase only
const checkForLowerCase = /([a-z])\w+/;
let message3;
message3 = 1234;
message3= 'message';
message3 = 'MESSAGE';

console.log(checkForLowerCase.test(message3));










