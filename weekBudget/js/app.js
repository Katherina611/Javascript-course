//classes
class Budget{
    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}
//everything related to HTML
class HTML {
    //inserts the budget when the user submits it
    insertBudget(amount){
        //insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
}

//variables
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');
let budget,userBudget;
//instaciate the HTML class
const html = new HTML();

//event listeners
eventListeners();
function eventListeners(){
    //app init
    document.addEventListener('DOMContentLoaded',function(){
        //ask the visitors the weekly budget
        userBudget = prompt("What's your budget for this week?");
        //validate the userBudget
        if(userBudget === null || userBudget === '' || userBudget === '0'){
            window.location.reload();
        }else{
            //budget is valid the instanciate the budget class
            budget = new Budget(userBudget);
            //instanciate HTML class
            html.insertBudget(budget.budget);
        }

    });
    //when the new expence is added
    addExpenseForm.addEventListener("submit", function(event){
        event.preventDefault();
    });

}
