import React, { PropTypes } from 'react';

export default function OptionForSelect(props) {
  return (
    <option value={props.value}>{props.label}</option>
  );
}

OptionForSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  options: PropTypes.object,
};

OptionForSelect.defaultProps = {
  options: {},
};
