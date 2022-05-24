import React from 'react';
import classes from './Main.module.css';

// eslint-disable-next-line react/prop-types
const Main = React.forwardRef(({ className, ...rest }, ref) => (
  <main className={`${classes.main} ${className}`} {...rest} ref={ref} />
));

export default Main;
