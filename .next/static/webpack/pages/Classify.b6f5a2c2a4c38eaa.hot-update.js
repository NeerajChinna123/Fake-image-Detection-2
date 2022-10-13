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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\nvar _this = undefined;\n\n\n\n\n\n // requires a loader\n\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full h-[48rem] mt-10 flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                    className: \"flex\",\n                    statusFormatter: function(currentItem, total) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute font-sans group top-[36rem] right-[26.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                            children: [\n                                currentItem,\n                                \" / \",\n                                total,\n                                \" \",\n                                console.log(\"test\", currentItem)\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    },\n                    renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                            //onClick={clickHandler}\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ChevronLeftIcon, {\n                                className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[39rem] left-[9rem] ml-60\",\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                href: \"#Question\",\n                                onClick: clickHandler,\n                                className: \"group cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    className: \"rounded-[0.2rem] bg-gray-800 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-16 w-44 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"tracking-[0.2rem] text-[1.5rem]\",\n                                                children: \"Next\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PaperAirplaneIcon, {\n                                                className: \"h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                    //   return (\n                    //     <span\n                    //      // style={style}\n                    //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                    //       onClick={onClickHandler}\n                    //       onKeyDown={onClickHandler}\n                    //       value={index}\n                    //       key={index}\n                    //       role=\"button\"\n                    //       tabIndex={0}\n                    //       aria-label={`${label} ${index + 1}`}\n                    //     >\n                    //       {index+1}\n                    //     </span>\n                    //   );\n                    // }}\n                    showIndicators: false,\n                    showThumbs: false,\n                    children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-[34rem] object-contain border-r-4\",\n                                id: image.id,\n                                src: image.path\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSzs2Q0FDaEIsOERBQUN2QixLQUFHO3NDQUNBLDRFQUFDd0IsS0FBRztnQ0FBQ3ZCLFNBQVMsRUFBQyxxQ0FBcUM7Z0NBQUN3QixFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFBRTtnQ0FBRWxDLEdBQUcsRUFBRWdDLEtBQUssQ0FBQ0csSUFBSTs7Ozs7cUNBQVE7Ozs7O2lDQUN4RjtxQkFDUCxDQUFDOzs7Ozt5QkFDTzs7Ozs7cUJBQ1A7MEJBSU4sOERBQUMxQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsOENBQThDOzBCQUMzRCw0RUFBQ2IsNERBQVE7Ozs7eUJBQUc7Ozs7O3FCQUNSOzs7Ozs7YUFDRixDQUNQO0FBQ0gsQ0FBQztBQTNGS0MsS0FBQUEsUUFBUTtBQTZGZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DbGFzc2lmeS5qcz9kMGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElNQUdFUyBmcm9tICcuLi9JbWFnZXMvSW1hZ2VzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IHtDaGV2cm9uUmlnaHRJY29uLCBDaGV2cm9uTGVmdEljb24gLFBhcGVyQWlycGxhbmVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbic7XG5cbmNvbnN0IENsYXNzaWZ5ID0gKCkgPT4ge1xuICBcbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIGNvbnN0IGFycm93U3R5bGVzMSA9IHtcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGxnOnctZnVsbCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBoLVs0OHJlbV0gbXQtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICBjbGFzc05hbWU9XCJmbGV4XCJcbiAgICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnRJdGVtLHRvdGFsKSA9PiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIGdyb3VwIHRvcC1bMzZyZW1dIHJpZ2h0LVsyNi41cmVtXSB3LVs1cmVtXSB0ZXh0LVsxcmVtXSB0ZXh0LWRhcmtCZ1wiPntjdXJyZW50SXRlbX0gLyB7dG90YWx9IHtjb25zb2xlLmxvZygndGVzdCcsY3VycmVudEl0ZW0pfTwvZGl2PlxuICAgICAgICAgKSB9XG4gICAgICAgIHJlbmRlckFycm93UHJldj17KGNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWxQcmV2KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM3cmVtXSBsZWZ0LVsxMHJlbV0gY3Vyc29yLXBvaW50ZXIgaGlkZGVuXCJcbiAgICAgICAgICAvL29uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSBcbiAgICAgICAgICAgIFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQtZnVsbCBiZy1kYXJrQmdMaWdodCBwLTQgdGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgZ3JvdXAtaG92ZXI6YmctZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhjbGlja0hhbmRsZXIsIGhhc05leHQsIGxhYmVsTmV4dCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszOXJlbV0gbGVmdC1bOXJlbV0gbWwtNjBcIlxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19ICBcbiAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICBocmVmPVwiI1F1ZXN0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVswLjJyZW1dIGJnLWdyYXktODAwIGZvbnQtdWJ1bnR1IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctZ3JheS04MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGxnOmhvdmVyOmJnLWdyYXktNDAwIGxnOmhvdmVyOnRleHQtZGFya0JnTGlnaHRcIj4gXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTE2IHctNDQgc3BhY2UteC00IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy1bMC4ycmVtXSB0ZXh0LVsxLjVyZW1dXCI+TmV4dDwvcD5cbiAgICAgICAgICAgIDxQYXBlckFpcnBsYW5lSWNvbiBjbGFzc05hbWU9XCJoLTcgdy03IGFuaW1hdGUtcHVsc2Ugcm90YXRlLTkwIGhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICApfVxuICAgICAgICBcbiAgICAgIC8vICAgcmVuZGVySW5kaWNhdG9yPXsob25DbGlja0hhbmRsZXIsIGlzU2VsZWN0ZWQsIGluZGV4LCBsYWJlbCkgPT4ge1xuICAgICAgLy8gICByZXR1cm4gKFxuICAgICAgLy8gICAgIDxzcGFuXG4gICAgICAvLyAgICAgIC8vIHN0eWxlPXtzdHlsZX1cbiAgICAgIC8vICAgICAgIGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/ICdiZy1ncmF5LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgaG92ZXI6dGV4dC1kYXJrQmdMaWdodCB0ZXh0LWRhcmtCZ0xpZ2h0IGhvdmVyOmJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBwLTMgbXItMiBtYi0yIHctMTIgaC0xMiBmbGV4LXdyYXAgY3Vyc29yLXBvaW50ZXInIDogJ2JnLWRhcmtCZ0xpZ2h0IG1iLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGhvdmVyOmJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBwLTMgbXItMiB0ZXh0LWdyYXktMzAwIHctMTIgaC0xMiBmbGV4LXdyYXAgY3Vyc29yLXBvaW50ZXInfVxuICAgICAgLy8gICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAvLyAgICAgICBvbktleURvd249e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgLy8gICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgLy8gICAgICAga2V5PXtpbmRleH1cbiAgICAgIC8vICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgLy8gICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAvLyAgICAgICBhcmlhLWxhYmVsPXtgJHtsYWJlbH0gJHtpbmRleCArIDF9YH1cbiAgICAgIC8vICAgICA+XG4gICAgICAvLyAgICAgICB7aW5kZXgrMX1cbiAgICAgIC8vICAgICA8L3NwYW4+XG4gICAgICAvLyAgICk7XG4gICAgICAvLyB9fVxuICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cbiAgICAgICBzaG93VGh1bWJzPXtmYWxzZX0+ICBcbiAgICAgICAgICB7SU1BR0VTLm1hcCgoaW1hZ2UpPT4oXG4gICAgICAgICAgICA8ZGl2PiAgIFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC1bMzRyZW1dIG9iamVjdC1jb250YWluIGJvcmRlci1yLTRcIiBpZD17aW1hZ2UuaWR9IHNyYz17aW1hZ2UucGF0aH0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItMiBiZy1ncmF5LTUwMCB3LTE2IGgtMTZcIj5cbiAgICAgICAgPHA+IEZPUk0gU0VDVElPTjwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy00eGxcIj5cbiAgICAgICAgPFF1ZXN0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmeVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIklNQUdFUyIsInVzZVN0YXRlIiwiQ2Fyb3VzZWwiLCJDaGV2cm9uUmlnaHRJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiUGFwZXJBaXJwbGFuZUljb24iLCJtb3Rpb24iLCJRdWVzdGlvbiIsIkNsYXNzaWZ5IiwiaW1hZ2VzIiwic3JjIiwiYWx0IiwiYXJyb3dTdHlsZXMiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsInBhZGRpbmciLCJ6SW5kZXgiLCJhcnJvd1N0eWxlczEiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXNGb3JtYXR0ZXIiLCJjdXJyZW50SXRlbSIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJ3aGlsZVRhcCIsInNjYWxlIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImxhYmVsTmV4dCIsImEiLCJocmVmIiwib25DbGljayIsInAiLCJzaG93SW5kaWNhdG9ycyIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});