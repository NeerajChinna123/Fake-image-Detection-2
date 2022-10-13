"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Classify",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Question = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), fakeSel = ref1[0], setFakeSel = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        layout: true,\n        id: \"Question\",\n        className: \"flex shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                layout: true,\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"tracking-wide font-semibold text-gray-800 text-lg lg:leading-8\",\n                    children: \"Choose if image shown above is Real or Fake :\"\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                layout: true,\n                className: \"flex space-x-28 mt-5 ml-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"radio-btn flex border-r-2\",\n                        onClick: function() {\n                            setSelected(\"Real\");\n                            setFakeSel(false);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                value: selected,\n                                name: \"real\",\n                                checked: selected == \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        layout: true,\n                        className: \"flex\",\n                        onClick: function() {\n                            setSelected(\"Fake\");\n                            setFakeSel(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                value: selected,\n                                name: \"fake\",\n                                checked: selected == \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            fakeSel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tracking-wide font-semibold text-gray-800 text-md lg:leading-8\",\n                                children: \"What's the reason for this choice :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-28 mt-5 ml-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex border-r-2\",\n                                    onClick: function() {\n                                        setSelected(\"Real\");\n                                        setFakeSel(false);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            value: selected,\n                                            name: \"real\",\n                                            checked: selected == \"Real\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Real\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    onClick: function() {\n                                        setSelected(\"Fake\");\n                                        setFakeSel(true);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            value: selected,\n                                            name: \"fake\",\n                                            checked: selected == \"Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(Question, \"f5LoSRYywpILZcc2HHoNnlp/9Ec=\");\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NEQUNGLDhEQUFDUSxHQUFDOzRDQUFDRCxTQUFTLEVBQUMscUJBQXFCO3NEQUFDLE1BQUk7Ozs7O2lEQUFJOzs7Ozs7eUNBQ3ZDOzhDQUNOLDhEQUFDSCxLQUFHO29DQUNGRyxTQUFTLEVBQUMsTUFBTTtvQ0FDaEJFLE9BQU8sRUFBRSxXQUFNO3dDQUNiUixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0NBQ3BCRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ25CLENBQUM7O3NEQUVELDhEQUFDTyxPQUFLOzRDQUNKQyxJQUFJLEVBQUMsVUFBVTs0Q0FDZkMsS0FBSyxFQUFFWixRQUFROzRDQUNmYSxJQUFJLEVBQUMsTUFBTTs0Q0FDWEMsT0FBTyxFQUFFZCxRQUFRLElBQUksTUFBTTs7Ozs7aURBQzNCO3NEQUNGLDhEQUFDUSxHQUFDOzRDQUFDRCxTQUFTLEVBQUMscUJBQXFCO3NEQUFDLE1BQUk7Ozs7O2lEQUFJOzs7Ozs7eUNBQ3ZDOzs7Ozs7aUNBQ0Y7Ozs7Ozt5QkFDRTs7Ozs7cUJBQ1k7Ozs7OzthQUdYLENBRWI7QUFDSixDQUFDO0dBaEdLUixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFrR2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1ZXN0aW9uLmpzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlU2hhcmVkTGF5b3V0ICxBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBRdWVzdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Zha2VTZWwsIHNldEZha2VTZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGxheW91dFxuICAgICAgaWQ9XCJRdWVzdGlvblwiXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IHNoYWRvdy1tZCB3LVszNHJlbV0gcC02IGJnLXdoaXRlLTcwMCBib3JkZXItNCByb3VuZGVkLWxnIGZsZXgtY29sIFwiXG4gICAgPlxuICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgdGV4dC1sZyBsZzpsZWFkaW5nLThcIj5cbiAgICAgICAgICAgIENob29zZSBpZiBpbWFnZSBzaG93biBhYm92ZSBpcyBSZWFsIG9yIEZha2UgOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTI4IG10LTUgbWwtM1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWJ0biBmbGV4IGJvcmRlci1yLTJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcIlJlYWxcIik7XG4gICAgICAgICAgICAgIHNldEZha2VTZWwoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICBuYW1lPVwicmVhbFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkID09IFwiUmVhbFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdHJhY2tpbmctd2lkZXJcIj5SZWFsPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcIkZha2VcIik7XG4gICAgICAgICAgICAgIHNldEZha2VTZWwodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgIG5hbWU9XCJmYWtlXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT0gXCJGYWtlXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0cmFja2luZy13aWRlclwiPkZha2U8L3A+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIHtmYWtlU2VsICYmIChcbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPiAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgdGV4dC1tZCBsZzpsZWFkaW5nLThcIj5cbiAgICAgICAgICAgICAgICBXaGF0J3MgdGhlIHJlYXNvbiBmb3IgdGhpcyBjaG9pY2UgOlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMjggbXQtNSBtbC0zXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggYm9yZGVyLXItMlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFwiUmVhbFwiKTtcbiAgICAgICAgICAgICAgc2V0RmFrZVNlbChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgIG5hbWU9XCJyZWFsXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT0gXCJSZWFsXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0cmFja2luZy13aWRlclwiPlJlYWw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFwiRmFrZVwiKTtcbiAgICAgICAgICAgICAgc2V0RmFrZVNlbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgbmFtZT1cImZha2VcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PSBcIkZha2VcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+RmFrZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICl9XG4gICAgICBcbiAgICA8L21vdGlvbi5kaXY+XG4gICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsIlF1ZXN0aW9uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImZha2VTZWwiLCJzZXRGYWtlU2VsIiwiZGl2IiwibGF5b3V0IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwibmFtZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.js\n"));

/***/ })

});