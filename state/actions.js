import { calcTime } from '../helpers';
import {
  START_GAME, GAME_OVER, MOVE_SNAKE, SCORE,
} from './types';

export const stopGame = (dispatch, { interval }) => () => {
  clearInterval(interval);
  dispatch({ type: GAME_OVER });
};

export const startGame = (dispatch, state) => () => {
  const onSnakeHit = stopGame(dispatch, state);
  const onAppleHit = (snake) => {
    dispatch({ type: SCORE });
    return snake;
  };

  const interval = setInterval(() => dispatch({
    payload: { onAppleHit, onSnakeHit, interval },
    type: MOVE_SNAKE,
  }), calcTime(state));

  dispatch({ type: START_GAME, payload: interval });
};
