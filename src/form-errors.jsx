import React, { PropTypes } from 'react';

export default function FormErrors(props) {
  const errors = props.errors.map(err => <li>{err}</li>);
  return (
    <ul className="form-errors">{errors}</ul>
  );
}

FormErrors.propTypes = {
  errors: PropTypes.array,
};

FormErrors.defaultProps = {
  errors: [],
};
