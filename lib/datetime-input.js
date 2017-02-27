"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatetimeInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatetimeInput(props) {
  var _props$data = props.data,
      name = _props$data.name,
      value = _props$data.value;

  return _react2.default.createElement("input", {
    type: "datetime-local",
    name: name,
    value: value,
    className: props.options.className,
    onChange: props.onChange
  });
}

DatetimeInput.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired
};

DatetimeInput.defaultProps = {
  data: {},
  options: {}
};