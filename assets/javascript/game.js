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



// get random number function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function currentScoreAdder(but1, but2, but3, but4) {
    numButt;
}

// gets html ready before js
$(document).ready(function () {

    startGame = function () {
        // create random number gen from 19-120
        //get random number you have to add up to 
        $(".randomNum").text(randomNum);


        // picks a number 1-12 
        $(".image1").on("click", function () {
            currentScore += numButton1;
            $(".yourScore").text(currentScore);

        });

        $(".image2").on("click", function () {
            currentScore += numButton2;
            $(".yourScore").text(currentScore);

        });

        $(".image3").on("click", function () {
            currentScore += numButton3;
            $(".yourScore").text(currentScore);

        });
        $(".image4").on("click", function () {
            currentScore += numButton4;
            $(".yourScore").text(currentScore);

        });

        if (currentScore == randomNum) {
            winCount++;
            $(".winCount").text(winCount);
        };



    };










    startGame();

});