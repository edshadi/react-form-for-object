"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormErrors;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormErrors(props) {
  var errors = props.errors.map(function (err) {
    return _react2.default.createElement(
      "li",
      null,
      err
    );
  });
  return _react2.default.createElement(
    "ul",
    { className: "form-errors" },
    errors
  );
}

FormErrors.propTypes = {
  errors: _react.PropTypes.array
};

FormErrors.defaultProps = {
  errors: []
};