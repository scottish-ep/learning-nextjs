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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"First name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, register(\"firstName\", {\n                required: true\n            })), void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Last name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, register(\"lastName\")), void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"reset\",\n                value: \"Standard Reset Field Values\"\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"button\",\n                onClick: function() {\n                    return reset();\n                },\n                value: \"Custom Reset Field Values & Errors\"\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"s4ydKAPISlraMtU6SLcI0IdTqMk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2dCOztBQU8zQixTQUFTRSxJQUFJLEdBQUc7O0lBQzdCLElBS0lELEdBQXdCLEdBQXhCQSx3REFBTyxFQUFpQixFQUoxQkUsUUFBUSxHQUlORixHQUF3QixDQUoxQkUsUUFBUSxFQUNSQyxZQUFZLEdBR1ZILEdBQXdCLENBSDFCRyxZQUFZLEVBQ1pDLEtBQUssR0FFSEosR0FBd0IsQ0FGMUJJLEtBQUssRUFDTEMsTUFBbUIsR0FDakJMLEdBQXdCLENBRDFCSyxTQUFTLENBQUlDLE1BQU07SUFFckIsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLElBQW1CLEVBQUs7UUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUVFLDhEQUFDRyxNQUFJO1FBQUNKLFFBQVEsRUFBRUosWUFBWSxDQUFDSSxRQUFRLENBQUM7OzBCQUNwQyw4REFBQ0ssT0FBSzswQkFBQyxZQUFVOzs7OztvQkFBUTswQkFDekIsOERBQUNDLE9BQUsscUZBQUtYLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQUVZLFFBQVEsRUFBRSxJQUFJO2FBQUUsQ0FBQzs7OztvQkFBSTswQkFFeEQsOERBQUNGLE9BQUs7MEJBQUMsV0FBUzs7Ozs7b0JBQVE7MEJBQ3hCLDhEQUFDQyxPQUFLLHFGQUFLWCxRQUFRLENBQUMsVUFBVSxDQUFDOzs7O29CQUFJOzBCQUVuQyw4REFBQ1csT0FBSztnQkFBQ0UsSUFBSSxFQUFDLFFBQVE7Ozs7O29CQUFHOzBCQUN2Qiw4REFBQ0YsT0FBSztnQkFBQ0UsSUFBSSxFQUFDLE9BQU87Z0JBQUNDLEtBQUssRUFBQyw2QkFBNkI7Ozs7O29CQUFHOzBCQUMxRCw4REFBQ0gsT0FBSztnQkFDSkUsSUFBSSxFQUFDLFFBQVE7Z0JBQ2JFLE9BQU8sRUFBRTsyQkFBTWIsS0FBSyxFQUFFO2lCQUFBO2dCQUN0QlksS0FBSyxFQUFDLG9DQUFvQzs7Ozs7b0JBQzFDOzs7Ozs7WUFDRyxDQUNQO0NBQ0g7R0E3QnVCZixJQUFJOztRQU10QkQsb0RBQU87OztBQU5XQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZUZvcm0udHN4PzJkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZUZvcm1JbnB1dHMge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICByZXNldCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybTxVc2VGb3JtSW5wdXRzPigpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IFVzZUZvcm1JbnB1dHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICA8bGFiZWw+Rmlyc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJmaXJzdE5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cclxuXHJcbiAgICAgIDxsYWJlbD5MYXN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKFwibGFzdE5hbWVcIil9IC8+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlN0YW5kYXJkIFJlc2V0IEZpZWxkIFZhbHVlc1wiIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KCl9XHJcbiAgICAgICAgdmFsdWU9XCJDdXN0b20gUmVzZXQgRmllbGQgVmFsdWVzICYgRXJyb3JzXCJcclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwidHlwZSIsInZhbHVlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});