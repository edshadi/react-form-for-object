import React, { PropTypes } from 'react';

export default function TextInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

TextInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  data: {},
  options: {},
};
