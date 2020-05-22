const chef = `
<svg id="icons" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m54.507 58.995c-.553 0-1-.447-1-1v-8.001c0-.553.447-1 1-1s1 .447 1 1v8.001c0 .553-.447 1-1 1z" fill="#ccd1d9"/><path d="m47.496 56.009v5.98h-8v-5.98-8c4.42 0 8 3.58 8 8z" fill="#ed5565"/><path d="m39.496 48.009h-3.002c4.42 0 8 3.58 8 8v5.98h3.002v-5.98c0-4.42-3.58-8-8-8z" fill="#da4453"/><path d="m52.504 58.009h4v3.98h-4z" fill="#ed5565"/><path d="m35.506 48.009h3.99v8h-3.99z" fill="#545c66"/><path d="m39.496 48.009h-3.002c1.063 0 2.074.211 3.002.587z" fill="#545c66"/><path d="m18.496 48.009c.01 2.22 3.14 4 7 4 3.85 0 6.989-1.78 7-4h3.01v8h-20v-8z" fill="#ed5565"/><path d="m39.496 56.009v5.98h-28v-5.98h4.01 20z" fill="#656d78"/><path d="m11.496 48.009v8 5.98h-8v-5.98c0-4.42 3.58-8 8-8z" fill="#ed5565"/><path d="m11.496 48.009h4.01v8h-4.01z" fill="#545c66"/><path d="m32.496 47.999v.01c-.011 2.22-3.15 4-7 4-3.86 0-6.99-1.78-7-4v-.01-3.719c2.09 1.101 4.469 1.73 7 1.73 2.529 0 4.91-.63 7-1.73z" fill="#eac6bb"/><path d="m10.496 25.011v6c0 5.75 3.239 10.75 8 13.27 2.09 1.101 4.469 1.73 7 1.73 2.529 0 4.91-.63 7-1.73 4.76-2.52 8-7.52 8-13.27v-6z" fill="#eac6bb"/><path d="m37.494 25.011v6c0 5.75-3.24 10.75-8 13.27-1.671.88-3.529 1.452-5.5 1.649.494.049.994.081 1.502.081 2.529 0 4.91-.63 7-1.73 4.76-2.52 8-7.52 8-13.27v-6z" fill="#d3b1a9"/><path d="m10.506 18.721c-2.891-.86-5-3.54-5-6.71 0-3.87 3.14-7 7-7h5.859c1.82-1.85 4.35-3 7.141-3 2.8 0 5.33 1.15 7.14 3h5.851c3.859 0 7 3.13 7 7 0 3.16-2.111 5.84-4.99 6.71l-.01 6.29h-30z" fill="#656d78"/><path d="m45.496 12.011c0-1.046-.236-2.035-.647-2.926-1.345.296-2.353 1.491-2.353 2.926 0 1.751-1.176 3.33-2.858 3.838-1.265.383-2.131 1.548-2.132 2.869l-.006 6.293h2.996l.01-6.29c2.879-.87 4.99-3.55 4.99-6.71z" fill="#545c66"/><path d="m38.496 5.011h-3.002c3.86 0 7 3.13 7 7h3.002c0-3.87-3.141-7-7-7z" fill="#545c66"/><path d="m36.495 30.998h-.002c-.553 0-1 .447-1 1 0 .551-.447.998-.998.998h-5.499c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h2.499c3.309 0 6-2.691 6-6v-1.998c0-.553-.447-1-1-1z" fill="#965353"/><path d="m21.994 32.996h-5.499c-.551 0-.998-.447-.998-.998 0-.553-.447-1-1-1h-.001-.001c-.553 0-1 .447-1 1v1.998c0 3.309 2.691 6 6 6h2.499c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5z" fill="#965353"/><path d="m58.504 35.999h-8c-1.1 0-2 .899-2 2v10c0 1.1.9 2 2 2h4 4c1.1 0 2-.9 2-2v-10c0-1.101-.9-2-2-2zm-4.999 9.96c0 .553-.447 1-1 1s-1-.447-1-1v-6c0-.553.447-1 1-1s1 .447 1 1zm4 0c0 .553-.447 1-1 1s-1-.447-1-1v-6c0-.553.447-1 1-1s1 .447 1 1z" fill="#e6e9ed"/><path d="m55.506 58.998h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z" fill="#ed5565"/></svg>

`;
const burger = `
<svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path clip-rule="evenodd" d="m52.364 436.445h407.277c25.318 0 46.022-17.784 46.022-39.482v-27.655c0-6.512-6.191-11.798-13.754-11.827l-24.529-.029-221.846-23.245-196.149 23.245-29.289.029c-7.592 0-13.783 5.315-13.783 11.827v27.655c0 21.698 20.733 39.482 46.051 39.482z" fill="#f8d2ab" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m20.242 324.453c0 17.609 12.995 32.123 29.143 32.999l143.439-.204 274.555.204c16.382-.613 29.611-15.215 29.611-32.999v-32.327c0-5.665-1.372-11.039-3.738-15.711-24.033-54.142-426.579-5.198-469.068-.38-2.511 4.789-3.942 10.279-3.942 16.091v32.327z" fill="#db885e" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m89.509 289.848 74.318 32.269c8.176 3.563 13.491 2.395 20.529-.029l107.2-36.766c-39.948-24.559-168.203-48.768-202.047 4.526z" fill="#ffe07d" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m24.155 276.036c12.352 9.87 30.019 14.134 47.511 14.601 6.045.175 12.06-.117 17.842-.788 9.812-1.11 18.923-3.358 26.165-6.308 31.363-12.849 70.873-10.425 95.11-1.197 12.09 4.614 28.647 6.921 45.204 6.921 12.498 0 24.997-1.314 35.568-3.942 3.446-.847 6.687-1.84 9.637-2.979 13.287-5.081 27.012-7.651 62.171-7.651 36.006 0 103.17 26.604 129.889 1.723 8.819-8.235 13.228-22.048 10.659-44.3l-247.923-37.116-246.025 37.115c-.642 0-1.285 0-1.869 0-2.395 20.529 4.497 34.693 16.061 43.921z" fill="#b3e59f" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m8.094 232.086h247.894 94.993 85.59 67.339v.029c5.636.058 8.41.029 8.06-6.833-5.431-101.187-131.524-151.094-255.982-149.693-100.513-1.285-250.143 40.884-255.954 149.693-.38 6.863 2.395 6.892 8.06 6.833 0 0 0 0 0-.029z" fill="#f8d2ab" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m224.771 76.494c112.369 7.301 216.823 56.887 221.729 148.817.292 5.49-1.431 6.6-5.023 6.775-.029 0-.058.029-.088.029h60.623 1.898c5.636.058 8.41.029 8.06-6.833-5.431-101.187-131.524-151.094-255.982-149.693-9.987-.146-20.441.175-31.217.905z" fill="#ffbb8b" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m447.376 396.905c0 21.727-20.704 39.482-46.022 39.482h-351.268c.759.029 1.518.058 2.278.058h407.277c25.318 0 46.022-17.784 46.022-39.482v-27.655c0-6.512-6.191-11.798-13.754-11.827l-24.529-.029-33.757-.029c7.563.029 13.754 5.315 13.754 11.827v27.655z" fill="#ffbb8b" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m402.113 357.423h31.509l33.757.029c16.382-.613 29.611-15.215 29.611-32.999v-32.327c0-5.665-1.372-11.039-3.738-15.711-17.025 15.857-50.519 10.805-81.882 5.052.117.234.234.467.35.701 2.365 4.672 3.709 10.046 3.709 15.711v32.327c0 8.001-2.657 15.331-7.096 21.055-1.81 2.366-3.913 4.41-6.22 6.162z" fill="#c57142" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m394.025 278.284c7.738 1.372 15.857 2.949 24.004 4.38 29.348 5.169 59.396 8.498 75.224-6.249 8.819-8.235 13.228-22.048 10.659-44.3h-.029c-32.297-.234-64.653-.029-96.979-.029.905 7.709.964 14.397.263 20.208-1.256 10.951-5.14 18.719-10.921 24.092-.703.672-1.433 1.285-2.221 1.898z" fill="#95d6a4" fill-rule="evenodd"/></g><g><path d="m118.214 183.389c-4.233 0-7.664-3.431-7.664-7.664v-.613c0-4.233 3.431-7.664 7.664-7.664s7.664 3.431 7.664 7.664v.613c-.001 4.232-3.431 7.664-7.664 7.664z" fill="#db885e"/></g><g><path d="m255.988 183.972c-4.233 0-7.664-3.431-7.664-7.664v-.584c0-4.233 3.431-7.664 7.664-7.664s7.664 3.431 7.664 7.664v.584c0 4.233-3.431 7.664-7.664 7.664z" fill="#db885e"/></g><g><path d="m393.762 184.586c-4.233 0-7.664-3.431-7.664-7.664v-.614c0-4.233 3.431-7.664 7.664-7.664s7.664 3.431 7.664 7.664v.614c-.001 4.233-3.431 7.664-7.664 7.664z" fill="#db885e"/></g><g><path d="m184.356 141.687c-4.233 0-7.664-3.431-7.664-7.664v-.584c0-4.233 3.431-7.664 7.664-7.664s7.664 3.431 7.664 7.664v.584c-.001 4.233-3.431 7.664-7.664 7.664z" fill="#db885e"/></g><g><path d="m327.619 142.885c-4.233 0-7.664-3.431-7.664-7.664v-.584c0-4.233 3.431-7.664 7.664-7.664s7.664 3.431 7.664 7.664v.584c0 4.233-3.43 7.664-7.664 7.664z" fill="#db885e"/></g></g></svg>
`;
const createBrickHtml = (color) => {
  return `<div class="flip-circle ${color}">
            <div class="flip-circle-inner">
              <div class="flip-circle-front">              
              ${chef}
              </div>
              <div class="flip-circle-back">
              ${burger}
              </div>
            </div>
          </div>`;
};

