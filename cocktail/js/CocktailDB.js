class CoctailDB{
    //save the recipes into local storage
    saveIntoDB(drink){
        const drinks = this.getFromDB();
        drinks.push(drink);
        //add the new array into local storage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }
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