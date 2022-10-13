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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Question = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), fakeSel = ref1[0], setFakeSel = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        layout: true,\n        id: \"Question\",\n        className: \"flex shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                layout: true,\n                className: fakeSel && \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                    layout: true,\n                    className: \"tracking-wide font-semibold text-gray-800 text-lg lg:leading-8\",\n                    children: \"Choose if image shown above is Real or Fake :\"\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                layout: true,\n                className: \"flex space-x-28 mt-5 ml-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"radio-btn flex border-r-2\",\n                        onClick: function() {\n                            setSelected(\"Real\");\n                            setFakeSel(false);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                value: selected,\n                                name: \"real\",\n                                checked: selected == \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        layout: true,\n                        className: \"flex\",\n                        onClick: function() {\n                            setSelected(\"Fake\");\n                            setFakeSel(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                value: selected,\n                                name: \"fake\",\n                                checked: selected == \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            fakeSel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tracking-wide font-semibold text-gray-800 text-md lg:leading-8\",\n                                children: \"What's the reason for this choice :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-28 mt-5 ml-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex border-r-2\",\n                                    onClick: function() {\n                                        setSelected(\"Real\");\n                                        setFakeSel(false);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            value: selected,\n                                            name: \"real\",\n                                            checked: selected == \"Real\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Real\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    onClick: function() {\n                                        setSelected(\"Fake\");\n                                        setFakeSel(true);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            value: selected,\n                                            name: \"fake\",\n                                            checked: selected == \"Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(Question, \"f5LoSRYywpILZcc2HHoNnlp/9Ec=\");\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0I7c0RBQ0YsOERBQUNRLEdBQUM7NENBQUNELFNBQVMsRUFBQyxxQkFBcUI7c0RBQUMsTUFBSTs7Ozs7aURBQUk7Ozs7Ozt5Q0FDdkM7OENBQ04sOERBQUNILEtBQUc7b0NBQ0ZHLFNBQVMsRUFBQyxNQUFNO29DQUNoQkUsT0FBTyxFQUFFLFdBQU07d0NBQ2JSLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEJFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDbkIsQ0FBQzs7c0RBRUQsOERBQUNPLE9BQUs7NENBQ0pDLElBQUksRUFBQyxVQUFVOzRDQUNmQyxLQUFLLEVBQUVaLFFBQVE7NENBQ2ZhLElBQUksRUFBQyxNQUFNOzRDQUNYQyxPQUFPLEVBQUVkLFFBQVEsSUFBSSxNQUFNOzs7OztpREFDM0I7c0RBQ0YsOERBQUNRLEdBQUM7NENBQUNELFNBQVMsRUFBQyxxQkFBcUI7c0RBQUMsTUFBSTs7Ozs7aURBQUk7Ozs7Ozt5Q0FDdkM7Ozs7OztpQ0FDRjs7Ozs7O3lCQUNTOzs7OztxQkFDSzs7Ozs7O2FBR1gsQ0FFYjtBQUNKLENBQUM7R0FoR0tSLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWtHZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVlc3Rpb24uanM/NGMwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVTaGFyZWRMYXlvdXQgLEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFrZVNlbCwgc2V0RmFrZVNlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICBcbiAgICA8bW90aW9uLmRpdlxuICAgICAgbGF5b3V0XG4gICAgICBpZD1cIlF1ZXN0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggc2hhZG93LW1kIHctWzM0cmVtXSBwLTYgYmctd2hpdGUtNzAwIGJvcmRlci00IHJvdW5kZWQtbGcgZmxleC1jb2wgXCJcbiAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCBjbGFzc05hbWU9e2Zha2VTZWwgJiYgJ21iLTUnfT5cbiAgICAgICAgICA8bW90aW9uLnAgbGF5b3V0IGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtbGcgbGc6bGVhZGluZy04XCI+XG4gICAgICAgICAgICBDaG9vc2UgaWYgaW1hZ2Ugc2hvd24gYWJvdmUgaXMgUmVhbCBvciBGYWtlIDpcbiAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMjggbXQtNSBtbC0zXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tYnRuIGZsZXggYm9yZGVyLXItMlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFwiUmVhbFwiKTtcbiAgICAgICAgICAgICAgc2V0RmFrZVNlbChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgIG5hbWU9XCJyZWFsXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT0gXCJSZWFsXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0cmFja2luZy13aWRlclwiPlJlYWw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKFwiRmFrZVwiKTtcbiAgICAgICAgICAgICAgc2V0RmFrZVNlbCh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgbmFtZT1cImZha2VcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PSBcIkZha2VcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+RmFrZTwvcD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAge2Zha2VTZWwgJiYgKFxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+ICAgXG4gICAgICAgICAgPG1vdGlvbi5kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCB0ZXh0LW1kIGxnOmxlYWRpbmctOFwiPlxuICAgICAgICAgICAgICAgIFdoYXQncyB0aGUgcmVhc29uIGZvciB0aGlzIGNob2ljZSA6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yOCBtdC01IG1sLTNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgZmxleCBib3JkZXItci0yXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoXCJSZWFsXCIpO1xuICAgICAgICAgICAgICBzZXRGYWtlU2VsKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgbmFtZT1cInJlYWxcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PSBcIlJlYWxcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+UmVhbDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoXCJGYWtlXCIpO1xuICAgICAgICAgICAgICBzZXRGYWtlU2VsKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICBuYW1lPVwiZmFrZVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkID09IFwiRmFrZVwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdHJhY2tpbmctd2lkZXJcIj5GYWtlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICl9XG4gICAgICBcbiAgICA8L21vdGlvbi5kaXY+XG4gICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsIlF1ZXN0aW9uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImZha2VTZWwiLCJzZXRGYWtlU2VsIiwiZGl2IiwibGF5b3V0IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwibmFtZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.js\n"));

/***/ })

});