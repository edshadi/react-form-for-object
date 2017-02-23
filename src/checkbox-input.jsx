import React, { PropTypes } from 'react';

export default function CheckboxInput(props) {
  const { name, value } = props.data;

  return (
    <input
      name={name}
      type="checkbox"
      checked={value}
      onChange={props.onChange}
      className={props.options.className}
    />
  );
}

CheckboxInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

CheckboxInput.defaultProps = {
  data: {},
  options: {},
};
