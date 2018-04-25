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
    //get recipes by ingredient
    async getDrinksByIngredient(ingredient){
        //search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        //wait for the response and return json
        const coctails = await apiResponse.json();
        return {
            coctails
        }
    }

}