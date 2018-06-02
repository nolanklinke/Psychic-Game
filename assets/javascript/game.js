
var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= "";


var computerChoice = letters[Math.floor(Math.random()*letters.length)];
console.log(computerChoice);

//generate random letter for computer
document.onkeydown = function(event) {
    var userGuess = event.key;
   
// if else loop for guess
    if (userGuess === computerChoice) {
    $("#plusWins").text("Wins: " + wins);
    wins++;
    
    }
};



//DOM modification
$("#plusWins").text("Wins: " + wins);
$("#plusLoss").text("Losses: " + losses);
