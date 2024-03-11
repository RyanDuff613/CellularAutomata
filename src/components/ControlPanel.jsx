import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InitialStateDropdown from './InitialStateDropdown';

function ControlPanel(props) {
  const {isRunning, setIsRunning, setGrid, setGenerationCount } = props;
  const [buttonText, setButtonText] = useState("Start");
  
  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
    setButtonText(isRunning ? "Start" : "Stop");
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
  setGrid: PropTypes.func.isRequired,
  setGenerationCount: PropTypes.func.isRequired
}

export default ControlPanel;
