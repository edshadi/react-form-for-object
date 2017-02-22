import React, { PropTypes } from 'react';
import TextInput from './text-input';
import CheckboxInput from './checkbox-input';
import NumberInput from './number-input';
import HiddenInput from './hidden-input';
import SelectInput from './select-input';
import PasswordInput from './password-input';
import TextareaInput from './textarea-input';
import DateInput from './date-input';
import ColorInput from './color-input';
import DatetimeInput from './datetime-input';
import EmailInput from './email-input';
import TimeInput from './time-input';
import Label from './label';

export default class Input extends React.Component {
  label() {
    let label;
    if (this.props.label) label = <Label label={this.placeholder()} />;
    return label;
  }

  input() {
    const { data, options } = this.props;
    let input;
    switch (this.type()) {
      case 'boolean':
        input = (
          <span>
            <CheckboxInput onChange="input" data={data} options={options} />
            <span>{this.placeholder()}</span>
          </span>
        );
        break;
      case 'number':
        input = (
          <NumberInput onChange="input" data={data} options={options} />
        );
        break;
      case 'color':
        input = (
          <ColorInput onChange="input" data={data} options={options} />
        );
        break;
      case 'email':
        input = (
          <EmailInput onChange="input" data={data} options={options} />
        );
        break;
      case 'date':
        input = (
          <DateInput onChange="input" data={data} options={options} />
        );
        break;
      case 'datetime':
        input = (
          <DatetimeInput onChange="input" data={data} options={options} />
        );
        break;
      case 'time':
        input = (
          <TimeInput onChange="input" data={data} options={options} />
        );
        break;
      case 'hidden':
        input = (
          <HiddenInput onChange="input" data={data} options={options} />
        );
        break;
      case 'select':
        input = (
          <SelectInput onChange="input" data={data} options={options} />
        );
        break;
      case 'password':
        input = (
          <PasswordInput onChange="input" data={data} options={options} />
        );
        break;
      case 'textarea':
        input = (
          <TextareaInput onChange="input" data={data} options={options} />
        );
        break;
      default:
        input = (
          <TextInput onChange="input" data={data} options={options} />
        );
    }
    return input;
  }

  type() {
    let type = typeof(this.props.data.value);
    if (this.props.options.type) type = this.props.options.type;
    if (this.isId()) type = 'hidden';
    if (this.isPassword()) type = 'password';
    if (this.isEmail()) type = 'email';
    return type;
  }

  isId() {
    return this.props.data.name === 'id';
  }

  isPassword() {
    return this.props.data.name === 'password' ||
      this.props.data.name === 'password_confirmation';
  }

  isEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.props.data.name === 'email' || re.test(this.props.data.value);
  }

  placeholder() {
    const name = this.props.options.placeholder || this.props.data.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          {this.label()}
          {this.input()}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  label: PropTypes.bool,
};

Input.defaultProps = {
  data: {},
  options: {},
  label: false,
};
