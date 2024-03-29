
/*---------------------------------------------------------------
------------------------ Declare Variables ----------------------
---------------------------------------------------------------*/

//Selecting dice before first roll results in 6s?//////////////////////////////////////////////////////////////////////////////////

//Define variables
var roll = []
var rollCount = 0;
var score = 0;
var roundScore = 0;

// Define boolean variable to freeze selected dice during next roll

// Try defining frozen dice using an array or object //////////////////////////////////////////////////////////////////////////////

var d1frozen = false;
var d2frozen = false;
var d3frozen = false;
var d4frozen = false;
var d5frozen = false;

//Load Dice image elements into variables
var rollButton = document.getElementById("rollButton");
var die = [document.getElementById('d1'), document.getElementById('d2'), document.getElementById('d3'), document.getElementById('d4'), document.getElementById('d5')]

// //Load categories elements into variables
// var ones = document.getElementById("ones");
// var twos = document.getElementById("twos");
// var threes = document.getElementById("threes");
// var fours = document.getElementById("fours");
// var fives = document.getElementById("fives");
// var sixes = document.getElementById("sixes");
// var threeKind = document.getElementById("threeKind");
// var fourKind = document.getElementById("fourKind");
// var fullHouse = document.getElementById("fullHouse");
// var sStraight = document.getElementById("sStraight");
// var lStraight = document.getElementById("lStraight");
// var chance = document.getElementById("chance");
// var fiveKind = document.getElementById("fiveKind");
// var fiveKind2 = document.getElementById("fiveKind2");

// Define categories in an array /////////////////////////////////////////////////////////////////////////
var categoryArray = [document.getElementById("ones"), document.getElementById("twos"), document.getElementById("threes"), document.getElementById("fours"), document.getElementById("fives"), document.getElementById("sixes"), document.getElementById("threeKind"), document.getElementById("fourKind"), document.getElementById("fullHouse"), document.getElementById("sStraight"), document.getElementById("lStraight"), document.getElementById("chance"), document.getElementById("fiveKind"), document.getElementById("fiveKind2")]

// Score Check Variables
var onesAvail = true;
var twosAvail = true;
var threesAvail = true;
var foursAvail = true;
var fivesAvail = true;
var sixesAvail = true;
var threeKindAvail = true;
var fourKindAvail = true;
var fullHouseAvail = true;
var sStraightAvail = true;
var lStraightAvail = true;
var chanceAvail = true;
var fiveKindAvail = true;
var fiveKind2Avail = true;
var gameScore = document.getElementById("gameScore");


/*---------------------------------------------------------------
------------------------ Begin Code -----------------------------
---------------------------------------------------------------*/


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


/*---------------------------------------------------------------
----------------------- rollDice Function -----------------------
---------------------------------------------------------------*/


function rollDice() {
    // Math.random to get a random number between 1 and 6
    if (rollCount < 3) {
        if (d1frozen === false) {
            roll[0] = Math.floor(Math.random()*(6)+1);
        };
        if (d2frozen === false) {
            roll[1] = Math.floor(Math.random()*(6)+1);
        };
        if (d3frozen === false) {
            roll[2] = Math.floor(Math.random()*(6)+1);
        };
        if (d4frozen === false) {
            roll[3] = Math.floor(Math.random()*(6)+1);
        };
        if (d5frozen === false) {
            roll[4] = Math.floor(Math.random()*(6)+1);
        };
        rollCount += 1;
    };
}


/*---------------------------------------------------------------
-------------------------- Roll Button --------------------------
---------------------------------------------------------------*/


rollButton.addEventListener("click", function() {
    rollDice();
    for (let i = 0; i < roll.length; i++) {
        if (parseInt(roll[i]) === 1) {
            die[i].setAttribute("src", "img/die1.jpg");
            die[i].setAttribute("alt", "one")
        } else if (parseInt(roll[i]) === 2) {
            die[i].setAttribute("src", "img/die2.jpg");
            die[i].setAttribute("alt", "two");
        } else if (parseInt(roll[i]) === 3) {
            die[i].setAttribute("src", "img/die3.jpg");
            die[i].setAttribute("alt", "three")
        } else if (parseInt(roll[i]) === 4) {
            die[i].setAttribute("src", "img/die4.jpg");
            die[i].setAttribute("alt", "four")
        } else if (parseInt(roll[i]) === 5) {
            die[i].setAttribute("src", "img/die5.jpg");
            die[i].setAttribute("alt", "five")
        } else {
            die[i].setAttribute("src", "img/die6.jpg");
            die[i].setAttribute("alt", "six")
        }
    }
})


/*---------------------------------------------------------------
---------------------- Accept Roll Button -----------------------
---------------------------------------------------------------*/


var acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click", function() {
    rollCount = 0;
    rollButton.disabled = true;
    // Store die in array and sort die by value
    finalRoll = roll;
    finalRoll.sort();
    console.log("final roll: " + finalRoll);
    console.log(finalRoll[0]);

    // Add code to match dice roll to categories///////////////////////////////////////////////////////////////////////

    // Enable/disable buttons based on dice value & buttons clicked ///////////////////////////////////////////////////
    // Can select multiple score options after accepting roll /////////////////////////////////////////////////////////

    
    // Ones
    if (finalRoll.includes(1) === true && onesAvail === true) {
        // Activate ones if available
        console.log("ones available");
        document.getElementById("ones").disabled = false;
        categoryArray[0].addEventListener("click", function() {
            document.getElementById("ones").className = "listButtonClaimed";
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
                rollButton.disabled = false;
                // Disable all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                }                    
            }
        });
    }


    // Twos
    if (finalRoll.includes(2) === true && twosAvail === true) {
        console.log("twos available");
        document.getElementById("twos").disabled = false;
        categoryArray[1].addEventListener("click", function() {
            document.getElementById("twos").className = "listButtonClaimed";
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    // threes
    if (finalRoll.includes(3) === true && threesAvail === true) {
        // Changes font color to blue if available, and red if selected
        console.log("threes available");
        document.getElementById("threes").disabled = false;
        categoryArray[2].addEventListener("click", function() {
            document.getElementById("threes").className = "listButtonClaimed";
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    // fours
    if (finalRoll.includes(4) === true && foursAvail === true) {
        // Changes font color to blue if available, and red if selected
        console.log("fours available");
        document.getElementById("fours").disabled = false;
        categoryArray[3].addEventListener("click", function() {
            document.getElementById("fours").className = "listButtonClaimed";
            // Checks if fours are available, and sums total of threes
            if (foursAvail === true) {
                if (finalRoll[0] === 4) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 4 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 4 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 4 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 4 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Updates score id in HTML based on # of ones in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                foursAvail = false;
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    // fives
    if (finalRoll.includes(5) === true && fivesAvail === true) {
        // Changes font color to blue if available, and red if selected
        console.log("fives available");
        document.getElementById("fives").disabled = false;
        categoryArray[4].addEventListener("click", function() {
            document.getElementById("fives").className = "listButtonClaimed";
            // Checks if fives are available, and sums total of threes
            if (fivesAvail === true) {
                if (finalRoll[0] === 5) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 5 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 5 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 5 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 5 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Updates score id in HTML based on # of ones in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                fivesAvail = false;
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    // Sixes
    if (finalRoll.includes(6) === true && sixesAvail === true) 
    {
        // Changes font color to blue if available, and red if selected
        console.log("sixes available");
        document.getElementById("sixes").disabled = false;
        categoryArray[5].addEventListener("click", function() {
            document.getElementById("sixes").className = "listButtonClaimed";
            // Checks if sixes are available, and sums total of threes
            if (sixesAvail === true) {
                if (finalRoll[0] === 6) {
                    roundScore += parseInt(finalRoll[0]);
                }
                if (finalRoll[1] === 6 ) {
                    roundScore += parseInt(finalRoll[1]);
                }
                if (finalRoll[2] === 6 ) {
                    roundScore += parseInt(finalRoll[2]);
                }
                if (finalRoll[3] === 6 ) {
                    roundScore += parseInt(finalRoll[3]);
                }
                if (finalRoll[4] === 6 ) {
                    roundScore += parseInt(finalRoll[4]);
                }
                // Updates score id in HTML based on # of ones in finalRoll
                console.log("roundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                sixesAvail = false;
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    
    // 3 of a kind
    if ((finalRoll[0] == finalRoll[2]) || (finalRoll[1] == finalRoll[3]) || (finalRoll[2] == finalRoll[4])) {
        if (threeKindAvail === true) {
            console.log("3 of a kind available");
            document.getElementById("threeKind").disabled = false;
            categoryArray[6].addEventListener("click", function() {
                if (threeKindAvail === true) {
                    document.getElementById("threeKind").className = "listButtonClaimed";
                    // Add total score of all five dice
                    for (let i = 0; i < finalRoll.length; i++) {
                        roundScore += finalRoll[i];
                    }
                    console.log("RoundScore: " + roundScore);
                    score += parseInt(roundScore);
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    roundScore = 0;
                    // Deactivate 3 kind button
                    threeKindAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // 4 of a kind
    if ((finalRoll[0] == finalRoll[3]) || (finalRoll[1] == finalRoll[4])) {
        if (fourKindAvail === true) {
            console.log("4 of a kind available");
            document.getElementById("fourKind").disabled = false;
            categoryArray[7].addEventListener("click", function() {
                if (fourKindAvail === true) {
                    document.getElementById("fourKind").className = "listButtonClaimed";
                    // Add total score of all five dice
                    for (let i = 0; i < finalRoll.length; i++) {
                        roundScore += finalRoll[i];
                    }
                    console.log("RoundScore: " + roundScore);
                    score += parseInt(roundScore);
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    roundScore = 0;
                    // Deactivate 4 kind button
                    fourKindAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // Full house
    if ((finalRoll[0] == finalRoll[2] && finalRoll[3] == finalRoll[4]) || (finalRoll[0] == finalRoll[1] && finalRoll[2] == finalRoll[4])) {
        if (fullHouseAvail === true) {
            console.log("Full House available");
            document.getElementById("fullHouse").disabled = false;
            categoryArray[8].addEventListener("click", function() {
                if (fullHouseAvail === true) {
                    document.getElementById("fullHouse").className = "listButtonClaimed";
                    console.log("RoundScore: 25pts");
                    score += 25;
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    // Deactivate fullHouse button
                    fullHouseAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // Small Straight
    if ((finalRoll.includes(1) && finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4)) || 
    (finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5)) ||
    (finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5) && finalRoll.includes(6))) {
        if (sStraightAvail === true) {
            console.log("Small Straight available");
            document.getElementById("sStraight").disabled = false;
            categoryArray[9].addEventListener("click", function() {
                if (sStraightAvail === true) {
                    document.getElementById("sStraight").className = "listButtonClaimed";
                    console.log("RoundScore: 30pts");
                    score += 30;
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    // Deactivate fullHouse button
                    sStraightAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // Large Straight
    if ((finalRoll.includes(1) && finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5)) || 
    (finalRoll.includes(2) && finalRoll.includes(3) && finalRoll.includes(4) && finalRoll.includes(5) && finalRoll.includes(6))) {
        if (lStraightAvail === true) {
            console.log("Large Straight available");
            document.getElementById("lStraight").disabled = false;
            categoryArray[10].addEventListener("click", function() {
                if (lStraightAvail === true) {
                    document.getElementById("lStraight").className = "listButtonClaimed";
                    console.log("RoundScore: 40pts");
                    score += 40;
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    // Deactivate fullHouse button
                    lStraightAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // Chance
    if (chanceAvail === true) {
        console.log("Chance available");
        document.getElementById("chance").disabled = false;
        categoryArray[11].addEventListener("click", function() {
            if (chanceAvail === true) {
                document.getElementById("chance").className = "listButtonClaimed";
                // Add total score of all five dice
                for (let i = 0; i < finalRoll.length; i++) {
                    roundScore += finalRoll[i];
                }
                console.log("RoundScore: " + roundScore);
                score += parseInt(roundScore);
                console.log("Game Score: " + score);
                gameScore.innerHTML = score;
                roundScore = 0;
                // Deactivate 3 kind button
                chanceAvail = false;
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
                rollButton.disabled = false;
                // Disabled all categories after selection
                for (let i = 0; i < categoryArray.length; i++) {
                    // disable buttons if class = listButton
                    if (categoryArray[i].className === "listButton") {
                        categoryArray[i].disabled = true;
                    }
                } 
            }
        });
    }

    // 5 of a kind
    if ((finalRoll[0] == finalRoll[4])) {
        if (fiveKindAvail === true) {
            console.log("5 of a kind available");
            document.getElementById("fiveKind").disabled = false;
            categoryArray[12].addEventListener("click", function() {
                if (fiveKindAvail === true) {
                    document.getElementById("fiveKind").className = "listButtonClaimed";
                    console.log("RoundScore: 50pts");
                    score += 50;
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    // Deactivate 5 kind button
                    fiveKindAvail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }

    // 5 of a kind 2
    if ((finalRoll[0] == finalRoll[4])) {
        if (fiveKind2Avail === true && fiveKindAvail === false) {
            console.log("5 of a kind 2 available");
            document.getElementById("fiveKind2").disabled = false;
            categoryArray[13].addEventListener("click", function() {
                if (fiveKind2Avail === true) {
                    document.getElementById("fiveKind2").className = "listButtonClaimed";
                    console.log("RoundScore: 100pts");
                    score += 100;
                    console.log("Game Score: " + score);
                    gameScore.innerHTML = score;
                    // Deactivate 5 kind button
                    fiveKind2Avail = false;
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
                    rollButton.disabled = false;
                    // Disabled all categories after selection
                    for (let i = 0; i < categoryArray.length; i++) {
                        // disable buttons if class = listButton
                        if (categoryArray[i].className === "listButton") {
                            categoryArray[i].disabled = true;
                        }
                    } 
                }
            });
        }
    }
});
