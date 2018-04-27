//instanciate the classes
const ui = new UI(),
      coctail = new CocktailAPI();
//create event listeners
function eventListeners(){
    //document ready
    document.addEventListener('DOMContentLoaded', documentReady);
    //add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if (searchForm){
        searchForm.addEventListener('submit', getCoctails);
    }
    //the results div listeners
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv){
        resultsDiv.addEventListener('click', resultsDelegation);
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
            case 'category':
                serverResponse = coctail.getDrinksByCategory(searchTerm);
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

//delegation for the results area
function resultsDelegation(event){
    event.preventDefault();
    if(event.target.classList.contains('get-recipe')){
        coctail.getSingleRecipe(event.target.dataset.id)
            .then(recipe =>{
                //displays single recipe into a modal
                ui.displaySingleRecipe(recipe.recipe.drinks[0])

            })
    }
}

//document ready
function documentReady() {
    //select the saerch category select
    const searchCategory = document.querySelector('.search-category');
    if(searchCategory){
        ui.displayCategories();
    }

}
