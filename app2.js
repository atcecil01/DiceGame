

//Selecting dice before first roll results in 6s?///////////////////////////////////////////////////////////////////////

//Define variables
var roll1, roll2, roll3, roll4, roll5;
var rollCount = 0;
var score = 0;
var roundScore = 0;

// Define boolean variable to freeze selected dice during next roll

// Try defining frozen dice using an array or object ///////////////////////////////////////////////////////////////////
var d1frozen = false;
var d2frozen = false;
var d3frozen = false;
var d4frozen = false;
var d5frozen = false;

//Load Dice image elements into variables
var rollButton = document.getElementById("rollButton");

var die = [document.getElementById('d1'), document.getElementById('d2'), document.getElementById('d3'), document.getElementById('d4'), document.getElementById('d5')]
/*
var die1 = document.getElementById("d1");
var die2 = document.getElementById("d2");
var die3 = document.getElementById("d3");
var die4 = document.getElementById("d4");
var die5 = document.getElementById("d5");
*/


//Load categories elements into variables
var ones = document.getElementById("ones");
var twos = document.getElementById("twos");
var threes = document.getElementById("threes");
var fours = document.getElementById("fours");
var fives = document.getElementById("fives");
var sixes = document.getElementById("sixes");
var threeKind = document.getElementById("threeKind");
var fourKind = document.getElementById("fourKind");
var fullHouse = document.getElementById("fullHouse");
var sStraight = document.getElementById("sStraight");
var lStraight = document.getElementById("lStraight");
var chance = document.getElementById("chance");
var fiveKind = document.getElementById("fiveKind");
var fiveKind2 = document.getElementById("fiveKind2");

// onclick to freeze/unfreeze dice
die[0].addEventListener("click", function() {
    if (d1frozen === false) {
        d1frozen = true;
        die[0].style.border = "4px solid Red";
    } else {
        d1frozen = false;
        die[0].style.border = "";
    }
});
die[1].addEventListener("click", function() {
    if (d2frozen === false) {
        d2frozen = true;
        die[1].style.border = "4px solid Red";
    } else {
        d2frozen = false;
        die[1].style.border = "";
    }
});
die[2].addEventListener("click", function() {
    if (d3frozen === false) {
        d3frozen = true;
        die[2].style.border = "4px solid Red";
    } else {
        d3frozen = false;
        die[2].style.border = "";
    }
});
die[3].addEventListener("click", function() {
    if (d4frozen === false) {
        d4frozen = true;
        die[3].style.border = "4px solid Red";
    } else {
        d4frozen = false;
        die[3].style.border = "";
    }
});
die[4].addEventListener("click", function() {
    if (d5frozen === false) {
        d5frozen = true;
        die[4].style.border = "4px solid Red";
    } else {
        d5frozen = false;
        die[4].style.border = "";
    }
});

// Define rollDice function
function rollDice() {
    // Math.random to get a random number between 1 and 6
    if (rollCount < 3) {
        if (d1frozen === false) {
            roll1 = Math.floor(Math.random()*(6)+1);
        };
        if (d2frozen === false) {
            roll2 = Math.floor(Math.random()*(6)+1);
        };
        if (d3frozen === false) {
            roll3 = Math.floor(Math.random()*(6)+1);
        };
        if (d4frozen === false) {
            roll4 = Math.floor(Math.random()*(6)+1);
        };
        if (d5frozen === false) {
            roll5 = Math.floor(Math.random()*(6)+1);
        };
        rollCount += 1;
    };
}

