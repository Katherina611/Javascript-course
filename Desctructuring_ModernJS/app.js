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

