import React, { PropTypes } from 'react';

export default function HiddenInput(props) {
  const { value, className } = props.data;
  return (
    <input
      type="hidden"
      value={value}
      className={className}
    />
  );
}

HiddenInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

HiddenInput.defaultProps = {
  data: {},
  options: {},
};
