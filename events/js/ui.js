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
}