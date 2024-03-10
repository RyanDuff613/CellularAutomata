import PropTypes from 'prop-types';

function Button(props) {
  const { buttonText, onClickingStartStop } = props;

  return (
    <>
      <button onClick={onClickingStartStop}>{buttonText}</button>
    </> 
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClickingStartStop: PropTypes.func.isRequired
};

export default Button;