const getCount = (tiles, color) => {
  return tiles.filter((tile) => tile.children[0].classList.contains(color))
    .length;
};

const printBoard = (board) => {};

const updateScore = (tiles, scoreDisplays) => {
  scoreDisplays[0].innerHTML = getCount(tiles, "blue");
  scoreDisplays[1].innerHTML = getCount(tiles, "pink");
};

const updateNextPlayerDisplay = (color) => {
  const opposingColor = color === "blue" ? "pink" : "blue";
  playerIndicator.classList.remove(opposingColor);
  playerIndicator.classList.add(color);
};

const getAvailablePositions = (tiles, board, color) => {
  const positions = [];
  tiles.forEach((tile, index) => {
    if (
      tile.children[0].classList.contains("blue") ||
      tile.children[0].classList.contains("pink")
    ) {
      return;
    }
    const tileX = index % 8;
    const tileY = Math.floor(index / 8);
    directions.forEach((direction) => {
      const tilesInDir = getTilesInDirection(
        { x: tileX, y: tileY },
        direction,
        board,
        color
      );
      const flips = willCauseFlipsCount(tilesInDir);
      if (flips > 0) {
        positions.push({
          x: tileX,
          y: tileY,
          direction,
          flips,
        });
      }
    });
  });
  return positions;
};

