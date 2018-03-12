//String Method
const learning="Learning JavaScript is Great!";
let output;
//length
output=learning.length;
//concat
output=learning.concat(" ", "and fun");
//uppercase
output=learning.toUpperCase();
//lowercase
output=learning.toLowerCase();
//indexOf
output=learning.indexOf("JavaScript");
output=learning.indexOf("PHP");
//substring
output=learning.substring(0,10);
//substring from the end
output=learning.substring(learning.length-6);
//slice
output=learning.slice(0,10);
//split
output=learning.split(" ");
//replace
output=learning.replace("JavaScript", "Modern JavaScript");
//Includes
output=learning.includes("JavaScript");
//repeat
let greet="Hello ";
output=greet.repeat(6);

//Number Method
const number1=30;
    number2 =20;
    number3= -3;

let result;
//addition
result=number1+number2;
//substraction
result=number1-number2;
//multiplication
result=number1*number2;
//division
result=number1/number2;
//modulo
result=number1%number2;
//Pi
result=Math.PI;
//round
result=Math.round(2.2);
//round up or down
result=Math.ceil(2.2);
result=Math.floor(2.2);
//square root
result=Math.sqrt(144);
//abs number
result=Math.abs(number3);
//power
result=Math.pow(8,3);
//get the minimum number from a list
result=Math.min(10,8,4,2,8,4,6,3);
//get the maximum number from a list
result=Math.max(10,8,4,2,8,4,6,3);

result=20+30*2;

//20% discount from a shopping cart
const cartItems=(20+30+30+40);
const discount=(cartItems/100)*20;
const totalPay=cartItems-discount;
//print the result
console.log("Total: "+ cartItems);
console.log("Discount: "+ discount);
console.log("Pay: $"+ totalPay);


//Convert string into number
const num1="50",
      num2=10,
      num3="nine";
console.log(num1+num2);
//convert num1 into number
console.log(Number(num1)+num2);
console.log(parseInt(num1)+num2);
console.log(Number(num3));//NaN

//concatenate the values
console.log(num1+num2);
//in this case the substarction will work
console.log(num1-num2);

//another method and values
let number;
number=Number('20');
number=Number(true);//1

//parseInt and parseFloat
number=parseInt(100.20);//100
number=parseFloat(100.20);//100.2
console.log(number);

//toFixed
let numb1='9466575767.1020';
let numb2=9466575767.9846;
console.log(Number(numb1).toFixed(2));
console.log(numb2.toFixed(4));

//number to string
let numb=90210,
    output1=String(numb);

//boolean to string
output1=String(true);
console.log(typeof output1);
//date to string
output1=new Date();
output1=String(output1);
console.log(output1.includes('2018'));
console.log( typeof output1);
//array into string
arr=[1,2,3,4];
arr=String(arr);
console.log(arr);

//toString
arr1=[1,2,3,4].toString();
console.log(arr1);

//Template Literals or Template Strings
const product1 = "Pizza",
      price1 = 30,
      product2="Hamburger",
      price2=40;

//old method
let hmtl;
html = '<ul>' +
    '<li>Item:' + product1 +'</li>'+
    '<li>Price:' + price1 +'</li>'+
    '<li>Item:' + product2 +'</li>'+
    '<li>Price:' + price2 +'</li>'+
    '<li>ITotal:' + (price1 + price2)  +'</li>'+
    '</ul>';

