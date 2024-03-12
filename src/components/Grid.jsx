import PropTypes from 'prop-types';

import Cell from './Cell.jsx'

function Grid(props) {
  const { grid } = props;

  if (grid[0] != null){
    return (
      <>
        {
          grid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
              {row.map((columnValue, columnIndex) => (
                <Cell key={columnIndex} on={columnValue} />
              ))}
            </div>
          ))
        }
      </>
    );
  } else {
    return (
      <>
        <p>first select your initial state</p>
      </>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.array.isRequired
}

export default Grid


