var currentPlayer = "X";
var currentWinner = "";
var scoreCounterX = 0;
var scoreCounterO = 0;
var winner = false;
var scoreBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


function playMove() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".game-piece").forEach((piece) => {
      piece.addEventListener("click", () => playerMove(piece));
    });
  });
}
playMove();

function playerMove(htmlElement) {
  if (winner) {
    return;
  }

  if (htmlElement.innerHTML === "") {
    htmlElement.innerHTML = currentPlayer;

    // Get the coordinates of the clicked cell
    let pieceClassName = htmlElement.className;
    let coords = pieceClassName.split(" ")[1].split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    scoreBoard[r][c] = currentPlayer;

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (isScoreBoardFull()) {
      document.querySelector(".display-span").innerHTML = "No More plays left!";
      checkWinner();
    }
    else {
      displayCurrentPlayer();
      checkWinner();
    }
  }
}

function resetGame() {
  document.querySelectorAll(".game-piece").forEach((piece) => {
    piece.innerHTML = "";
  });

  scoreBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  winner = false;
  currentWinner = "";

  document.querySelector(".display-span").innerHTML = "New Game: X's turn";

  // Remove winner class
  document.querySelectorAll(".game-piece").forEach((piece) => {
    piece.innerHTML = "";
    piece.classList.remove("winner");
  });
}

function checkWinner() {
  // Horizontally
  for (let r = 0; r < 3; r++) {
    if (
      scoreBoard[r][0] == scoreBoard[r][1] &&
      scoreBoard[r][1] == scoreBoard[r][2] &&
      scoreBoard[r][0] != ""
    ) {
      winner = true;
      currentWinner = scoreBoard[r][0];
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementsByClassName(
          r.toString() + "-" + i.toString()
        );

        tile[0].classList.add("winner");
      }
      winner = true;
      displayWinner();
      return;
    }
  }

  // Vertically
  for (let c = 0; c < 3; c++) {
    if (
      scoreBoard[0][c] == scoreBoard[1][c] &&
      scoreBoard[1][c] == scoreBoard[2][c] &&
      scoreBoard[0][c] != ""
    ) {
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementsByClassName(
          i.toString() + "-" + c.toString()
        );
        tile[0].classList.add("winner");
      }
      winner = true;
      currentWinner = scoreBoard[0][c];
      displayWinner();
      return;
    }
  }

  // Diagonally
  if (
    scoreBoard[0][0] == scoreBoard[1][1] &&
    scoreBoard[1][1] == scoreBoard[2][2] &&
    scoreBoard[0][0] != ""
  ) {
    for (let i = 0; i < 3; i++) {
      let tile = document.getElementsByClassName(
        i.toString() + "-" + i.toString()
      );
      tile[0].classList.add("winner");
    }
    winner = true;
    currentWinner = scoreBoard[0][0];
    displayWinner();
    return;
  }

  // Anit-Diagonally
  if (
    scoreBoard[0][2] == scoreBoard[1][1] &&
    scoreBoard[1][1] == scoreBoard[2][0] &&
    scoreBoard[0][2] != ""
  ) {
    for (let i = 0; i < 3; i++) {
      let tile = document.getElementsByClassName(
        i.toString() + "-" + (2 - i).toString()
      );
      tile[0].classList.add("winner");
    }
    winner = true;
    currentWinner = scoreBoard[0][2];
    displayWinner();
    return;
  }
}

function displayCurrentPlayer() {
  if (currentWinner == "") {
    document.querySelector(".display-span").innerHTML = `${currentPlayer}'s play`;
  }
}

function displayWinner() {
  document.querySelector(".display-span").innerHTML = `Winner is ${currentWinner}!`;

  if (currentWinner === "X") {
    scoreCounterX++;
  } else {
    scoreCounterO++;
  }

  document.querySelector(".score-x").innerHTML = scoreCounterX;
  document.querySelector(".score-o").innerHTML = scoreCounterO;
}

function isScoreBoardFull() {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (scoreBoard[r][c] === "") {
        return false;
      }
    }
  }
  return true;
}
