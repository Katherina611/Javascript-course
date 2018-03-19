//variables

const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');

//event listener
loadEventListeners();
function loadEventListeners(){
    //when a new couse is added
    courses.addEventListener('click',buyCourse);
    //when the remobe button is clicked
    shoppingCartContent.addEventListener('click',removeCourse);
    //cear cart btn
    clearCartBtn.addEventListener('click', clearCart);
}


//functions
function buyCourse(event){
    event.preventDefault();
    //use delegation to find the course that was added
    if(event.target.classList.contains('add-to-cart')){
        //read the course value
        const course = event.target.parentElement.parentElement;
        //read the values
        getCourseInfo(course);
    }
}
//read the HTML information of the select course
function getCourseInfo(course){
    //create an object with course data
    const courseInfo = {
        image:course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price:course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    };
    //insert into the shopping cart
    addIntoCart(courseInfo);

}
//display the selected course into shoppin cart
function addIntoCart(course){
    //craete a <tr>
    const row = document.createElement('tr');
    //buil the template
    row.innerHTML = `
    <tr>
        <td>
            <img src = "${course.image}" width="100px"/>
        </td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td>${course.price}</td>
        <td>
            <a href="#" class = "remove" data-id="${course.price}">X</a>
        </td>
    </tr>
    `;
    //add into the shopping cart
    shoppingCartContent.appendChild(row);
}
//remove course from the dom
function removeCourse(event){
    if(event.target.classList.contains('remove')){
        event.target.parentElement.parentElement.remove();
    }
}
//clears the shopping cart
function clearCart(){
    //shoppingCartContent.innerHTML = ''; I method
    //II method
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);

    }
}