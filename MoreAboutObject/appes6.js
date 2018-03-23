//class
class Client{
    // to the constructor
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    membership(){
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
    clientInfo(){
        return `Name: ${this.name}, balance: ${this.balance}, 
        membership: ${this.membership()}`
    }
    getBalance(){
        return this.balance;
    }
    //static method doesn't require instantiation
    static welcome(){
        return 'Welcome to your Bank';
    }

}
const mary = new Client('Mary', 1000);
console.log(mary);
console.log(mary.clientInfo());
console.log(Client.welcome());

//business class
class Business extends Client{
    constructor(name, balance, phone, category){
        //access to parent constructor propertis
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }
    clientInfo(){
        return `Name: ${this.name}, balance: ${this.balance}, 
        membership: ${this.membership()}, phone: ${this.phone}, category: ${this.category}`
    }
    //static method doesn't require instantiation
    static welcome(){
        return 'Welcome to banking for business';
    }
}
//instanciate the subclass
const business = new Business("Business Name",10000, 247853980, 'Real State');
console.log(business);
console.log(business.clientInfo());
console.log(Client.welcome());