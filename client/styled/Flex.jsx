import React from 'react';
import classes from './Flex.module.css';

// eslint-disable-next-line react/prop-types
const Flex = React.forwardRef(({ ...rest }, ref) => <div className={classes.flex} {...rest} ref={ref} />);

export default Flex;
