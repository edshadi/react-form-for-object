import React, { PropTypes } from 'react';

export default function TimeInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;

  return (
    <input
      type="time"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

TimeInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

TimeInput.defaultProps = {
  data: {},
  options: {},
};
