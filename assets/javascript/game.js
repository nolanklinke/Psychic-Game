
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var computerChoice= "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function refreshLetter() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
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
    guessesLeft= 9;
    updateGuessesLeft();
    refreshLetter();

};

updateGuessesLeft();

document.onkeydown = function (event) {

    var userGuess = event.key;

    $("#guesses").text(userGuess);

    guessesLeft--;
    
    updateGuessesLeft();

    if (userGuess === computerChoice) {
        alert("Yes! You got it!");
        wins++;
        updateWins();
        reset();

    };   

    if (guessesLeft < 0) {
        alert("Oh No! You didn't guess correctly.")
        losses++;
        updateLosses();
        reset();
    };
    
};


