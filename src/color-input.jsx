import React, { PropTypes } from 'react';

export default function ColorInput(props) {
  const { name, value } = props.data;
  return (
    <input
      name={name}
      type="color"
      value={value}
      className={props.options.className}
      onChange={props.onChange}
    />
  );
}

ColorInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

ColorInput.defaultProps = {
  data: {},
  options: {},
};
