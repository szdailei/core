import React from 'react';

const Span = React.forwardRef(({ ...rest }, ref) => <span {...rest} ref={ref} />);

export default Span;
