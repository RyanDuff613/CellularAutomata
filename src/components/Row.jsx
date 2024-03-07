import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

function Row(props) {
  const { rowValues } = props;

  return (
    <div style={{ display: 'flex' }}>
      {rowValues.map((on, index) => (
        <Cell key={index} on={on} />
      ))}
    </div>
  );
}

export default Row;

Row.propTypes = {
  rowValues: PropTypes.array
}