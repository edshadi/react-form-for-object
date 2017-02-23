import React, { PropTypes } from 'react';

export default function EmailInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;
  return (
    <input
      type="email"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

EmailInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

EmailInput.defaultProps = {
  data: {},
  options: {},
};
