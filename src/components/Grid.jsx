import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { nextGeneration } from '../gameLogic'
import Row from './Row'

function Grid(props) {
  const { isRunning, grid, setGrid, generationCount, setGenerationCount } = props;

  useEffect(() => {
    let myInterval;

    if (isRunning) {
      myInterval = setInterval(() => {
        setGenerationCount(generationCount + 1)
        setGrid(nextGeneration(grid))
      }, 100)
    }

    return () => clearInterval(myInterval);
  }, [isRunning, grid])

  return (
    <>
      {
        grid.map((row, rowIndex) => (
          <Row key={rowIndex} cellValues={row}/>
        ))
      }
    </>
  );
}

Grid.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
  generationCount: PropTypes.number.isRequired,
  setGenerationCount: PropTypes.func.isRequired
}

export default Grid


