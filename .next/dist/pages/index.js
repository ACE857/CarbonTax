'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ace/CarbonTax/pages/index.js?entry';


var CarbonTaxIndex = function (_Component) {
  (0, _inherits3.default)(CarbonTaxIndex, _Component);

  function CarbonTaxIndex(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, CarbonTaxIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CarbonTaxIndex.__proto__ || (0, _getPrototypeOf2.default)(CarbonTaxIndex)).call(this, props));

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.prev = 1;
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return _factory2.default.methods.addUser(_this.state.name).send({
                  from: accounts[0]
                });

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                _this.state({ errMsg: _context.t0.message });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      loaded: 0,
      name: ""
    };
    return _this;
  }

  (0, _createClass3.default)(CarbonTaxIndex, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, usrPresent;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;

                console.log(accounts[0]);
                _context2.next = 6;
                return _factory2.default.methods.getUserPresence(accounts[0]).call();

              case 6:
                usrPresent = _context2.sent;

                console.log(usrPresent);
                this.setState({
                  up: usrPresent,
                  loaded: 1
                });

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'nextRoute',
    value: function nextRoute() {
      _routes.Router.pushRoute('/welcome');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = "Snow Is Melting And Earth is Crying";

      // loading default page
      if (this.state.loaded == 0) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement('center', { style: { color: "rgb(122,122,200); margin-top:30px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement('h1', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, 'Carbon Tax')), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), _react2.default.createElement('center', { style: { color: "rgb(122,122,200); margin-top:80px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement(_semanticUiReact.Card, {
          header: 'Loading ... ',
          meta: 'User Validating',
          description: 'CarbonTax is an blockchain based application to fight global warming.',
          extra: data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })));
      }

      // data fetched from ethereum
      else {
          if (this.state.up) {
            return _react2.default.createElement('h3', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            }, ' Redirecting ', this.nextRoute());
          } else {
            return _react2.default.createElement(_Layout2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }, _react2.default.createElement('div', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }, _react2.default.createElement('center', { style: { color: "rgb(122,122,200); margin-top:80px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }, _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }), ' ', _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }), ' ', _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }), _react2.default.createElement('h1', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            }, 'Carbon Tax')), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }), _react2.default.createElement('center', { style: { color: "rgb(122,122,200); margin-top:90px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            }, _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            }), _react2.default.createElement(_semanticUiReact.Card, {
              header: ' User Not Found ',
              meta: 'User Validation Failed',
              description: 'CarbonTax is an blockchain based application to fight global warming.',
              extra: data,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            }), _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            }), _react2.default.createElement('div', { floated: 'right', __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            }, _react2.default.createElement(_semanticUiReact.Input, {
              action: { color: 'teal', labelPosition: 'left', icon: 'arrow alternate circle right outline', content: 'UserName' },
              actionPosition: 'left',
              placeholder: 'Name',
              value: this.state.name,
              onChange: function onChange(event) {
                return _this3.setState({ name: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            })), _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            }), _react2.default.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            }), _react2.default.createElement(_semanticUiReact.Button, {
              style: { marginTop: '10px' },
              content: 'Register User',
              icon: 'add circle',
              primary: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            }))))));
          }
        }
    }
  }]);

  return CarbonTaxIndex;
}(_react.Component);

exports.default = CarbonTaxIndex;

// checkpoint
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJJY29uIiwiSW5wdXQiLCJGb3JtIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiTWVzc2FnZSIsIkxheW91dCIsIndlYjMiLCJSb3V0ZXIiLCJDYXJib25UYXhJbmRleCIsInByb3BzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRVc2VyIiwic3RhdGUiLCJuYW1lIiwic2VuZCIsImZyb20iLCJlcnJNc2ciLCJtZXNzYWdlIiwibG9hZGVkIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJQcmVzZW5jZSIsImNhbGwiLCJ1c3JQcmVzZW50Iiwic2V0U3RhdGUiLCJ1cCIsInB1c2hSb3V0ZSIsImRhdGEiLCJjb2xvciIsIm5leHRSb3V0ZSIsImxhYmVsUG9zaXRpb24iLCJpY29uIiwiY29udGVudCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQUssQUFBSyxBQUNsQixBQUFRLEFBQU0sQUFBUSxBQUFXOztBQUNqQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJQUVmLEE7MENBRUo7OzBCQUFBLEFBQVksT0FDVjtpQkFBQTs7d0NBQUE7O3NKQUFBLEFBQ1U7O1VBRFYsQUFtQkYsdUJBbkJFOzBGQW1CUyxpQkFBQSxBQUFPLE9BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDUDtzQkFETyxBQUNQLEFBQU07Z0NBREM7Z0NBQUE7dUJBR2tCLGNBQUEsQUFBSyxJQUh2QixBQUdrQixBQUFTOzttQkFBMUI7QUFIRCxv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