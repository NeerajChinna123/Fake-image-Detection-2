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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n // requires a loader\n\n\n\n\nvar Classify = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), currentIt = ref[0], setCurrentIt = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), totalIm = ref1[0], setTotalIm = ref1[1];\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full h-[48rem] mt-10 flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                    className: \"flex\",\n                    statusFormatter: function(currentItem, total) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute font-sans group top-[36rem] right-[26.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                            children: [\n                                currentIt,\n                                \" / \",\n                                totalIm,\n                                \" \",\n                                setCurrentIt(currentItem),\n                                \" \",\n                                setTotalIm(total),\n                                \"  \"\n                            ]\n                        }, void 0, true, void 0, void 0);\n                    },\n                    renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[37rem] left-[10rem] cursor-pointer hidden\",\n                            //onClick={clickHandler}\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ChevronLeftIcon, {\n                                className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            className: \"absolute group top-[39rem] left-[9rem] ml-60\",\n                            whileTap: {\n                                scale: 0.95\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                href: \"#Question\",\n                                onClick: clickHandler,\n                                className: \"group cursor-pointer \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    className: \"rounded-[0.2rem] bg-gray-800 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex h-16 w-44 space-x-4 justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-105\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"tracking-[0.2rem] text-[1.5rem]\",\n                                                children: \"Next\"\n                                            }, void 0, false, void 0, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PaperAirplaneIcon, {\n                                                className: \"h-7 w-7 animate-pulse rotate-90 hover:text-darkBgLight\"\n                                            }, void 0, false, void 0, void 0)\n                                        ]\n                                    }, void 0, true, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    },\n                    //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                    //   return (\n                    //     <span\n                    //      // style={style}\n                    //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                    //       onClick={onClickHandler}\n                    //       onKeyDown={onClickHandler}\n                    //       value={index}\n                    //       key={index}\n                    //       role=\"button\"\n                    //       tabIndex={0}\n                    //       aria-label={`${label} ${index + 1}`}\n                    //     >\n                    //       {index+1}\n                    //     </span>\n                    //   );\n                    // }}\n                    showIndicators: false,\n                    showThumbs: false,\n                    children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-[34rem] object-contain border-r-4\",\n                                id: image.id,\n                                src: image.path\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full flex justify-center max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Classify, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DbGFzc2lmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QjtBQUNFO0FBQ087QUFDTDtBQUMrQixDQUFDLG9CQUFvQjtBQUMvQjtBQUN3QztBQUN0RDtBQUNPO0FBRTlDLElBQU1VLFFBQVEsR0FBRyxXQUFNOztJQUV2QixJQUFpQ1AsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXBDUSxTQUFTLEdBQWlCUixHQUFVLEdBQTNCLEVBQUVTLFlBQVksR0FBR1QsR0FBVSxHQUFiO0lBRTlCLElBQTZCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBaENVLE9BQU8sR0FBZVYsSUFBVSxHQUF6QixFQUFFVyxVQUFVLEdBQUdYLElBQVUsR0FBYjtJQUV6QixJQUFNWSxNQUFNLEdBQUc7UUFBQztZQUFFQyxHQUFHLEVBQUUsV0FBVztZQUFFQyxHQUFHLEVBQUUseUJBQXlCO1NBQUU7S0FBQztJQUNwRSxJQUFNQyxXQUFXLEdBQUc7UUFDbEJDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxHQUFHLEVBQUUsTUFBTTtRQUNYQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxNQUFNLEVBQUUsQ0FBQztLQUVWO0lBQ0QsSUFBTUMsWUFBWSxHQUFHO1FBQ25CSixHQUFHLEVBQUUsTUFBTTtRQUNYQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxNQUFNLEVBQUUsQ0FBQztLQUVWO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9FQUFxRTs7MEJBQ2xGLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsOERBQThEOzBCQUMzRSw0RUFBQ3RCLCtEQUFRO29CQUNSc0IsU0FBUyxFQUFDLE1BQU07b0JBQ2hCQyxlQUFlLEVBQUUsU0FBQ0MsV0FBVyxFQUFDQyxLQUFLOzZDQUNqQyw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHVGQUF1Rjs7Z0NBQUVmLFNBQVM7Z0NBQUMsS0FBRztnQ0FBQ0UsT0FBTztnQ0FBQyxHQUFDO2dDQUFDRCxZQUFZLENBQUNnQixXQUFXLENBQUM7Z0NBQUMsR0FBQztnQ0FBQ2QsVUFBVSxDQUFDZSxLQUFLLENBQUM7Z0NBQUMsSUFBRTs7d0RBQU07cUJBQ3ZMO29CQUNGQyxlQUFlLEVBQUUsU0FBQ0MsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7NkNBQ2hELDhEQUFDekIscURBQVU7NEJBQ1hrQixTQUFTLEVBQUMsK0RBQStEOzRCQUN6RSx3QkFBd0I7NEJBQ3hCUSxRQUFRLEVBQUU7Z0NBQUVDLEtBQUssRUFBRSxJQUFJOzZCQUFFO3NDQUd2Qiw0RUFBQzdCLG1FQUFlO2dDQUFDb0IsU0FBUyxFQUFDLGtKQUFtSjs2REFBRzt5REFDdEs7cUJBQ2Q7b0JBQ0RVLGVBQWUsRUFBRSxTQUFDTCxZQUFZLEVBQUVNLE9BQU8sRUFBRUMsU0FBUzs2Q0FDaEQsOERBQUM5QixxREFBVTs0QkFDWGtCLFNBQVMsRUFBQyw4Q0FBOEM7NEJBQ3hEUSxRQUFRLEVBQUU7Z0NBQUVDLEtBQUssRUFBRSxJQUFJOzZCQUFFO3NDQUd2Qiw0RUFBQzNCLG1EQUFRO2dDQUNUZ0MsSUFBSSxFQUFDLFdBQVc7Z0NBQ2hCQyxPQUFPLEVBQUVWLFlBQVk7Z0NBQ3JCTCxTQUFTLEVBQUMsdUJBQXVCOzBDQUVsQyw0RUFBQ2xCLHFEQUFVO29DQUFDa0IsU0FBUyxFQUFDLHdMQUF5TDs4Q0FDL00sNEVBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQywwSEFBMEg7OzBEQUN4SSw4REFBQ2dCLEdBQUM7Z0RBQUNoQixTQUFTLEVBQUMsaUNBQWlDOzBEQUFDLE1BQUk7NkVBQUk7MERBQ3ZELDhEQUFDbkIscUVBQWlCO2dEQUFDbUIsU0FBUyxFQUFDLHdEQUF3RDs2RUFBRzs7b0VBQ3BGO2lFQUNPOzZEQUNGO3lEQUNFO3FCQUNmO29CQUVGLHFFQUFxRTtvQkFDckUsYUFBYTtvQkFDYixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsa1dBQWtXO29CQUNsVyxpQ0FBaUM7b0JBQ2pDLG1DQUFtQztvQkFDbkMsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQiw2Q0FBNkM7b0JBQzdDLFFBQVE7b0JBQ1Isa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLE9BQU87b0JBQ1AsS0FBSztvQkFDSmlCLGNBQWMsRUFBRSxLQUFLO29CQUNyQkMsVUFBVSxFQUFFLEtBQUs7OEJBQ2IxQywwREFBVSxDQUFDLFNBQUM0QyxLQUFLOzZDQUNoQiw4REFBQ3JCLEtBQUc7c0NBQ0EsNEVBQUNzQixLQUFHO2dDQUFDckIsU0FBUyxFQUFDLHFDQUFxQztnQ0FBQ3NCLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQUFFO2dDQUFFaEMsR0FBRyxFQUFFOEIsS0FBSyxDQUFDRyxJQUFJOzs7OztxQ0FBUTs7Ozs7aUNBQ3hGO3FCQUNQLENBQUM7Ozs7O3lCQUNPOzs7OztxQkFDUDswQkFJTiw4REFBQ3hCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7MEJBQzNELDRFQUFDakIsNERBQVE7Ozs7eUJBQUc7Ozs7O3FCQUNSOzs7Ozs7YUFDRixDQUNQO0FBQ0gsQ0FBQztHQS9GS0MsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBaUdkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NsYXNzaWZ5LmpzP2QwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSU1BR0VTIGZyb20gJy4uL0ltYWdlcy9JbWFnZXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQge0NoZXZyb25SaWdodEljb24sIENoZXZyb25MZWZ0SWNvbiAsUGFwZXJBaXJwbGFuZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXN0aW9uJztcblxuY29uc3QgQ2xhc3NpZnkgPSAoKSA9PiB7XG4gIFxuY29uc3QgW2N1cnJlbnRJdCwgc2V0Q3VycmVudEl0XSA9dXNlU3RhdGUoKTtcblxuY29uc3QgW3RvdGFsSW0sIHNldFRvdGFsSW1dID11c2VTdGF0ZSgpO1xuXG4gY29uc3QgaW1hZ2VzID0gW3sgc3JjOiBcIi4uL0ltYWdlc1wiLCBhbHQ6IFwiWW91ciBkZXNjcmlwdGlvbiBoZXJlIDFcIiB9XTtcbiAgY29uc3QgYXJyb3dTdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICBjb25zdCBhcnJvd1N0eWxlczEgPSB7XG4gICAgdG9wOiBcIi43ZW1cIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBsZzp3LWZ1bGwgbGc6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgaC1bNDhyZW1dIG10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXG4gICAgICAgICBzdGF0dXNGb3JtYXR0ZXI9eyhjdXJyZW50SXRlbSx0b3RhbCkgPT4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyBncm91cCB0b3AtWzM2cmVtXSByaWdodC1bMjYuNXJlbV0gdy1bNXJlbV0gdGV4dC1bMXJlbV0gdGV4dC1kYXJrQmdcIj57Y3VycmVudEl0fSAvIHt0b3RhbEltfSB7c2V0Q3VycmVudEl0KGN1cnJlbnRJdGVtKX0ge3NldFRvdGFsSW0odG90YWwpfSAgPC9kaXY+XG4gICAgICAgICApIH1cbiAgICAgICAgcmVuZGVyQXJyb3dQcmV2PXsoY2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbFByZXYpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzdyZW1dIGxlZnQtWzEwcmVtXSBjdXJzb3ItcG9pbnRlciBoaWRkZW5cIlxuICAgICAgICAgIC8vb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19IFxuICAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWRhcmtCZ0xpZ2h0IHAtNCB0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBncm91cC1ob3ZlcjpiZy1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KGNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWxOZXh0KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM5cmVtXSBsZWZ0LVs5cmVtXSBtbC02MFwiXG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gIFxuICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgIGhyZWY9XCIjUXVlc3Rpb25cIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgY3Vyc29yLXBvaW50ZXIgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzAuMnJlbV0gYmctZ3JheS04MDAgZm9udC11YnVudHUgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1ncmF5LTgwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgbGc6aG92ZXI6YmctZ3JheS00MDAgbGc6aG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiPiBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTYgdy00NCBzcGFjZS14LTQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNraW5nLVswLjJyZW1dIHRleHQtWzEuNXJlbV1cIj5OZXh0PC9wPlxuICAgICAgICAgICAgPFBhcGVyQWlycGxhbmVJY29uIGNsYXNzTmFtZT1cImgtNyB3LTcgYW5pbWF0ZS1wdWxzZSByb3RhdGUtOTAgaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICl9XG4gICAgICAgIFxuICAgICAgLy8gICByZW5kZXJJbmRpY2F0b3I9eyhvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPHNwYW5cbiAgICAgIC8vICAgICAgLy8gc3R5bGU9e3N0eWxlfVxuICAgICAgLy8gICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJ2JnLWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0IHRleHQtZGFya0JnTGlnaHQgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIG1iLTIgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcicgOiAnYmctZGFya0JnTGlnaHQgbWItMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIHRleHQtZ3JheS0zMDAgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcid9XG4gICAgICAvLyAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgIC8vICAgICAgIG9uS2V5RG93bj17b25DbGlja0hhbmRsZXJ9XG4gICAgICAvLyAgICAgICB2YWx1ZT17aW5kZXh9XG4gICAgICAvLyAgICAgICBrZXk9e2luZGV4fVxuICAgICAgLy8gICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAvLyAgICAgICB0YWJJbmRleD17MH1cbiAgICAgIC8vICAgICAgIGFyaWEtbGFiZWw9e2Ake2xhYmVsfSAke2luZGV4ICsgMX1gfVxuICAgICAgLy8gICAgID5cbiAgICAgIC8vICAgICAgIHtpbmRleCsxfVxuICAgICAgLy8gICAgIDwvc3Bhbj5cbiAgICAgIC8vICAgKTtcbiAgICAgIC8vIH19XG4gICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfT4gIFxuICAgICAgICAgIHtJTUFHRVMubWFwKChpbWFnZSk9PihcbiAgICAgICAgICAgIDxkaXY+ICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLVszNHJlbV0gb2JqZWN0LWNvbnRhaW4gYm9yZGVyLXItNFwiIGlkPXtpbWFnZS5pZH0gc3JjPXtpbWFnZS5wYXRofT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci0yIGJnLWdyYXktNTAwIHctMTYgaC0xNlwiPlxuICAgICAgICA8cD4gRk9STSBTRUNUSU9OPC9wPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIG1heC13LTR4bFwiPlxuICAgICAgICA8UXVlc3Rpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzaWZ5XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiSU1BR0VTIiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIkNoZXZyb25SaWdodEljb24iLCJDaGV2cm9uTGVmdEljb24iLCJQYXBlckFpcnBsYW5lSWNvbiIsIm1vdGlvbiIsIlF1ZXN0aW9uIiwiQ2xhc3NpZnkiLCJjdXJyZW50SXQiLCJzZXRDdXJyZW50SXQiLCJ0b3RhbEltIiwic2V0VG90YWxJbSIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJ3aGlsZVRhcCIsInNjYWxlIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImxhYmVsTmV4dCIsImEiLCJocmVmIiwib25DbGljayIsInAiLCJzaG93SW5kaWNhdG9ycyIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});