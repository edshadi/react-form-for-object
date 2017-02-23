import React, { PropTypes } from 'react';

export default function DatetimeInput(props) {
  const { name, value } = props.data;
  return (
    <input
      type="datetime-local"
      name={name}
      value={value}
      className={props.options.className}
      onChange={props.onChange}
    />
  );
}

DatetimeInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

DatetimeInput.defaultProps = {
  data: {},
  options: {},
};
