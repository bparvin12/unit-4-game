// variables 
var winCount = 0
var lossCount = 0
var startingScore = 0
var randomNum = getRandomInt(19, 120);
var numButton1 = getRandomInt(1, 12);
var numButton2 = getRandomInt(1, 12);
var numButton3 = getRandomInt(1, 12);
var numButton4 = getRandomInt(1, 12);
var currentScore = 0;
// var winLoss = "";



// get random number function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// gets html ready before js
$(document).ready(function () {

    startGame = function () {


        // create random number gen from 19-120
        //get random number you have to add up to 
        $(".randomNum").text(randomNum);
        $(".yourScore").text(currentScore)


        // picks a number 1-12 
        $(".image1").on("click", function () {
            currentScore += numButton1;
            $(".yourScore").text(currentScore);
            checkIfWon();
        });

        $(".image2").on("click", function () {
            currentScore += numButton2;
            $(".yourScore").text(currentScore);
            checkIfWon();
        });

        $(".image3").on("click", function () {
            currentScore += numButton3;
            $(".yourScore").text(currentScore);
            checkIfWon();

        });
        $(".image4").on("click", function () {
            currentScore += numButton4;
            $(".yourScore").text(currentScore);
            checkIfWon();

        });

    };

    checkIfWon = function () {

        if (currentScore > randomNum) {
            lossCount++;
            $(".lossCount").text(lossCount);
            // $(".winLoss").text("You Loss");


            startingScore = 0
            randomNum = getRandomInt(19, 120);
            $(".randomNum").text(randomNum);
            numButton1 = getRandomInt(1, 12);
            numButton2 = getRandomInt(1, 12);
            numButton3 = getRandomInt(1, 12);
            numButton4 = getRandomInt(1, 12);
            currentScore = 0;
            $(".yourScore").text(currentScore)

        };

        if (currentScore === randomNum) {
            winCount++;
            $(".winCount").text(winCount);
            // $(".winLoss").text("You Loss");


            startingScore = 0
            randomNum = getRandomInt(19, 120);
            $(".randomNum").text(randomNum);
            numButton1 = getRandomInt(1, 12);
            numButton2 = getRandomInt(1, 12);
            numButton3 = getRandomInt(1, 12);
            numButton4 = getRandomInt(1, 12);
            currentScore = 0;

        };


    };

    startGame();

});