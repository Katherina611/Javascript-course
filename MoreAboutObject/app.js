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

}

//prototype
//attach prototype to the method
Client.prototype.membership = function(){
    let name;
    if(this.balance > 1000){
        name = 'Gold';
    }else if(this.balance > 500){
        name = 'Platinum';
    }else{
        name = 'Normal';
    }
    return name;
};

//second prototype with the name and balance
Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, balance: ${this.balance}, membership: ${this.membership()}`
};

//another method to withdraw money from the account
Client.prototype.withdraw = function(amount){
    this.balance -=amount;
};

//create a deposite method
Client.prototype.deposite = function(amount){
    this.balance += amount;
};

//check the balance
Client.prototype.getBalance = function(){
    return this.balance;
};

const person = new Client('Kasia', 2000);
const personNew = new Client('Karen', 600);

console.log(person);
console.log(person.membership());
person.withdraw(1000);
console.log(person.clientInfo());
console.log(person.getBalance());
person.deposite(500);
console.log(person.clientInfo());
console.log(person.getBalance());
console.log('-----------');
console.log(personNew);
console.log(personNew.membership());
console.log(personNew.clientInfo());
personNew.withdraw(100);
console.log(personNew.clientInfo());
console.log(personNew.getBalance());
personNew.deposite(500);
console.log(personNew.clientInfo());
console.log(personNew.getBalance());

//business
const Business = function(name, balance, phone, category){
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;
};

//inherit the prototypes
Business.prototype = Object.create(Client.prototype);
//return constructor as business
Business.prototype.constructor = Business;

Business.prototype.clientInfo = function(){
    return `Name: ${this.name}, balance: ${this.balance}, 
    membership: ${this.membership()}, category: ${this.category}, 
    phone: ${this.phone}`
};
//create a business
const business = new Business('Udemy', 1000000, 244635980, 'Education');
console.log(business);
console.log(business.clientInfo());



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

//object create
const Client2 = {
    getBalance : function(){
        return `Hello ${this.name} your balance is ${this.balance}`
    },
    withdraw: function(amount){
        return this.balance -= amount;
    },
    deposit: function(amount){
        return this.balance += amount;
    }
};
//create na new object and give a balance
const mary = Object.create(Client2);
//attach the properties
mary.name = "Mary";
mary.balance = 1000;
console.log(mary);
console.log(mary.getBalance());
//withdraw some money
mary.withdraw(500);
console.log(mary.getBalance());
//deposite some money
mary.deposit(300);
console.log(mary.getBalance());

//another method to create object - not recomended
const kasia = Object.create(Client2, {
    name:{value: "Kasia"},
    balance: {value: 1500}
});
console.log(kasia);