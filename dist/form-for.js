/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = require('react');

	var _react2 = _interopRequireDefault(_react);

	var _input = require('./input');

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormFor = function (_React$Component) {
	  _inherits(FormFor, _React$Component);

	  function FormFor(props) {
	    _classCallCheck(this, FormFor);

	    var _this = _possibleConstructorReturn(this, (FormFor.__proto__ || Object.getPrototypeOf(FormFor)).call(this, props));

	    _this.state = {
	      inputs: Object.keys(props.object).reduce(function (data, key) {
	        data[key] = props.object[key];
	        return data;
	      }, {})
	    };
	    _this.setInput = _this.setInput.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(FormFor, [{
	    key: 'setInput',
	    value: function setInput(e) {
	      e.preventDefault();
	      var inputs = this.state.inputs;
	      var _e$target = e.target,
	          type = _e$target.type,
	          name = _e$target.name,
	          checked = _e$target.checked,
	          value = _e$target.value;


	      inputs[name] = type === 'checkbox' ? checked : value;

	      this.setState(inputs);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      if (e) e.preventDefault();
	      this.props.onSubmit(this.state.inputs);
	    }
	  }, {
	    key: 'inputs',
	    value: function inputs() {
	      var _this2 = this;

	      var object = this.props.object;
	      var inputs = [];
	      Object.keys(object).forEach(function (key) {
	        var value = _this2.state.inputs[key];
	        var dataForInput = {
	          value: value === undefined ? '' : _this2.state.inputs[key],
	          name: key
	        };
	        var options = _this2.props.inputOptions[key] || {};
	        inputs.push(_react2.default.createElement(_input2.default, {
	          key: key,
	          data: dataForInput,
	          options: options,
	          label: _this2.props.inputOptions.labels,
	          onChange: _this2.setInput
	        }));
	      });
	      return inputs;
	    }
	  }, {
	    key: 'submitText',
	    value: function submitText() {
	      var _props = this.props,
	          submitValue = _props.submitValue,
	          objectName = _props.objectName;

	      var text = this.props.object.id ? 'Update' : 'Create';
	      if (submitValue) text = submitValue;
	      if (objectName) text = text + ' ' + objectName;
	      return text;
	    }
	  }, {
	    key: 'renderCancelButton',
	    value: function renderCancelButton() {
	      var button = void 0;
	      if (this.props.onCancel) button = _react2.default.createElement('input', { type: 'button', value: 'Cancel' });
	      return button;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.handleSubmit, className: 'form-for' },
	        this.inputs(),
	        _react2.default.createElement('input', { type: 'submit', value: this.submitText() }),
	        this.renderCancelButton()
	      );
	    }
	  }]);

	  return FormFor;
	}(_react2.default.Component);

	exports.default = FormFor;


	FormFor.propTypes = {
	  object: _react.PropTypes.object.isRequired,
	  onCancel: _react.PropTypes.func,
	  onSubmit: _react.PropTypes.func.isRequired,
	  submitValue: _react.PropTypes.string,
	  objectName: _react.PropTypes.string,
	  inputOptions: _react.PropTypes.object
	};

	FormFor.defaultProps = {
	  onSubmit: function onSubmit(data) {
	    return console.log(data);
	  },
	  object: {},
	  inputOptions: {}
	};

/***/ }
/******/ ]);