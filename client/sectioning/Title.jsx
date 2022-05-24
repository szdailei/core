import React from 'react';
import PropTypes from 'prop-types';
import classes from './Title.module.css';

// eslint-disable-next-line react/prop-types
const Title = React.forwardRef(({ className, children, ...rest }, ref) => {
  document.title = children;

  return (
    <div id="title" className={`${classes.title} ${className}`} {...rest} ref={ref}>
      {children}
    </div>
  );
});

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
