import PropTypes from 'prop-types';

import * as presets from '../initialStates';
import { make2DArray } from '../gameLogic';

function Dropdown(props) {
  const { onSelectingInitialState } = props;

  const createStateOptionsList = () => {
    const stateOptionsArray = Object.keys(presets).map((option) => {
      return option;
    })
    return stateOptionsArray;
  }

  const handleDropdownChange = (event) => {
    const selectedInitialState = event.target.value;
    const newGrid = presets[selectedInitialState] || make2DArray(50,50);
    onSelectingInitialState(newGrid)
  };

  return (
    <>
      <label htmlFor="dropdown">Select an Initial State:</label>
      <select id="dropdown" onChange={handleDropdownChange}>
      <option value='' disabled selected hidden>Select an option</option>
        {createStateOptionsList().map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </> 
  )
}

Dropdown.propTypes = {
  onSelectingInitialState: PropTypes.func.isRequired
};

export default Dropdown;
