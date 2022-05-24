import React from 'react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line jsx-a11y/label-has-associated-control
const Label = React.forwardRef(({ ...rest }, ref) => <label {...rest} ref={ref} />);

export default Label;
