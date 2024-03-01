const choices = ['rock', 'paper', 'scissors'];
const playerChoice = document.getElementById('p_choice');
const pcChoice = document.getElementById('pcChoice');
const resultDisplay = document.getElementById('result');

function playGame(playerChoice) {
    const pcChoice = choices[Math.floor(Math.random() * 3)];
    console.log(pcChoice)
    if (playerChoice === pcChoice) {
        result = "It Is A Tie";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (pcChoice === "scissors") ? "You Win" : "You Lose"; break;
            case "paper":
                result = (pcChoice === "rock") ? "You Win" : "You Lose"; break;
            case "scissors":
                result = (pcChoice === "paper") ? "You Win" : "You Lose"; break;
        }
    }
    playerChoice.textContent = `Player : ${playerChoice}`;
    pcChoice.textContent = `Computer : ${pcChoice}`;
    resultDisplay.textContent = result;
}