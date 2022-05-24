import React from 'react';
import classes from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = React.forwardRef(({ className, ...rest }, ref) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${classes.button} ${className}`} {...rest} ref={ref} />
));

export default Button;
