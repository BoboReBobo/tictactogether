console.log("loaded the script");

let currentPlayer = "x";
let currentBoard = [[]];

function swapPlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x"
    }
}

function selectCell(row, col) {
    // console.log(`${row} ${col}`);

    const cellsInRow = document.querySelectorAll(`.row-${row} .cell`);
    const cell = cellsInRow[col];

    if (cell.textContent !== "") {
        return;
    }

    cellsInRow[col].textContent = currentPlayer;
    swapPlayer();
}

function checkWinnerWinnerChickenDinner() {

}