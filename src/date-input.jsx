import React, { PropTypes } from 'react';

export default function DateInput(props) {
  const { placeholder, className } = props.options;
  const { value, name } = props.data;
  return (
    <input
      type="date"
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

DateInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

DateInput.defaultProps = {
  data: {},
  options: {},
};
