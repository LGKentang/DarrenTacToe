// script.js

const grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let currentPlayer = 'X';
const wowElement = document.getElementById('wow');
let bot_play = false;


function is_empty_spot(x, y) {
  return grid[x][y] === ' ';
}

function check_win() {
  for (let j = 0; j < 3; j++) {
    if (grid[j][0] === grid[j][1] && grid[j][1] === grid[j][2] && grid[j][0] !== ' ') {
      return grid[j][0];
    }
  }

  for (let j = 0; j < 3; j++) {
    if (grid[0][j] === grid[1][j] && grid[1][j] === grid[2][j] && grid[0][j] !== ' ') {
      return grid[0][j];
    }
  }

  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== ' ') {
    return grid[0][0];
  }
  if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== ' ') {
    return grid[0][2];
  }

  return null;
}

function all_boxes_filled() {
  return grid.flat().every(cell => cell !== ' ');
}

function check_draw() {
  return !check_win() && all_boxes_filled();
}

function makeMove(x, y) {
   console.log("Bot Play " + bot_play)
  if (!is_empty_spot(x, y) || check_win()) {
    return;
  }

  grid[x][y] = currentPlayer;
  const boxId = 'box' + ((x * 3) + (y + 1));
  const boxElement = document.getElementById(boxId);

  console.log(boxId)
  console.log(boxElement)


  if (currentPlayer === 'X' && bot_play == false) {
    boxElement.innerHTML = '<img class="cross" src="./cross.png"/>';
  } 
  else if (currentPlayer !== 'X' && bot_play) {
    boxElement.innerHTML = '<img class="circle" src="./circle-png.webp" />';
  }
  else if (currentPlayer === 'X' && bot_play == true){
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  wowElement.textContent = currentPlayer === 'X' ? "Your turn" : "Darren is thinking...";

  if (check_win()) {
    wowElement.textContent = `Player (${check_win()}) wins!`;
  } else if (check_draw()) {
    wowElement.textContent = 'Draw!';
  }

  if (currentPlayer === 'O' && !check_win() && !check_draw()) {
    disableClickEvents();
    setTimeout(() => {
        bot_play=true
      botMove();
    }, 500);
    
  }
  console.log(bot_play)
}
 
function botMove() {

  const bestMove = getBestMove(grid, 'O');
  if (bestMove) {
    const [x, y] = bestMove;
    makeMove(x, y);
  }
  bot_play = false
  enableClickEvents()
  console.log(bot_play)
}

function getBestMove(grid, player) {
  let bestScore = player === 'O' ? -Infinity : Infinity;
  let bestMove = null;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (is_empty_spot(i, j)) {
        grid[i][j] = player;

        const score = minimax(grid, player === 'O' ? 'X' : 'O', false);

        grid[i][j] = ' '; // Undo the move

        if ((player === 'O' && score > bestScore) || (player === 'X' && score < bestScore)) {
          bestScore = score;
          bestMove = [i, j];
        }
      }
    }
  }

  return bestMove;
}

function minimax(grid, player, isMaximizing) {
  const result = check_win();

  if (result === 'O') return 1;
  if (result === 'X') return -1;
  if (check_draw()) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (is_empty_spot(i, j)) {
          grid[i][j] = 'O';
          const score = minimax(grid, player, false);
          grid[i][j] = ' ';
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (is_empty_spot(i, j)) {
          grid[i][j] = 'X';
          const score = minimax(grid, player, true);
          grid[i][j] = ' ';
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

function resetGame() {
  grid.forEach(row => row.fill(' '));
  currentPlayer = 'X';
  wowElement.textContent = "Your turn";

  for (let i = 1; i <= 9; i++) {
    const boxElement = document.getElementById('box' + i);
    boxElement.innerHTML = '';
  }
}
function disableClickEvents() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.onclick = null);
}

// Function to enable click events on all boxes
function enableClickEvents() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, index) => box.onclick = () => makeMove(Math.floor(index / 3), index % 3));
}