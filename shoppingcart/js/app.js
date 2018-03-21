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
    //clear cart btn
    clearCartBtn.addEventListener('click', clearCart);
    //document ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
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
        <td>
            <a href="#" class = "remove" data-id="${course.id}">X</a>
        </td>
    </tr>
    `;
    //add into the shopping cart
    shoppingCartContent.appendChild(row);
    //add course into storage
    saveIntoStorage(course);
}
//add the courses into local storage
function saveIntoStorage(course){
    let courses = getCoursesFromStorage();
    //add the course into the array
    courses.push(course);
    //since storage only save strings, we need to convert JSON into string
    localStorage.setItem('courses', JSON.stringify(courses));
}

//get the contents from storage
function getCoursesFromStorage(){
    let courses;
    //if sth exist on storage then we get the value, otherwise create an empty array
    if(localStorage.getItem('courses') === null){
        courses = [];
    }else{
        courses = JSON.parse(localStorage.getItem('courses'))
    }
    return courses;
}

//remove course from the dom
function removeCourse(event){
    let course, courseId;
    //remove from the DOM
    if(event.target.classList.contains('remove')){
        event.target.parentElement.parentElement.remove();
        course = event.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute("data-id");
    }
    console.log(courseId);
    //remove  from the local storage
    removeCourseFromLocalStorage(courseId);
}
//remove from local storage
function removeCourseFromLocalStorage(id){
    //get the local storage data
    let coursesLS = getCoursesFromStorage();
    //loop througth the array and find the index to remove
    coursesLS.forEach(function(courseLS, index){
        if(courseLS.id === id){
            coursesLS.splice(index, 1);
        }
    });
    console.log(coursesLS);
    //add the rest of array
    localStorage.setItem('courses', JSON.stringify(coursesLS));
}

//clears the shopping cart
function clearCart(){
    //shoppingCartContent.innerHTML = ''; I method
    //II method
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
        //clear from local storage
        clearLocalStorage();
    }
}
//clears the whole local storage
function clearLocalStorage(){
    localStorage.clear();
}
//load when document is ready and print courses into shopping cart
function getFromLocalStorage(){
    let coursesLS = getCoursesFromStorage();
    //loop throught the courses and print into the cart
    coursesLS.forEach(function(course){
        //create the <tr>
        const row = document.createElement('tr');
        //print the content
        row.innerHTML = `
        <tr>
            <td>
                <img src = "${course.image}" width="100px"/>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class = "remove" data-id="${course.id}">X</a>
            </td>
        </tr>
        `;
        shoppingCartContent.appendChild(row);
    })
}

