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
console.log(link);





