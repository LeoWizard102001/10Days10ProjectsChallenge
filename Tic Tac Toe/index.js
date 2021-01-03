const locations = [1,2,3,4,5,6,7,8,9];
let currentSymbol = "o";
const circle = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>';
const cross = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>';
const playerStatus = document.getElementById("player-status");
let o_array = [];
let x_array = [];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;


let boxes = document.getElementsByClassName("box");
// console.log(boxes[5]);

function boxClick(boxNo) {
    const box = "box" + boxNo;
    if (currentSymbol == "x") {
        document.getElementById(box).innerHTML = cross;
        document.getElementById(box).onclick = null;
        x_array.push(boxNo - 1);
        currentSymbol = "o";
        playerStatus.innerHTML = ("Player: O");
    }   else if (currentSymbol == "o") {
        document.getElementById(box).innerHTML = circle;
        document.getElementById(box).onclick = null;
        o_array.push(boxNo - 1);
        currentSymbol = "x";
        playerStatus.innerHTML = ("Player: X");
    }
    checkResult();
    count++;
    if (count >=9) {
        playerStatus.innerHTML = "Please Restart!";
    }

}
function reset() {
    window.location.reload();
}




function checkResult () {
    let o_flag = 0;
    let x_flag = 0;
    for (i = 0; i < 8; i++) {
        o_flag = 0;
        x_flag = 0;
        const condition = winningConditions[i];
        for (j = 0; j < 5; j++) {
            for (k = 0; k < 3; k++) {
                if(o_array[j] == condition[k]) {
                    o_flag++;
                }
                if(x_array[j] == condition[k]) {
                    x_flag++;
                }
            }
        }
        if (o_flag >= 3) {
            playerStatus.innerHTML = "Player O wins!";
            break;
        } else if (x_flag >= 3) {
            playerStatus.innerHTML = "Player X wins!";
            break;
        }
    }
}