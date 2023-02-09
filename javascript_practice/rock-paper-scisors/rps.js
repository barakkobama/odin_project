function getRandomInt(max){
    return Math.floor(Math.random()*3);
}


function getComputerChoice(){
    switch (getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("error");
            return;

    }
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let outcome = "wrong value";
    switch (humanChoice){
        case "rock":
            if(computerChoice == "paper"){
                outcome = "computer";
            }
            else if(computerChoice == "rock"){
                outcome = "remis";
            }
            else if(computerChoice == "scissors"){
                outcome = "human";
            }
            else{
                console.log("error");
            }
            break;
        case "scissors":
            if(computerChoice == "paper"){
                outcome = "human";
            }
            else if(computerChoice == "rock"){
                outcome = "computer";
            }
            else if(computerChoice == "scissors"){
                outcome = "remis";
            }
            else{
                console.log("error");
            }
            break;
        case "paper":
            if(computerChoice == "paper"){
                outcome = "remis";
            }
            else if(computerChoice == "rock"){
                outcome = "human";
            }
            else if(computerChoice == "scissors"){
                outcome = "computer";
            }
            else{
                console.log("error");
            }
            break;
        default:
            console.log("error");           
    }
    return outcome;
}


function game(){
    let human = 0;
    let computer = 0;
    let remis = 0;
    let message;
    for(let i = 0;i<5;i++){
        let humanChoice = prompt("paper|rock|scissors");
        switch (playRound(humanChoice,getComputerChoice())){
            case "human":
                human++;
                console.log("human");
                break;
            case "computer":
                computer++;
                console.log("computer");
                break;
            case "remis":
                remis++;
                console.log("remis");
                break;
            default:
                console.log("error");
        }
        message = `
        player won ${human} times
        computer won ${computer} times
        remises: ${remis} `;
    }
    alert(message);
}



game();

