//classes

//everything related to the quotation and calculations is Insurance
class Insurance{
    constructor(make, year, level){
        this.make = make;
        this.year = year;
        this.level = level;
    }
    //calculate the price for the current quotation
    calculateQuotation(insurance){
        let price;
        const base = 2000;
        //get the make
        const make = insurance.make;
        /*
        1 - American 15%
        2 - Asian 5%
        3 - European 35%
         */
        switch (make){
            case '1':
                price = base * 1.15;
                break;
            case '2':
                price = base * 1.05;
                break;
            case '3':
                price = base * 1.35;
                break;
        }
        //get the year
        const year = insurance.year;
        // get the year difference
        const difference = this.getYearDifference(year);

        //each year the cost of the insurance is going to be 3% cheaper
        price = price - ((difference * 3) * price) / 100;

        //check the level of protection
        const level = insurance.level;
        price = this.calculateLevel(price, level);

        return price;

    };
    //return the difference between yaers
    getYearDifference(year){
        return new Date().getFullYear() - year;
    };

    // adds the value based on the level of protection
    calculateLevel(price, level){
        /*
        basic insurance is going to increase the value by 30%
        complete insurance is going to increase the value by 50%
         */
        if(level === 'basic'){
            price = price * 1.30;
        }else{
            price = price * 1.50;
        }
        return price;
    };
}

//everything related to the HTML
class HTMLUI{

    //displays the latest 20 years in the select
    displayYear(){
        //max and minimum years
        const max = new Date().getFullYear(),
            min = max - 20;
        //generate the list with the latest 20 years
        const selectYears = document.getElementById('year');
        //print the values
        for (let i = max; i>= min; i--){
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYears.appendChild(option);
        }

    };
    //prints an error
    displayError(message){
        //create a div
        const div = document.createElement('div');
        div.classList = 'error';
        //insert the message
        div.innerHTML = `
        <p>${message}</p>
    `;
        form.insertBefore(div, document.querySelector('.form-group'));
        //remove the error
        setTimeout(function(){
            document.querySelector('.error').remove();
        },3000);
    };
    //prints the result into the HTML
    showResult(price, insurance){
        //print the result
        const result = document.getElementById('result');
        //create a div with the result
        const div = document.createElement('div');
        //get make from the object and assign as readable name
        let make = insurance.make;
        switch(make){
            case '1':
                make = "American";
                break;
            case '2':
                make = "Asian";
                break;
            case '3':
                make = "European";
                break;
        }
        //insert the result
        div.innerHTML = `
        <p class = 'header'>Summary</p>
        <p>Make: ${make} </p>
        <p>Year: ${insurance.year}</p>
        <p>Level: ${insurance.level}</p>
        <p class = 'total'>Total: $ ${price}</p>
    `;
        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';
        setTimeout(function(){
            spinner.style.display = 'none';
            //insert this into the HTML
            result.appendChild(div);
        },3000);

    };

}