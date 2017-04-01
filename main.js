// Take old RPS game and change to ES6
// make this more visual and fun. pretend you're creating for a child.
//it'll be user v farmer ted 

const btnClk = document.getElementById("farmerTed");
const userChoice = document.querySelectorAll('.userChoice');

let compare = (you, farmer) => {
    if (you === farmer) {
        console.log("Meh. Y'all tied!");
    }
    else if (you === "egg"){
        if (farmer === "feathers"){
            console.log("You win.");
        }
        else {
            console.log("Farmer wins.");
        }
    }
    else if (you === "feathers"){
        if (farmer === "fox"){
            console.log("You win.");;
        }
        else {
             console.log("Farmer wins.");
        }
    }
    else if (you === "fox"){
        if (farmer === "egg"){
            console.log("You win.");
        }
    else {
         console.log("Farmer wins.");
    }
}

};

let farmerTedChose;
let userChose;

userChoice.forEach(userChoice => userChoice.addEventListener('click', function(){

    userChose = this.dataset.choice;
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

    console.log(`user chose ${userChose}, and Farmer Ted chose ${farmerTedChose}`);
	compare(userChose, farmerTedChose);
    //user's pic becomes user's choice: egg feathers fox
    //farmer ted's pic becomes ft's choice
    //results becomes pick of the rules

}));
