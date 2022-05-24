import React from 'react';

// eslint-disable-next-line react/prop-types
const Span = React.forwardRef(({ ...rest }, ref) => <span {...rest} ref={ref} />);

export default Span;
