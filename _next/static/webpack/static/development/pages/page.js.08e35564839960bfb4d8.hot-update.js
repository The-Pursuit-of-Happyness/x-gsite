webpackHotUpdate("static\\development\\pages\\page.js",{

/***/ "./model/user.js":
/*!***********************!*\
  !*** ./model/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _servers_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/api */ "./servers/api.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var model = {
  namespace: 'user',
  state: {
    userInfo: {}
  },
  effects: {
    userLogin:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function userLogin(_ref, _ref2) {
      var payload, call, put, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userLogin$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_servers_api__WEBPACK_IMPORTED_MODULE_1__["login"], payload);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return put({
                type: 'save',
                payload: response
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, userLogin);
    }),
    init:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function init(action, _ref3) {
      var put;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function init$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              put = _ref3.put;
              _context2.next = 3;
              return delay(2000);

            case 3:
              _context2.next = 5;
              return put({
                type: 'caculate',
                delta: 1
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, init);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _objectSpread({}, state, {
        userInfo: action.payload.Data
      });
    },
    caculate: function caculate(state, payload) {
      var count = state.count;
      var delta = payload.delta;
      return _objectSpread({}, state, {
        count: count + delta
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ })

})
//# sourceMappingURL=page.js.08e35564839960bfb4d8.hot-update.js.map