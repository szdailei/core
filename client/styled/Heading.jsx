/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Heading.module.css';

// eslint-disable-next-line react/prop-types
const Heading = React.forwardRef(({ className, depth, ...rest }, ref) => {
  switch (depth) {
    case 1:
      return <h1 className={`${classes.h1} ${className}`} {...rest} ref={ref} />;
    case 2:
      return <h2 className={`${classes.h2} ${className}`} {...rest} ref={ref} />;
    case 3:
      return <h3 {...rest} ref={ref} />;
    case 4:
      return <h4 {...rest} ref={ref} />;
    case 5:
      return <h5 {...rest} ref={ref} />;
    case 6:
      return <h6 {...rest} ref={ref} />;
    default:
      return <h3 {...rest} ref={ref} />;
  }
});

Heading.propTypes = {
  depth: PropTypes.number.isRequired,
};

export default Heading;
