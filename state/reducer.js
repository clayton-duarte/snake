import {
  createGrid, directions, calcSnakeMovement, calculateScore,
} from '../helpers';
import {
  START_GAME, MOVE_SNAKE, GAME_OVER, SCORE,
} from './types';

const gridSize = 10;

export const initialState = {
  apple: [0, Math.floor(gridSize / 2)],
  direction: directions.left,
  grid: createGrid(gridSize),
  limit: gridSize,
  snake: [[0, 0]],
  speed: 1,
  score: 0,
};


export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVE_SNAKE:
      return { ...state, snake: calcSnakeMovement(state, payload) };
    case START_GAME:
      return { ...state, interval: payload };
    case GAME_OVER:
      return initialState;
    case SCORE:
      return { ...state, ...calculateScore(state) };
    default:
      return state;
  }
};
