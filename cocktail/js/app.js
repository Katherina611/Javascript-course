//instanciate the classes
const ui = new UI(),
      coctail = new CocktailAPI();
//create event listeners
function eventListeners(){
    //add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if (searchForm){
        searchForm.addEventListener('submit', getCoctails);
    }

}
eventListeners();

//get coctails function
function getCoctails(event){
    event.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    //check sth is on the search input
    if(searchTerm === ''){
        //call user interface print message
        ui.printMessage('Please add somrthing into the form', 'danger');

    }else{
        //server response from promise
        let serverResponse;
        //type of search(ingredients, coctails, name)
        const type = document.querySelector('#type').value;
        //evaluate the type of method and then execute the query
        switch(type){
            case 'name':
                serverResponse = coctail.getDrinksByName(searchTerm);
                break;
            case 'ingredient':
                serverResponse = coctail.getDrinksByIngredient(searchTerm);
                break;
        }

        ui.clearResults();
        //query by the name of the drink
        serverResponse.then(coctails =>{
            if(coctails.coctails.drinks === null){
                //nothing exists
                ui.printMessage("There're no results, try a different term", 'danger');
            }else{
                if(type === 'name'){
                    //display with ingredient
                    ui.displayDrinksWithIngerdients(coctails.coctails.drinks);
                }else{
                    //dipaly without ingredients (category, alcohol, ingredient)
                    ui.displayDrink(coctails.coctails.drinks);
                }
            }
        })

    }


}