import React, { PropTypes } from 'react';

export default function TimeInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="time"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

TimeInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

TimeInput.defaultProps = {
  data: {},
  options: {},
};
