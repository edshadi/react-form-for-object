import React, { PropTypes } from 'react';

export default function CheckboxInput(props) {
  const { defaultChecked, className, value } = props.data;
  return (
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className={className}
      value={value}
    />
  );
}

CheckboxInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

CheckboxInput.defaultProps = {
  data: {},
  options: {},
};
