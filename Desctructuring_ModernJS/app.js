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
let name, membership;

const client = {
    name:'Kasia',
    membership:'Premium'
};
name = "Mary";
membership = 'Platinum';
({name,membership} = client);
console.log(name);
console.log(membership);