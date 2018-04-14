class UI{
    constructor(){
        //app inicialization
        this.init();
    }
    //method when the app strats
    init(){
        //display categories in <select>
        this.printCategories();
    }
    //print the categories
    printCategories(){
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(categories =>{
                const categoriesList = categories.categories.categories;
                const categoriesSelect = document.querySelector('#category ');
                //inserts categories into select
                categoriesList.forEach(category =>{
                    //create the <option>
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    }
    //displays the message
    printMessage(message,className){
        //create a div
        const div = document.createElement('div');
        div.className = className;
        //add the text
        div.appendChild(document.createTextNode(message));
        //insert into the HTML
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);
        //remove the alert after 3s
        setTimeout(()=>{
            this.removeMessage();
        },3000)

    }
    //remove the message
    removeMessage(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}