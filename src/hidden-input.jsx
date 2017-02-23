import React, { PropTypes } from 'react';

export default function HiddenInput(props) {
  const { name, value } = props.data;

  return (
    <input
      type="hidden"
      name={name}
      value={value}
      className={props.options.className}
      onChange={props.onChange}
    />
  );
}

HiddenInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

HiddenInput.defaultProps = {
  data: {},
  options: {},
};
