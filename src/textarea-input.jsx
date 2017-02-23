import React, { PropTypes } from 'react';

export default function TextareaInput(props) {
  const { placeholder, className } = props.options;
  const { name, value } = props.data;

  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={props.onChange}
    />
  );
}

TextareaInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

TextareaInput.defaultProps = {
  data: {},
  options: {},
};
