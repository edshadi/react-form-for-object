import React, { PropTypes } from 'react';

export default function Label(props) {
  return (
    <label className="form-for-label">{props.label}</label>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object,
};

Label.defaultProps = {
  options: {},
};
