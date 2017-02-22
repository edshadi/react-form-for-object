import React, { PropTypes } from 'react';

export default function EmailInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="email"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

EmailInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

EmailInput.defaultProps = {
  data: {},
  options: {},
};
