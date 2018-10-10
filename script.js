function play() {
    document.turn = "X";
    setMessage(document.turn + " turn");

}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function makeMove(block) {
    if (block.innerText === "·") {
        block.innerText = document.turn;
        changeTurn();
    }
    else {
        setMessage("This position is Taken, please select another one!");
    }

}

function changeTurn() {
        checkForWin();


    if (document.turn === "X") {
        document.turn = "O";
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


    var newArray = [[a1, a2, a3], [a4, a5, a6], [a7, a8, a9]];
    for (var i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }

    function checkHorizontal() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (newArray[i][j] === document.turn && newArray[i][j + 1] === document.turn && newArray[i][j + 2] === document.turn) {
                    console.log("!HORIZONTAL WIN! Player " + document.turn + " WIN!");
                    setMessage("Player: " + document.turn + " win!");
                    return true;
                } else return false;
            }
        }

    }


    function checkVertical() {
        for (var i = 0; i <= newArray.length; i++) {
            for (var j = 0; j <= newArray.length; j++) {
                if (newArray[i][j] === document.turn && newArray[i + 1][j] === document.turn && newArray[i + 2][j] === document.turn) {
                    console.log("!VERTICAL WIN! Player " + document.turn + " WIN!");
                    setMessage("Player: " + document.turn + " win!");
                    return true;

                } else return false;
            }
        }

    }


    function checkRising() {
        for (var i = 2; i <= newArray.length; i++) {
            for (var j = 0; j <= newArray.length; j++) {
                if (newArray[i][j] === document.turn && newArray[i - 1][j + 1] === document.turn && newArray[i - 2][j + 2] === document.turn) {
                    console.log("!RISING! Player " + document.turn + " WIN!");
                    setMessage("Player: " + document.turn + " win!");
                    return true;
                } else return false;
            }
        }

    }

    function checkFalling() {
        for (var i = 2; i <= newArray.length; i++) {
            for (var j = 2; j <= newArray.length; j++) {
                if (newArray[i][j] === document.turn && newArray[i - 1][j - 1] === document.turn && newArray[i - 2][j - 2]) {
                    console.log("!FALLING! Player " + document.turn + " WIN!");
                    setMessage("Player: " + document.turn + " win!");
                    return true;

                } else return false;
            }
        }

    }


    if (checkHorizontal() === true || checkVertical() === true || checkRising() === true || checkFalling() === true) {
        setMessage("GGWP");
        return true;
    }
    return false;
}

