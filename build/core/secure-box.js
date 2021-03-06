"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _appmetrics = require("../utils/appmetrics");

var _appmetrics2 = _interopRequireDefault(_appmetrics);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Auth from "../utils/auth";
var DEFAULT_OPTIONS = {
  auth: true,
  connectorConfig: {}
};
/**
 * @class SecureBox
 * @classdesc Facade interface to provide configuration and monitoring function
 * @example const securebox = new SecureBox(token, connectionString)
 */
/**
 * @file Main SecureBox Class
 * @author Archit <archit5793@gmail.com>
 */

var SecureBox = function () {
  function SecureBox(token, connection) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, SecureBox);

    try {
      if (_underscore2.default.isUndefined(token) || _underscore2.default.isUndefined(connection)) {
        throw new Error("Missing Arguments");
      } else if (!_underscore2.default.isString(token) || !_underscore2.default.isString(connection)) {
        throw new Error("Invalid Arguments");
      } else {
        this.token = token;
        this.connection = connection;
        this.options = _underscore2.default.extend(DEFAULT_OPTIONS, options);
      }
    } catch (err) {
      throw err;
    }
  }

  (0, _createClass3.default)(SecureBox, [{
    key: "dashboardMonitoring",
    value: function dashboardMonitoring() {
      try {
        // if (Auth.connectAndVerify(this)) {
        //   // TODO: check for auth
        // }
        var monitors = new _appmetrics2.default(_config2.default, this.options.connectorConfig);
        monitors.init();
      } catch (err) {
        throw err;
      }
    }
  }]);
  return SecureBox;
}();

exports.default = SecureBox;
module.exports = exports.default;