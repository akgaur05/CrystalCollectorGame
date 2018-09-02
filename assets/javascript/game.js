$(document).ready(function () {
    // Generates random number to guess
    var totalScoreMatch = Math.floor(Math.random() * ((102 - 19) + 1) + 19);

    // Display random number
    $('#totalScore').text(totalScoreMatch);

    //Generate unique random number for each crystal
    var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    Shuffle(testArray);
    var num1 = (testArray[0]);
    var num2 = (testArray[1]);
    var num3 = (testArray[2]);
    var num4 = (testArray[3]);

    //function for random numbers
    function Shuffle(arrayNumber) {
        for (var j, x, i = arrayNumber.length; i; j = parseInt(Math.random() * i), x = arrayNumber[--i], arrayNumber[i] = arrayNumber[j], arrayNumber[j] = x);
        return arrayNumber;
    };

    // Variables to keep track of wins, losses and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#yourScore').text(playerTotal);

    // Clicking crystals
    $('.red').on('click', function () {
        var image = $(".red");
        image.animate({ height: '120px' }, "fast");
        image.animate({ height: '100px' }, "fast");
        playerTotal = playerTotal + num1;
        $('#yourScore').text(playerTotal);
        if (playerTotal == totalScoreMatch) {
            checkWin();
        }
        else if (playerTotal > totalScoreMatch) {
            checklosses();
        }
    })
    $('.blue').on('click', function () {
        var image = $(".blue");
        image.animate({ height: '120px' }, "fast");
        image.animate({ height: '100px' }, "fast");
        playerTotal = playerTotal + num2;
        $('#yourScore').text(playerTotal);
        if (playerTotal == totalScoreMatch) {
            checkWin();
        }
        else if (playerTotal > totalScoreMatch) {
            checklosses();
        }
    })
    $('.brown').on('click', function () {
        var image = $(".brown");
        image.animate({ height: '120px' }, "fast");
        image.animate({ height: '100px' }, "fast");
        playerTotal = playerTotal + num3;
        $('#yourScore').text(playerTotal);
        if (playerTotal == totalScoreMatch) {
            checkWin();
        }
        else if (playerTotal > totalScoreMatch) {
            checklosses();
        }
    })
    $('.green').on('click', function () {
        var image = $(".green");
        image.animate({ height: '120px' }, "fast");
        image.animate({ height: '100px' }, "fast");
        playerTotal = playerTotal + num4;
        $('#yourScore').text(playerTotal);

        if (playerTotal == totalScoreMatch) {
            checkWin();
        }
        else if (playerTotal > totalScoreMatch) {
            checklosses();
        }
    });
    // Reset game
    function reset() {
        totalScoreMatch = Math.floor(Math.random() * ((102 - 19) + 1) + 19);
        $('#totalScore').text(totalScoreMatch);
        Shuffle(testArray);
        num1 = (testArray[0]);
        num2 = (testArray[1]);
        num3 = (testArray[2]);
        num4 = (testArray[3]);
        playerTotal = 0;
        $("#yourScore").css("color", "#333");
        $('#yourScore').text(playerTotal);
        $('#alertMessage').text("");
    }
    // Display wins
    function checkWin() {
        var winText = " Congrats! You won!";
        wins++;
        $('#wins').text(wins);
        $("#yourScore").css("color", "red");
        $('#yourScore').text(winText);
        setTimeout(reset, 1000);
    }
    // Display losses
    function checklosses() {
        var loseText = " Sorry! You lose!";
        losses++;
        $('#losses').text(losses);
        $("#yourScore").css("color", "red");
        $('#yourScore').text(loseText);
        setTimeout(reset, 1000);
    }
}); 