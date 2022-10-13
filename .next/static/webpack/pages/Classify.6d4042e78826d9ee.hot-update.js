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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Question = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), fakeSel = ref1[0], setFakeSel = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), checked = ref2[0], setChecked = ref2[1];\n    var handleCheck = function(event) {\n        var updatedList = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(checked);\n        if (event.target.checked) {\n            updatedList = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(checked).concat([\n                event.target.value\n            ]);\n        } else {\n            updatedList.splice(checked.indexOf(event.target.value), 1);\n        }\n        setChecked(updatedList);\n    };\n    console.log(\"checked : \", checked);\n    var checkList = [\n        \"Texture Looks Fake\",\n        \"Anatomy Looks Fake\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        layout: true,\n        id: \"Question\",\n        className: \"flex overflow-hidden items-center shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                layout: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                    layout: true,\n                    className: \"tracking-wide font-semibold text-gray-800 text-lg lg:leading-8\",\n                    children: \"Choose if image shown above is Real or Fake :\"\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                layout: true,\n                className: \"flex space-x-28 mt-5 overflow-hidden \" + (fakeSel && \"mb-5\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        layout: true,\n                        className: \"radio-btn overflow-hidden flex border-r-2\",\n                        onClick: function() {\n                            setSelected(\"Real\");\n                            setFakeSel(false);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                layout: true,\n                                type: \"radio\",\n                                value: selected,\n                                name: \"real\",\n                                checked: selected == \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                                layout: true,\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Real\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        layout: true,\n                        className: \"flex overflow-hidden\",\n                        onClick: function() {\n                            setSelected(\"Fake\");\n                            setFakeSel(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                layout: true,\n                                type: \"radio\",\n                                value: selected,\n                                name: \"fake\",\n                                checked: selected == \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                                layout: true,\n                                className: \"ml-2 tracking-wider\",\n                                children: \"Fake\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            fakeSel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    initial: {\n                        opacity: 1\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"tracking-wide font-semibold text-gray-800 text-md lg:leading-8\",\n                                children: \"What's the reason for this choice :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-3 mt-4 ml-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \" flex border-r-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleCheck,\n                                            type: \"checkbox\",\n                                            value: \"Texture Looks Fake\",\n                                            name: \"texture\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Texture Looks Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"flex\",\n                                    onClick: function() {\n                                        setSelected(\"Fake\");\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleCheck,\n                                            type: \"checkbox\",\n                                            value: \"Anatomy Looks Fake\",\n                                            name: \"anotomy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"ml-2 tracking-wider\",\n                                            children: \"Anatomy Looks Fake\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Question, \"1a9pE132XPtGPFW8elj9m5worcc=\");\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsOERBQUNxQixPQUFLOzRDQUNKTyxRQUFRLEVBQUV2QixXQUFXOzRDQUNyQmlCLElBQUksRUFBQyxVQUFVOzRDQUNmYixLQUFLLEVBQUMsb0JBQW9COzRDQUMxQmMsSUFBSSxFQUFDLFNBQVM7Ozs7O2lEQUVkO3NEQUNGLDhEQUFDSixHQUFDOzRDQUFDRCxTQUFTLEVBQUMscUJBQXFCO3NEQUFDLG9CQUFrQjs7Ozs7aURBQUk7Ozs7Ozt5Q0FDOUM7Ozs7OztpQ0FDVDs7Ozs7O3lCQUNLOzs7OztxQkFDRzs7Ozs7O2FBRVQsQ0FDYjtBQUNKLENBQUM7R0E1SEtwQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE4SGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1ZXN0aW9uLmpzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBRdWVzdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Zha2VTZWwsIHNldEZha2VTZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoZXZlbnQpID0+IHtcbiAgICB2YXIgdXBkYXRlZExpc3QgPSBbLi4uY2hlY2tlZF07XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICB1cGRhdGVkTGlzdCA9IFsuLi5jaGVja2VkLCBldmVudC50YXJnZXQudmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVkTGlzdC5zcGxpY2UoY2hlY2tlZC5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSksIDEpO1xuICAgIH1cbiAgICBzZXRDaGVja2VkKHVwZGF0ZWRMaXN0KTtcbiAgfTtcblxuICBjb25zb2xlLmxvZygnY2hlY2tlZCA6ICcsIGNoZWNrZWQpO1xuXG4gIGNvbnN0IGNoZWNrTGlzdCA9IFtcIlRleHR1cmUgTG9va3MgRmFrZVwiLCBcIkFuYXRvbXkgTG9va3MgRmFrZVwiXTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgbGF5b3V0XG4gICAgICBpZD1cIlF1ZXN0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3ctaGlkZGVuIGl0ZW1zLWNlbnRlciBzaGFkb3ctbWQgdy1bMzRyZW1dIHAtNiBiZy13aGl0ZS03MDAgYm9yZGVyLTQgcm91bmRlZC1sZyBmbGV4LWNvbCBcIlxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2IGxheW91dD5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgdGV4dC1sZyBsZzpsZWFkaW5nLThcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2hvb3NlIGlmIGltYWdlIHNob3duIGFib3ZlIGlzIFJlYWwgb3IgRmFrZSA6XG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBsYXlvdXRcbiAgICAgICAgY2xhc3NOYW1lPXtcImZsZXggc3BhY2UteC0yOCBtdC01IG92ZXJmbG93LWhpZGRlbiBcIiArIChmYWtlU2VsICYmIFwibWItNVwiKX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1idG4gb3ZlcmZsb3ctaGlkZGVuIGZsZXggYm9yZGVyLXItMlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoXCJSZWFsXCIpO1xuICAgICAgICAgICAgc2V0RmFrZVNlbChmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uaW5wdXRcbiAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG5hbWU9XCJyZWFsXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkID09IFwiUmVhbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1vdGlvbi5wIGxheW91dCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICBSZWFsXG4gICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZChcIkZha2VcIik7XG4gICAgICAgICAgICBzZXRGYWtlU2VsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmlucHV0XG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XG4gICAgICAgICAgICBuYW1lPVwiZmFrZVwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PSBcIkZha2VcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtb3Rpb24ucCBsYXlvdXQgY2xhc3NOYW1lPVwibWwtMiB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgRmFrZVxuICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIHtmYWtlU2VsICYmIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCB0ZXh0LW1kIGxnOmxlYWRpbmctOFwiPlxuICAgICAgICAgICAgICAgIFdoYXQncyB0aGUgcmVhc29uIGZvciB0aGlzIGNob2ljZSA6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMyBtdC00IG1sLTNcIj5cblxuXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggYm9yZGVyLXItMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlRleHR1cmUgTG9va3MgRmFrZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dHVyZVwiXG4gICAgICAgICAgICAgICAgICAvL2NoZWNrZWQ9e3NlbGVjdGVkID09IFwiVGV4dHVyZSBMb29rcyBGYWtlXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+VGV4dHVyZSBMb29rcyBGYWtlPC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoXCJGYWtlXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFuYXRvbXkgTG9va3MgRmFrZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW5vdG9teVwiXG4gICAgICAgICAgICAgICAgICAvL2NoZWNrZWQ9e3NlbGVjdGVkID09IFwiQW5hdG9teSBMb29rcyBGYWtlXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+QW5hdG9teSBMb29rcyBGYWtlPC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJRdWVzdGlvbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJmYWtlU2VsIiwic2V0RmFrZVNlbCIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiaGFuZGxlQ2hlY2siLCJldmVudCIsInVwZGF0ZWRMaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImNoZWNrTGlzdCIsImRpdiIsImxheW91dCIsImlkIiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Question.js\n"));

/***/ })

});