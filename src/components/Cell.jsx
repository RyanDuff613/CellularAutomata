import React from 'react';

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

export default Cell;
