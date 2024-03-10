import React from 'react';
import PropTypes from 'prop-types';

function Cell(props) {
  const { on } = props;
  const color = on === 0 ? 'white' : 'grey';

  return (
    <div
      style={{
        width: '5px',
        height: '5px',
        backgroundColor: color,
      }}
    ></div>
  );
}

Cell.propTypes = {
  on: PropTypes.number.isRequired
}

export default Cell;