//Roll Button Programming
rollButton.addEventListener("click", function() {
    rollDice();
    // Load img for die 1 based on roll1 variable
    if (parseInt(roll1) === 1) {
        die[0].setAttribute("src", "img/die1.jpg");
        die[0].setAttribute("alt", "one")
    } else if (parseInt(roll1) === 2) {
        die[0].setAttribute("src", "img/die2.jpg");
        die[0].setAttribute("alt", "two");
    } else if (parseInt(roll1) === 3) {
        die[0].setAttribute("src", "img/die3.jpg");
        die[0].setAttribute("alt", "three")
    } else if (parseInt(roll1) === 4) {
        die[0].setAttribute("src", "img/die4.jpg");
        die[0].setAttribute("alt", "four")
    } else if (parseInt(roll1) === 5) {
        die[0].setAttribute("src", "img/die5.jpg");
        die[0].setAttribute("alt", "five")
    } else {
        die[0].setAttribute("src", "img/die6.jpg");
        die[0].setAttribute("alt", "six")
    }

    //Die 2 image selection
    if (parseInt(roll2) === 1) {
        die[1].setAttribute("src", "img/die1.jpg");
        die[1].setAttribute("alt", "one")
    } else if (parseInt(roll2) === 2) {
        die[1].setAttribute("src", "img/die2.jpg");
        die[1].setAttribute("alt", "two")
    } else if (parseInt(roll2) === 3) {
        die[1].setAttribute("src", "img/die3.jpg");
        die[1].setAttribute("alt", "three")
    } else if (parseInt(roll2) === 4) {
        die[1].setAttribute("src", "img/die4.jpg");
        die[1].setAttribute("alt", "four")
    } else if (parseInt(roll2) === 5) {
        die[1].setAttribute("src", "img/die5.jpg");
        die[1].setAttribute("alt", "five")
    } else {
        die[1].setAttribute("src", "img/die6.jpg");
        die[1].setAttribute("alt", "six")
    }
    //Die 3 image selection
    if (parseInt(roll3) === 1) {
        die[2].setAttribute("src", "img/die1.jpg");
        die[2].setAttribute("alt", "one")
    } else if (parseInt(roll3) === 2) {
        die[2].setAttribute("src", "img/die2.jpg");
        die[2].setAttribute("alt", "two")
    } else if (parseInt(roll3) === 3) {
        die[2].setAttribute("src", "img/die3.jpg");
        die[2].setAttribute("alt", "three")
    } else if (parseInt(roll3) === 4) {
        die[2].setAttribute("src", "img/die4.jpg");
        die[2].setAttribute("alt", "four")
    } else if (parseInt(roll3) === 5) {
        die[2].setAttribute("src", "img/die5.jpg");
        die[2].setAttribute("alt", "five")
    } else {
        die[2].setAttribute("src", "img/die6.jpg");
        die[2].setAttribute("alt", "six")
    }
    //Die 4 image selection
    if (parseInt(roll4) === 1) {
        die[3].setAttribute("src", "img/die1.jpg");
        die[3].setAttribute("alt", "one")
    } else if (parseInt(roll4) === 2) {
        die[3].setAttribute("src", "img/die2.jpg");
        die[3].setAttribute("alt", "two")
    } else if (parseInt(roll4) === 3) {
        die[3].setAttribute("src", "img/die3.jpg");
        die[3].setAttribute("alt", "three")
    } else if (parseInt(roll4) === 4) {
        die[3].setAttribute("src", "img/die4.jpg");
        die[3].setAttribute("alt", "four")
    } else if (parseInt(roll4) === 5) {
        die[3].setAttribute("src", "img/die5.jpg");
        die[3].setAttribute("alt", "five")
    } else {
        die[3].setAttribute("src", "img/die6.jpg");
        die[3].setAttribute("alt", "six")
    }
    //Die 5 image selection
    if (parseInt(roll5) === 1) {
        die[4].setAttribute("src", "img/die1.jpg");
        die[4].setAttribute("alt", "one")
    } else if (parseInt(roll5) === 2) {
        die[4].setAttribute("src", "img/die2.jpg");
        die[4].setAttribute("alt", "two")
    } else if (parseInt(roll5) === 3) {
        die[4].setAttribute("src", "img/die3.jpg");
        die[4].setAttribute("alt", "three")
    } else if (parseInt(roll5) === 4) {
        die[4].setAttribute("src", "img/die4.jpg");
        die[4].setAttribute("alt", "four")
    } else if (parseInt(roll5) === 5) {
        die[4].setAttribute("src", "img/die5.jpg");
        die[4].setAttribute("alt", "five")
    } else {
        die[4].setAttribute("src", "img/die6.jpg");
        die[4].setAttribute("alt", "six")
    }
});


// Score Check Variables
var onesAvail = true;
var twosAvail = true;
var threesAvail = true;
var foursAvail = true;
var fivesAvail = true;
var sixesAvail = true;
var gameScore = document.getElementById("gameScore");

// Accept roll button
var acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click", function() {
    rollCount = 0;
    // Store die in array and sort die by value
    finalRoll = [roll1, roll2, roll3, roll4, roll5];
    finalRoll.sort();
    console.log(finalRoll);

    // Add code to match dice roll to categories///////////////////////////////////////////////////////////////////////
    // Ones
    if (finalRoll.includes(1) === true && onesAvail === true) {
        // Changes font color to blue if available, and red if selected
        console.log("ones available");
        document.getElementById("ones").style.color = "blue";
        ones.addEventListener("click", function() {
            document.getElementById("ones").style.color = "red";
            // Checks if ones are available, and sums total of ones
            if (onesAvail === true) {
                if (finalRoll[0] === 1) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 1 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 1 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 1 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 1 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Updates score id in HTML based on # of ones in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                onesAvail = false;
                // Deselects any selected die after score option has been selected
                d1frozen = false;
                die[0].style.border = "";
                d2frozen = false;
                die[1].style.border = "";
                d3frozen = false;
                die[2].style.border = "";
                d4frozen = false;
                die[3].style.border = "";
                d5frozen = false;
                die[4].style.border = "";
            }
            /* Disable other scoring options, maybe use modal for scoring selection? /////////////////////////////////
                Selecting multiple scoring options after accepting roll will result in points being awarded for each
                category selected.
            */
        });
    }


    // Twos
    if (finalRoll.includes(2) === true && twosAvail === true) {
        console.log("twos available");
        document.getElementById("twos").style.color = "blue";
        twos.addEventListener("click", function() {
            document.getElementById("twos").style.color = "red";
            if (twosAvail === true) {
                if (finalRoll[0] === 2) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 2 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 2 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 2 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 2 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Update score id in HTML based on # of twos in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                twosAvail = false;
                // Deselects any selected die after score option has been selected
                d1frozen = false;
                die[0].style.border = "";
                d2frozen = false;
                die[1].style.border = "";
                d3frozen = false;
                die[2].style.border = "";
                d4frozen = false;
                die[3].style.border = "";
                d5frozen = false;
                die[4].style.border = "";
            }
        });
    }

    // threes
    if (finalRoll.includes(3) === true && threesAvail === true) {
        // Changes font color to blue if available, and red if selected
        console.log("threes available");
        document.getElementById("threes").style.color = "blue";
        threes.addEventListener("click", function() {
            document.getElementById("threes").style.color = "red";
            // Checks if threes are available, and sums total of threes
            if (threesAvail === true) {
                if (finalRoll[0] === 3) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 3 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 3 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 3 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 3 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Updates score id in HTML based on # of ones in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                threesAvail = false;
                // Deselects any selected die after score option has been selected
                d1frozen = false;
                die[0].style.border = "";
                d2frozen = false;
                die[1].style.border = "";
                d3frozen = false;
                die[2].style.border = "";
                d4frozen = false;
                die[3].style.border = "";
                d5frozen = false;
                die[4].style.border = "";
            }
        });
    }
});