const willCauseFlipsCount = (tiles) => {
  if (tiles.length < 3) {
    return 0;
  }
  let hasResult = false;
  let result = 0;
  const myColor = tiles[0];
  const opposingColor = myColor === "blue" ? "pink" : "blue";
  tiles.forEach((tile, index) => {
    if (!hasResult) {
      if (index >= 1 && tile === opposingColor) {
        result++;
      }
      if (index === 1 && tile !== opposingColor) {
        hasResult = true;
        result = 0;
      }
      if (index > 1 && tile === "") {
        hasResult = true;
        result = 0;
      }
      if (index > 1 && tile === myColor) {
        hasResult = true;
      }
    }
  });
  // No opposing color brick encountered
  if (!hasResult) {
    result = 0;
  }
  return result;
};

const getTilesInDirection = (pos, dir, _board, color) => {
  const board = _board.map(function (row) {
    return row.slice();
  });
  const tiles = [];
  let x = pos.x;
  let y = pos.y;
  board[x][y] = color;
  switch (dir) {
    case "up":
      for (y; y >= 0; y--) {
        tiles.push(board[x][y]);
      }
      break;
    case "upright":
      while (x <= 7 && y >= 0) {
        tiles.push(board[x][y]);
        x++;
        y--;
      }
      break;
    case "right":
      for (x; x <= 7; x++) {
        tiles.push(board[x][y]);
      }
      break;
    case "downright":
      while (x <= 7 && y <= 7) {
        tiles.push(board[x][y]);
        x++;
        y++;
      }
      break;
    case "down":
      for (y; y <= 7; y++) {
        tiles.push(board[x][y]);
      }
      break;
    case "downleft":
      while (x >= 0 && y <= 7) {
        tiles.push(board[x][y]);
        x--;
        y++;
      }
      break;
    case "left":
      for (x; x >= 0; x--) {
        tiles.push(board[x][y]);
      }
      break;
    case "upleft":
      while (x >= 0 && y >= 0) {
        tiles.push(board[x][y]);
        x--;
        y--;
      }
      break;
    default:
      break;
  }
  return tiles;
};

