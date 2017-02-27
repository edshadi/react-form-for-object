'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OptionForSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OptionForSelect(props) {
  return _react2.default.createElement(
    'option',
    { value: props.value },
    props.label
  );
}

OptionForSelect.propTypes = {
  label: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
  options: _react.PropTypes.object
};

OptionForSelect.defaultProps = {
  options: {}
};