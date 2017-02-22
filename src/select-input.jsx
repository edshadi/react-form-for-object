import React, { PropTypes } from 'react';
import OptionForSelect from './options-for-select';

export default function SelectInput(props) {
  const { name, value, className, id } = props.data;
  const options = props.options.values.map(
    v => <OptionForSelect key={v.value} value={v.value} label={v.label} />
  );
  return (
    <select defaultValue={value} className={className} id={id}>
      {options}
    </select>
  );
}

SelectInput.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

SelectInput.defaultProps = {
  data: {},
  options: {
    values: [],
  },
};
