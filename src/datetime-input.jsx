import React, { PropTypes } from 'react';

export default function DatetimeInput(props) {
  const { defaultValue, className } = props.data;
  return (
    <input
      type="datetime-local"
      defaultValue={defaultValue}
      className={className}
    />
  );
}

DatetimeInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

DatetimeInput.defaultProps = {
  data: {},
  options: {},
};
