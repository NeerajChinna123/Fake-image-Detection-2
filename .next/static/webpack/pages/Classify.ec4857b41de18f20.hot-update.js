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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[3rem] mt-20 flex justify-center max-w-3xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex -ml-[40rem]\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute font-sans group top-[38rem] right-[18.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[10rem] cursor-pointer\",\n                        onClick: clickHandler,\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[13rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                            onClick: clickHandler,\n                            className: \"w-14 h-14 cursor-pointer rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderIndicator: function(onClickHandler, isSelected, index, label) {\n                    var defStyle = {\n                        marginLeft: 10,\n                        marginTop: 10,\n                        width: 20,\n                        flexWrap: \"wrap\",\n                        color: \"white\",\n                        cursor: \"pointer\"\n                    };\n                    var style = isSelected ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle), {\n                        color: \"red\"\n                    }) : (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        // style={style}\n                        className: isSelected ? \"\" : \"bg-darkBgLight rounded-full p-2 mr-5 text-gray-400 w-12 h-12 flex-wrap cursor-pointer\",\n                        onClick: onClickHandler,\n                        onKeyDown: onClickHandler,\n                        value: index,\n                        role: \"button\",\n                        tabIndex: 0,\n                        \"aria-label\": \"\".concat(label, \" \").concat(index + 1),\n                        children: index + 1\n                    }, index, false, void 0, void 0);\n                },\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-2\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VkQsS0FBSyxHQUFHLENBQUMsQ0FBRTtrQ0FFbENBLEtBQUssR0FBQyxDQUFDO3VCQUxIQSxLQUFLLHdCQU1MLENBQ1A7Z0JBQ0osQ0FBQztnQkFBRWdCLFVBQVUsRUFBRSxLQUFLOzBCQUNmbEQsMERBQVUsQ0FBQyxTQUFDb0QsS0FBSzt5Q0FDaEIsOERBQUNwQyxLQUFHO2tDQUNBLDRFQUFDcUMsS0FBRzs0QkFBQ3BDLFNBQVMsRUFBQyxxQ0FBcUM7NEJBQUNxQyxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFBRTs0QkFBRS9DLEdBQUcsRUFBRTZDLEtBQUssQ0FBQ0csSUFBSTs7Ozs7aUNBQVE7Ozs7OzZCQUN4RjtpQkFDUCxDQUFDOzs7OztxQkFDTzs7Ozs7aUJBQ1A7Ozs7O2FBQ0YsQ0FDUDtBQUNILENBQUM7QUE3RUtsRCxLQUFBQSxRQUFRO0FBK0VkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NsYXNzaWZ5LmpzP2QwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSU1BR0VTIGZyb20gJy4uL0ltYWdlcy9JbWFnZXMnXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCB7Q2hldnJvblJpZ2h0SWNvbiwgQ2hldnJvbkxlZnRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IENsYXNzaWZ5ID0gKCkgPT4ge1xuXG4gIFxuIGNvbnN0IGltYWdlcyA9IFt7IHNyYzogXCIuLi9JbWFnZXNcIiwgYWx0OiBcIllvdXIgZGVzY3JpcHRpb24gaGVyZSAxXCIgfV07XG4gIGNvbnN0IGFycm93U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIi43ZW1cIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcbiAgfTtcbiAgY29uc3QgYXJyb3dTdHlsZXMxID0ge1xuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gbGc6dy1mdWxsIGxnOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1bM3JlbV0gbXQtMjAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy0zeGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICBjbGFzc05hbWU9XCJmbGV4IC1tbC1bNDByZW1dXCJcbiAgICAgICAgIHN0YXR1c0Zvcm1hdHRlcj17KGN1cnJlbnRJdGVtLHRvdGFsKSA9PiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zYW5zIGdyb3VwIHRvcC1bMzhyZW1dIHJpZ2h0LVsxOC41cmVtXSB3LVs1cmVtXSB0ZXh0LVsxcmVtXSB0ZXh0LWRhcmtCZ1wiPntjdXJyZW50SXRlbX0gLyB7dG90YWx9PC9kaXY+XG4gICAgICAgICApfVxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhjbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsUHJldikgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszN3JlbV0gbGVmdC1bMTByZW1dIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC00IHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsoY2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbE5leHQpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzdyZW1dIGxlZnQtWzEzcmVtXSBtbC02MFwiXG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gIFxuICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbiAgb25DbGljaz17Y2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGJnLWRhcmtCZ0xpZ2h0IHAtNCB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBncm91cC1ob3ZlcjpiZy1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgKX1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlckluZGljYXRvcj17KG9uQ2xpY2tIYW5kbGVyLCBpc1NlbGVjdGVkLCBpbmRleCwgbGFiZWwpID0+IHtcbiAgICAgICAgY29uc3QgZGVmU3R5bGUgPSB7bWFyZ2luTGVmdDogMTAsbWFyZ2luVG9wOjEwLHdpZHRoOjIwLCBmbGV4V3JhcDond3JhcCcsIGNvbG9yOiBcIndoaXRlXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBpc1NlbGVjdGVkXG4gICAgICAgICAgPyB7IC4uLmRlZlN0eWxlLCBjb2xvcjogXCJyZWRcIiB9XG4gICAgICAgICAgOiB7IC4uLmRlZlN0eWxlIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgLy8gc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJycgOiAnYmctZGFya0JnTGlnaHQgcm91bmRlZC1mdWxsIHAtMiBtci01IHRleHQtZ3JheS00MDAgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcid9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIG9uS2V5RG93bj17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICB2YWx1ZT17aW5kZXh9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2Ake2xhYmVsfSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCsxfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH19IHNob3dUaHVtYnM9e2ZhbHNlfT4gIFxuICAgICAgICAgIHtJTUFHRVMubWFwKChpbWFnZSk9PihcbiAgICAgICAgICAgIDxkaXY+ICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLVszNHJlbV0gb2JqZWN0LWNvbnRhaW4gYm9yZGVyLXItMlwiIGlkPXtpbWFnZS5pZH0gc3JjPXtpbWFnZS5wYXRofT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NpZnlcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJJTUFHRVMiLCJDYXJvdXNlbCIsIkNoZXZyb25SaWdodEljb24iLCJDaGV2cm9uTGVmdEljb24iLCJtb3Rpb24iLCJDbGFzc2lmeSIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJvbkNsaWNrIiwid2hpbGVUYXAiLCJzY2FsZSIsInJlbmRlckFycm93TmV4dCIsImhhc05leHQiLCJsYWJlbE5leHQiLCJyZW5kZXJJbmRpY2F0b3IiLCJvbkNsaWNrSGFuZGxlciIsImlzU2VsZWN0ZWQiLCJpbmRleCIsImxhYmVsIiwiZGVmU3R5bGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJmbGV4V3JhcCIsImNvbG9yIiwiY3Vyc29yIiwic3R5bGUiLCJzcGFuIiwib25LZXlEb3duIiwidmFsdWUiLCJyb2xlIiwidGFiSW5kZXgiLCJhcmlhLWxhYmVsIiwic2hvd1RodW1icyIsIm1hcCIsImltYWdlIiwiaW1nIiwiaWQiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});