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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, setValue = ref.setValue, control = ref.control;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        width: \"100vh\",\n        color: \"white\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {\n                    render: function(param) {\n                        var field = param.field;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, field), void 0, false, void 0, void 0);\n                    },\n                    name: \"firstName\",\n                    control: control,\n                    rules: {\n                        required: true\n                    },\n                    defaultValue: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {\n                    render: function(param) {\n                        var field = param.field;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, field), void 0, false, void 0, void 0);\n                    },\n                    name: \"lastName\",\n                    control: control,\n                    defaultValue: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: function() {\n                        return reset();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                    type: \"button\",\n                    onClick: function() {\n                        reset({\n                            firstName: \"bill\",\n                            lastName: \"luo\"\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"zJcV0I0VkvZFHA8U5NmVa78r9nw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUM0QjtBQUNMOztBQU9sQyxTQUFTSyxJQUFJLEdBQUc7O0lBQzdCLElBQ0VKLEdBQXNCLEdBQXRCQSx3REFBTyxFQUFlLEVBRGhCSyxRQUFRLEdBQ2RMLEdBQXNCLENBRGhCSyxRQUFRLEVBQUVDLFlBQVksR0FDNUJOLEdBQXNCLENBRE5NLFlBQVksRUFBRUMsS0FBSyxHQUNuQ1AsR0FBc0IsQ0FEUU8sS0FBSyxFQUFFQyxRQUFRLEdBQzdDUixHQUFzQixDQURlUSxRQUFRLEVBQUVDLE9BQU8sR0FDdERULEdBQXNCLENBRHlCUyxPQUFPO0lBRXhELElBQU1DLFFBQVEsR0FBRyxTQUFDQyxJQUFpQjtlQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0tBQUE7SUFFekQsSUFBTUcsVUFBVSxHQUFRO1FBQ3RCQyxlQUFlLEVBQUUsU0FBUztRQUMxQkMsTUFBTSxFQUFFLE9BQU87UUFDZkMsS0FBSyxFQUFFLE9BQU87UUFDZEMsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRU4sVUFBVTtrQkFDcEIsNEVBQUNPLE1BQUk7WUFBQ1gsUUFBUSxFQUFFSixZQUFZLENBQUNJLFFBQVEsQ0FBQzs7OEJBQ3BDLDhEQUFDVCx1REFBVTtvQkFDVHFCLE1BQU0sRUFBRTs0QkFBR0MsS0FBSyxTQUFMQSxLQUFLOzZDQUFPLDhEQUFDcEIsb0RBQVMscUZBQUtvQixLQUFLLGlDQUFJO3FCQUFBO29CQUMvQ0MsSUFBSSxFQUFDLFdBQVc7b0JBQ2hCZixPQUFPLEVBQUVBLE9BQU87b0JBQ2hCZ0IsS0FBSyxFQUFFO3dCQUFFQyxRQUFRLEVBQUUsSUFBSTtxQkFBRTtvQkFDekJDLFlBQVksRUFBQyxFQUFFOzs7Ozt3QkFDZjs4QkFDRiw4REFBQzFCLHVEQUFVO29CQUNUcUIsTUFBTSxFQUFFOzRCQUFHQyxLQUFLLFNBQUxBLEtBQUs7NkNBQU8sOERBQUNwQixvREFBUyxxRkFBS29CLEtBQUssaUNBQUk7cUJBQUE7b0JBQy9DQyxJQUFJLEVBQUMsVUFBVTtvQkFDZmYsT0FBTyxFQUFFQSxPQUFPO29CQUNoQmtCLFlBQVksRUFBQyxFQUFFOzs7Ozt3QkFDZjs4QkFFRiw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Ozs7O3dCQUFHOzhCQUN2Qiw4REFBQ0MsUUFBTTtvQkFBQ0QsSUFBSSxFQUFDLFFBQVE7b0JBQUNFLE9BQU8sRUFBRTsrQkFBTXhCLEtBQUssRUFBRTtxQkFBQTs7Ozs7d0JBQUk7OEJBQ2hELDhEQUFDTCxnREFBSztvQkFDSjJCLElBQUksRUFBQyxRQUFRO29CQUNiRSxPQUFPLEVBQUUsV0FBTTt3QkFDYnhCLEtBQUssQ0FBQzs0QkFDSnlCLFNBQVMsRUFBRSxNQUFNOzRCQUNqQkMsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjs7Ozs7d0JBQ0Q7Ozs7OztnQkFDRzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0EzQ3VCN0IsSUFBSTs7UUFFeEJKLG9EQUFPOzs7QUFGYUksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VGb3JtLnRzeD8yZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm1JbnB1dHMge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCwgc2V0VmFsdWUsIGNvbnRyb2wgfSA9XHJcbiAgICB1c2VGb3JtPElGb3JtSW5wdXRzPigpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXRzKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzUGFnZTogYW55ID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwZjExMWJcIixcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdmhcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlc1BhZ2V9PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gPFRleHRGaWVsZCB7Li4uZmllbGR9IC8+fVxyXG4gICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiA8VGV4dEZpZWxkIHsuLi5maWVsZH0gLz59XHJcbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlc2V0KCl9IC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcmVzZXQoe1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJiaWxsXCIsXHJcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IFwibHVvXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJDb250cm9sbGVyIiwiSW5wdXQiLCJUZXh0RmllbGQiLCJGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsInNldFZhbHVlIiwiY29udHJvbCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXNQYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImRpdiIsInN0eWxlIiwiZm9ybSIsInJlbmRlciIsImZpZWxkIiwibmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJkZWZhdWx0VmFsdWUiLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});