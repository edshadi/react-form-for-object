"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckboxInput(props) {
  var _props$data = props.data,
      name = _props$data.name,
      value = _props$data.value;


  return _react2.default.createElement("input", {
    name: name,
    type: "checkbox",
    checked: value,
    onChange: props.onChange,
    className: props.options.className
  });
}

CheckboxInput.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired
};

CheckboxInput.defaultProps = {
  data: {},
  options: {}
};