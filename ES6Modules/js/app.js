//import from client.js
import{clientName, amount, displayClientInfo} from "./client.js";
console.log(clientName);
console.log(amount);
/*
import * as clientInfo from "./client.js";
console.log(clientInfo.clientName);
console.log(clientInfo.amount);
*/

//use the function
let client = displayClientInfo(clientName, amount);
console.log(client);
