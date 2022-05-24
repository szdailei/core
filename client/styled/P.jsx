import React from 'react';

// eslint-disable-next-line react/prop-types
const P = React.forwardRef(({ ...rest }, ref) => <p {...rest} ref={ref} />);

export default P;
