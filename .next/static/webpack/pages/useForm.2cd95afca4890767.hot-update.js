"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/useForm",{

/***/ "./pages/useForm.tsx":
/*!***************************!*\
  !*** ./pages/useForm.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        defaultValues: {}\n    }), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, setValue = ref.setValue, control = ref.control;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        width: \"100vh\",\n        color: \"white\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                defaultValue: \"\",\n                placeholder: \"Type your name\",\n                register: register(\"firstName\")\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"zJcV0I0VkvZFHA8U5NmVa78r9nw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDNEI7QUFDTDs7QUFPbEMsU0FBU0csSUFBSSxHQUFHOztJQUM3QixJQUNFRixHQUlFLEdBSkZBLHdEQUFPLENBQWM7UUFDbkJHLGFBQWEsRUFBRSxFQUVkO0tBQ0YsQ0FBQyxFQUxJQyxRQUFRLEdBQ2RKLEdBSUUsQ0FMSUksUUFBUSxFQUFFQyxZQUFZLEdBQzVCTCxHQUlFLENBTGNLLFlBQVksRUFBRUMsS0FBSyxHQUNuQ04sR0FJRSxDQUw0Qk0sS0FBSyxFQUFFQyxRQUFRLEdBQzdDUCxHQUlFLENBTG1DTyxRQUFRLEVBQUVDLE9BQU8sR0FDdERSLEdBSUUsQ0FMNkNRLE9BQU87SUFNeEQsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLElBQWlCO2VBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7S0FBQTtJQUl6RCxJQUFNRyxVQUFVLEdBQVE7UUFDdEJDLGVBQWUsRUFBRSxTQUFTO1FBQzFCQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxLQUFLLEVBQUUsT0FBTztRQUNkQyxLQUFLLEVBQUUsT0FBTztLQUNmO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFTixVQUFVO2tCQUNwQiw0RUFBQ08sTUFBSTtZQUFDWCxRQUFRLEVBQUVKLFlBQVksQ0FBQ0ksUUFBUSxDQUFDO3NCQUNwQyw0RUFBQ1IsZ0RBQUs7Z0JBQ0pvQixZQUFZLEVBQUMsRUFBRTtnQkFDZkMsV0FBVyxFQUFDLGdCQUFnQjtnQkFDNUJsQixRQUFRLEVBQUVBLFFBQVEsQ0FBQyxXQUFXLENBQUM7Ozs7O29CQUMvQjs7Ozs7Z0JBQ0c7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBN0J1QkYsSUFBSTs7UUFFeEJGLG9EQUFPOzs7QUFGYUUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VGb3JtLnRzeD8yZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm1JbnB1dHMge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCwgc2V0VmFsdWUsIGNvbnRyb2wgfSA9XHJcbiAgICB1c2VGb3JtPElGb3JtSW5wdXRzPih7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dHMpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IHN0eWxlc1BhZ2U6IGFueSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMGYxMTFiXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIHdpZHRoOiBcIjEwMHZoXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXNQYWdlfT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lXCJcclxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3RlcignZmlyc3ROYW1lJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiSW5wdXQiLCJGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJzZXRWYWx1ZSIsImNvbnRyb2wiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzUGFnZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJkaXYiLCJzdHlsZSIsImZvcm0iLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});