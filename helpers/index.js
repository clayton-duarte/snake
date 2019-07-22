const cellTypes = {
  snake: 'snake',
  apple: 'apple',
  cell: 'cell',
};

const cellColors = {
  snake: 'green',
  apple: 'red',
  cell: 'gray',
};

const cellAnimations = {
  apple: 'blink 1s infinite',
  snake: 'none',
  cell: 'none',
};

export const directions = {
  bottom: 'bottom',
  right: 'right',
  left: 'left',
  top: 'top',
};

const identifyHit = (list = [], position = []) => {
  const [x, y] = position;
  return list.includes(item => (item[0] === x && item[1] === y));
};

const newPositionOnLimit = (position, limit) => {
  if (position < 0) return limit - 1;
  if (position >= limit) return 0;
  return position;
};

export const calculateScore = ({ score, speed, snake }) => {
  const snakePoints = snake.length;
  const speedPoints = speed;
  const total = score + speedPoints + snakePoints;
  const newSpeed = Math.ceil(total / 125);
  return { score: total, speed: newSpeed };
};

export const calcSnakeMovement = ({
  snake, limit, direction, interval, apple,
}, { initiator, onAppleHit, onSnakeHit }) => {
  const snakeHead = snake[snake.length - 1];
  const newSnake = snake;

  if (interval !== initiator) clearInterval(initiator);

  switch (direction) {
    case directions.left:
      newSnake.push([snakeHead[0], newPositionOnLimit(snakeHead[1] + 1, limit)]);
      break;
    case directions.bottom:
      newSnake.push([newPositionOnLimit(snakeHead[0] + 1, limit), snakeHead[1]]);
      break;
    case directions.right:
      newSnake.push([snakeHead[0], newPositionOnLimit(snakeHead[1] - 1, limit)]);
      break;
    case directions.top:
      newSnake.push([newPositionOnLimit(snakeHead[0] - 1, limit), snakeHead[1]]);
      break;
    default:
      break;
  }


  if (identifyHit([snakeHead], apple)) {
    return onAppleHit(newSnake);
  }

  const snakeBody = newSnake;
  snakeBody.pop();
  if (identifyHit(newSnake, snakeHead)) {
    console.log(snakeBody, snakeHead)
    // return onSnakeHit();
  }

  newSnake.shift();
  return newSnake;
};

export const calcTime = ({ speed = 1 }) => {
  const clock = 500;
  return clock / speed;
};

export const createGrid = (limit = 10) => {
  const matrix = [...Array(limit).keys()];
  const grid = [];
  matrix.forEach((i) => { matrix.forEach((j) => { grid.push([i, j]); }); });
  return grid;
};

export const getCellType = (coord, snake, apple) => {
  if (identifyHit(snake, coord)) return cellTypes.snake;
  if (identifyHit([apple], coord)) return cellTypes.apple;
  return cellTypes.cell;
};

export const getCellAnimation = type => cellAnimations[type];

export const getCellColor = type => cellColors[type];
