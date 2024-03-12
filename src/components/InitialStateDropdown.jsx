import PropTypes from 'prop-types';

import * as presets from '../initialStates';
import { make2DArray } from '../gameLogic';

function InitialStateDropdown(props) {
  const { onDropdownChange } = props;

  const createStateOptionsList = () => {
    const stateOptionsArray = Object.keys(presets).map((option) => {
      return option;
    })
    return stateOptionsArray;
  }

  const handleDropdownChange = (event) => {
    const selectedInitialState = event.target.value;
    const newGrid = presets[selectedInitialState] || make2DArray(50,50);
    onDropdownChange(newGrid)
  };

  return (
    <>
      <select id="dropdown" onChange={handleDropdownChange}>
      <option value='' disabled selected>Select an Initial State:</option>
        {createStateOptionsList().map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </> 
  )
}

InitialStateDropdown.propTypes = {
  onDropdownChange: PropTypes.func.isRequired
};

export default InitialStateDropdown;
