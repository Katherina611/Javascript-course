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
        //query by the name of the drink
        coctail.getDrinksByName(searchTerm)
            .then(coctails =>{
                if(coctails.coctails.drinks === null){
                    //nothing exists
                    ui.printMessage("There're no results, try a different term", 'danger');
                }else{
                    ui.displayDrinksWithIngerdients(coctails.coctails.drinks);
                }
            })

    }


}