export const clientName = "Kasia";
export let amount = 200;

/*
//import/export function
export function displayClientInfo(name, amount){
    return `Clinet: ${name} - Amount: ${amount}`;
}

export const displayClientInfo = (name, amount) =>{
    return `Client: ${name} - Amount: ${amount}`;
}
*/
//create the client class
export class Client{
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
    }
    displayClientInfo(){
        return `Clinet: ${this.name} - Amount: ${this.amount}`;
    }
}