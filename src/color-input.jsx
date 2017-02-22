import React, { PropTypes } from 'react';

export default function ColorInput(props) {
  const { name, className, defaultValue } = props.data;
  return (
    <input
      name={name}
      type="color"
      defaultValue={defaultValue}
      className={className}
    />
  );
}

ColorInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

ColorInput.defaultProps = {
  data: {},
  options: {},
};
