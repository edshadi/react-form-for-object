import React, { PropTypes } from 'react';

export default function DateInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="date"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

DateInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

DateInput.defaultProps = {
  data: {},
  options: {},
};
