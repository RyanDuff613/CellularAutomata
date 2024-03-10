import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Dropdown from './Dropdown';

function ControlPanel(props) {
  const {isRunning, setIsRunning, setGrid, setGenerationCount } = props;
  const [buttonText, setButtonText] = useState("Start");
  
  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
    setButtonText((buttonText === "Start") ? "Stop" : "Start");
  }

  const handleSelectingInitialState = (newGrid) => {
    setButtonText("Start");
    setGrid(newGrid);
    setIsRunning(false);
    setGenerationCount(0);
  }
  
    return (
      <>
        <Dropdown onSelectingInitialState={handleSelectingInitialState}/>
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
