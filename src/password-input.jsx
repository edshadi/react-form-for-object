import React, { PropTypes } from 'react';

export default function PasswordInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;

  return (
    <input
      type="password"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

PasswordInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

PasswordInput.defaultProps = {
  data: {},
  options: {},
};
