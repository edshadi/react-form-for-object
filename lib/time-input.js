"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimeInput(props) {
  var _props$options = props.options,
      placeholder = _props$options.placeholder,
      className = _props$options.className;
  var _props$data = props.data,
      name = _props$data.name,
      value = _props$data.value;


  return _react2.default.createElement("input", {
    type: "time",
    name: name,
    value: value,
    placeholder: placeholder,
    className: className,
    onChange: props.onChange
  });
}

TimeInput.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired
};

TimeInput.defaultProps = {
  data: {},
  options: {}
};