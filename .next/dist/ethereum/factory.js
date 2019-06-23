'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CarbonTax = require('./build/CarbonTax.json');

var _CarbonTax2 = _interopRequireDefault(_CarbonTax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CarbonTax2.default.interface), '0x49ee027bf492d676a670b2b10045153b026228b4');
exports.default = instance;

// this file gives out the contract interface
// and an object to the deployed contract
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhcmJvblRheCIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7Ozs7O0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLG9CQUFVLEFBQXJCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBSUE7a0JBQWUsQUFBZjs7QUFFQTtBQUNBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWNlL0NhcmJvblRheCJ9