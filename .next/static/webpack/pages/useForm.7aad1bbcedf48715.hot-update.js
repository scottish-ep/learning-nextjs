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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input/Input */ \"./components/Input/Input.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        defaultValues: {\n            firstName: \"5454\",\n            lastName: \"\"\n        }\n    }), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, resetField = ref.resetField, setValue = ref.setValue, watch = ref.watch, getValues = ref.getValues, setFocus = ref.setFocus, getFieldState = ref.getFieldState, setError = ref.setError, control = ref.control;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    var handleReset = function() {\n        reset({\n            firstName: \"Reset\"\n        });\n    };\n    var handleResetField = function() {\n        resetField(\"firstName\", {\n            defaultValue: \"reset fields\"\n        });\n    };\n    var handleGetValues = function() {\n        var values = getValues();\n        console.log(\"values\", values);\n    };\n    var handleGetFieldState = function() {\n        var values = getFieldState(\"firstName\");\n        console.log(\"values\", values);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        color: \"white\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!watch(\"firstName\")) {\n            setError(\"firstName\", {\n                type: \"message\",\n                message: \"Please enter firstName\"\n            }, {\n                shouldFocus: true\n            });\n        }\n    }, [\n        watch(\"firstName\")\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    width: 300,\n                    defaultValue: \"\",\n                    required: true,\n                    placeholder: \"Type your name\",\n                    register: register(\"firstName\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: err\n                }, void 0, false, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    width: 300,\n                    defaultValue: \"\",\n                    placeholder: \"Type your name\",\n                    register: register(\"lastName\"),\n                    className: \"mt-[15px]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            type: \"submit\",\n                            disabled: !watch(\"firstName\"),\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 150,\n                            text: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 150,\n                            text: \"Clear\",\n                            onClick: handleReset\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 250,\n                            text: \"Clear firstName\",\n                            onClick: handleResetField\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 250,\n                            text: \"Set value lastName\",\n                            onClick: function() {\n                                return setValue(\"lastName\", \"set lastName\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 250,\n                            text: \"getValues\",\n                            onClick: handleGetValues\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-[15px] mr-[5px]\",\n                            width: 250,\n                            text: \"set focus to firstName\",\n                            onClick: function() {\n                                return setFocus(\"firstName\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\learning\\\\learning-nextjs\\\\pages\\\\useForm.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"v7f4PthEio7mF6RE2lJQ701n8gk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJCLGVBQWU7Ozs7O2dDQUN4QjtzQ0FPRiw4REFBQ3ZCLGlFQUFNOzRCQUNMeUMsU0FBUyxFQUFDLG9CQUFvQjs0QkFDOUJMLEtBQUssRUFBRSxHQUFHOzRCQUNWTyxJQUFJLEVBQUMsd0JBQXdCOzRCQUM3QkMsT0FBTyxFQUFFO3VDQUFNaEMsUUFBUSxDQUFDLFdBQVcsQ0FBQzs2QkFBQTs7Ozs7Z0NBQ3BDOzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRDs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FoSXVCWCxJQUFJOztRQWF0Qkgsb0RBQU87OztBQWJXRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZUZvcm0udHN4PzJkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm1JbnB1dHMge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICByZXNldCxcclxuICAgIHJlc2V0RmllbGQsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIHdhdGNoLFxyXG4gICAgZ2V0VmFsdWVzLFxyXG4gICAgc2V0Rm9jdXMsXHJcbiAgICBnZXRGaWVsZFN0YXRlLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBjb250cm9sLFxyXG4gIH0gPSB1c2VGb3JtPElGb3JtSW5wdXRzPih7XHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgIGZpcnN0TmFtZTogXCI1NDU0XCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dHMpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHJlc2V0KHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlJlc2V0XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldEZpZWxkID0gKCkgPT4ge1xyXG4gICAgcmVzZXRGaWVsZChcImZpcnN0TmFtZVwiLCB7IGRlZmF1bHRWYWx1ZTogXCJyZXNldCBmaWVsZHNcIiB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHZXRWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwidmFsdWVzXCIsIHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2V0RmllbGRTdGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGdldEZpZWxkU3RhdGUoXCJmaXJzdE5hbWVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlc1wiLCB2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0eWxlc1BhZ2U6IGFueSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMGYxMTFiXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghd2F0Y2goXCJmaXJzdE5hbWVcIikpIHtcclxuICAgICAgc2V0RXJyb3IoXHJcbiAgICAgICAgXCJmaXJzdE5hbWVcIixcclxuICAgICAgICB7IHR5cGU6IFwibWVzc2FnZVwiLCBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBmaXJzdE5hbWVcIiB9LFxyXG4gICAgICAgIHsgc2hvdWxkRm9jdXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFt3YXRjaChcImZpcnN0TmFtZVwiKV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzUGFnZX0+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICB7LyogcmVnaXN0ZXIgZmllbGQgZm9yIGlucHV0ICAqL31cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwiZmlyc3ROYW1lXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+e2Vycn08L3A+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwibGFzdE5hbWVcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC1bMTVweF1cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIHdhdGNoIGlzIHVzZWQgdG8gY2F0Y2ggY2hhbmdlcyB2YWx1ZSBvZiBpbnB1dCAgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF3YXRjaChcImZpcnN0TmFtZVwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtWzE1cHhdIG1yLVs1cHhdXCJcclxuICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgdGV4dD1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC1bMTVweF0gbXItWzVweF1cIlxyXG4gICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICB0ZXh0PVwiQ2xlYXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LVsxNXB4XSBtci1bNXB4XVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgIHRleHQ9XCJDbGVhciBmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldEZpZWxkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtWzE1cHhdIG1yLVs1cHhdXCJcclxuICAgICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgICAgdGV4dD1cIlNldCB2YWx1ZSBsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZhbHVlKFwibGFzdE5hbWVcIiwgXCJzZXQgbGFzdE5hbWVcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtWzIwcHhdXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LVsxNXB4XSBtci1bNXB4XVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgIHRleHQ9XCJnZXRWYWx1ZXNcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXRWYWx1ZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtWzE1cHhdIG1yLVs1cHhdXCJcclxuICAgICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgICAgdGV4dD1cImdldCB2YWx1ZSBmaWVsZCBmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXRGaWVsZFN0YXRlfVxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LVsxNXB4XSBtci1bNXB4XVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgIHRleHQ9XCJzZXQgZm9jdXMgdG8gZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9jdXMoXCJmaXJzdE5hbWVcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwicmVzZXRGaWVsZCIsInNldFZhbHVlIiwid2F0Y2giLCJnZXRWYWx1ZXMiLCJzZXRGb2N1cyIsImdldEZpZWxkU3RhdGUiLCJzZXRFcnJvciIsImNvbnRyb2wiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUmVzZXQiLCJoYW5kbGVSZXNldEZpZWxkIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlR2V0VmFsdWVzIiwidmFsdWVzIiwiaGFuZGxlR2V0RmllbGRTdGF0ZSIsInN0eWxlc1BhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJjb2xvciIsInR5cGUiLCJtZXNzYWdlIiwic2hvdWxkRm9jdXMiLCJkaXYiLCJzdHlsZSIsImZvcm0iLCJ3aWR0aCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJwIiwiZXJyIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJ0ZXh0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});