import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>TIC TAC TOES</h1>
<div>

</div>
`;

let move = 0; //counter for gamestate
let time;
let interval;

let cells = document.querySelectorAll(".col");

function renderTable() {
  //adding functionality to every cell
  for (let i = 0; i < 25; i++) {
    cells[i].addEventListener("click", function () {
      cellPress(this);
    });
  }
}

renderTable();

function cellPress(cell) {
  //function for playing the game
  progressBar();

  if (move % 2 === 0) {
    //check for which player
    if (cell.innerHTML === "") {
      //check if cell is empty
      cell.innerHTML = "x";
      cell.style.backgroundColor = "rgb(250,128,114)";
      roundTimer();
      move++;
    }
  } else {
    if (cell.innerHTML === "") {
      //check if cell is empty
      cell.innerHTML = "o";
      cell.style.backgroundColor = "rgb(124,252,0)";
      roundTimer();
      move++;
    }
  }

  //check for winner
  if (move > 8) {
    checkWinner();
  }
  if (move === 25) {
    alert("It's a draw!");
    emptyBoard();
    move = 0;
  }
}

function checkForSimilar(a, b, c, d, e) {
  if (a === b && b === c && c === d && d === e) {
    win();
    return true;
  }
}

function checkWinner() {
  //check for rows
  let win = false;
  let a, b, c, d, e;

  //rows
  if (win === false) {
    a = cells[0].innerHTML;
    b = cells[1].innerHTML;
    c = cells[2].innerHTML;
    d = cells[3].innerHTML;
    e = cells[4].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    a = cells[5].innerHTML;
    b = cells[6].innerHTML;
    c = cells[7].innerHTML;
    d = cells[8].innerHTML;
    e = cells[9].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    a = cells[10].innerHTML;
    b = cells[11].innerHTML;
    c = cells[12].innerHTML;
    d = cells[13].innerHTML;
    e = cells[14].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    a = cells[15].innerHTML;
    b = cells[16].innerHTML;
    c = cells[17].innerHTML;
    d = cells[18].innerHTML;
    e = cells[19].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
    a = cells[20].innerHTML;
    b = cells[21].innerHTML;
    c = cells[22].innerHTML;
    d = cells[23].innerHTML;
    e = cells[24].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    //check columns
    a = cells[0].innerHTML;
    b = cells[5].innerHTML;
    c = cells[10].innerHTML;
    d = cells[15].innerHTML;
    e = cells[20].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
    a = cells[1].innerHTML;
    b = cells[6].innerHTML;
    c = cells[11].innerHTML;
    d = cells[16].innerHTML;
    e = cells[21].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
    a = cells[2].innerHTML;
    b = cells[7].innerHTML;
    c = cells[12].innerHTML;
    d = cells[17].innerHTML;
    e = cells[22].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
    a = cells[3].innerHTML;
    b = cells[8].innerHTML;
    c = cells[13].innerHTML;
    d = cells[18].innerHTML;
    e = cells[23].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
    a = cells[4].innerHTML;
    b = cells[9].innerHTML;
    c = cells[14].innerHTML;
    d = cells[19].innerHTML;
    e = cells[24].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    //check diagonals
    a = cells[0].innerHTML;
    b = cells[6].innerHTML;
    c = cells[12].innerHTML;
    d = cells[18].innerHTML;
    e = cells[24].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }

    a = cells[4].innerHTML;
    b = cells[8].innerHTML;
    c = cells[12].innerHTML;
    d = cells[16].innerHTML;
    e = cells[20].innerHTML;
    if (a !== "" || b !== "" || c !== "" || d !== "" || e !== "") {
      win = checkForSimilar(a, b, c, d, e);
    }
  }
}

function emptyBoard() {
  move = 0;
  for (var i = 0; i < 25; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "";
  }
  clearTimeout(time);
}

function win() {
  let currentplayer = 1;
  if (move % 2 === 0) {
    currentplayer = 2;
  }
  alert("Player " + currentplayer + " won!");
  emptyBoard();
}

function progressBar() {
  clearInterval(interval);
  let bar = document.getElementById("myBar");
  interval = setInterval(frame, 100);
  let width = 0;

  function frame() {
    //handles progressbar
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }
}

function roundTimer() {
  clearTimeout(time);
  time = setTimeout(timeAlert, 10000);

  function timeAlert() {
    move++; //advances turn
    alert("You missed your turn!");
  }
}
