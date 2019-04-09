webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./pages/login/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/store */ "./utils/store.js");






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { connect } from "react-redux";




var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this));

    _defineProperty(_assertThisInitialized(_this), "inputName", function (event) {
      var info = event.target.value;

      _this.setState({
        userName: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "inputPwd", function (event) {
      var info = event.target.value;

      _this.setState({
        password: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function () {
      _this.props.dispatch({
        type: "user/userLogin",
        payload: {
          name: _this.state.userName,
          password: _this.state.password
        }
      }); // const { dispatch } = this.props
      // this.props.dispatch({type:"USER_LOGIN"},{name:this.state.userName,password:this.state.password})
      // userLogin(dispatch, {name:this.state.userName,password:this.state.password});

    });

    _this.state = {
      userName: '张三',
      password: '123456'
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var user = this.props.user; // const {userInfo} = user;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", null, "\u59D3\u540D\uFF1A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onChange: this.inputName
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", null, "\u5BC6\u7801\uFF1A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
        type: "password",
        onChange: this.inputPwd
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: this.submit
      }, "\u63D0\u4EA4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "Prop from Redux ", this.props.foo), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "Prop from getInitialProps ", this.props.custom), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.user));
    }
  }], [{
    key: "getInitialProps",
    // static getInitialProps({ store, isServer, pathname, query }) {
    //     store.dispatch({ type: "FOO", payload: "foo" }); // component will be able to read from store's state when rendered
    //    return { custom: "custom" }; // you can pass some custom props to component from here
    //   }
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var pathname, query, isServer, store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // first time run in server side
                // other times run in client side ( client side init with default props
                // console.log('get init props');
                pathname = props.pathname, query = props.query, isServer = props.isServer, store = props.store; // dispatch effects to fetch data here

                return _context.abrupt("return", {
                  // dont use store as property name, it will confilct with initial store
                  pathname: pathname,
                  query: query,
                  isServer: isServer,
                  dvaStore: store
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // export default connect()(Login);


var mapStateToProps = function mapStateToProps(state) {
  var userInfo = state.userInfo;
  return {
    userInfo: userInfo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_store__WEBPACK_IMPORTED_MODULE_7__["default"])(function (state) {
  return {
    user: state.user
  };
})(Login)); // export default connect(mapStateToProps)(Login);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=login.js.560d62bca28f8e1fd442.hot-update.js.map