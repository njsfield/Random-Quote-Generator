// Set up HTML variables

var button = document.getElementById('generate');
var generateLoad = document.getElementById('generate-load');
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
    generateLoad.classList.add("c");
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
}


// Callback for JSONP response

function retrieveQuote(data) {
    quoteText.classList.add("fade-out");

    setTimeout(function(){
        updateDom(data);
        var script = document.getElementsByTagName('script')[0];
        head.removeChild(script);
    },1000)
}


// Change quote and update DOM function & update Tweet button

function updateDom(data) {
    var quote = data.quoteText;
    var author = data.quoteAuthor || 'Anonymous';
    quoteText.innerHTML = quote;
    quoteAuthor.innerHTML = author;
    quoteText.classList.remove("fade-out");
    generateLoad.classList.remove("c");
    generateLoad.classList.add("generate");
    tweet.href = "https://twitter.com/intent/tweet?text='" +quote+ "' - " +author;
}

// Generate on load

window.onload = function(){
    appendJSONP();
}
