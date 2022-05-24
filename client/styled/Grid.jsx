import React from 'react';
import classes from './Grid.module.css';

// eslint-disable-next-line react/prop-types
const Grid = React.forwardRef(({ className, ...rest }, ref) => (
  <div className={`${classes.grid} ${className}`} {...rest} ref={ref} />
));

export default Grid;
