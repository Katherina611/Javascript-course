import {Client} from "./client.js";
export class Bussines extends Client{
    constructor(name, amount, category){
        super(name, amount);
        this.category = category;
    }
    displayClientInfo(){
        return `Client: ${this.name} - Amount: ${this.amount} - Category: ${this.category}`;
    }
}