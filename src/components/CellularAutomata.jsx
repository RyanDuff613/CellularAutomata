import { useState, useEffect } from 'react'
import { nextGeneration } from '../gameLogic'
import Grid from './Grid';
import ControlPanel from './ControlPanel';

function CellularAutomata() {
  const [generationCount, setGenerationCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState([null]);

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
      <h1>Welcome to Cellular Automata</h1>
      <p>Generation: {generationCount}</p>
      <p>isRunning: {isRunning.toString()}</p>
      <Grid grid={grid} />    
      <ControlPanel isRunning={isRunning} 
                    setIsRunning={setIsRunning}
                    gridInitialized={(grid[0]== null) ? false : true}
                    setGrid={setGrid}
                    setGenerationCount={setGenerationCount}></ControlPanel>
    </>
  );
}

export default CellularAutomata