const getTileFromCoordinate = (tiles, pos) => {
  return tiles[pos.y * 8 + pos.x];
};
const clearValidPositions = (tiles) => {
  tiles.forEach((tile) => {
    tile.classList.remove("valid");
  });
};

const updateValidPositions = (tiles, board, color) => {
  tiles.forEach((tile) => {
    tile.classList.remove("valid");
  });
  const validPositions = getAvailablePositions(tiles, board, color);
  console.log(validPositions.length);
  if (!validPositions.length) {
    endGame(tiles);
  }
  // Show avalible positions
  validPositions.forEach((pos) => {
    const tile = getTileFromCoordinate(tiles, pos);
    tile.classList.add("valid");
  });
};

const flipFromPos = (board, color, pos) => {
  const opposingColor = color === "blue" ? "pink" : "blue";
  let x = pos.x;
  let y = pos.y;
  switch (pos.direction) {
    case "up":
      y--;
      for (y; y > 0; y--) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
      }
      break;
    case "upright":
      x++;
      y--;
      while (x <= 7 && y >= 0) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
        x++;
        y--;
      }
      break;
    case "right":
      x++;
      for (x; x <= 7; x++) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
      }
      break;
    case "downright":
      x++;
      y++;
      while (x <= 7 && y <= 7) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
        x++;
        y++;
      }
      break;
    case "down":
      y++;
      for (y; y <= 7; y++) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
      }
      break;
    case "downleft":
      x--;
      y++;
      while (x >= 0 && y <= 7) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
        x--;
        y++;
      }
      break;
    case "left":
      x--;
      for (x; x >= 0; x--) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
      }
      break;
    case "upleft":
      x--;
      y--;
      while (x >= 0 && y >= 0) {
        if (board[x][y] === opposingColor) {
          board[x][y] = color;
        } else {
          break;
        }
        x--;
        y--;
      }
      break;
    default:
      break;
  }
};

const updateTilesFromBoard = (tiles, board) => {
  tiles.forEach((tile) => {
    const tileX = tile.getAttribute("data-x");
    const tileY = tile.getAttribute("data-y");
    const boardColor = board[tileX][tileY];
    if (boardColor.length) {
      const opposingColor = boardColor === "blue" ? "pink" : "blue";
      if (tile.children[0].classList.contains(opposingColor)) {
        tile.children[0].classList.remove(opposingColor);
        tile.children[0].classList.add(boardColor);
      }
    }
  });
};

const placeBrick = (board, tiles, positions, target, player, x, y) => {
  // Place brick
  target.innerHTML = createBrickHtml(player);
  // Flip bricks
  const flipDirections = positions.filter((pos) => pos.x == x && pos.y == y);
  flipDirections.forEach((flipDir) => {
    flipFromPos(board, player, flipDir);
  });
  board[x][y] = player;
  updateTilesFromBoard(tiles, board);
};

const endGame = (tiles) => {
  const blueCount = getCount(tiles, "blue");
  const pinkCount = getCount(tiles, "pink");
  if (blueCount === pinkCount) {
    alert("Draw");
  }
  const winner = blueCount > pinkCount ? "Chefs" : "Burgers";
  alert(winner + " wins!");
  startGame();
};

const addTiles = (board) => {
  let html = "";
  for (let i = 0; i < 64; i++) {
    html += `<div class="tile"></div>`;
  }
  board.innerHTML = html;
};

// Constants
const directions = [
  "up",
  "upright",
  "right",
  "downright",
  "down",
  "downleft",
  "left",
  "upleft",
];
const blankHtml = `<div class="blank"></div>`;

