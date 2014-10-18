/**
 * @jsx React.DOM
 */

 var TextInput = require('./text-input.react');
 var CheckboxInput = require('./checkbox-input.react');
 var NumberInput = require('./number-input.react');
 var HiddenInput = require('./hidden-input.react');
 var SelectInput = require('./select-input.react');
 var PasswordInput = require('./password-input.react');
 var TextareaInput = require('./textarea-input.react');
 var DateInput = require('./date-input.react');

var Input = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div>
        <div className="form-group">
          {this.input()}
        </div>
      </div>
    );
  },
  input: function() {
    var data = this.props.data;
    switch(this.type()) {
      case 'boolean':
        return(<span><CheckboxInput ref="input" data={{name: data.name, defaultChecked: data.value, className: "form-control", value: data.value}} /><span className="alert alert-success">{this.placeholder()}</span></span>)
        break;
      case 'number':
        return(<NumberInput ref="input" data={{name: data.name, defaultValue: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
        break;
      case 'date':
        return(<DateInput ref="input" data={{name: data.name, defaultValue: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
        break;
      case 'hidden':
        return(<HiddenInput ref="input" data={{name: data.name, value: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
        break;
      case 'select':
        return(<SelectInput ref="input" data={{name: data.name, value: data.value, values: this.props.options.values , className: "form-control"}} />)
        break;
      case 'password':
        return(<PasswordInput ref="input" data={{name: data.name, defaultChecked: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
        break;
      case 'textarea':
        return(<TextareaInput ref="input" data={{name: data.name, defaultValue: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
        break;
      default:
        return(<TextInput ref="input" data={{name: data.name, defaultValue: data.value, placeholder: this.placeholder(), className: "form-control"}} />)
    }

  },
  type: function() {
    var type = typeof(this.props.data.value);
    if(this.props.options.type) type = this.props.options.type;
    if(this.isId()) type = 'hidden';
    if(this.isPassword()) type = 'password';
    return type;
  },
  isId: function() {
    if(this.props.data.name === 'id') return true;
    return false;
  },
  isPassword: function() {
    if(this.props.data.name === 'password' || this.props.data.name === 'password_confirmation') return true;
    return false;
  },
  placeholder: function() {
    var name = this.props.options.placeholder || this.props.data.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
});

module.exports = Input;
