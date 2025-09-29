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
    // console.log(`${row} ${col}`);

    const cellsInRow = document.querySelectorAll(`.row-${row} .cell`);
    const cell = cellsInRow[col];

    if (cell.textContent !== "") {
        return;
    }

    cellsInRow[col].textContent = currentPlayer;

    if (checkWinnerWinnerChickenDinner()) {
        alert(`${currentPlayer} WINS!!`);
        return;
    }

    swapPlayer();
}

function checkWinnerWinnerChickenDinner() {
    // WIN if there exists a row, column, or diagonal where all 3 contain the same letter.

    // Check rows.
    for(r = 0; r < 3; r++) {
        let cellsInRow = document.querySelectorAll(`.row-${r} .cell`);
        // console.log(cellsInRow[0].textContent === cellsInRow[1].textContent);
        cellsInRow = Array.from(cellsInRow).filter(c => c.textContent.length > 0);
        console.log(cellsInRow.length);
        if (cellsInRow.length < 3) {
            continue;
        }

        if (cellsInRow[0].textContent === cellsInRow[1].textContent && cellsInRow[1].textContent === cellsInRow[2].textContent) {
            console.log(cellsInRow[0].textContent);
            return true;
        }
    }
}