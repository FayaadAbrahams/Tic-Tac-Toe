let player = "X";
let playedItems = {};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".game-piece").forEach((piece) => {
    piece.addEventListener("click", () => playerMove(piece));
  });
});

function playerMove(htmlElement) {
  if (htmlElement.innerHTML === "") {
    htmlElement.innerHTML = player;
    player = player === "X" ? "O" : "X";
  }
}

function resetGame() {
  document.querySelectorAll(".game-piece").forEach((piece) => {
    piece.innerHTML = "";
  });
}
