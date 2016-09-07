## Synopsis

A Random Quote Generator, for the purposes of practicing JSONP calls, set as a FCC challenge.

## Goal

- To create a site where the user can click the generate button to view a random quote
- To add functionality so the user can also Tweet the random quote
- To retrieve data using JSONP calls
- To implement the functionality using Vanilla JavaScript (no jQuery)
- To demonstrate an understanding of CSS transforms and transitions


## Notes

- To simulate a loading circle, I created a html class called 'c'. 
The :before Selector for this class adds a white coloured letter 'c' in place.
A keyframes animation is used to infinitely rotate the 'c' 360 degrees on the x axis every 500ms.

- When the generate button is called, the 'c' class is added to the button element, when the page finishes loading the JSON response, the 'c' class is replaced with the 'generate' class which utlises a :before selector with the content 'Generate' text.

- Quote text is faded out by adding the class 'fade-out' to the #quote element, which has a single opacity: 0 property.
The #quote element has a transition property of 'opacity 1s ease-out'. 
When the JSON data is loaded, this class is then removed.

- To retrieve JSONP, a function is executed to generate a script tag in the head element with the API call, which includes the corresponding callback function in it's query string. Once loaded, the quoteText and quoteAuthor values are injected into the corresponding html elements, and the script tag is then removed.

## Contributors

Feel free to submit feedback, pull and & customise! 


## View on Codepen

[Check it out](http://codepen.io/njsfield/pen/kkYxpk)
