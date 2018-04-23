class CocktailAPI{
    //get recipe by name
    async getDrinksByName(name){
        //search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        //returns a json response
        const coctails = await  apiResponse.json();
        return {
            coctails
        }
    }

}