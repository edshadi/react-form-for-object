import React, { PropTypes } from 'react';

export default function TextareaInput(props) {
  const { defaultValue, className, placeholder } = props.data;
  return (
    <textarea
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
    />
  );
}

TextareaInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

TextareaInput.defaultProps = {
  data: {},
  options: {},
};
