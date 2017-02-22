import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import Input from './input';

export default class FormFor extends React.Component {
  @autobind
  handleSubmit(e) {
    if (e) e.preventDefault();
    const data = {};
    this.props.onSubmit(data);
  }

  inputs() {
    const object = this.props.object;
    const inputs = [];
    Object.keys(object).forEach((key) => {
      const value = object[key];
      const dataForInput = { value, name: key };
      const options = this.props.inputOptions[key] || {};
      
      inputs.push(
        <Input
          key={key}
          data={dataForInput}
          options={options}
          label={options.labels}
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
