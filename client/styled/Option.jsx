import React from 'react';

// eslint-disable-next-line react/prop-types
const Option = React.forwardRef(({ ...rest }, ref) => <optin {...rest} ref={ref} />);

export default Option;
