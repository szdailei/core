/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Img.module.css';

const Img = React.forwardRef(({ className, alt, ...rest }, ref) => (
  <img className={`${classes.img} ${className}`} alt={alt} {...rest} ref={ref} />
));

Img.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Img;
