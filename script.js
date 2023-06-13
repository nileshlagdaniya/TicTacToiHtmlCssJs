let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const makeMove = (index) => {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('board').classList.add('game-over');
            gameOver = true;
            alert(`${currentPlayer} wins!`);
        } else if (checkTie()) {
            document.getElementById('board').classList.add('game-over');
            gameOver = true;
            alert("It's a tie!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

const checkWin = () => {
    for (let combination of winningCombinations) {
        if (
            board[combination[0]] !== '' &&
            board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]]
        ) {
            return true;
        }
    }
    return false;
}

const checkTie = () => {
    return !board.includes('');
}

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('board').classList.remove('game-over');
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
