'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _optionsForSelect = require('./options-for-select');

var _optionsForSelect2 = _interopRequireDefault(_optionsForSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SelectInput(props) {
  var _props$data = props.data,
      name = _props$data.name,
      value = _props$data.value,
      id = _props$data.id;

  var options = props.options.values.map(function (v) {
    return _react2.default.createElement(_optionsForSelect2.default, { key: v.value, value: v.value, label: v.label });
  });
  return _react2.default.createElement(
    'select',
    {
      name: name,
      value: value,
      className: props.options.className,
      id: id,
      onChange: props.onChange
    },
    options
  );
}

SelectInput.propTypes = {
  data: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired
};

SelectInput.defaultProps = {
  data: {},
  options: {
    values: []
  }
};