const btns = document.querySelectorAll(".btn");
const resultEl = document.querySelector("#result");
const playerScore = document.querySelector("#you");
const computerScore = document.querySelector("#com");

let playerS=0;
let computerS=0;

btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        if (btn.id !== "reset-btn"){
        const result = play(btn.id,computerPlay());
        resultEl.innerText = result;} else{
            resetScore();
            resultEl.innerText = "Reset Score!! "
        }
    })
})

function resetScore(){
    playerS=0;
    computerS=0;    
    playerScore.innerText = playerS;
    computerScore.innerText = computerS;
}

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function play(pS, cS){
    if (pS === cS){
        return "Tie!";
    } else if (
    (pS === "rock" && cS === "scissors") ||
    (pS === "paper" && cS === "rock") ||
    (pS === "scissors" && cS === "paper"))
    {
        playerS++;
        playerScore.innerText = playerS;
        return `You win! ${capitalizeFirstLetter(pS)} Beat ${capitalizeFirstLetter(cS)}`
    } else {
        computerS++;
        computerScore.innerText = computerS;
        return `You lose! ${capitalizeFirstLetter(cS)} Beat ${capitalizeFirstLetter(pS)}`
    }
}