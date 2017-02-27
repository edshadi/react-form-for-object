'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textInput = require('./text-input');

var _textInput2 = _interopRequireDefault(_textInput);

var _checkboxInput = require('./checkbox-input');

var _checkboxInput2 = _interopRequireDefault(_checkboxInput);

var _numberInput = require('./number-input');

var _numberInput2 = _interopRequireDefault(_numberInput);

var _hiddenInput = require('./hidden-input');

var _hiddenInput2 = _interopRequireDefault(_hiddenInput);

var _selectInput = require('./select-input');

var _selectInput2 = _interopRequireDefault(_selectInput);

var _passwordInput = require('./password-input');

var _passwordInput2 = _interopRequireDefault(_passwordInput);

var _textareaInput = require('./textarea-input');

var _textareaInput2 = _interopRequireDefault(_textareaInput);

var _dateInput = require('./date-input');

var _dateInput2 = _interopRequireDefault(_dateInput);

var _colorInput = require('./color-input');

var _colorInput2 = _interopRequireDefault(_colorInput);

var _datetimeInput = require('./datetime-input');

var _datetimeInput2 = _interopRequireDefault(_datetimeInput);

var _emailInput = require('./email-input');

var _emailInput2 = _interopRequireDefault(_emailInput);

var _timeInput = require('./time-input');

var _timeInput2 = _interopRequireDefault(_timeInput);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'label',
    value: function label() {
      var label = void 0;
      if (this.props.label) label = _react2.default.createElement(_label2.default, { label: this.placeholder() });
      return label;
    }
  }, {
    key: 'input',
    value: function input() {
      var _props = this.props,
          data = _props.data,
          options = _props.options;

      options.placeholder = this.placeholder();
      var input = void 0;
      switch (this.type()) {
        case 'boolean':
          input = _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_checkboxInput2.default, { onChange: this.props.onChange, data: data, options: options }),
            _react2.default.createElement(
              'span',
              null,
              this.placeholder()
            )
          );
          break;
        case 'number':
          input = _react2.default.createElement(_numberInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'color':
          input = _react2.default.createElement(_colorInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'email':
          input = _react2.default.createElement(_emailInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'date':
          input = _react2.default.createElement(_dateInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'datetime':
          input = _react2.default.createElement(_datetimeInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'time':
          input = _react2.default.createElement(_timeInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'hidden':
          input = _react2.default.createElement(_hiddenInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'select':
          input = _react2.default.createElement(_selectInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'password':
          input = _react2.default.createElement(_passwordInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        case 'textarea':
          input = _react2.default.createElement(_textareaInput2.default, { onChange: this.props.onChange, data: data, options: options });
          break;
        default:
          input = _react2.default.createElement(_textInput2.default, { onChange: this.props.onChange, data: data, options: options });
      }
      return input;
    }
  }, {
    key: 'type',
    value: function type() {
      var type = _typeof(this.props.data.value);
      if (this.props.options.type) type = this.props.options.type;
      if (this.isId()) type = 'hidden';
      if (this.isPassword()) type = 'password';
      if (this.isEmail()) type = 'email';
      // console.log('data', this.props.data.value)
      // console.log('type', type)
      return type;
    }
  }, {
    key: 'isId',
    value: function isId() {
      return this.props.data.name === 'id';
    }
  }, {
    key: 'isPassword',
    value: function isPassword() {
      return this.props.data.name === 'password' || this.props.data.name === 'password_confirmation';
    }
  }, {
    key: 'isEmail',
    value: function isEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.props.data.name === 'email' || re.test(this.props.data.value);
    }
  }, {
    key: 'placeholder',
    value: function placeholder() {
      var name = this.props.options.placeholder || this.props.data.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          this.label(),
          this.input()
        )
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = Input;


Input.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  label: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired
};

Input.defaultProps = {
  data: {},
  options: {},
  label: false
};