import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Grid = ({ limit, grid, ...rest }) => (
  <>
    <p>
      {grid.map(([x, y], index) => {
        const node = [<Cell key={`cell-${x}-${y}`} coord={[x, y]} {...rest} />];

        if (index && (index + 1) % limit === 0) {
          node.push(<br key={`cell-${x}-${y}-br`} />);
        }

        return node;
      })}
    </p>

    <style jsx>
      {`
        p {
          display: inline-block;
          line-height: 20px;
          font-size: 20px;
          margin: 0;
        }
      `}

    </style>
  </>
);

Grid.propTypes = {
  snake: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  apple: PropTypes.arrayOf(PropTypes.number),
  limit: PropTypes.number,
};

Grid.defaultProps = {
  snake: [[]],
  grid: [[]],
  apple: [],
  limit: 0,
};

export default Grid;
