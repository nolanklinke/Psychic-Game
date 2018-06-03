
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeydown = function(event) {

    var userGuess = event.key;

    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === computerChoice) {
        wins++;
        guessesLeft= 9;
        $("#plusWins").text(wins);
    } else {
        guessesLeft--;
        $("#guessLeft").text(guessesLeft);
        $("#guesses").text(userGuess);
    }
};
/*
var newH1 = $("<H1>");
        newH1.text(randomNumber);
        newH1.attr("class", "text-center");

          $("#random-number").prepend(newH1);
*/
