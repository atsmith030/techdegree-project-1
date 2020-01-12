/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Angilia Smith
1/11/2020
******************************************/


/*** 
 * `quotes` array 
***/


let quotes = [
  {
    quote: "May the force be with you.",
    source: "Star Wars",
    citation: "Movie",
    year: "1977"
  },
  {
    quote: "There's no place like home.",
    source: "Wizard of Oz",
    citation: "Movie",
    year: "1939"
  },
  {
    quote: "Nobody puts Baby in the corner.",
    source: "A Dirty Dancing",
    citation: "Movie",
    year: "1987"
  },
  {
    quote: "There's no crying in baseball.",
    source: "A League of Their Own",
    citation: "Movie",
    year: "1992"
  },
  {
    quote: "That'll do pig. That'll do.",
    source: "Babe",
    citation: "Movie",
    year: "1995"
  },
  {
    quote: "If you build it, he will come.",
    source: "A Field of Dreams",
    citation: "Movie",
    year: "1989"
  },
  {
    quote: "You're killin' me Smalls",
    source: "The Sandlot",
    citation: "Movie",
    year: "1993"
  },
  {
    quote: "You had me at 'hello.'",
    source: "Jerry Maguire",
    citation: "Movie",
    year: "1996"
  },
  {
    quote: "To infinity and beyond",
    source: "Toy Story",
    citation: "Movie",
    year: "1995"
  },
  {
    quote: "You can't handle the truth.",
    source: "A Few Good Men",
    citation: "Movie",
    year: "1992"
  }
];


/***
 * `getRandomQuote` function
***/


function getRandomQuotes() {
  
  var randomNumber = Math.floor((Math.random()*quotes.length));
  //generates a random number between 0 and the length of the quotes array

  return quotes[randomNumber]; //returns random quote index 
}


/***
 * `printQuote` function
***/


function printQuote() {

  var printHTML = ``;

  var getRandom = getRandomQuotes(); //calls getRandomQuote() function

  printHTML += '<p class="quote">' + getRandom.quote + '</p>';
  printHTML += '<p class="source">' + getRandom.source ;

  if (getRandom.hasOwnProperty('citation')) {
    printHTML += '<span class="citation">' + getRandom.citation + '</span>';
    } 

  if (getRandom.hasOwnProperty('year')) {
    printHTML += '<span class="year">' + getRandom.year + '</span>';
    }   

  printHTML += '</p>';
  document.getElementById('quote-box').innerHTML = printHTML;

  return printHTML;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);