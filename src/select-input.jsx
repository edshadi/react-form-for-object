import React, { PropTypes } from 'react';
import OptionForSelect from './options-for-select';

export default function SelectInput(props) {
  const { name, value, id } = props.data;
  const options = props.options.values.map(
    v => <OptionForSelect key={v.value} value={v.value} label={v.label} />
  );
  return (
    <select
      name={name}
      value={value}
      className={props.options.className}
      id={id}
      onChange={props.onChange}
    >
      {options}
    </select>
  );
}

SelectInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

SelectInput.defaultProps = {
  data: {},
  options: {
    values: [],
  },
};
