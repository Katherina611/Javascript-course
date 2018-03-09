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
//find sth in array
console.log(months.indexOf('January'));
