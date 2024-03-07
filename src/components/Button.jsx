import PropTypes from 'prop-types';

function Button(props) {
  const { text, onClickHandler } = props;

  return (
    <>
      <button onClick={onClickHandler}>{text}</button>
    </> 
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Button;
