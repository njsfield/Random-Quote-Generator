// Set up HTML variables

var button = document.getElementById('generate');
var quoteText = document.getElementById('quote');
var quoteAuthor = document.getElementById('author');
var tweet = document.getElementById('tweet');
var head = document.getElementsByTagName('head')[0];


// Url of api

var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=retrieveQuote";


// Event listener for button

button.addEventListener('click', function(){
    appendJSONP();
})


// Create JSONP script tag and append to head

function appendJSONP(){
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
}


// Callback for JSONP response

function retrieveQuote(data) {
    updateDom(data);
    var script = document.getElementsByTagName('script')[0];
    head.removeChild(script);
}


// Change quote and update DOM function & update Tweet button

function updateDom(data) {
    quoteText.innerHTML = data.quoteText;
    quoteAuthor.innerHTML = data.quoteAuthor;
    tweet.href = "https://twitter.com/intent/tweet?text='" +data.quoteText+ "' - " +data.quoteAuthor;
}

// Generate on load

window.onload = function(){
    appendJSONP();
}
