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
    //get single recipe
    async getSingleRecipe(id){
        //search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        //wait for the response and return json
        const recipe = await apiResponse.json();
        return {
            recipe
        }
    }
    //retrives all the categories from rest api
    async getCategories(){
        const apiResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        //wait for the response and return json
        const categories = await apiResponse.json();
        return {
            categories
        }

    }

}