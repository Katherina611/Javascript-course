let element;
element = document.all;
element = document.head;
element = document.body;
element = document.domain;
element = document.URL;
element = document.characterSet;
element = document.contentType;

//links
element = document.links;
element = document.links[2];
element = document.links[2].id;
element = document.links[2].className;
element = document.links[2].classList;


//forms
element = document.forms[0];
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].className;
element = document.forms[0].classList;

// images
element = document.images;

//scripts
element = document.scripts[0].getAttribute('src');

//looping all the images
let images = document.images;
let imagesArray = Array.from(images);

imagesArray.forEach(function(image){
    return image.src;
});
console.log(imagesArray);

//selecting DOM element
let heading = document.getElementById('heading');
console.log(heading.textContent);


//change the CSS
heading.style.backgroundColor = '#333';
heading.style.color = "#FFFFFF";
heading.style.padding = "10px";
heading.style.marginTop = "50px";

//change the text
heading.textContent = "The best courses";
//another way
heading.innerText = "Online course";

//query selector
let learningHeading = document.querySelector('#learn');
console.log(learningHeading);

//select a class with querySelector
const tagLine = document.querySelector(".tagline");
//const newText = tagLine.textContent.replace('$15', "$12");
//tagLine.textContent = newText;
console.log(tagLine);

let card = document.querySelector(".card");

//select a tag
let heading2 = document.querySelector('h2');

//nest your selectors with a CSS syntax
let image = document.querySelector('.card img');

//query selector supports nth-child, first-child or last-child
let link;
link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(3)');

//getElementsByClassName
//const links = document.getElementsByClassName('link');
//links[0].style.color = 'red';
//another ways
//const links = document.getElementById('primary').getElementsByClassName('link');
const links = document.querySelector('#primary').getElementsByClassName('link');

const images2 = document.getElementsByTagName('img');
///convert HTML collection into an array
let imagesArray2 = Array.from(images2);

//getElementByTagName
const heading1 = document.getElementsByTagName('h1');
const cards = document.querySelectorAll('.card');
const courses = document.querySelectorAll('.card h4');
const coursesArray = Array.from(courses);
coursesArray.forEach(function(course){
    return course;
});

//select odd links
const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');
oddLinks.forEach(function(odd){
    odd.style.backgroundColor = 'red';
    odd.style.color = 'white';
});
//select even links
const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');
evenLinks.forEach(function(even){
    even.style.backgroundColor = 'blue';
    even.style.color = 'white';
});
//change all the add-to-cart button text
const addCartBtns = document.querySelectorAll('.add-to-cart');
addCartBtns.forEach(function(button){
    button.textContent = 'Something new'
});

//traversing the DOM
const navigation = document.querySelector('#primary');
let element1;
element1 = navigation.childNodes;
navigation.children[0].textContent = 'New text';
element1 = navigation.children[0].nodeName;//name of element
element1 = navigation.children[0].nodeType;//number of element
//1 - element
//2 - attributes
//3 - text nodes
//8 - comments
//9 - document
//10 - dostype
element1 = navigation.children;

const coursesList = document.querySelector('#courses-list');
element1 = coursesList.children[1].children[0].children[0].children[1].lastElementChild;//last element child of component
element1 = coursesList.children[1].children[0].children[0].children[1].firstElementChild;//first element child of component
element1 = coursesList.children[1].children[0].children[0].children[1].childElementCount;//how many element

//traversing from the children to parent
let cartBtn = document.querySelector('.add-to-cart');
element1 = cartBtn;
//parent node
element1 = cartBtn.parentNode;
element1 = cartBtn.parentElement.parentElement.children[0];//best solution

//sibling
element1 = cartBtn.previousElementSibling;
//course name
const courseName = cartBtn.parentElement.querySelector('h4');
//next element sibling
element1 = courseName.nextElementSibling;
console.log(element1);

//creating HTML elements with js
//create a new element

const newLink = document.createElement('a');

//add a class
newLink.className = "link";
//add the href
newLink.href = '#';
//newLink.setAttribute('href', '#');//second method

//add the text
newLink.appendChild(document.createTextNode('New Link'));
//add element to the HTML
document.querySelector('#primary').appendChild(newLink);

//replace an element
const newHeading = document.createElement('h2');
//add an id
newHeading.id = 'heading';
//add the class
newHeading.classList.add('heading');
//add the new text
newHeading.appendChild(document.createTextNode('The best courses'));
//select old heading
const oldHeading = document.querySelector('#heading');
//replace parent
coursesList.replaceChild(newHeading,oldHeading);

//remove elements
const links1 = document.querySelectorAll('.link');
links1[0].remove();

const cards1 = document.querySelectorAll('.card');
cards1[11].remove();

//remove by the children
const links2 = document.querySelectorAll('#primary .link');
navigation.removeChild(links2[4]);

//classes, ids and attributes
const link1 = document.querySelector('.link');
element1 = link1;
//read the class
element1 = link1.className;
//read the class (DOM token list)
element1 = link1.classList;
//access specific class with classList
element1 = link1.classList[0];
//add a new class
link1.classList.add('new-class');
//remove the class
link1.classList.remove('new-class');

//id
link1.id = 'new-id';
//remove the id
link1.id = '';
link1.removeAttribute('id');

//attributes function
element1 = link1.getAttribute('href');
element1 = link1.getAttribute('class');
element1 = link1.setAttribute('href', "http://facebook.com");
element1 = link1.setAttribute('target', "_blank");
element1 = link1.setAttribute('data-link', '10');
element1 = link1.hasAttribute('data-link');
element1 = link1.removeAttribute('data-link');
console.log(element1);

//addEventListener
const clearCartBtn = document.getElementById('clear-cart');
clearCartBtn.addEventListener('click',clearBtnFunction);
function clearBtnFunction(event){
    //target
    let elementRemove;
    elementRemove = event;
    //read the target
    elementRemove = event.target;
    elementRemove = event.target.id;
    elementRemove = event.target.className;
    elementRemove = event.target.innerText;
    console.log(elementRemove);
}
//mouse events

function printEvent(event){
    /*if(searchInput.value.length ===0){
        alert("Type something")
    }*/ //validate
    //event.preventDefault(); when submit
    console.log(searchInput.value);
    console.log(`the event is: ${event.type}`)
}
//click mouse event
//clearCartBtn.addEventListener('click',printEvent);
//double click
clearCartBtn.addEventListener('dblclick',printEvent);
//mouse enter
clearCartBtn.addEventListener('mouseenter',printEvent);
//mouse leave
clearCartBtn.addEventListener('mouseleave',printEvent);
//mouse over
clearCartBtn.addEventListener('mouseover',printEvent);
//mouse out
clearCartBtn.addEventListener('mouseout',printEvent);
//mouse up
clearCartBtn.addEventListener('mouseup',printEvent);
//mouse down
clearCartBtn.addEventListener('mousedown',printEvent);

//input and form events
const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course');
//events for <form>
searchForm.addEventListener('submit', printEvent);

//input events
//searchInput.addEventListener('keydown', printEvent);
//searchInput.addEventListener('keyup', printEvent);
//searchInput.addEventListener('keypress', printEvent);
//searchInput.addEventListener('focus', printEvent);
//searchInput.addEventListener('blur', printEvent);
//searchInput.addEventListener('cut', printEvent);
//searchInput.addEventListener('copy', printEvent);
//searchInput.addEventListener('paste', printEvent);
searchInput.addEventListener('input', printEvent);