//new method
html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price:$ ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price:$ ${price2}</li>
        <li>Total:$ ${total(price1,price2)}</li>
    </ul>
    `;
function total(price1,price2){
    return price1+price2;
}
let app = document.querySelector('#app');
app.innerHTML = html;

//arrays
//creating an array
const months = new Array('January', 'Fenruary', 'March', 'April');
console.log(months);
//check if this is an array
console.log(Array.isArray(months));
//change values of the array
months[1] = 'New Months';
console.log(months);
//find sth in the array
console.log(months.indexOf('January'));
//add more items in the array (end of the array)
months.push("May");
//add more items into the array (at the beginning)
months.unshift("Month 0");
//add an element in the middle
months.splice(3,null,"a new month");
//remove element from the end
months.pop();
//remove element from the beginning
months.shift();
//remove element from the middle of the array
months.splice(2,1);
//array methods
//reverse
months.reverse();
console.log(months);
//concatenate two arrays
const array1=[1,2,3];
      array2=[7,8,9];
console.log(array1.concat(array2));
//order an array (sort)
let fruits = ["banana", "apple", "strawberry", "orange", "watermelon"];
console.log(fruits.sort());
console.log(fruits.sort().reverse());

const arrayNumber = [3,1,100,5,36,9,60];
arrayNumber.sort();//it doesnt't work [1, 100, 3, 3, 5, 60, 9]
//order from lower to the greater number
arrayNumber.sort(function(a,b){
    return a-b
});
//order from greater to the lower number
arrayNumber.sort(function(a,b){
    return b-a
});
console.log(arrayNumber);

//javascript Object
const person = {
    name: "Kasia",
    surname: "Gacek",
    job: "absolvent",
    email:"kasia@gmail.com",
    age: 25,
    living:{
        city:"Rabka",
        country:"Poland"
    },
    getAge:function(){
        return 24;
    },
    bornYear:function(){
        return new Date().getFullYear() - this.age;
    },
    getJob:function(){
        return this.job
    }
};
console.log(person.name);//common method
console.log(person['email']);//second method
console.log(person.living);
console.log(person.getAge());
console.log(person.bornYear());
console.log(person.getJob());

//array of objects
let cars = [
    {model: "Mustang", engine: "6.0"},
    {model: "Camaro", engine: "6.1"}
];
for (let i=0; i<cars.length; i++){
    console.log(cars[i].model)
}

//const in array&object
const newArray= [1,2,3];
newArray[0] = "New element in the array";
newArray.push("Something new");
console.log(newArray);

const car = {
    name: "Mustang",
    engine: 6.4
};
car.name = "Challanger";// i can only assign one value, not object
console.log(car);

//functions
//function declaration - I method
function helloVisitor(name, surname){
    console.log(`Hello ${name} ${surname} & welcome to our website`)
}
helloVisitor("Kasia", "Gacek");//a function must be called
/*
function helloVisitor(name = "Visitor", surname = " "){
    console.log(`Hello ${name} ${surname} & welcome to our website`)
}
helloVisitor("Kasia");
function with default parameters

function helloVisitor(name, surname){
    if(typeof name === 'undefined') {name = "Kasia"}
    if(typeof name === 'undefined') {surname = "Gacek"}
    console.log(`Hello ${name} ${surname} & welcome to our website`)
}
helloVisitor("Kasia");
function with default parameters
 */

function addition(number1, number2){
    return number1 + number2;
}
let resultAddition ;
resultAddition = addition(1,3);
resultAddition = addition(1,7);
console.log(resultAddition);

//function expression
const sum = function (number1, number2){
    return number1 + number2;
};
console.log(sum(3,3));

//function that are invoked inmediately (IIFIEs)
//Inmediately-invoked function expression
(function(technology){
    console.log("Learning " + technology)
})("JacaScript");

//property methods
const musicPlayer = {
    play: function(id){
        console.log(`Playing song with the ID: ${id}`)
    },
    pause: function(){
        console.log("Pause ...")
    }
};
musicPlayer.play(2);
musicPlayer.pause();
//methods can be outside of the object
musicPlayer.remove = function(id){
    console.log(`Removed from the playlist, ID: ${id}`)
};
musicPlayer.remove(30);
// function
//alert();
//prompt();
//confirm();

//dates in Javascript
const today = new Date();
let birthday = new Date(" September 6 1993");
birthday = new Date("9-6-1993");
//methods in Date
let output2;
output2 = today.getMonth();
output2 = today.getDate();
output2 = today.getDay();
output2 = today.getFullYear();
output2 = today.getMinutes();
output2 = today.getHours();
//change date values
today.setFullYear("2000");
output2 = today.getFullYear();
today.setMonth("3");
output2 = today.getMonth();
console.log(today);

// if operator
const learningJavaScript = false;
if(learningJavaScript){
    console.log("great");
}else{
    console.log("so bad, JavaScript is great");
}

let score = 100;
//equal
if (score ==100){
    console.log("Yes!!! is the same");
}else{
    console.log("No, is not the same");
}
//not equal
if(score != 100){
    console.log("yes, different")
}else{
    console.log("no, not different")
}
//strict comparisons operator
if(score === "100"){
    console.log("Yes!!! they are the same ")
}else{
    console.log("No, they're different");
}

if(score !== 100){
    console.log("yes, different")
}else{
    console.log("no, not different")
}

//check if variable has a value
let score1;
if(typeof score1 !== "undefined"){
    console.log(`Yes, and the score is ${score1}`)
}else{
    console.log("No score...")
}

let cash = 300;
let cartTotal = 500;
if(cash >= cartTotal){
    console.log("Succesful Payment...")
}else{
    console.log("Insufficient Funds")
}

//else if operator
let currentTime = 3;
if(currentTime >0 && currentTime <= 12){
    console.log("Good morning")
}else if(currentTime >12 && currentTime <18){
    console.log("Good afternoon")
}else if(currentTime >18 && currentTime <=24){
    console.log("Good night")
}else {
    console.log("Invalid")
}

//or operator
let credit = 300,
    available = cash + credit;
if (cartTotal < cash || cartTotal <credit) {
    console.log("You can pay with cash or credit")
}else if(available >= cartTotal){
    console.log("Pay with both")
}else{
    console.log("Insufficient Funds")
}

//ternary operator
const loggedIn = false;
console.log( loggedIn === true ? "The user is logged in!" : "Not logged in, please log in" );

//switch
const paymentMethod = "nothing";
switch(paymentMethod){
    case 'cash':
        console.log(`Your payment method is: ${paymentMethod}`);
        break;
    case 'check':
        console.log(`Your payment method is: ${paymentMethod} we will verify the funds...`);
        break;
    case 'card':
        console.log(`Your payment method is: ${paymentMethod} processing`);
        break;
    default:
        console.log("Please select a valid payment method ");
        break;
}
//assign a variable from the switch case
const carsName = ["Camaro", "Mustang", "Challenger"];
const selected = 1;
let carName;
switch(selected){
    case 0:
        carName = carsName[0];
        break;
    case 1:
        carName = carsName[1];
        break;
    case 2:
        carName = carsName[2];
        break;
}
console.log(`Your selected car is ${carName}`);

//for loops in js
/*
for (let i = 0; i <= 10; i++){
    console.log(`Number: ${i}`)
}
*/

//read a value in the for loop
for (let i = 0; i <5; i++){
    if(i ===2){
        console.log("Yes! 2!");
        continue;
    }
    console.log(`Number: ${i}`)
}
//break the for loop
for (let i = 0; i <5; i++){
    if(i ===2){
        console.log("Yes! 2!");
        break;
    }
    console.log(`Number: ${i}`)
}

for (let i = 0; i <5; i++){
    if(i%2===0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}
//for loop for a shopping cart
const shoppingCart = ["product1", "product2", "product3"];
//access each value manually
console.log(shoppingCart[0]);
console.log(shoppingCart[1]);
console.log(shoppingCart[2]);

for (let i=0; i<shoppingCart.length; i++){
    console.log(`Product: ${shoppingCart[i]}`)
}

//while loops
/*
let i = 0;
while(i < 3){
    console.log(`Number: ${i}`);
    i++;
}
*/
//looping an array with while
let i=0;
while(i < shoppingCart.length){
    console.log(`Product: ${shoppingCart[i]}`);
    i++;
}

//DO while loops
let j = 0;
do {
    console.log(`Number: ${j}`);
    j++;
}while(j <5);

//for loop
const todo = ["Homework", "Food", "Project", "Learn JS"];
for (let i = 0; i < todo.length; i++){
    console.log(todo[i]);
}
//forEach
todo.forEach(function(assigment, index){
    console.log(`${index} : ${assigment}`)
});

//map
const shoppingCarts = [
    {id: 1, product:"book"},
    {id: 2, product:"shirt"},
    {id: 3, product:"album"}
];
const productName = shoppingCarts.map(function(productName){
    return productName.product;
});
console.log(productName);

//iterators in ES6
let myCar = {
    model: "mazda",
    engine: 6.1,
    year: 2018
};
for (let key in myCar){
    console.log(`${key} : ${myCar[key]}`)
}

//try, catch, finnaly
try{
    getClients();
} catch(error){
    console.log(error);
}finally{
    console.log("Execute always no matter what!")
}

function getClients (){
    console.log("Downloading...");
    setTimeout(function(){
        console.log("Complete...")
    },3000)
}
getClients();

//window object
//confirm
if(confirm("Are you sure?")){
    console.log("Deleted...");
}else{
    console.log("Nothing happens");
}

//retrieve width and height of the window
let height, width;
height = window.outerHeight;
width = window.outerWidth;//console + page

height = window.innerHeight;//only page
width = window.innerWidth;

if (width > 1000){
    document.body.style.backgroundColor = 'red';
}else if(width > 500){
    document.body.style.backgroundColor = 'blue';
}else{
    document.body.style.backgroundColor = 'green';
}

//location
let urlLocation = window.location;
console.log(urlLocation.host);
console.log(urlLocation.hostname);
console.log(urlLocation.port);
console.log(urlLocation);

//redirect via js
//window.location.href = "http://google.com";

//variable scope
let a = "a";
let b = "b";
const c = "c";

//function scope
function functionScope(){
    let a = "A";
    let b = "B";
    const c = "C";
    console.log("FUNCTION SCOPE: "+ a,b,c);//variable exsist only in this function, if we remove variable a("A) in console we will have a("a")
}
functionScope();

//block scope (if statements or for)
if(true){
    let a = "AA";
    let b = "BB";
    const c = "CC";
    console.log("BLOCK SCOPE: "+ a,b,c);
}

// for loop
for (let a = 0; a <5; a++){
    console.log(a)
}
console.log("GLOBAL: "+ a,b,c);








