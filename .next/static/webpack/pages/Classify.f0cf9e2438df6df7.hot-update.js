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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-full h-[54rem] mt-10 flex justify-center max-w-4xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute font-sans group top-[36rem] right-[23.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                        //onClick={clickHandler}\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[39rem] left-[12rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: clickHandler,\n                            className: \"flex space-x-4 h-14 w-40 cursor-pointer rounded-md bg-darkBgLight text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"tracking-wide font-sans text-[2rem]\",\n                                    children: \"Next \"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronDoubleRightIcon, {\n                                    className: \"h-10 w-10\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                //   return (\n                //     <span\n                //      // style={style}\n                //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                //       onClick={onClickHandler}\n                //       onKeyDown={onClickHandler}\n                //       value={index}\n                //       key={index}\n                //       role=\"button\"\n                //       tabIndex={0}\n                //       aria-label={`${label} ${index + 1}`}\n                //     >\n                //       {index+1}\n                //     </span>\n                //   );\n                // }}\n                showIndicators: false,\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-4\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILENBQUM7QUFqRktqQyxLQUFBQSxRQUFRO0FBbUZkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NsYXNzaWZ5LmpzP2QwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSU1BR0VTIGZyb20gJy4uL0ltYWdlcy9JbWFnZXMnXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCB7Q2hldnJvblJpZ2h0SWNvbiwgQ2hldnJvbkxlZnRJY29uICxDaGV2cm9uRG91YmxlUmlnaHRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgQ2xhc3NpZnkgPSAoKSA9PiB7XG5cbiAgXG4gY29uc3QgaW1hZ2VzID0gW3sgc3JjOiBcIi4uL0ltYWdlc1wiLCBhbHQ6IFwiWW91ciBkZXNjcmlwdGlvbiBoZXJlIDFcIiB9XTtcbiAgY29uc3QgYXJyb3dTdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICBjb25zdCBhcnJvd1N0eWxlczEgPSB7XG4gICAgdG9wOiBcIi43ZW1cIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBsZzp3LWZ1bGwgbGc6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgaC1bNTRyZW1dIG10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICAgICBzdGF0dXNGb3JtYXR0ZXI9eyhjdXJyZW50SXRlbSx0b3RhbCkgPT4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyBncm91cCB0b3AtWzM2cmVtXSByaWdodC1bMjMuNXJlbV0gdy1bNXJlbV0gdGV4dC1bMXJlbV0gdGV4dC1kYXJrQmdcIj57Y3VycmVudEl0ZW19IC8ge3RvdGFsfTwvZGl2PlxuICAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dQcmV2PXsoY2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbFByZXYpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzdyZW1dIGxlZnQtWzEwcmVtXSBjdXJzb3ItcG9pbnRlciBoaWRkZW5cIlxuICAgICAgICAgIC8vb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19IFxuICAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWRhcmtCZ0xpZ2h0IHAtNCB0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBncm91cC1ob3ZlcjpiZy1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KGNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWxOZXh0KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM5cmVtXSBsZWZ0LVsxMnJlbV0gbWwtNjBcIlxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19ICBcbiAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGgtMTQgdy00MCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJnLWRhcmtCZ0xpZ2h0IHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZSBmb250LXNhbnMgdGV4dC1bMnJlbV1cIj5OZXh0IDwvcD5cbiAgICAgICAgICAgICAgPENoZXZyb25Eb3VibGVSaWdodEljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICApfVxuICAgICAgICBcbiAgICAgIC8vICAgcmVuZGVySW5kaWNhdG9yPXsob25DbGlja0hhbmRsZXIsIGlzU2VsZWN0ZWQsIGluZGV4LCBsYWJlbCkgPT4ge1xuICAgICAgLy8gICByZXR1cm4gKFxuICAgICAgLy8gICAgIDxzcGFuXG4gICAgICAvLyAgICAgIC8vIHN0eWxlPXtzdHlsZX1cbiAgICAgIC8vICAgICAgIGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/ICdiZy1ncmF5LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgaG92ZXI6dGV4dC1kYXJrQmdMaWdodCB0ZXh0LWRhcmtCZ0xpZ2h0IGhvdmVyOmJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBwLTMgbXItMiBtYi0yIHctMTIgaC0xMiBmbGV4LXdyYXAgY3Vyc29yLXBvaW50ZXInIDogJ2JnLWRhcmtCZ0xpZ2h0IG1iLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGhvdmVyOmJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBwLTMgbXItMiB0ZXh0LWdyYXktMzAwIHctMTIgaC0xMiBmbGV4LXdyYXAgY3Vyc29yLXBvaW50ZXInfVxuICAgICAgLy8gICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAvLyAgICAgICBvbktleURvd249e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgLy8gICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgLy8gICAgICAga2V5PXtpbmRleH1cbiAgICAgIC8vICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgLy8gICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAvLyAgICAgICBhcmlhLWxhYmVsPXtgJHtsYWJlbH0gJHtpbmRleCArIDF9YH1cbiAgICAgIC8vICAgICA+XG4gICAgICAvLyAgICAgICB7aW5kZXgrMX1cbiAgICAgIC8vICAgICA8L3NwYW4+XG4gICAgICAvLyAgICk7XG4gICAgICAvLyB9fVxuICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cbiAgICAgICBzaG93VGh1bWJzPXtmYWxzZX0+ICBcbiAgICAgICAgICB7SU1BR0VTLm1hcCgoaW1hZ2UpPT4oXG4gICAgICAgICAgICA8ZGl2PiAgIFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC1bMzRyZW1dIG9iamVjdC1jb250YWluIGJvcmRlci1yLTRcIiBpZD17aW1hZ2UuaWR9IHNyYz17aW1hZ2UucGF0aH0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItMiBiZy1ncmF5LTUwMCB3LTE2IGgtMTZcIj5cbiAgICAgICAgPHA+IEZPUk0gU0VDVElPTjwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmeVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIklNQUdFUyIsIkNhcm91c2VsIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIkNoZXZyb25Eb3VibGVSaWdodEljb24iLCJtb3Rpb24iLCJDbGFzc2lmeSIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJ3aGlsZVRhcCIsInNjYWxlIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImxhYmVsTmV4dCIsIm9uQ2xpY2siLCJwIiwic2hvd0luZGljYXRvcnMiLCJzaG93VGh1bWJzIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJpZCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});