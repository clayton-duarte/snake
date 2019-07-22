import React, { useEffect } from 'react';

import { startGame, stopGame } from '../state/actions';
import { useStateValue } from '../state';
import Grid from '../components/Grid';

export default () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    startGame(dispatch, state)();
    return stopGame(dispatch, state);
  }, []);

  return (
    <>
      <div>
        <section>
          <span>{`score: ${state.score}`}</span>
          <span>{`speed: ${state.speed}`}</span>
        </section>
        <Grid {...state} />
      </div>
      <style global jsx>
        {`
          body {
            justify-content: center;
            font-family: monospace;
            align-items: center;
            background: #222;
            display: flex;
            height: 100vh;
            margin: 0;
          }

          @keyframes blink {
            from {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          section {
            justify-content: space-between;
            display: flex;
            color: white;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};
