//import from client.js
import{ Client} from "./client.js";
import{ Bussines} from "./business.js";
//console.log(clientName);
//console.log(amount);
/*
import * as clientInfo from "./client.js";
console.log(clientInfo.clientName);
console.log(clientInfo.amount);
*/

//use the function
//let client = displayClientInfo(clientName, amount);
//console.log(client);

//use the class
let client = new Client("Kasia", 20);
console.log(client);

//use the business class
let business = new Bussines("Udemy", 1000000, "education");
console.log(business.displayClientInfo());