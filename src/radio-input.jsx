import React, { PropTypes } from 'react';

export default function RadioInput(props) {
  return (
    <input type="radio" className={props.data.className} />
  );
}

RadioInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

RadioInput.defaultProps = {
  data: {},
  options: {},
};
