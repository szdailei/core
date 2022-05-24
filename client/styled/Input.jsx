import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

// eslint-disable-next-line react/prop-types
const Input = React.forwardRef(({ className, type, ...rest }, ref) => {
  let classOfInput;

  switch (type) {
    case 'checkbox':
    case 'radio':
      classOfInput = classes.radio;
      break;
    default:
      classOfInput = classes.input;
      break;
  }

  return <input className={`${classOfInput} ${className}`} type={type} {...rest} ref={ref} />;
});

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
