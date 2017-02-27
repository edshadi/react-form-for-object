"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(props) {
  return _react2.default.createElement(
    "label",
    { className: "form-for-label" },
    props.label
  );
}

Label.propTypes = {
  label: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.object
};

Label.defaultProps = {
  options: {}
};