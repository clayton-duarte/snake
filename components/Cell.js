import React from 'react';
import PropTypes from 'prop-types';

import { getCellType, getCellAnimation, getCellColor } from '../helpers';

const Cell = ({ snake, coord, apple }) => {
  const type = getCellType(coord, snake, apple);
  return (
    <>
      <span title={type}>.</span>

      <style jsx>
        {`
        font-family: monospace;
        span {
          animation: ${getCellAnimation(type)};
          background: ${getCellColor(type)};
          display: inline-block;
          color: transparent;
          margin: .5px;
          height: 1em;
          width: 1em;
        }
      `}
      </style>
    </>
  );
};

Cell.propTypes = {
  snake: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  coord: PropTypes.arrayOf(PropTypes.number),
  apple: PropTypes.arrayOf(PropTypes.number),
};

Cell.defaultProps = {
  snake: [[]],
  coord: [],
  apple: [],
};

export default Cell;
