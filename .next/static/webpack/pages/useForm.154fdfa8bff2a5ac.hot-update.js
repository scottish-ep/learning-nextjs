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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input/Input */ \"./components/Input/Input.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        defaultValues: {\n            firstName: \"5454\",\n            lastName: \"\"\n        }\n    }), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, setValue = ref.setValue, watch = ref.watch, control = ref.control;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        color: \"white\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    width: 300,\n                    defaultValue: \"\",\n                    placeholder: \"Type your name\",\n                    register: register(\"firstName\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            type: \"submit\",\n                            disabled: !watch(\"firstName\"),\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 150,\n                            text: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px]\",\n                            width: 150,\n                            text: \"Clear\",\n                            onClick: handleReset\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"8v+FBvC5ENkSTG+sOanQmPHJmaA=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzRCO0FBQ1I7QUFDRzs7QUFPbEMsU0FBU0ksSUFBSSxHQUFHOztJQUM3QixJQUNFSCxHQUtFLEdBTEZBLHdEQUFPLENBQWM7UUFDbkJJLGFBQWEsRUFBRTtZQUNiQyxTQUFTLEVBQUUsTUFBTTtZQUNqQkMsUUFBUSxFQUFFLEVBQUU7U0FDYjtLQUNGLENBQUMsRUFOSUMsUUFBUSxHQUNkUCxHQUtFLENBTklPLFFBQVEsRUFBRUMsWUFBWSxHQUM1QlIsR0FLRSxDQU5jUSxZQUFZLEVBQUVDLEtBQUssR0FDbkNULEdBS0UsQ0FONEJTLEtBQUssRUFBRUMsUUFBUSxHQUM3Q1YsR0FLRSxDQU5tQ1UsUUFBUSxFQUFFQyxLQUFLLEdBQ3BEWCxHQUtFLENBTjZDVyxLQUFLLEVBQUVDLE9BQU8sR0FDN0RaLEdBS0UsQ0FOb0RZLE9BQU87SUFRL0QsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLElBQWlCO2VBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7S0FBQTtJQUV6RCxJQUFNRyxVQUFVLEdBQVE7UUFDdEJDLGVBQWUsRUFBRSxTQUFTO1FBQzFCQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxLQUFLLEVBQUUsT0FBTztLQUNmO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFTCxVQUFVO2tCQUNwQiw0RUFBQ00sTUFBSTtZQUFDVixRQUFRLEVBQUVMLFlBQVksQ0FBQ0ssUUFBUSxDQUFDOzs4QkFFcEMsOERBQUNaLCtEQUFLO29CQUNKdUIsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLFlBQVksRUFBQyxFQUFFO29CQUNmQyxXQUFXLEVBQUMsZ0JBQWdCO29CQUM1Qm5CLFFBQVEsRUFBRUEsUUFBUSxDQUFDLFdBQVcsQ0FBQzs7Ozs7d0JBQy9COzhCQUVGLDhEQUFDYyxLQUFHO29CQUFDTSxTQUFTLEVBQUMsbUJBQW1COztzQ0FDaEMsOERBQUN6QixpRUFBTTs0QkFDTDBCLElBQUksRUFBQyxRQUFROzRCQUNiQyxRQUFRLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQyxXQUFXLENBQUM7NEJBQzdCZ0IsU0FBUyxFQUFDLG9CQUFvQjs0QkFDOUJILEtBQUssRUFBRSxHQUFHOzRCQUNWTSxJQUFJLEVBQUMsUUFBUTs7Ozs7Z0NBQ2I7c0NBQ0YsOERBQUM1QixpRUFBTTs0QkFDTHlCLFNBQVMsRUFBQyxXQUFXOzRCQUNyQkgsS0FBSyxFQUFFLEdBQUc7NEJBQ1ZNLElBQUksRUFBQyxPQUFPOzRCQUNaQyxPQUFPLEVBQUVDLFdBQVc7Ozs7O2dDQUNwQjs7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Q7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBOUN1QjdCLElBQUk7O1FBRXhCSCxvREFBTzs7O0FBRmFHLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlRm9ybS50c3g/MmQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmludGVyZmFjZSBJRm9ybUlucHV0cyB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCBzZXRWYWx1ZSwgd2F0Y2gsIGNvbnRyb2wgfSA9XHJcbiAgICB1c2VGb3JtPElGb3JtSW5wdXRzPih7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICBmaXJzdE5hbWU6IFwiNTQ1NFwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXRzKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzUGFnZTogYW55ID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwZjExMWJcIixcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzUGFnZX0+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICB7LyogcmVnaXN0ZXIgZmllbGQgZm9yIGlucHV0ICAqL31cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJmaXJzdE5hbWVcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Lyogd2F0Y2ggaXMgdXNlZCB0byBjYXRjaCBjaGFuZ2VzIHZhbHVlIG9mIGlucHV0ICAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXdhdGNoKFwiZmlyc3ROYW1lXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC1bMTVweF0gbXItWzVweF1cIlxyXG4gICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICB0ZXh0PVwiU3VibWl0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LVsxNXB4XVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgIHRleHQ9XCJDbGVhclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsInNldFZhbHVlIiwid2F0Y2giLCJjb250cm9sIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0eWxlc1BhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJjb2xvciIsImRpdiIsInN0eWxlIiwiZm9ybSIsIndpZHRoIiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZGlzYWJsZWQiLCJ0ZXh0Iiwib25DbGljayIsImhhbmRsZVJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});