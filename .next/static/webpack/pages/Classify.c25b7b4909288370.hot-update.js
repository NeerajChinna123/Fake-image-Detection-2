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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // requires a loader\n\n\n\n\nvar Classify = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), currentIt = ref[0], setCurrentIt = ref[1];\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full h-[48rem] mt-10 flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                    className: \"flex\",\n                    statusFormatter: function(currentItem, total) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute font-sans group top-[36rem] right-[26.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                            children: [\n                                currentIt,\n                                \" / \",\n                                total,\n                                \" \",\n                                setCurrentIt(currentItem),\n                                \" \",\n                                console.log(\"test\", currentIt)\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    },\n                    renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                            //onClick={clickHandler}\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ChevronLeftIcon, {\n                                className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[39rem] left-[9rem] ml-60\",\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                href: \"#Question\",\n                                onClick: clickHandler,\n                                className: \"group cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    className: \"rounded-[0.2rem] bg-gray-800 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-16 w-44 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"tracking-[0.2rem] text-[1.5rem]\",\n                                                children: \"Next\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PaperAirplaneIcon, {\n                                                className: \"h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                    //   return (\n                    //     <span\n                    //      // style={style}\n                    //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                    //       onClick={onClickHandler}\n                    //       onKeyDown={onClickHandler}\n                    //       value={index}\n                    //       key={index}\n                    //       role=\"button\"\n                    //       tabIndex={0}\n                    //       aria-label={`${label} ${index + 1}`}\n                    //     >\n                    //       {index+1}\n                    //     </span>\n                    //   );\n                    // }}\n                    showIndicators: false,\n                    showThumbs: false,\n                    children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-[34rem] object-contain border-r-4\",\n                                id: image.id,\n                                src: image.path\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Classify, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsT0FBTztvQkFDUCxLQUFLO29CQUNKbUIsY0FBYyxFQUFFLEtBQUs7b0JBQ3JCQyxVQUFVLEVBQUUsS0FBSzs4QkFDYjFDLDBEQUFVLENBQUMsU0FBQzRDLEtBQUs7NkNBQ2hCLDhEQUFDdkIsS0FBRztzQ0FDQSw0RUFBQ3dCLEtBQUc7Z0NBQUN2QixTQUFTLEVBQUMscUNBQXFDO2dDQUFDd0IsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBQUU7Z0NBQUVsQyxHQUFHLEVBQUVnQyxLQUFLLENBQUNHLElBQUk7Ozs7O3FDQUFROzs7OztpQ0FDeEY7cUJBQ1AsQ0FBQzs7Ozs7eUJBQ087Ozs7O3FCQUNQOzBCQUlOLDhEQUFDMUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDhDQUE4QzswQkFDM0QsNEVBQUNmLDREQUFROzs7O3lCQUFHOzs7OztxQkFDUjs7Ozs7O2FBQ0YsQ0FDUDtBQUNILENBQUM7R0E3RktDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQStGZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DbGFzc2lmeS5qcz9kMGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElNQUdFUyBmcm9tICcuLi9JbWFnZXMvSW1hZ2VzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IHtDaGV2cm9uUmlnaHRJY29uLCBDaGV2cm9uTGVmdEljb24gLFBhcGVyQWlycGxhbmVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbic7XG5cbmNvbnN0IENsYXNzaWZ5ID0gKCkgPT4ge1xuICBcbmNvbnN0IFtjdXJyZW50SXQsIHNldEN1cnJlbnRJdF0gPXVzZVN0YXRlKCk7XG5cbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIGNvbnN0IGFycm93U3R5bGVzMSA9IHtcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGxnOnctZnVsbCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBoLVs0OHJlbV0gbXQtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnRJdGVtLHRvdGFsKSA9PiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIGdyb3VwIHRvcC1bMzZyZW1dIHJpZ2h0LVsyNi41cmVtXSB3LVs1cmVtXSB0ZXh0LVsxcmVtXSB0ZXh0LWRhcmtCZ1wiPntjdXJyZW50SXR9IC8ge3RvdGFsfSB7c2V0Q3VycmVudEl0KGN1cnJlbnRJdGVtKX0ge2NvbnNvbGUubG9nKCd0ZXN0JyxjdXJyZW50SXQpIH08L2Rpdj5cbiAgICAgICAgICkgfVxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhjbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsUHJldikgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszN3JlbV0gbGVmdC1bMTByZW1dIGN1cnNvci1wb2ludGVyIGhpZGRlblwiXG4gICAgICAgICAgLy9vbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC00IHRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsoY2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbE5leHQpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzlyZW1dIGxlZnQtWzlyZW1dIG1sLTYwXCJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSAgXG4gICAgICAgICAgIFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgaHJlZj1cIiNRdWVzdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMC4ycmVtXSBiZy1ncmF5LTgwMCBmb250LXVidW50dSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LWdyYXktODAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBsZzpob3ZlcjpiZy1ncmF5LTQwMCBsZzpob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCI+IFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiB3LTQ0IHNwYWNlLXgtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctWzAuMnJlbV0gdGV4dC1bMS41cmVtXVwiPk5leHQ8L3A+XG4gICAgICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gY2xhc3NOYW1lPVwiaC03IHctNyBhbmltYXRlLXB1bHNlIHJvdGF0ZS05MCBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgKX1cbiAgICAgICAgXG4gICAgICAvLyAgIHJlbmRlckluZGljYXRvcj17KG9uQ2xpY2tIYW5kbGVyLCBpc1NlbGVjdGVkLCBpbmRleCwgbGFiZWwpID0+IHtcbiAgICAgIC8vICAgcmV0dXJuIChcbiAgICAgIC8vICAgICA8c3BhblxuICAgICAgLy8gICAgICAvLyBzdHlsZT17c3R5bGV9XG4gICAgICAvLyAgICAgICBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyAnYmctZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGhvdmVyOnRleHQtZGFya0JnTGlnaHQgdGV4dC1kYXJrQmdMaWdodCBob3ZlcjpiZy1ncmF5LTUwMCByb3VuZGVkLWZ1bGwgcC0zIG1yLTIgbWItMiB3LTEyIGgtMTIgZmxleC13cmFwIGN1cnNvci1wb2ludGVyJyA6ICdiZy1kYXJrQmdMaWdodCBtYi0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBob3ZlcjpiZy1ncmF5LTUwMCByb3VuZGVkLWZ1bGwgcC0zIG1yLTIgdGV4dC1ncmF5LTMwMCB3LTEyIGgtMTIgZmxleC13cmFwIGN1cnNvci1wb2ludGVyJ31cbiAgICAgIC8vICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgLy8gICAgICAgb25LZXlEb3duPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgIC8vICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgIC8vICAgICAgIGtleT17aW5kZXh9XG4gICAgICAvLyAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIC8vICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgLy8gICAgICAgYXJpYS1sYWJlbD17YCR7bGFiZWx9ICR7aW5kZXggKyAxfWB9XG4gICAgICAvLyAgICAgPlxuICAgICAgLy8gICAgICAge2luZGV4KzF9XG4gICAgICAvLyAgICAgPC9zcGFuPlxuICAgICAgLy8gICApO1xuICAgICAgLy8gfX1cbiAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XG4gICAgICAgc2hvd1RodW1icz17ZmFsc2V9PiAgXG4gICAgICAgICAge0lNQUdFUy5tYXAoKGltYWdlKT0+KFxuICAgICAgICAgICAgPGRpdj4gICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtWzM0cmVtXSBvYmplY3QtY29udGFpbiBib3JkZXItci00XCIgaWQ9e2ltYWdlLmlkfSBzcmM9e2ltYWdlLnBhdGh9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yLTIgYmctZ3JheS01MDAgdy0xNiBoLTE2XCI+XG4gICAgICAgIDxwPiBGT1JNIFNFQ1RJT048L3A+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsXCI+XG4gICAgICAgIDxRdWVzdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NpZnlcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJJTUFHRVMiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIlBhcGVyQWlycGxhbmVJY29uIiwibW90aW9uIiwiUXVlc3Rpb24iLCJDbGFzc2lmeSIsImN1cnJlbnRJdCIsInNldEN1cnJlbnRJdCIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJBcnJvd1ByZXYiLCJjbGlja0hhbmRsZXIiLCJoYXNQcmV2IiwibGFiZWxQcmV2Iiwid2hpbGVUYXAiLCJzY2FsZSIsInJlbmRlckFycm93TmV4dCIsImhhc05leHQiLCJsYWJlbE5leHQiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJwIiwic2hvd0luZGljYXRvcnMiLCJzaG93VGh1bWJzIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJpZCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});