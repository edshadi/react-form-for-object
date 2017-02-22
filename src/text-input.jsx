import React, { PropTypes } from 'react';

export default function TextInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

TextInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

TextInput.defaultProps = {
  data: {},
  options: {},
};
