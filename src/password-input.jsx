import React, { PropTypes } from 'react';

export default function PasswordInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="password"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

PasswordInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

PasswordInput.defaultProps = {
  data: {},
  options: {},
};
