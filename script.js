
const gameBoard = (() => {
    let board = ["E", "E", "E",
                "E", "E", "E",
                "E", "E", "E"]

    function checkWin() {
        let players = ['X', 'O'];
        let result = '';
        if (board.includes('E') == false) {
            result = "tie";
        }
        players.forEach(a => {
            if (board[0] == a && board[1] == a && board[2] == a ||
                board[3] == a && board[4] == a && board[5] == a ||
                board[6] == a && board[7] == a && board[8] == a ||
                board[0] == a && board[3] == a && board[6] == a ||
                board[1] == a && board[4] == a && board[7] == a ||
                board[2] == a && board[5] == a && board[8] == a ||
                board[0] == a && board[4] == a && board[8] == a ||
                board[6] == a && board[4] == a && board[2] == a) {
                result = a;
            }
        });
        return result;
    }

    return {board, checkWin};
})();

const squares = document.getElementsByClassName('square');

Array.from(squares).forEach(element => {
    element.onclick = function(event) {
        if (gameBoard.board[element.id - 1] == "E") {
            element.innerHTML = 'X';
            gameBoard.board[element.id - 1] = 'X';
        }
        else if (gameBoard.board[element.id - 1] == "X") {
            element.innerHTML = 'O';
            gameBoard.board[element.id - 1] = 'O';
        }
        else {
            element.innerHTML = '';
            gameBoard.board[element.id - 1] = 'E';
        }
        console.log(gameBoard.checkWin());
    }
});

function onClick() {
    gameBoard.board.forEach(element => {
        element = 'E';
    });
    Array.from(squares).forEach(element => {
        element.innerHTML = '';
    });
}
