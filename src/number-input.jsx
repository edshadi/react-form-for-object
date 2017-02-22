import React, { PropTypes } from 'react';

export default function NumberInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="number"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

NumberInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

NumberInput.defaultProps = {
  data: {},
  options: {},
};
