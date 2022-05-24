import React from 'react';
import classes from './Footer.module.css';

// eslint-disable-next-line react/prop-types
const Footer = React.forwardRef(({ className, ...rest }, ref) => (
  <footer className={`${classes.footer} ${className}`} {...rest} ref={ref} />
));

export default Footer;
