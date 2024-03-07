import { useState, useEffect, useRef } from 'react'
import { make2DArray, nextGeneration } from '../gameLogic'
import Row from './Row'
import Button from './Button'
import ControlPanel from './ControlPanel';

function CellularAutomata() {
  const [grid, setGrid] = useState([]);
  const [generationCount, setGenerationCount] = useState(1);
  const [buttonText, setButtonText] = useState("Set Initial State");
  const [isRunning, setIsRunning] = useState(false);
  const isInitialRender = useRef(true);

  // const handleButtonClick = () => {
  //   console.log(createStateOptionsList())
  //   if (grid.length == 0) {
  //     setGrid(make2DArray(100,100))
  //     setButtonText("Start Game");
  //   } else if (isRunning) {
  //     setIsRunning(false);
  //     setButtonText("Start Game");
  //   } else {
  //     setIsRunning(true);
  //     setButtonText("Stop Game");
  //   }
  // }

  // const createStateOptionsList = () => {
  //   const stateOptionsList = Object.keys(initialStates).map((option) => {
  //     return option;
  //   })
  //   stateOptionsList.unshift("Random State");
  //   return stateOptionsList;
  // }

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const intervalId = setInterval(() => {
      if(isRunning){
        setGrid(nextGeneration(grid));
        setGenerationCount(generationCount + 1);
      }
    }, 20); 

    return () => clearInterval(intervalId);
  }, [grid, isRunning, buttonText]);

  return (
    <>
      {
        grid.map((row, rowIndex) => (
          <Row key={rowIndex} rowValues={row}/>
        ))
      }
      <p>Generation: {generationCount}</p>
      <ControlPanel/>
    </>
  );
}

export default CellularAutomata


