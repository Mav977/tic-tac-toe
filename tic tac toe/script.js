let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("man_voice.mp3");
let turn = "X";
let turncheck;
let isgameover = false;
let xc = 0;
let oc = 0;

//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//Function to hceck for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      turncheck = turn;
      if (turncheck === "X") {
        xc++;
      } else if (turncheck === "O") {
        oc++;
      }
    gameover.play();
      
      boxtext[e[0]].innerText + " Won";
      isgameover = true;
      let winn = e;
      boxtext[winn[0]].style.color = "red";
      boxtext[winn[1]].style.color = "red";
      boxtext[winn[2]].style.color = "red";
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "100px";
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.height = "100px";
    }
  });
};

//Game Logic

// music.volume=0.02
//music.play()

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.volume=0.03;
      audioTurn.play();
      checkWin();
      if (isgameover == false) {
        document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
      }
    }
  });
});

//Add onclick listner to reset button
reset.addEventListener("click", () => {
  xc = 0;
  oc = 0;
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;

  document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  var tableHeaderRowCount = 1;
  var table = document.getElementById("table");
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
});

function newgame() {
  var table = document.getElementById("table");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  cell1.innerHTML = oc;
  cell2.innerHTML = xc;
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;

  document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    boxtext[e[1]].style.color = "black";
    boxtext[e[2]].style.color = "black";
    boxtext[e[0]].style.color = "black";
  });
}
