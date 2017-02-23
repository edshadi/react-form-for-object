import React, { PropTypes } from 'react';
import Input from './input';

export default class FormFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: Object.keys(props.object).reduce((data, key) => {
        data[key] = props.object[key];
        return data;
      }, {}),
    };
    this.setInput = this.setInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInput(e) {
    e.preventDefault();
    const inputs = this.state.inputs;
    const { type, name, checked, value } = e.target;

    inputs[name] = type === 'checkbox' ? checked : value;

    this.setState(inputs);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.onSubmit(this.state.inputs);
  }

  inputs() {
    const object = this.props.object;
    const inputs = [];
    Object.keys(object).forEach((key) => {
      const value = this.state.inputs[key];
      const dataForInput = {
        value: value === undefined ? '' : this.state.inputs[key],
        name: key,
      };
      const options = this.props.inputOptions[key] || {};
      inputs.push(
        <Input
          key={key}
          data={dataForInput}
          options={options}
          label={this.props.inputOptions.labels}
          onChange={this.setInput}
        />
      );
    });
    return inputs;
  }

  submitText() {
    const { submitValue, objectName } = this.props;
    let text = this.props.object.id ? 'Update' : 'Create';
    if (submitValue) text = submitValue;
    if (objectName) text = `${text} ${objectName}`;
    return text;
  }

  renderCancelButton() {
    let button;
    if (this.props.onCancel) button = <input type="button" value="Cancel" />;
    return button;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-for">
        {this.inputs()}
        <input type="submit" value={this.submitText()} />
      {this.renderCancelButton()}
      </form>
    );
  }

}

FormFor.propTypes = {
  object: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitValue: PropTypes.string,
  objectName: PropTypes.string,
  inputOptions: PropTypes.object,
};

FormFor.defaultProps = {
  onSubmit: (data) => console.log(data),
  object: {},
  inputOptions: {},
};
