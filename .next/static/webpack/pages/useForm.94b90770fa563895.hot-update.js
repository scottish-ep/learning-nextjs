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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        console.log(data);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        width: \"100vh\",\n        color: \"black\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                    render: function(param) {\n                        var field = param.field;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextField, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, field), void 0, false, void 0, void 0);\n                    },\n                    name: \"firstName\",\n                    control: control,\n                    rules: {\n                        required: true\n                    },\n                    defaultValue: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Controller, {\n                    render: function(param) {\n                        var field = param.field;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextField, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, field), void 0, false, void 0, void 0);\n                    },\n                    name: \"lastName\",\n                    control: control,\n                    defaultValue: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"button\",\n                    onClick: reset\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"button\",\n                    onClick: function() {\n                        reset({\n                            firstName: \"bill\",\n                            lastName: \"luo\"\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"s4ydKAPISlraMtU6SLcI0IdTqMk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2dCOztBQU8zQixTQUFTRSxJQUFJLEdBQUc7O0lBQzdCLElBS0lELEdBQXdCLEdBQXhCQSx3REFBTyxFQUFpQixFQUoxQkUsUUFBUSxHQUlORixHQUF3QixDQUoxQkUsUUFBUSxFQUNSQyxZQUFZLEdBR1ZILEdBQXdCLENBSDFCRyxZQUFZLEVBQ1pDLEtBQUssR0FFSEosR0FBd0IsQ0FGMUJJLEtBQUssRUFDTEMsTUFBbUIsR0FDakJMLEdBQXdCLENBRDFCSyxTQUFTLENBQUlDLE1BQU07SUFFckIsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLElBQW1CLEVBQUs7UUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUVELElBQU1HLFVBQVUsR0FBUTtRQUN0QkMsZUFBZSxFQUFFLFNBQVM7UUFDMUJDLE1BQU0sRUFBRSxPQUFPO1FBQ2ZDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLEtBQUssRUFBRSxPQUFPO0tBQ2Y7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxLQUFLLEVBQUVOLFVBQVU7a0JBQ3BCLDRFQUFDTyxNQUFJO1lBQUNYLFFBQVEsRUFBRUosWUFBWSxDQUFDSSxRQUFRLENBQUM7OzhCQUNwQyw4REFBQ1ksVUFBVTtvQkFDVEMsTUFBTSxFQUFFOzRCQUFHQyxLQUFLLFNBQUxBLEtBQUs7NkNBQU8sOERBQUNDLFNBQVMscUZBQUtELEtBQUssaUNBQUk7cUJBQUE7b0JBQy9DRSxJQUFJLEVBQUMsV0FBVztvQkFDaEJDLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJDLEtBQUssRUFBRTt3QkFBRUMsUUFBUSxFQUFFLElBQUk7cUJBQUU7b0JBQ3pCQyxZQUFZLEVBQUMsRUFBRTs7Ozs7d0JBQ2Y7OEJBQ0YsOERBQUNSLFVBQVU7b0JBQ1RDLE1BQU0sRUFBRTs0QkFBR0MsS0FBSyxTQUFMQSxLQUFLOzZDQUFPLDhEQUFDQyxTQUFTLHFGQUFLRCxLQUFLLGlDQUFJO3FCQUFBO29CQUMvQ0UsSUFBSSxFQUFDLFVBQVU7b0JBQ2ZDLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJHLFlBQVksRUFBQyxFQUFFOzs7Ozt3QkFDZjs4QkFFRiw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Ozs7O3dCQUFHOzhCQUN2Qiw4REFBQ0QsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7b0JBQUNDLE9BQU8sRUFBRTFCLEtBQUs7Ozs7O3dCQUFJOzhCQUN2Qyw4REFBQ3dCLE9BQUs7b0JBQ0pDLElBQUksRUFBQyxRQUFRO29CQUNiQyxPQUFPLEVBQUUsV0FBTTt3QkFDYjFCLEtBQUssQ0FBQzs0QkFDSjJCLFNBQVMsRUFBRSxNQUFNOzRCQUNqQkMsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjs7Ozs7d0JBQ0Q7Ozs7OztnQkFDRzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FqRHVCL0IsSUFBSTs7UUFNdEJELG9EQUFPOzs7QUFOV0MsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VGb3JtLnRzeD8yZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBVc2VGb3JtSW5wdXRzIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgfSA9IHVzZUZvcm08VXNlRm9ybUlucHV0cz4oKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBVc2VGb3JtSW5wdXRzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdHlsZXNQYWdlOiBhbnkgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBmMTExYlwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICB3aWR0aDogXCIxMDB2aFwiLFxyXG4gICAgY29sb3I6IFwiYmxhY2tcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzUGFnZX0+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiA8VGV4dEZpZWxkIHsuLi5maWVsZH0gLz59XHJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IDxUZXh0RmllbGQgey4uLmZpZWxkfSAvPn1cclxuICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXNldH0gLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByZXNldCh7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcImJpbGxcIixcclxuICAgICAgICAgICAgICBsYXN0TmFtZTogXCJsdW9cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIkZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0eWxlc1BhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZGl2Iiwic3R5bGUiLCJmb3JtIiwiQ29udHJvbGxlciIsInJlbmRlciIsImZpZWxkIiwiVGV4dEZpZWxkIiwibmFtZSIsImNvbnRyb2wiLCJydWxlcyIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});