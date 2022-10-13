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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full h-[48rem] mt-10 flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                    className: \"flex\",\n                    statusFormatter: function(currentItem, total) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute font-sans group top-[36rem] right-[23.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                            children: [\n                                currentItem,\n                                \" / \",\n                                total\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    },\n                    renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                            className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                            //onClick={clickHandler}\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, {\n                                className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                            className: \"absolute group top-[39rem] left-[9rem] ml-60\",\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"#Question\",\n                                onClick: clickHandler,\n                                className: \"group cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"rounded-[0.2rem] bg-gray-800 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-16 w-44 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"tracking-[0.2rem] text-[1.5rem]\",\n                                                children: \"Next\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PaperAirplaneIcon, {\n                                                className: \"h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                    //   return (\n                    //     <span\n                    //      // style={style}\n                    //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                    //       onClick={onClickHandler}\n                    //       onKeyDown={onClickHandler}\n                    //       value={index}\n                    //       key={index}\n                    //       role=\"button\"\n                    //       tabIndex={0}\n                    //       aria-label={`${label} ${index + 1}`}\n                    //     >\n                    //       {index+1}\n                    //     </span>\n                    //   );\n                    // }}\n                    showIndicators: false,\n                    showThumbs: false,\n                    children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-[34rem] rounded-lg object-contain border-r-4\",\n                                id: image.id,\n                                src: image.path\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtnQ0FBQ3NCLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQUFFO2dDQUFFaEMsR0FBRyxFQUFFOEIsS0FBSyxDQUFDRyxJQUFJOzs7OztxQ0FBUTs7Ozs7aUNBQ25HO3FCQUNQLENBQUM7Ozs7O3lCQUNPOzs7OztxQkFDUDswQkFJTiw4REFBQ3hCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7MEJBQzNELDRFQUFDYiw0REFBUTs7Ozt5QkFBRzs7Ozs7cUJBQ1I7Ozs7OzthQUNGLENBQ1A7QUFDSCxDQUFDO0FBL0ZLQyxLQUFBQSxRQUFRO0FBaUdkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NsYXNzaWZ5LmpzP2QwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSU1BR0VTIGZyb20gJy4uL0ltYWdlcy9JbWFnZXMnXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCB7Q2hldnJvblJpZ2h0SWNvbiwgQ2hldnJvbkxlZnRJY29uICxQYXBlckFpcnBsYW5lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nO1xuXG5jb25zdCBDbGFzc2lmeSA9ICgpID0+IHtcblxuICBcbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIGNvbnN0IGFycm93U3R5bGVzMSA9IHtcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGxnOnctZnVsbCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBoLVs0OHJlbV0gbXQtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnRJdGVtLHRvdGFsKSA9PiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIGdyb3VwIHRvcC1bMzZyZW1dIHJpZ2h0LVsyMy41cmVtXSB3LVs1cmVtXSB0ZXh0LVsxcmVtXSB0ZXh0LWRhcmtCZ1wiPntjdXJyZW50SXRlbX0gLyB7dG90YWx9PC9kaXY+XG4gICAgICAgICApfVxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhjbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsUHJldikgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszN3JlbV0gbGVmdC1bMTByZW1dIGN1cnNvci1wb2ludGVyIGhpZGRlblwiXG4gICAgICAgICAgLy9vbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC00IHRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsoY2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbE5leHQpID0+IChcblxuXG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzlyZW1dIGxlZnQtWzlyZW1dIG1sLTYwXCJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSAgXG4gICAgICAgICAgIFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgaHJlZj1cIiNRdWVzdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMC4ycmVtXSBiZy1ncmF5LTgwMCBmb250LXVidW50dSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LWdyYXktODAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBsZzpob3ZlcjpiZy1ncmF5LTQwMCBsZzpob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCI+IFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiB3LTQ0IHNwYWNlLXgtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctWzAuMnJlbV0gdGV4dC1bMS41cmVtXVwiPk5leHQ8L3A+XG4gICAgICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gY2xhc3NOYW1lPVwiaC03IHctNyBhbmltYXRlLXB1bHNlIHJvdGF0ZS05MCBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgKX1cbiAgICAgICAgXG4gICAgICAvLyAgIHJlbmRlckluZGljYXRvcj17KG9uQ2xpY2tIYW5kbGVyLCBpc1NlbGVjdGVkLCBpbmRleCwgbGFiZWwpID0+IHtcbiAgICAgIC8vICAgcmV0dXJuIChcbiAgICAgIC8vICAgICA8c3BhblxuICAgICAgLy8gICAgICAvLyBzdHlsZT17c3R5bGV9XG4gICAgICAvLyAgICAgICBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyAnYmctZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGhvdmVyOnRleHQtZGFya0JnTGlnaHQgdGV4dC1kYXJrQmdMaWdodCBob3ZlcjpiZy1ncmF5LTUwMCByb3VuZGVkLWZ1bGwgcC0zIG1yLTIgbWItMiB3LTEyIGgtMTIgZmxleC13cmFwIGN1cnNvci1wb2ludGVyJyA6ICdiZy1kYXJrQmdMaWdodCBtYi0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBob3ZlcjpiZy1ncmF5LTUwMCByb3VuZGVkLWZ1bGwgcC0zIG1yLTIgdGV4dC1ncmF5LTMwMCB3LTEyIGgtMTIgZmxleC13cmFwIGN1cnNvci1wb2ludGVyJ31cbiAgICAgIC8vICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgLy8gICAgICAgb25LZXlEb3duPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgIC8vICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgIC8vICAgICAgIGtleT17aW5kZXh9XG4gICAgICAvLyAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIC8vICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgLy8gICAgICAgYXJpYS1sYWJlbD17YCR7bGFiZWx9ICR7aW5kZXggKyAxfWB9XG4gICAgICAvLyAgICAgPlxuICAgICAgLy8gICAgICAge2luZGV4KzF9XG4gICAgICAvLyAgICAgPC9zcGFuPlxuICAgICAgLy8gICApO1xuICAgICAgLy8gfX1cbiAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XG4gICAgICAgc2hvd1RodW1icz17ZmFsc2V9PiAgXG4gICAgICAgICAge0lNQUdFUy5tYXAoKGltYWdlKT0+KFxuICAgICAgICAgICAgPGRpdj4gICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtWzM0cmVtXSByb3VuZGVkLWxnIG9iamVjdC1jb250YWluIGJvcmRlci1yLTRcIiBpZD17aW1hZ2UuaWR9IHNyYz17aW1hZ2UucGF0aH0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItMiBiZy1ncmF5LTUwMCB3LTE2IGgtMTZcIj5cbiAgICAgICAgPHA+IEZPUk0gU0VDVElPTjwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmeVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIklNQUdFUyIsIkNhcm91c2VsIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIlBhcGVyQWlycGxhbmVJY29uIiwibW90aW9uIiwiUXVlc3Rpb24iLCJDbGFzc2lmeSIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJ3aGlsZVRhcCIsInNjYWxlIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImxhYmVsTmV4dCIsImEiLCJocmVmIiwib25DbGljayIsInAiLCJzaG93SW5kaWNhdG9ycyIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});