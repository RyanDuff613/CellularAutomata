import PropTypes from 'prop-types';

import Cell from './Cell';

function Row(props) {
  const { cellValues } = props;

  return (
    <div style={{ display: 'flex' }}>
      {cellValues.map((on, index) => (
        <Cell key={index} on={on} />
      ))}
    </div>
  );
}

export default Row;

Row.propTypes = {
  cellValues: PropTypes.array.isRequired
}