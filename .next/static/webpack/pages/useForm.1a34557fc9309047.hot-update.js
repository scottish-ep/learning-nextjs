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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input/Input */ \"./components/Input/Input.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Form() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n        defaultChecked: {\n            firstName: \"21221\",\n            lastName: \"\"\n        }\n    }), register = ref.register, handleSubmit = ref.handleSubmit, reset = ref.reset, setValue = ref.setValue, control = ref.control;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    var stylesPage = {\n        backgroundColor: \"#0f111b\",\n        height: \"100vh\",\n        color: \"white\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: stylesPage,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                defaultValue: \"\",\n                placeholder: \"Type your name\",\n                register: register(\"firstName\")\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\flambe project\\\\flambe-refactor\\\\pages\\\\useForm.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"zJcV0I0VkvZFHA8U5NmVa78r9nw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDNEI7QUFDUjs7QUFPL0IsU0FBU0csSUFBSSxHQUFHOztJQUM3QixJQUNFRixHQUtFLEdBTEZBLHdEQUFPLENBQWM7UUFDbkJHLGNBQWMsRUFBRTtZQUNkQyxTQUFTLEVBQUUsT0FBTztZQUNsQkMsUUFBUSxFQUFFLEVBQUU7U0FDYjtLQUNGLENBQUMsRUFOSUMsUUFBUSxHQUNkTixHQUtFLENBTklNLFFBQVEsRUFBRUMsWUFBWSxHQUM1QlAsR0FLRSxDQU5jTyxZQUFZLEVBQUVDLEtBQUssR0FDbkNSLEdBS0UsQ0FONEJRLEtBQUssRUFBRUMsUUFBUSxHQUM3Q1QsR0FLRSxDQU5tQ1MsUUFBUSxFQUFFQyxPQUFPLEdBQ3REVixHQUtFLENBTjZDVSxPQUFPO0lBT3hELElBQU1DLFFBQVEsR0FBRyxTQUFDQyxJQUFpQjtlQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0tBQUE7SUFFekQsSUFBTUcsVUFBVSxHQUFRO1FBQ3RCQyxlQUFlLEVBQUUsU0FBUztRQUMxQkMsTUFBTSxFQUFFLE9BQU87UUFDZkMsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRUwsVUFBVTtrQkFDcEIsNEVBQUNNLE1BQUk7WUFBQ1YsUUFBUSxFQUFFSixZQUFZLENBQUNJLFFBQVEsQ0FBQztzQkFDcEMsNEVBQUNWLCtEQUFLO2dCQUNKcUIsWUFBWSxFQUFDLEVBQUU7Z0JBQ2ZDLFdBQVcsRUFBQyxnQkFBZ0I7Z0JBQzVCakIsUUFBUSxFQUFFQSxRQUFRLENBQUMsV0FBVyxDQUFDOzs7OztvQkFDL0I7Ozs7O2dCQUNHOzs7OztZQUNILENBQ047Q0FDSDtHQTNCdUJKLElBQUk7O1FBRXhCRixvREFBTzs7O0FBRmFFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlRm9ybS50c3g/MmQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dC9JbnB1dFwiO1xyXG5cclxuaW50ZXJmYWNlIElGb3JtSW5wdXRzIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXQsIHNldFZhbHVlLCBjb250cm9sIH0gPVxyXG4gICAgdXNlRm9ybTxJRm9ybUlucHV0cz4oe1xyXG4gICAgICBkZWZhdWx0Q2hlY2tlZDoge1xyXG4gICAgICAgIGZpcnN0TmFtZTogXCIyMTIyMVwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dHMpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjb25zdCBzdHlsZXNQYWdlOiBhbnkgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBmMTExYlwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXNQYWdlfT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwiZmlyc3ROYW1lXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIklucHV0IiwiRm9ybSIsImRlZmF1bHRDaGVja2VkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0Iiwic2V0VmFsdWUiLCJjb250cm9sIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0eWxlc1BhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJjb2xvciIsImRpdiIsInN0eWxlIiwiZm9ybSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/useForm.tsx\n"));

/***/ })

});