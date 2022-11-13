let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let paper = document.querySelector("#paper");
let computerText = document.querySelector("#computerText");
let results = document.querySelector(".result");
let container = document.querySelector(".container")
let yourScore = document.querySelector(".yourScore");
let computerScore = document.querySelector(".computerScore");


let computerSide = document.querySelector(".computerSide");
let counter = 0;
let computerCounter = 0;

rock.addEventListener("click", rockChoice);
scissors.addEventListener("click",scissorcsChoice)
paper.addEventListener("click", paperChoice)

function winLooseDiv(){
    let newDiv = document.createElement("div");
    yourScore.append(newDiv);
    counter++;
    if(counter ==  5){
        results.textContent = "You Won The Game! :)";
        
    }
    console.log(counter)
}
function looseWinDiv(){
    let newDiv = document.createElement("div");
    computerScore.append(newDiv)
    computerCounter++;
    if(computerCounter == 5){
        results.textContent = "The computer has Won The Game! :(";
    }
}


function rockChoice(e){
    let computerList = ["Rock","Scissors","Paper"];
    let computerNum = Math.floor(Math.random() * 3);
    let computerChoice = computerList[computerNum];
    computerText.textContent = computerChoice;
    if(e.target.id == "rock" && computerChoice == "Rock"){
        results.textContent = "It's Even";
        results.style.backgroundColor = "lightblue ";
    }
    else if (e.target.id == "rock" && computerChoice == "Scissors"){
        results.textContent = "You Won!";
        results.style.backgroundColor = "lime";
        winLooseDiv()

    }
    else if (e.target.id == "rock" && computerChoice == "Paper"){
        results.textContent = "You Lost!";
        results.style.backgroundColor = "red";
        looseWinDiv()
    }
}

function scissorcsChoice(e){
    let computerList = ["Rock","Scissors","Paper"];
    let computerNum = Math.floor(Math.random() * 3);
    let computerChoice = computerList[computerNum];
    computerText.textContent = computerChoice;



    if(e.target.id == "scissors" && computerChoice == "Scissors"){
        results.textContent = "It's Even";
        results.style.backgroundColor = "lightblue";
    }
    else if (e.target.id == "scissors" && computerChoice == "Rock"){
        results.textContent = "You Lost!";
        results.style.backgroundColor = "red";
        looseWinDiv()
    }
    else if (e.target.id == "scissors" && computerChoice == "Paper"){
        results.textContent = "You Won!"
        results.style.backgroundColor = "lime";
        winLooseDiv()
    }
}

function paperChoice(e){
    let computerList = ["Rock","Scissors","Paper"];
    let computerNum = Math.floor(Math.random() * 3);
    let computerChoice = computerList[computerNum];
    computerText.textContent = computerChoice;



    if(e.target.id == "paper" && computerChoice == "Paper"){
        results.textContent = "It's Even";
        results.style.backgroundColor = "lightblue";
    }
    else if (e.target.id == "paper" && computerChoice == "Rock"){
        results.textContent = "You Won!";
        results.style.backgroundColor = "lime";
        winLooseDiv()
    }
    else if (e.target.id == "paper" && computerChoice == "Scissors"){
        results.textContent = "You Lost!"
        results.style.backgroundColor = "red";
        looseWinDiv()
    }
}



