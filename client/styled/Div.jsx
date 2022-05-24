import React from 'react';

// eslint-disable-next-line react/prop-types
const Div = React.forwardRef(({ ...rest }, ref) => <div {...rest} ref={ref} />);

export default Div;
