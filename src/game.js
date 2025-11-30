console.log("loaded the script");

let currentPlayer = "x";
let won = false;

function swapPlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x"
    }
}

function selectCell(row, col) {
    // console.log(`${row} ${col}`);
    if (won) {
        return;
    }

    const cellsInRow = document.querySelectorAll(`.row-${row} .cell`);
    const cell = cellsInRow[col];

    if (cell.textContent !== "") {
        return;
    }

    cellsInRow[col].textContent = currentPlayer;

    if (checkWinnerWinnerChickenDinner()) {
        alert(`${currentPlayer} WINS!!`);
        won = true;

        let parser = new DOMParser();
        let marquee = parser.parseFromString(`<marquee direction="left" width="306px">${currentPlayer} WINS!!</marquee>`, 'text/html').getElementsByTagName('marquee')[0];
        document.querySelector('.board').appendChild(marquee);

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
        // console.log(cellsInRow.length);
        if (cellsInRow.length < 3) {
            continue;
        }

        if (cellsInRow[0].textContent === cellsInRow[1].textContent && cellsInRow[1].textContent === cellsInRow[2].textContent) {
            // console.log(cellsInRow[0].textContent);
            return true;
        }
    }

    // Check cols.
    for(c = 0; c < 3; c++) {
        let cells = document.querySelectorAll(`.col-${c}.cell`);
        cells = Array.from(cells).filter(c => c.textContent.length > 0);
        // console.log(cells.length);
        if (cells.length < 3) {
            continue;
        }

        if (cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent) {
            // console.log(cells[0].textContent);
            return true;
        }
    }

    // Check diagonals forward.
    let cellsForward = [document.querySelector(`.row-0 .col-0`), document.querySelector(`.row-1 .col-1`), document.querySelector(`.row-2 .col-2`)];
    if (cellsForward[0].textContent.length > 0 && cellsForward[0].textContent === cellsForward[1].textContent && cellsForward[1].textContent === cellsForward[2].textContent) {
        return true;
    }


    // Check diagonals backwards.
    let cellsBackwards = [document.querySelector(`.row-0 .col-2`), document.querySelector(`.row-1 .col-1`), document.querySelector(`.row-2 .col-0`)];
    if ((cellsBackwards[0].textContent === cellsBackwards[1].textContent) && (cellsBackwards[1].textContent === cellsBackwards[2].textContent) && cellsBackwards[0].textContent.length > 0) {
        return true;
    } 
}