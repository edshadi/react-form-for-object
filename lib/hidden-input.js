"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HiddenInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HiddenInput(props) {
  var _props$data = props.data,
      name = _props$data.name,
      value = _props$data.value;


  return _react2.default.createElement("input", {
    type: "hidden",
    name: name,
    value: value,
    className: props.options.className,
    onChange: props.onChange
  });
}

HiddenInput.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired
};

HiddenInput.defaultProps = {
  data: {},
  options: {}
};