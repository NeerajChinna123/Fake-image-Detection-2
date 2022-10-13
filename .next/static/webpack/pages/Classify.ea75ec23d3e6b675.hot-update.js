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

/***/ "./pages/Classify.js":
/*!***************************!*\
  !*** ./pages/Classify.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-full h-[54rem] mt-10 flex justify-center max-w-4xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute font-sans group top-[36rem] right-[23.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                        //onClick={clickHandler}\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[39rem] left-[12rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            onClick: clickHandler,\n                            className: \"mt-8 flex cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-gray-800 py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-8 lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"tracking-wider\",\n                                    children: \"Next\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                                    className: \"h-7 w-7 animate-pulse hover:text-darkBgLight\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                //   return (\n                //     <span\n                //      // style={style}\n                //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                //       onClick={onClickHandler}\n                //       onKeyDown={onClickHandler}\n                //       value={index}\n                //       key={index}\n                //       role=\"button\"\n                //       tabIndex={0}\n                //       aria-label={`${label} ${index + 1}`}\n                //     >\n                //       {index+1}\n                //     </span>\n                //   );\n                // }}\n                showIndicators: false,\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-4\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUNQO0FBQ0gsQ0FBQztBQXZGS2pDLEtBQUFBLFFBQVE7QUF5RmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2xhc3NpZnkuanM/ZDBlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJTUFHRVMgZnJvbSAnLi4vSW1hZ2VzL0ltYWdlcydcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IHtDaGV2cm9uUmlnaHRJY29uLCBDaGV2cm9uTGVmdEljb24gLENoZXZyb25Eb3VibGVSaWdodEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBDbGFzc2lmeSA9ICgpID0+IHtcblxuICBcbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIGNvbnN0IGFycm93U3R5bGVzMSA9IHtcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGxnOnctZnVsbCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBoLVs1NHJlbV0gbXQtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnRJdGVtLHRvdGFsKSA9PiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIGdyb3VwIHRvcC1bMzZyZW1dIHJpZ2h0LVsyMy41cmVtXSB3LVs1cmVtXSB0ZXh0LVsxcmVtXSB0ZXh0LWRhcmtCZ1wiPntjdXJyZW50SXRlbX0gLyB7dG90YWx9PC9kaXY+XG4gICAgICAgICApfVxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhjbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsUHJldikgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszN3JlbV0gbGVmdC1bMTByZW1dIGN1cnNvci1wb2ludGVyIGhpZGRlblwiXG4gICAgICAgICAgLy9vbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC00IHRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsoY2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbE5leHQpID0+IChcblxuXG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzlyZW1dIGxlZnQtWzEycmVtXSBtbC02MFwiXG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gIFxuICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtWzAuMnJlbV0gc3BhY2UteC01IGJnLWdyYXktODAwIHB5LTQgZm9udC11YnVudHUgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1ncmF5LTgwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBsZzpweC04IGxnOmhvdmVyOmJnLWdyYXktNDAwIGxnOmhvdmVyOnRleHQtZGFya0JnTGlnaHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyXCI+TmV4dDwvcD5cbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNyB3LTcgYW5pbWF0ZS1wdWxzZSBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICl9XG4gICAgICAgIFxuICAgICAgLy8gICByZW5kZXJJbmRpY2F0b3I9eyhvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPHNwYW5cbiAgICAgIC8vICAgICAgLy8gc3R5bGU9e3N0eWxlfVxuICAgICAgLy8gICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJ2JnLWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0IHRleHQtZGFya0JnTGlnaHQgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIG1iLTIgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcicgOiAnYmctZGFya0JnTGlnaHQgbWItMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIHRleHQtZ3JheS0zMDAgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcid9XG4gICAgICAvLyAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgIC8vICAgICAgIG9uS2V5RG93bj17b25DbGlja0hhbmRsZXJ9XG4gICAgICAvLyAgICAgICB2YWx1ZT17aW5kZXh9XG4gICAgICAvLyAgICAgICBrZXk9e2luZGV4fVxuICAgICAgLy8gICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAvLyAgICAgICB0YWJJbmRleD17MH1cbiAgICAgIC8vICAgICAgIGFyaWEtbGFiZWw9e2Ake2xhYmVsfSAke2luZGV4ICsgMX1gfVxuICAgICAgLy8gICAgID5cbiAgICAgIC8vICAgICAgIHtpbmRleCsxfVxuICAgICAgLy8gICAgIDwvc3Bhbj5cbiAgICAgIC8vICAgKTtcbiAgICAgIC8vIH19XG4gICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfT4gIFxuICAgICAgICAgIHtJTUFHRVMubWFwKChpbWFnZSk9PihcbiAgICAgICAgICAgIDxkaXY+ICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLVszNHJlbV0gb2JqZWN0LWNvbnRhaW4gYm9yZGVyLXItNFwiIGlkPXtpbWFnZS5pZH0gc3JjPXtpbWFnZS5wYXRofT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci0yIGJnLWdyYXktNTAwIHctMTYgaC0xNlwiPlxuICAgICAgICA8cD4gRk9STSBTRUNUSU9OPC9wPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzaWZ5XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiSU1BR0VTIiwiQ2Fyb3VzZWwiLCJDaGV2cm9uUmlnaHRJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvbkRvdWJsZVJpZ2h0SWNvbiIsIm1vdGlvbiIsIkNsYXNzaWZ5IiwiaW1hZ2VzIiwic3JjIiwiYWx0IiwiYXJyb3dTdHlsZXMiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsInBhZGRpbmciLCJ6SW5kZXgiLCJhcnJvd1N0eWxlczEiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXNGb3JtYXR0ZXIiLCJjdXJyZW50SXRlbSIsInRvdGFsIiwicmVuZGVyQXJyb3dQcmV2IiwiY2xpY2tIYW5kbGVyIiwiaGFzUHJldiIsImxhYmVsUHJldiIsIndoaWxlVGFwIiwic2NhbGUiLCJyZW5kZXJBcnJvd05leHQiLCJoYXNOZXh0IiwibGFiZWxOZXh0Iiwib25DbGljayIsInAiLCJzaG93SW5kaWNhdG9ycyIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});