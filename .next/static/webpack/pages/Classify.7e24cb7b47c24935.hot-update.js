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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Question = function(param) {\n    var load = param.load;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), fakeSel = ref1[0], setFakeSel = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), checked = ref2[0], setChecked = ref2[1];\n    var handleCheck = function(event) {\n        var updatedList = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(checked);\n        if (event.target.checked) {\n            updatedList = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(checked).concat([\n                event.target.value\n            ]);\n        } else {\n            updatedList.splice(checked.indexOf(event.target.value), 1);\n        }\n        setChecked(updatedList);\n    };\n    console.log(\"checked : \", checked);\n    var checkList = [\n        \"Texture Looks Fake\",\n        \"Anatomy Looks Fake\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: load ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            id: \"Question\",\n            className: \"flex overflow-hidden h-[122px] shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                role: \"status\",\n                className: \"animate-pulse\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-9 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layout: true,\n            id: \"Question\",\n            className: \"flex overflow-hidden items-center shadow-md w-[34rem] p-6 bg-white-700 border-4 rounded-lg flex-col \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    layout: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                        layout: true,\n                        className: \"tracking-wide font-semibold text-gray-800 text-lg lg:leading-8\",\n                        children: \"Choose if image shown above is Real or Fake :\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    layout: true,\n                    className: \"flex space-x-28 mt-4 overflow-hidden \" + (fakeSel && \"mb-5\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            layout: true,\n                            className: \"radio-btn overflow-hidden flex border-r-2\",\n                            onClick: function() {\n                                setSelected(\"Real\");\n                                setFakeSel(false);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                    layout: true,\n                                    type: \"radio\",\n                                    value: selected,\n                                    name: \"real\",\n                                    checked: selected == \"Real\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                                    layout: true,\n                                    className: \"ml-2 tracking-wider\",\n                                    children: \"Real\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            layout: true,\n                            className: \"flex overflow-hidden\",\n                            onClick: function() {\n                                setSelected(\"Fake\");\n                                setFakeSel(true);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                    layout: true,\n                                    type: \"radio\",\n                                    value: selected,\n                                    name: \"fake\",\n                                    checked: selected == \"Fake\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                                    layout: true,\n                                    className: \"ml-2 tracking-wider\",\n                                    children: \"Fake\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this),\n                fakeSel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        whileInView: {\n                            opacity: [\n                                0,\n                                1\n                            ]\n                        },\n                        transition: {\n                            duration: 1\n                        },\n                        exit: {\n                            opacity: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"tracking-wide font-semibold text-gray-800 text-md lg:leading-8\",\n                                    children: \"What's the reason for this choice :\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col ml-10 space-y-3 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \" flex border-r-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: handleCheck,\n                                                type: \"checkbox\",\n                                                value: \"Texture Looks Fake\",\n                                                name: \"texture\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-2 tracking-wider\",\n                                                children: \"Texture Looks Fake\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \"flex\",\n                                        onClick: function() {\n                                            setSelected(\"Fake\");\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: handleCheck,\n                                                type: \"checkbox\",\n                                                value: \"Anatomy Looks Fake\",\n                                                name: \"anotomy\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-2 tracking-wider\",\n                                                children: \"Anatomy Looks Fake\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/components/Question.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Question, \"1a9pE132XPtGPFW8elj9m5worcc=\");\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNkI7QUFDRTtBQUNFO0FBQzRDO0FBRTdFLElBQU1NLFFBQVEsR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3RCLElBQWdDTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDTSxRQUFRLEdBQWlCTixHQUFZLEdBQTdCLEVBQUVPLFdBQVcsR0FBSVAsR0FBWSxHQUFoQjtJQUM1QixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q1EsT0FBTyxHQUFnQlIsSUFBZSxHQUEvQixFQUFFUyxVQUFVLEdBQUlULElBQWUsR0FBbkI7SUFDMUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkNVLE9BQU8sR0FBZ0JWLElBQVksR0FBNUIsRUFBRVcsVUFBVSxHQUFJWCxJQUFZLEdBQWhCO0lBRTFCLElBQU1ZLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDN0IsSUFBSUMsV0FBVyxHQUFJLHFGQUFHSixPQUFPLENBQVBBO1FBQ3RCLElBQUlHLEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxPQUFPLEVBQUU7WUFDeEJJLFdBQVcsR0FBRyxxRkFBSUosT0FBTyxDQUFQQSxRQUFKO2dCQUFhRyxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSzthQUFDLEVBQUM7UUFDakQsT0FBTztZQUNMRixXQUFXLENBQUNHLE1BQU0sQ0FBQ1AsT0FBTyxDQUFDUSxPQUFPLENBQUNMLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0RMLFVBQVUsQ0FBQ0csV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVWLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLElBQU1XLFNBQVMsR0FBRztRQUFDLG9CQUFvQjtRQUFFLG9CQUFvQjtLQUFDO0lBQzlELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNEakIsSUFBSSxpQkFDSCw4REFBQ0oscURBQVU7WUFDVHNCLEVBQUUsRUFBQyxVQUFVO1lBQ2JDLFNBQVMsRUFBQyxtR0FBbUc7c0JBRTdHLDRFQUFDRixLQUFHO2dCQUFDRyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O2tDQUMxQyw4REFBQ0YsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLHlEQUF5RDs7Ozs7NkJBQU87a0NBQy9FLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsb0VBQW9FOzs7Ozs2QkFBTzs7Ozs7O3FCQUN0Rjs7Ozs7aUJBQ0ssaUJBRWIsOERBQUN2QixxREFBVTtZQUNUeUIsTUFBTTtZQUNOSCxFQUFFLEVBQUMsVUFBVTtZQUNiQyxTQUFTLEVBQUMsc0dBQXNHOzs4QkFFaEgsOERBQUN2QixxREFBVTtvQkFBQ3lCLE1BQU07OEJBQ2hCLDRFQUFDekIsbURBQVE7d0JBQ1B5QixNQUFNO3dCQUNORixTQUFTLEVBQUMsZ0VBQWdFO2tDQUMzRSwrQ0FFRDs7Ozs7NkJBQVc7Ozs7O3lCQUNBOzhCQUNiLDhEQUFDdkIscURBQVU7b0JBQ1R5QixNQUFNO29CQUNORixTQUFTLEVBQ1AsdUNBQXVDLEdBQUloQixDQUFBQSxPQUFPLElBQUksTUFBTTs7c0NBRzlELDhEQUFDUCxxREFBVTs0QkFDVHlCLE1BQU07NEJBQ05GLFNBQVMsRUFBQywyQ0FBMkM7NEJBQ3JESSxPQUFPLEVBQUUsV0FBTTtnQ0FDYnJCLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDcEJFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDcEIsQ0FBQzs7OENBRUQsOERBQUNSLHVEQUFZO29DQUNYeUIsTUFBTTtvQ0FDTkksSUFBSSxFQUFDLE9BQU87b0NBQ1pkLEtBQUssRUFBRVYsUUFBUTtvQ0FDZnlCLElBQUksRUFBQyxNQUFNO29DQUNYckIsT0FBTyxFQUFFSixRQUFRLElBQUksTUFBTTs7Ozs7eUNBQzNCOzhDQUNGLDhEQUFDTCxtREFBUTtvQ0FBQ3lCLE1BQU07b0NBQUNGLFNBQVMsRUFBQyxxQkFBcUI7OENBQUMsTUFFakQ7Ozs7O3lDQUFXOzs7Ozs7aUNBQ0E7c0NBQ2IsOERBQUN2QixxREFBVTs0QkFDVHlCLE1BQU07NEJBQ05GLFNBQVMsRUFBQyxzQkFBc0I7NEJBQ2hDSSxPQUFPLEVBQUUsV0FBTTtnQ0FDYnJCLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDcEJFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQzs7OENBRUQsOERBQUNSLHVEQUFZO29DQUNYeUIsTUFBTTtvQ0FDTkksSUFBSSxFQUFDLE9BQU87b0NBQ1pkLEtBQUssRUFBRVYsUUFBUTtvQ0FDZnlCLElBQUksRUFBQyxNQUFNO29DQUNYckIsT0FBTyxFQUFFSixRQUFRLElBQUksTUFBTTs7Ozs7eUNBQzNCOzhDQUNGLDhEQUFDTCxtREFBUTtvQ0FBQ3lCLE1BQU07b0NBQUNGLFNBQVMsRUFBQyxxQkFBcUI7OENBQUMsTUFFakQ7Ozs7O3lDQUFXOzs7Ozs7aUNBQ0E7Ozs7Ozt5QkFDRjtnQkFDWmhCLE9BQU8sa0JBQ04sOERBQUNMLDBEQUFlOzhCQUNkLDRFQUFDRixxREFBVTt3QkFDVCtCLFdBQVcsRUFBRTs0QkFBRUMsT0FBTyxFQUFFO0FBQUMsaUNBQUM7QUFBRSxpQ0FBQzs2QkFBQzt5QkFBRTt3QkFDaENDLFVBQVUsRUFBRTs0QkFBRUMsUUFBUSxFQUFFLENBQUM7eUJBQUU7d0JBQzNCQyxJQUFJLEVBQUU7NEJBQUVILE9BQU8sRUFBRSxDQUFDO3lCQUFFOzswQ0FFcEIsOERBQUNoQyxxREFBVTswQ0FDVCw0RUFBQzBCLEdBQUM7b0NBQUNILFNBQVMsRUFBQyxnRUFBZ0U7OENBQUMscUNBRTlFOzs7Ozt5Q0FBSTs7Ozs7cUNBQ087MENBRWIsOERBQUNGLEtBQUc7Z0NBQUNFLFNBQVMsRUFBQyxvQ0FBb0M7O2tEQUNqRCw4REFBQ3ZCLHFEQUFVO3dDQUFDdUIsU0FBUyxFQUFDLGtCQUFrQjs7MERBQ3RDLDhEQUFDSyxPQUFLO2dEQUNKUSxRQUFRLEVBQUV6QixXQUFXO2dEQUNyQmtCLElBQUksRUFBQyxVQUFVO2dEQUNmZCxLQUFLLEVBQUMsb0JBQW9CO2dEQUMxQmUsSUFBSSxFQUFDLFNBQVM7Ozs7O3FEQUVkOzBEQUNGLDhEQUFDSixHQUFDO2dEQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBEQUFDLG9CQUFrQjs7Ozs7cURBQUk7Ozs7Ozs2Q0FDOUM7a0RBQ2IsOERBQUN2QixxREFBVTt3Q0FDVHVCLFNBQVMsRUFBQyxNQUFNO3dDQUNoQkksT0FBTyxFQUFFLFdBQU07NENBQ2JyQixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7d0NBQ3RCLENBQUM7OzBEQUVELDhEQUFDc0IsT0FBSztnREFDSlEsUUFBUSxFQUFFekIsV0FBVztnREFDckJrQixJQUFJLEVBQUMsVUFBVTtnREFDZmQsS0FBSyxFQUFDLG9CQUFvQjtnREFDMUJlLElBQUksRUFBQyxTQUFTOzs7OztxREFFZDswREFDRiw4REFBQ0osR0FBQztnREFBQ0gsU0FBUyxFQUFDLHFCQUFxQjswREFBQyxvQkFBa0I7Ozs7O3FEQUFJOzs7Ozs7NkNBQzlDOzs7Ozs7cUNBQ1Q7Ozs7Ozs2QkFDSzs7Ozs7eUJBQ0c7Ozs7OztpQkFFVDs7Ozs7YUFFWCxDQUNOO0FBQ0osQ0FBQztHQXhJS3BCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTBJZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVlc3Rpb24uanM/NGMwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVTaGFyZWRMYXlvdXQsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHsgbG9hZCB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWtlU2VsLCBzZXRGYWtlU2VsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGV2ZW50KSA9PiB7XG4gICAgdmFyIHVwZGF0ZWRMaXN0ID0gWy4uLmNoZWNrZWRdO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgdXBkYXRlZExpc3QgPSBbLi4uY2hlY2tlZCwgZXZlbnQudGFyZ2V0LnZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZExpc3Quc3BsaWNlKGNoZWNrZWQuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpLCAxKTtcbiAgICB9XG4gICAgc2V0Q2hlY2tlZCh1cGRhdGVkTGlzdCk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJjaGVja2VkIDogXCIsIGNoZWNrZWQpO1xuXG4gIGNvbnN0IGNoZWNrTGlzdCA9IFtcIlRleHR1cmUgTG9va3MgRmFrZVwiLCBcIkFuYXRvbXkgTG9va3MgRmFrZVwiXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2xvYWQgPyAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaWQ9XCJRdWVzdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy1oaWRkZW4gaC1bMTIycHhdIHNoYWRvdy1tZCB3LVszNHJlbV0gcC02IGJnLXdoaXRlLTcwMCBib3JkZXItNCByb3VuZGVkLWxnIGZsZXgtY29sIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiBiZy1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgZGFyazpiZy1ncmF5LTcwMCB3LTQ4IG1iLTRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC05IGJnLWdyYXktMzAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWdyYXktNzAwIG1heC13LVs0MDBweF0gbWItMi41XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgaWQ9XCJRdWVzdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy1oaWRkZW4gaXRlbXMtY2VudGVyIHNoYWRvdy1tZCB3LVszNHJlbV0gcC02IGJnLXdoaXRlLTcwMCBib3JkZXItNCByb3VuZGVkLWxnIGZsZXgtY29sIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQ+XG4gICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtbGcgbGc6bGVhZGluZy04XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2hvb3NlIGlmIGltYWdlIHNob3duIGFib3ZlIGlzIFJlYWwgb3IgRmFrZSA6XG4gICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcImZsZXggc3BhY2UteC0yOCBtdC00IG92ZXJmbG93LWhpZGRlbiBcIiArIChmYWtlU2VsICYmIFwibWItNVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1idG4gb3ZlcmZsb3ctaGlkZGVuIGZsZXggYm9yZGVyLXItMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcIlJlYWxcIik7XG4gICAgICAgICAgICAgICAgc2V0RmFrZVNlbChmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uaW5wdXRcbiAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBuYW1lPVwicmVhbFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWQgPT0gXCJSZWFsXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxtb3Rpb24ucCBsYXlvdXQgY2xhc3NOYW1lPVwibWwtMiB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgIFJlYWxcbiAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChcIkZha2VcIik7XG4gICAgICAgICAgICAgICAgc2V0RmFrZVNlbCh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbnB1dFxuICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJmYWtlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PSBcIkZha2VcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5wIGxheW91dCBjbGFzc05hbWU9XCJtbC0yIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgRmFrZVxuICAgICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB7ZmFrZVNlbCAmJiAoXG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IFswLCAxXSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgdGV4dC1tZCBsZzpsZWFkaW5nLThcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hhdCdzIHRoZSByZWFzb24gZm9yIHRoaXMgY2hvaWNlIDpcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWwtMTAgc3BhY2UteS0zIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGJvcmRlci1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUZXh0dXJlIExvb2tzIEZha2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrZWQ9e3NlbGVjdGVkID09IFwiVGV4dHVyZSBMb29rcyBGYWtlXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdHJhY2tpbmctd2lkZXJcIj5UZXh0dXJlIExvb2tzIEZha2U8L3A+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKFwiRmFrZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBbmF0b215IExvb2tzIEZha2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbm90b215XCJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrZWQ9e3NlbGVjdGVkID09IFwiQW5hdG9teSBMb29rcyBGYWtlXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdHJhY2tpbmctd2lkZXJcIj5BbmF0b215IExvb2tzIEZha2U8L3A+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJRdWVzdGlvbiIsImxvYWQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZmFrZVNlbCIsInNldEZha2VTZWwiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImhhbmRsZUNoZWNrIiwiZXZlbnQiLCJ1cGRhdGVkTGlzdCIsInRhcmdldCIsInZhbHVlIiwic3BsaWNlIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xpc3QiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInJvbGUiLCJsYXlvdXQiLCJwIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ3aGlsZUluVmlldyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Question.js\n"));

/***/ })

});