// Get elements
const tilesWrapper = document.querySelector(".board");
const scoreDisplays = [...document.querySelectorAll(".score")];
const startButton = document.querySelector("#start");
const playerIndicatorWrapper = document.querySelector(".indicator-circle");
playerIndicatorWrapper.innerHTML = createBrickHtml("blue");
const playerIndicator = document.querySelector(
  ".indicator-circle .flip-circle"
);
let noOfPlayers = 1;
const noOfPlayersForm = document.querySelector("#no-of-players");
noOfPlayersForm.addEventListener("change", (e) => {
  noOfPlayers = e.target.value === "single" ? 1 : 2;
  startGame();
});

// Connect start button to start method
startButton.addEventListener("click", () => {
  startGame();
});

// Start game function
const startGame = () => {
  tilesWrapper.innerHTML = "";
  addTiles(tilesWrapper);
  const tiles = [...document.querySelectorAll(".board .tile")];
  let currentPlayer = "blue";
  const board = [[], [], [], [], [], [], [], []];
  tiles.forEach((tile) => {
    tile.innerHTML = blankHtml;
  });

  // Initial bricks
  tiles[27].innerHTML = createBrickHtml("pink");
  tiles[28].innerHTML = createBrickHtml("blue");
  tiles[35].innerHTML = createBrickHtml("blue");
  tiles[36].innerHTML = createBrickHtml("pink");

  // Initial score
  updateScore(tiles, scoreDisplays);

  // Show starting player
  updateNextPlayerDisplay(currentPlayer);

  // Add click event
  tiles.forEach((tile) => {
    tile.addEventListener("click", (e) => {
      const positions = getAvailablePositions(tiles, board, currentPlayer);
      const tileX = e.currentTarget.getAttribute("data-x");
      const tileY = e.currentTarget.getAttribute("data-y");
      const posIsValid = positions.some(
        (pos) => pos.x == tileX && pos.y == tileY
      );
      // Make sure tile is empty and position is valid
      if (
        !e.currentTarget.children[0].classList.contains("blue") &&
        !e.currentTarget.children[0].classList.contains("pink") &&
        posIsValid
      ) {
        placeBrick(
          board,
          tiles,
          positions,
          e.currentTarget,
          currentPlayer,
          tileX,
          tileY
        );
        // Update score
        updateScore(tiles, scoreDisplays);
        // Change player
        currentPlayer = currentPlayer === "blue" ? "pink" : "blue";
        // Show whos next
        updateNextPlayerDisplay(currentPlayer);
        // TODO if single player
        if (noOfPlayers === 1) {
          clearValidPositions(tiles);
          setTimeout(() => {
            const positions = getAvailablePositions(
              tiles,
              board,
              currentPlayer
            );
            const sortedPositions = positions.sort(
              (p1, p2) => p2.flips - p1.flips
            );
            placeBrick(
              board,
              tiles,
              positions,
              getTileFromCoordinate(tiles, {
                x: sortedPositions[0].x,
                y: sortedPositions[0].y,
              }),
              currentPlayer,
              sortedPositions[0].x,
              sortedPositions[0].y
            );
            // Update score
            updateScore(tiles, scoreDisplays);
            // Change player
            currentPlayer = currentPlayer === "blue" ? "pink" : "blue";
            // Show whos next
            updateNextPlayerDisplay(currentPlayer);
            // Show valid positions
            updateValidPositions(tiles, board, currentPlayer);
          }, 1500);
        } else {
          // Show valid positions
          updateValidPositions(tiles, board, currentPlayer);
        }
      }
    });
  });

  // Create board object
  tiles.forEach((tile, index) => {
    const tileX = index % 8;
    const tileY = Math.floor(index / 8);
    tile.setAttribute("data-x", tileX);
    tile.setAttribute("data-y", tileY);
    if (tile.children[0].classList.contains("blue")) {
      board[tileX][tileY] = "blue";
    } else if (tile.children[0].classList.contains("pink")) {
      board[tileX][tileY] = "pink";
    } else {
      board[tileX][tileY] = "";
    }
  });

  // Start first turn
  updateValidPositions(tiles, board, currentPlayer);
};

// Start
startGame();
