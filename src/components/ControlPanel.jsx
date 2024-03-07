import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import * as initialStates from '../initialStates';

function ControlPanel(props) {
  const [initialStateOptions, setInitialStateOptions] = useState([]);

  const createStateOptionsList = () => {
    const stateOptionsArray = Object.keys(initialStates).map((option) => {
      return option;
    })
    stateOptionsArray.unshift("Random State");
    setInitialStateOptions(stateOptionsArray);
  }

  useEffect(() => {
    createStateOptionsList();
  },[])


  return (
    <>
      <div>
        <label htmlFor="dropdown">Select an InitialState:</label>
        <select id="dropdown">
          {initialStateOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      {/* {console.log(initialStateOptions)} */}
      <Button text="Start"></Button>
      <Button text="Stop"></Button>
    </> 
  )
}

ControlPanel.propTypes = {
};

export default ControlPanel;
