class CoctailDB{
    //save the recipes into local storage
    saveIntoDB(drink){
        const drinks = this.getFromDB();
        drinks.push(drink);
        //add the new array into local storage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }
    //removes element from local storage
    removeFromDB(id){
        const drinks = this.getFromDB();
        //loop
        drinks.forEach((drink, index) =>{
            if(id === drink.id){
                drinks.splice(index,1);
            }
        });
        //set the array into local storage
        localStorage.setItem('drinks',JSON.stringify(drinks));
    }
    //return recipe from local storage
    getFromDB(){
        let drinks;
        //check from the storage
        if(localStorage.getItem('drinks') === null){
            drinks = [];
        }else{
            drinks = JSON.parse(localStorage.getItem('drinks'));
        }
        return drinks;
    }
}