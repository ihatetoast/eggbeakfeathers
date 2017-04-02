// Take old RPS game and change to ES6
// make this more visual and fun. pretend you're creating for a child.
//it'll be user v farmer ted 

/*
variables
*/

//general
const choiceText = document.querySelector('.choiceText');
const defaultImg = document.querySelectorAll('.defaultImg');
const button = document.querySelectorAll('button');
//text
const winner = "Winner!";
const loser = "Loser.";
const tie = "Meh. Tie";
const instant = "Instant replay:";

//farmer ted
let farmerTedChose;
const farmerTedPic = document.getElementById('farmerTedPic');
const farmerTedText = document.getElementById('farmerTedText');
const farmerTedDefaultPic = '<img src="./assets/farmerted.svg" class="defaultImg" alt="silhouette of a farmer">';



//user
let userChose;
const userChoice = document.querySelectorAll('.userChoice');
const userPic = document.getElementById('userPic');
const userText = document.getElementById('userText');
const userDefaultPic = '<img src="./assets/user.svg" class="defaultImg" alt="silhouette of person"/>';

//results
const resultsPic = document.getElementById('resultsPic');
const resultsText = document.getElementById('resultsText');
const resultsDefaultPic = '<img src="./assets/results.svg" class="defaultImg" alt="big question mark">';
const egg = '<img src="./assets/egg.svg" />';
const feathers = '<img src="./assets/feathers.svg" />';
const fox = '<img src="./assets/fox.svg" />';
const eggWins = '<img src="./assets/eggonfeathers.svg" alt="egg happily lying on feathers"/>';
const feathersWin = '<img src="./assets/foxfeathers.svg" alt="fox with feathers in nose about to sneeze"/>';
const foxWins = '<img src="./assets/foxwins.svg" alt="fox with broken egg"/>';

const eggsTie = '<img src="./assets/eggtie.svg" alt="two eggs smiling"/>';
const feathersTie = '<img src="./assets/featherstie.svg" alt="lots of happy feathers"/>';
const foxesTie = '<img src="./assets/foxtie.svg" alt="two foxes kissing"/>';





let compare = (you, farmer) => {
   resultsText.innerHTML = instant;;
    if (you === farmer) {
        farmerTedText.innerHTML = tie;
        userText.innerHTML = tie;
        if(you === "egg"){
            resultsPic.innerHTML = eggsTie;
        }
        if(you === "feathers"){
            resultsPic.innerHTML = feathersTie;
        }
        if(you === "fox"){
            resultsPic.innerHTML = foxesTie;
        }

    }
    else if (you === "egg"){

        if (farmer === "feathers"){
            resultsPic.innerHTML = eggWins;
            farmerTedText.innerHTML = loser;
            userText.innerHTML = winner;
        }
        else {
            resultsPic.innerHTML = foxWins;
            userText.innerHTML = loser;
            farmerTedText.innerHTML = winner;
        }
    }
    else if (you === "feathers"){
        if (farmer === "fox"){
            userText.innerHTML = winner;
            farmerTedText.innerHTML = loser;
            resultsPic.innerHTML = feathersWin;
        }
        else {
            resultsPic.innerHTML = eggWins;
            userText.innerHTML = loser;
            farmerTedText.innerHTML = winner;
        }
    }
    else if (you === "fox"){
        if (farmer === "egg"){
            userText.innerHTML = winner;
            farmerTedText.innerHTML = loser;
            resultsPic.innerHTML = foxWins;
        }
    else {
        resultsPic.innerHTML = feathersWin;
        userText.innerHTML = loser;
        farmerTedText.innerHTML = winner;
    }
}

};

function gameRunning() {
    button.forEach(button => {button.disabled = true});
    choiceText.style.visibility = "hidden";

}
function gameReset() {
    choiceText.style.visibility = "visible";
    userPic.innerHTML = userDefaultPic;
    farmerTedPic.innerHTML = farmerTedDefaultPic;
    resultsPic.innerHTML = resultsDefaultPic;
    button.forEach(button => button.disabled = false);
}

userChoice.forEach(userChoice => userChoice.addEventListener('click', function(){
    userChose = this.dataset.choice;
    

   if(userChose === 'egg'){userPic.innerHTML = egg;}
   if(userChose === 'feathers'){userPic.innerHTML = feathers;}
   if(userChose === 'fox'){userPic.innerHTML = fox;}

    gameRunning();
     function getRando() {
        return (Math.floor(Math.random() * 3) + 1);
    }
    let randoFarmerTed = getRando();
    
    if(randoFarmerTed === 3){
        farmerTedChose = "egg";
    } else if(randoFarmerTed === 2){
        farmerTedChose = "fox";
    } else {
        farmerTedChose = "feathers";
    }
    if(farmerTedChose === 'egg'){farmerTedPic.innerHTML = egg;}
    if(farmerTedChose === 'feathers'){farmerTedPic.innerHTML = feathers;}
    if(farmerTedChose === 'fox'){farmerTedPic.innerHTML = fox;}

    console.log(`user chose ${userChose}, and Farmer Ted chose ${farmerTedChose}`);
	compare(userChose, farmerTedChose);

    setTimeout(()=>{
        console.clear();
    gameReset()},3000);
}));
