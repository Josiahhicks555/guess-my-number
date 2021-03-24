//#region working code
//random Number generator
var randomNumber = Math.floor(Math.random() * 20) + 1;

//Players guesses
var allGuesses = [];
var playerScore = 0;
var correct = 0;
var highscore = 0;

function myFunction(){

    var x, text;
    
    var playerGuesses;
    playerGuesses = document.getElementById("numb").value;
    
    x = document.getElementById("numb").value; 
    
    allGuesses.push(" " + playerGuesses);
    document.getElementById("NumbersGuessed").innerHTML = allGuesses;
 
    
//number answered and score counter
    if (x<1 || x>20){
        var text = "Hey there buddy, enter a number between 1 and 20 please.";
        document.getElementById("response").innerHTML = text;
    } else if (x == randomNumber){

    text = "wow, good guesser";
    document.getElementById("response").innerHTML = text
    document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose " + x;
    playerScore = playerScore + 5;
    correct = correct + 1;
    randomNumber = Math.floor(Math.random() * 20) + 1;
 } else {
     text = "nope try again";
     document.getElementById("response").innerHTML = text
     document.getElementById("answer").innerHTML = "The number I chose will show here when you get it correct";// + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose " + x;
    playerScore = playerScore - 2;
    
 }
if (correct >= 20 ){
    if (playerScore > highscore){
        console.log("Player score = "+playerScore)
        highscore = playerScore;
        console.log("This is the high score: " + highscore) 
        document.getElementById("highScore").innerHTML = "High Score: " + highscore;
    }
    resetFunction();
}

//document.getElementById correct is working but not how it should be
 document.getElementById("correct").innerHTML = correct;
 document.getElementById("playerScore").innerHTML = playerScore;
 
};
//reset 
function resetFunction(){
    correct = 0;
    playerScore = 0;
    NumbersGuessed = 0;
    allGuesses=[];
    
};

//#endregion
