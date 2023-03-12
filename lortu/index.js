const snake = document.getElementById("snake");
const board = document.getElementById("board");
const apple = document.getElementById("apple");
const eatenApplesCount = document.getElementById("countOfApples");
const runButton = document.getElementById("run");

const DIRECTION_TYPES = Object.freeze({
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
});

const initialPosition = { x: 0, y: 0 };

let snakeItems = [initialPosition];
let applePosition = {};

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * 24);
  const y = Math.floor(Math.random() * 15);
  return { x, y };
};

const getCoordinateByPosition = ({ x, y }) => {
  const xPosition = 40 * x;
  const yPosition = 40 * y;
  return { x: xPosition + 5, y: yPosition + 5 };
};

const snakeMove = (position, oldPosition) => {
  if (position.x === oldPosition.x && position.y === oldPosition.y) {
    return;
  }
  const { x, y } = getCoordinateByPosition(position);
  snake.style.left = `${x}px`;
  snake.style.top = `${y}px`;

  if (position.x === applePosition.x && position.y === applePosition.y) {
    generateApple();
    snakeItems.push(applePosition);
    const snakeItem = document.createElement("div");
    snakeItem.className = "snake snakeItem";
    eatenApplesCount.innerHTML = `${+eatenApplesCount.innerHTML + 1}`;
    const snakeItemPosition = getCoordinateByPosition(oldPosition);
    snakeItem.style.left = `${snakeItemPosition.x}px`;
    snakeItem.style.top = `${snakeItemPosition.y}px`;
    board.appendChild(snakeItem);
  }

  const newSnakeItemList = [];
  const snakeItemList = document.querySelectorAll(".snakeItem");
  for (let index = 1; index <= snakeItems.length - 1; ++index) {
    const currentSnakeItemInHtml = snakeItemList[index - 1];
    const previous = snakeItems[index - 1];
    const currentCoordinate = getCoordinateByPosition(previous);
    currentSnakeItemInHtml.style.left = `${currentCoordinate.x}px`;
    currentSnakeItemInHtml.style.top = `${currentCoordinate.y}px`;
    newSnakeItemList.push(previous);
  }
  snakeItems = [position, ...newSnakeItemList];
};

const generateApple = () => {
  applePosition = getRandomPosition();
  const newApplePosition = getCoordinateByPosition(applePosition);
  apple.style.left = `${newApplePosition.x}px`;
  apple.style.top = `${newApplePosition.y}px`;
};

const isSnakeSelfCollision = () => {
  if (snakeItems?.length === 0) {
    return false;
  }
  const { x: headX, y: headY } = snakeItems[0];

  for (let i = 1; i < snakeItems.length; ++i) {
    const { x, y } = snakeItems[i];
    if (x === headX && y === headY) {
      return true;
    }
  }
  return false;
};

const checkOver = ({ x, y }) => {
  return y < 0 || y >= 15 || x >= 24 || x < 0 || isSnakeSelfCollision();
};

let direction = null;
let isGameOver = false;
let interval;

window.addEventListener("keydown", (event) => {
  const { key } = event;

  switch (key) {
    case "ArrowUp":
      if (direction === DIRECTION_TYPES.BOTTOM) {
        break;
      }
      direction = DIRECTION_TYPES.TOP;
      break;
    case "ArrowDown":
      if (direction === DIRECTION_TYPES.TOP) {
        break;
      }
      direction = DIRECTION_TYPES.BOTTOM;
      break;
    case "ArrowRight":
      if (direction === DIRECTION_TYPES.LEFT) {
        break;
      }
      direction = DIRECTION_TYPES.RIGHT;
      break;
    case "ArrowLeft":
      if (direction === DIRECTION_TYPES.RIGHT) {
        break;
      }
      direction = DIRECTION_TYPES.LEFT;
      break;
  }
});

runButton.addEventListener("click", () => {
  generateApple();
  isGameOver = false;
  direction = null;
  snakeItems = [initialPosition];

  interval = setInterval(() => {
    const { x, y } = snakeItems[0];
    const newPosition = { x, y };

    if (isGameOver) {
      clearInterval(interval);
    }

    switch (direction) {
      case DIRECTION_TYPES.BOTTOM:
        newPosition.y++;
        break;
      case DIRECTION_TYPES.TOP:
        newPosition.y--;
        break;
      case DIRECTION_TYPES.LEFT:
        newPosition.x--;
        break;
      case DIRECTION_TYPES.RIGHT:
        newPosition.x++;
        break;
    }
    if (checkOver(newPosition)) {
      isGameOver = true;
      alert("Game Over");
      window.location.reload();
    } else {
      snakeMove(newPosition, { x, y });
    }
  }, 300);
});

let cheatWord = 0;
window.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "s" || e.key === "o" || e.key === "n" || e.key === "g") {
      cheatWord++;
    }
    console.log(e.key);
    let audio = document.createElement("audio");
    if (cheatWord === 4) {
      audio.src = "pirates.mp3";
      audio.play();
      setTimeout(() => {
        cheatWord = 0;
        audio.stop();
      }, 30000);
    }
  },
  false
);
