import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InitialStateDropdown from './InitialStateDropdown';

function ControlPanel(props) {
  const {isRunning, setIsRunning, gridInitialized, setGrid, setGenerationCount } = props;
  const [buttonText, setButtonText] = useState("Start");
  
  const handleStartStopClick = () => {
    if (gridInitialized) {
      setIsRunning(!isRunning);
      setButtonText(isRunning ? "Start" : "Stop");
    } else {
      alert("Select a grid initialization option before starting")
    }
  }

  const handleSelectingInitialState = (newGrid) => {
    setButtonText("Start");
    setGrid(newGrid);
    setIsRunning(false);
    setGenerationCount(0);
  }
  
    return (
      <>
        <InitialStateDropdown onDropdownChange={handleSelectingInitialState}/>
        <Button buttonText={buttonText} onClickingStartStop={handleStartStopClick}/>
      </>
    )
}

ControlPanel.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  setIsRunning:PropTypes.func.isRequired,
  gridInitialized: PropTypes.bool.isRequired,
  setGrid: PropTypes.func.isRequired,
  setGenerationCount: PropTypes.func.isRequired
}

export default ControlPanel;
