//Variables
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();
function eventListeners(){
    //Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}

//Function

function newTweet(event){
    event.preventDefault();
    //Read the textarea value
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);

    //create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create a <li> element
    const li = document.createElement('li');
    li.textContent = tweet;

    //add the remove button to each tweet
    li.appendChild(removeBtn);

    //addd <li> to the list
    tweetList.appendChild(li);
}

//removes the tweets from the DOM

function removeTweet(event){
    if(event.target.classList.contains('remove-tweet')){
        event.target.parentElement.remove();
    }
}
