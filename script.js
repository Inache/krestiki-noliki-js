function play() {
    for (var i = 1; i <= 9; i++){
        clear(i);
    }

    document.turn = "X";
    setMessage(document.turn + " turn");
    document.winner = null;

}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function makeMove(block) {
    if (document.winner != null) {
        setMessage(document.turn + "already won the game");
    }
    else if (block.innerText === "·") {
        block.innerText = document.turn;
        changeTurn();
    }
    else {
        setMessage("This position is Taken, please select another one!");
    }

}

function changeTurn() {
    if (checkForWin() === true) {
        alert(document.turn + " win");
        setMessage(document.turn + " win");
        document.winner = document.turn;
    }

    else if (document.turn === "X") {
        document.turn = "O";
        setMessage(document.turn + " turn");
    }
    else
        document.turn = "X";
    setMessage(document.turn + " turn");


}

////////////////
//b1 b2 b3//////
//b4 b5 v6//////
//b7 b8 b9//////
function checkForWin() {
    var a1 = document.getElementById("b1").innerText;
    var a2 = document.getElementById("b2").innerText;
    var a3 = document.getElementById("b3").innerText;
    var a4 = document.getElementById("b4").innerText;
    var a5 = document.getElementById("b5").innerText;
    var a6 = document.getElementById("b6").innerText;
    var a7 = document.getElementById("b7").innerText;
    var a8 = document.getElementById("b8").innerText;
    var a9 = document.getElementById("b9").innerText;
    // for (var i = 1; i <= 9; i++){
    //     var a+i = document.getElementById("b"+i).innerText;
    // }


    var boardArray = [[a1, a2, a3], [a4, a5, a6], [a7, a8, a9]];
    for (var i = 0; i < boardArray.length; i++) {
        console.log(boardArray[i]);
    }
    //Checking rows;
    for (var i = 0; i < boardArray.length; i++) {
        if (boardArray[i][0] !== "·" && boardArray [i][0] === boardArray[i][1] && boardArray[i][1] === boardArray[i][2]) {
            console.log("horizonatl win");
            return true;
        }
    }
    //Checking columns;
    for (var i = 0; i < boardArray.length; i++) {
        if (boardArray[0][i] !== "·" && boardArray [0][i] === boardArray[1][i] && boardArray[1][i] === boardArray[2][i]) {
            console.log("vertical win");
            return true;
        }
    }
    //checking diagonals
    if (boardArray[0][0] !== "·" && boardArray[0][0] === boardArray[1][1] && boardArray[1][1] === boardArray[2][2]) {
        console.log("diagonal falling win");
        return true;
    }
    if (boardArray[0][2] !== "·" && boardArray[0][2] === boardArray[1][1] && boardArray[1][1] === boardArray[2][0]) {
        console.log("diagonal rising win");
        return true;
    }
    //check for tie
    for (var i = 0; i < boardArray.length; i++) {
        if (boardArray[i] !== "·") {
            console.log("TIE");
        }
    }
    return false;
//     var result = false;
//     if (document.turn === a1 && a1 === a2 && a2 === a3) {
//         setMessage(document.turn + " win!");
//         result = true;
//     }
//     else if (document.turn === a4 && a4 === a5 && a5 === a6) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a7 && a7 === a8 && a8 === a9) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a1 && a1 === a4 && a4 === a7) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a2 && a2 === a5 && a5 === a8) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a3 && a3 === a6 && a6 === a9) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a1 && a1 === a5 && a5 === a9) {
//         setMessage(document.turn + " win!");
//         result = true;
//
//     }
//     else if (document.turn === a7 && a7 === a5 && a5 === a3) {
//         setMessage(document.turn + " win!");
//         result = true;
//     }
// return result;
    // function checkHorizontal() {
    //     for (var i = 0; i < 3; i++) {
    //         for (var j = 0; j < 3; j++) {
    //             if (newArray[i][j] === "X" && newArray[i][j + 1] === "X" && newArray[i][j + 2] === "X") {
    //                 console.log("!HORIZONTAL WIN! Player " + document.turn + " WIN!");
    //                 setMessage("Player: " + document.turn + " win!");
    //                 return true;
    //             } else return false;
    //         }
    //     }
    //
    // }
    //
    //
    // function checkVertical() {
    //     for (var i = 0; i < newArray.length; i++) {
    //         for (var j = 0; j < newArray.length; j++) {
    //             if (newArray[i][j] === document.turn && newArray[i + 1][j] === document.turn && newArray[i + 2][j] === document.turn) {
    //                 console.log("!VERTICAL WIN! Player " + document.turn + " WIN!");
    //                 setMessage("Player: " + document.turn + " win!");
    //                 return true;
    //
    //             } else return false;
    //         }
    //     }
    //
    // }
    //
    //
    // function checkRising() {
    //     for (var i = 2; i < newArray.length; i++) {
    //         for (var j = 0; j < newArray.length; j++) {
    //             if (newArray[i][j] === document.turn && newArray[i - 1][j + 1] === document.turn && newArray[i - 2][j + 2] === document.turn) {
    //                 console.log("!RISING! Player " + document.turn + " WIN!");
    //                 setMessage("Player: " + document.turn + " win!");
    //                 return true;
    //             } else return false;
    //         }
    //     }
    //
    // }
    //
    // function checkFalling() {
    //     for (var i = 2; i <= newArray.length; i++) {
    //         for (var j = 2; j <= newArray.length; j++) {
    //             if (newArray[i][j] === document.turn && newArray[i - 1][j - 1] === document.turn && newArray[i - 2][j - 2]) {
    //                 console.log("!FALLING! Player " + document.turn + " WIN!");
    //                 setMessage("Player: " + document.turn + " win!");
    //                 return true;
    //
    //             } else return false;
    //         }
    //     }
    //
    // }
    //
    //
    // if (checkHorizontal() === true || checkVertical() === true || checkRising() === true || checkFalling() === true) {
    //     setMessage("GGWP");
    //     console.log("GGWP");
    //     return true;
    // }
    // else
    // return false;
}

function clear(number) {
    document.getElementById("b" + number).innerText = "·";
}
//TODO: CHECK FOR TIE!!!

