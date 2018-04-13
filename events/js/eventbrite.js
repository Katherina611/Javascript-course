class EventBrite{
    //constructor with instanciate
    constructor(){
        this.auth_token ='LTRG3JUAP6FR4LBVVI3T';
    }
    //get categories from API
    async getCategoriesAPI(){
        //query the API
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        //hold for the response andthen return as json
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}