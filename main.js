// Take old RPS game and change to ES6
// make this more visual and fun. pretend you're creating for a child.


//below is old. straight copy paste. fix soon for this project

//get rid of prompt. let user click on an image.
var userChoice = prompt("Do you choose rock, paper or scissors?");


//computer's choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

//compare fcn
//undo old. rewrite in ES6
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "rock wins";
        }
    else {
        return "scissors wins";
    }
}

};
compare(userChoice, computerChoice);