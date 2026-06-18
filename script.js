let userScore = 0;
let computerScore = 0;

// Task 1-4
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid choice!");
  }
};

// Task 5
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// Task 7-10
const determineWinner = (userChoice, computerChoice) => {

  // Task 14 - Secret Cheat Code
  if (userChoice === "bomb") {
    return "💣 Secret Code Activated! You Win!";
  }

  if (userChoice === computerChoice) {
    return "🤝 It's a Tie!";
  }

  if (userChoice === "rock") {
    return computerChoice === "paper"
      ? "💻 Computer Wins!"
      : "🎉 You Win!";
  }

  if (userChoice === "paper") {
    return computerChoice === "scissors"
      ? "💻 Computer Wins!"
      : "🎉 You Win!";
  }

  if (userChoice === "scissors") {
    return computerChoice === "rock"
      ? "💻 Computer Wins!"
      : "🎉 You Win!";
  }
};

// Task 12-13
function playGame(choice) {

  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();

  const result = determineWinner(
    userChoice,
    computerChoice
  );

  document.getElementById(
    "userChoice"
  ).textContent = `Your Choice: ${userChoice}`;

  document.getElementById(
    "computerChoice"
  ).textContent = `Computer Choice: ${computerChoice}`;

  document.getElementById(
    "winner"
  ).textContent = result;

  if (result.includes("You Win")) {
    userScore++;
  } else if (
    result.includes("Computer Wins")
  ) {
    computerScore++;
  }

  document.getElementById(
    "userScore"
  ).textContent = userScore;

  document.getElementById(
    "computerScore"
  ).textContent = computerScore;
}

function playBomb() {
  const code =
    document.getElementById("cheatInput").value;

  playGame(code);
}