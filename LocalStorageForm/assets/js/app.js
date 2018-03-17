//Variables
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();
function eventListeners(){
    //Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    //document
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}

//Function

function newTweet(event){
    event.preventDefault();
    //Read the textarea value
    const tweet = document.querySelector('#tweet').value;

    //create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create a <li> element
    const li = document.createElement('li');
    li.textContent = tweet;

    //add the remove button to each tweet
    li.appendChild(removeBtn);

    //add <li> to the list
    tweetList.appendChild(li);

    //add to local storage
    addTweetLocalStorage(tweet);
}

//removes the tweets from the DOM

function removeTweet(event){
    if(event.target.classList.contains('remove-tweet')){
        event.target.parentElement.remove();
    }
    //remove from storage
    removeTweetLocalStorage(event.target.parentElement.textContent);
}

//addes the tweets to loacl storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();
    //add the tweets into the array
    tweets.push(tweet);
    //convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //get the values, if null is returned then we create an empty array
    if(tweetsLS === null){
        tweets = [];
    }else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//print local storage tweets on load
function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    //loop throught storage and then prints the values
    tweets.forEach(function(tweet){
        //create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        //create a <li> element
        const li = document.createElement('li');
        li.textContent = tweet;

        //add the remove button to each tweet
        li.appendChild(removeBtn);

        //add <li> to the list
        tweetList.appendChild(li);
    })
}

//remove the tweet from local storage
function removeTweetLocalStorage(tweet){
    //get tweets from storage
    let tweets = getTweetsFromStorage();
    //remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length-1);
    //loop throught the tweet and remove the tweets that's equal
    tweets.forEach(function(tweetLS){
        if(tweetDelete === tweetLS){
            console.log('yes');
        }
    })

}