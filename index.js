const choices = ["rock", "paper", "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const result = document.getElementById("result");
const playerscore = document.getElementById("playerone");
const computerscore = document.getElementById("computerone");
let playerscores = 0;
let computerscores = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let resultText = "";

  if (playerchoice === computerchoice) {
    resultText = "ITS A TIE!";
  } else {
    switch (playerchoice) {
      case "rock":
        resultText = computerchoice === "scissor" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        resultText = computerchoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        resultText = computerchoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerdisplay.textContent = `PLAYER : ${playerchoice}`;
  computerdisplay.textContent = `COMPUTER : ${computerchoice}`;
  result.textContent = resultText;

  result.classList.remove("greentext", "redtext");
  switch (resultText) {
    case "YOU WIN!":
      result.classList.add("greentext");
      playerscores++;
      playerscore.textContent = playerscores;
      break;
    case "YOU LOSE!":
      result.classList.add("redtext");
      computerscores++;
      computerscore.textContent = computerscores;
      break;
  }

}
