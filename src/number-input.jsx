import React, { PropTypes } from 'react';

export default function NumberInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;
  
  return (
    <input
      type="number"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

NumberInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  data: {},
  options: {},
};
