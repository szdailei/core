import React from 'react';
import PropTypes from 'prop-types';

/**
@example
const options = [<Option key={roles.length+1} value="Select..." label="Select..." />];
roles.forEach((role, key) => {
  // eslint-disable-next-line react/no-array-index-key
  const option = <Option key={key} value={role.name} label={role.name} />;
  options.push(option);
});
<Select onChange={selectRole} options={options} />
*/
// eslint-disable-next-line react/prop-types
const Select = React.forwardRef(({ options, ...rest }, ref) => (
  <select {...rest} ref={ref}>
    {options}
  </select>
));

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Select;
