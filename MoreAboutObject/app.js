//object literals
const client = {
    name: "Kasia",
    balance: 1000,
    membership: function(){
        let name;
        if(this.balance > 1000){
            name = 'Gold';
        }else if(this.balance > 500){
            name = 'Platinum';
        }else{
            name = 'Normal';
        }
        return name;
    }
};
console.log(client);
console.log(client.balance);
console.log(client.membership());

//object constructor
function Client(name, balance){
    this.name = name;
    this.balance = balance;
    this.membership = function(){
        let name;
        if(this.balance > 1000){
            name = 'Gold';
        }else if(this.balance > 500){
            name = 'Platinum';
        }else{
            name = 'Normal';
        }
        return name;
    }
}
const person = new Client('Kasia', 700);
const personNew = new Client('Karen', 200);
console.log(person.membership());
console.log(personNew.membership());

//string
const name1 = 'Karen';
const name2 = new String('Karen');

//numbers
const number1 = 20;
const number2 = new Number(20);

//booleans
const boolean1 = true;
const boolean2 = new Boolean(false);

//functions
const function1 = function(a,b){
    return a+b
};
const function2 = new Function('a', 'b', 'return a + b');

//objects
const person1 = {name:'Kasia', age:25};
const person2 = new Object({name:"Magda", age:30});

//arrays
const array1= [1,2,3,4];
const array2 = new Array(1,2,3,4);
console.log(array1);
console.log(array2);