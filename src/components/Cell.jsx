import PropTypes from 'prop-types';

function Cell(props) {
  return (
    <>
      {props.on}
    </>
  )
}

export default Cell

Cell.propTypes = {
  on: PropTypes.number
}