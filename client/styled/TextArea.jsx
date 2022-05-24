import React, { useCallback } from 'react';
import classes from './TextArea.module.css';

// eslint-disable-next-line react/prop-types
const TextArea = React.forwardRef(({ className, ...rest }, ref) => {
  const minRows = 5;
  const onChange = useCallback((event) => {
    const currentRows = event.target.value.split('\n').length;
    // eslint-disable-next-line no-param-reassign
    if (currentRows > minRows) event.target.rows = currentRows;
  }, []);

  return (
    <textarea className={`${classes.textarea} ${className}`} {...rest} onChange={onChange} rows={minRows} ref={ref} />
  );
});

export default TextArea;
