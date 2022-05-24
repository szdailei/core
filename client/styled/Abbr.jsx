import React from 'react';
import classes from './Abbr.module.css';

// eslint-disable-next-line react/prop-types
const Abbr = React.forwardRef(({ className, ...rest }, ref) => (
  <abbr className={`${classes.abbr} ${className}`} {...rest} ref={ref} />
));

export default Abbr;
