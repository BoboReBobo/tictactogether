console.log("loaded the script");

let currentPlayer = "x";

function swapPlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x"
    }
}

function selectCell(row, col) {
    const cellsInRow = document.querySelectorAll(`.row-${row} .cell`);
    cellsInRow[col].textContent = currentPlayer;
    swapPlayer();
}