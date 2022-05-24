import React from 'react';
import classes from './Header.module.css';

// eslint-disable-next-line react/prop-types
const Header = React.forwardRef(({ ...rest }, ref) => <header className={classes.header} {...rest} ref={ref} />);

export default Header;
