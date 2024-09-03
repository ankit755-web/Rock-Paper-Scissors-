let userScore = 0;
let compScore = 0;
const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
  let Choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return Choices[randomIdx];
};
const gameTie = () => {
  msg.innerText = "It's a tie! play again";
};
const playGame = (userChoice) => {
  // Get computer choice
  const compChoice = genCompChoice();
  console.log(`User chose ${userChoice}, Computer chose ${compChoice}`);
  if (userChoice === compChoice) {
    console.log("It's a tie!");
    gameTie();
    msg.style.backgroundColor = "black";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You win! Your score is ${userScore}`;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    msg.innerText = `You lost! Your score is ${userScore}`;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
