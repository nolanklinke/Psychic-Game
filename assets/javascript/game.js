
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
computerChoice = letters[Math.floor(Math.random() * letters.length)];

function refreshLetter() {
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice); 
};

refreshLetter();

function updateGuessesLeft() {
    $("#guessLeft").text(guessesLeft);
}

function updateWins() {
    $("#plusWins").text(wins);
};

function updateLosses() {
    $("#plusLoss").text(losses);
};

function reset () {
    guessesLeft =9;

};

updateGuessesLeft();


