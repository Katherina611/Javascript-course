//instanciate the classes
const ui = new UI(),
      coctail = new CocktailAPI(),
      coctailDB = new CoctailDB();
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
            case 'alcohol':
                serverResponse = coctail.getDrinksByAlcohol(searchTerm);
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
    //when favourite btn is clicked
    if(event.target.classList.contains('favorite-btn')){
        if(event.target.classList.contains('is-favorite')){
            //remove the class
            event.target.classList.remove('is-favorite');
            event.target.textContent = '+';
        }else{
            //add the class
            event.target.classList.add('is-favorite');
            event.target.textContent = '-';
            //get info
            const cardBody = event.target.parentElement;
            const drinkInfo = {
                id:event.target.dataset.id,
                name: cardBody.querySelector('.card-title').textContent,
                image: cardBody.querySelector('.card-img-top').src

            };
            //add into the storage
            coctailDB.saveIntoDB(drinkInfo);
        }
    }
}

//document ready
function documentReady() {
    //select the saerch category select
    const searchCategory = document.querySelector('.search-category');
    if(searchCategory){
        ui.displayCategories();
    }
    //when favorites page
    const favoritesTable = document.querySelector('#favorites');
    if(favoritesTable){
        //get the favorites from the storage and display them
        const drinks = coctailDB.getFromDB();
        ui.displayFavorites(drinks);
        //when view ir remove is clicked
        favoritesTable.addEventListener('click',(event)=>{
            event.preventDefault();
            //delegation
            if(event.target.classList.contains('get-recipe')){
                coctail.getSingleRecipe(event.target.dataset.id)
                    .then(recipe =>{
                        //displays single recipe into a modal
                        ui.displaySingleRecipe(recipe.recipe.drinks[0])

                    })
            }
            //when remobe btn is clicked in favorites
            if(event.target.classList.contains('remove-recipe')){
                //remove from DOM
                ui.removeFavorite(event.target.parentElement.parentElement);
            }
        });
    }

}


