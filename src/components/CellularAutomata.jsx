import { useState } from 'react'

import { make2DArray } from '../gameLogic'
import Grid from './Grid';
import ControlPanel from './ControlPanel';

function CellularAutomata() {
  const [generationCount, setGenerationCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState([]);

  return (
    <>
      <p>Generation: {generationCount}</p>
      <p>isRunning: {isRunning.toString()}</p>
      <Grid isRunning={isRunning} 
            grid={grid} 
            setGrid={setGrid} 
            generationCount={generationCount} 
            setGenerationCount={setGenerationCount}/>
      <ControlPanel isRunning={isRunning} 
                    setIsRunning={setIsRunning}
                    setGrid={setGrid}
                    setGenerationCount={setGenerationCount}></ControlPanel>
    </>
  );
}

export default CellularAutomata


