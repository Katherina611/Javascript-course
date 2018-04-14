class EventBrite{
    //constructor with instanciate
    constructor(){
        this.auth_token ='LTRG3JUAP6FR4LBVVI3T';
        this.orderby = 'date'
    }
    //get the events from API
    async queryAPI(eventName, category){
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);
        //wait for response and return as json
        const events = await eventsResponse.json();
        return {
            events
        }
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