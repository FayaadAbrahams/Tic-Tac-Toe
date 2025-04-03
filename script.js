var currentPlayer = "X";
var scoreCounterX = 0;
var scoreCounterO = 0;
var winner = false;
var scoreBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".game-piece").forEach((piece) => {
    piece.addEventListener("click", () => playerMove(piece));
  });
});

function playerMove(htmlElement) {
  if (winner) {
    return;
  }
  if (htmlElement.innerHTML === "") {
    htmlElement.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    let pieceClassName = htmlElement.className;
    let coords = pieceClassName.split(" ")[1].split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    scoreBoard[r][c] = currentPlayer;
    checkWinner();
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
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementsByClassName(
          r.toString() + "-" + i.toString()
        );

        tile[0].classList.add("winner");
      }
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
      }
      winner = true;
      return;
    }
  }

  // Diagonally
  if (
    scoreBoard[0][0] == scoreBoard[1][1] &&
    scoreBoard[1][1] == scoreBoard[2][2] &&
    scoreBoard[0][0] != ""
  ) {
    winner = true;
    return;
  }

  // Anit-Diagonally
  if (
    scoreBoard[0][2] == scoreBoard[1][1] &&
    scoreBoard[1][1] == scoreBoard[2][0] &&
    scoreBoard[0][2] != ""
  ) {
    winner = true;
    return;
  }
}

function displayWinner() {
  document.querySelector(".display-case-container").append;
}
