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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 lg:min-h-screen lg:w-full lg:items-center lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto flex flex-col max-w-7xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        onClick: clickHandler,\n                        whileTap: {\n                            scale: 0.99\n                        },\n                        className: \"group hover:cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"h-10 w-10 rounded-full bg-darkBgLight p-2 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        onClick: clickHandler,\n                        whileTap: {\n                            scale: 0.99\n                        },\n                        className: \"group hover:cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                            className: \"h-10 w-10 rounded-full bg-darkBgLight p-2 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderIndicator: function(onClickHandler, isSelected, index, label) {\n                    var defStyle = {\n                        marginLeft: 10,\n                        marginTop: 10,\n                        width: 20,\n                        flexWrap: \"wrap\",\n                        color: \"white\",\n                        cursor: \"pointer\"\n                    };\n                    var style = isSelected ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle), {\n                        color: \"red\"\n                    }) : (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: style,\n                        onClick: onClickHandler,\n                        onKeyDown: onClickHandler,\n                        value: index,\n                        role: \"button\",\n                        tabIndex: 0,\n                        \"aria-label\": \"\".concat(label, \" \").concat(index + 1),\n                        children: index + 1\n                    }, index, false, void 0, void 0);\n                },\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-2\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElNQUdFUyBmcm9tICcuLi9JbWFnZXMvSW1hZ2VzJ1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQge0NoZXZyb25SaWdodEljb24sIENoZXZyb25MZWZ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBDbGFzc2lmeSA9ICgpID0+IHtcblxuICBcbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyYXktMTAwIGxnOm1pbi1oLXNjcmVlbiBsZzp3LWZ1bGwgbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBmbGV4LWNvbCBtYXgtdy03eGxcIj5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgIFxuICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhjbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsUHJldikgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTkgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC0yIHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsoY2xpY2tIYW5kbGVyLCBoYXNOZXh0LCBsYWJlbE5leHQpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk5IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBiZy1kYXJrQmdMaWdodCBwLTIgdGV4dC1ncmF5LTQwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgZ3JvdXAtaG92ZXI6YmctZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICl9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJJbmRpY2F0b3I9eyhvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZlN0eWxlID0ge21hcmdpbkxlZnQ6IDEwLG1hcmdpblRvcDoxMCx3aWR0aDoyMCwgZmxleFdyYXA6J3dyYXAnLCBjb2xvcjogXCJ3aGl0ZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gaXNTZWxlY3RlZFxuICAgICAgICAgID8geyAuLi5kZWZTdHlsZSwgY29sb3I6IFwicmVkXCIgfVxuICAgICAgICAgIDogeyAuLi5kZWZTdHlsZSB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIG9uS2V5RG93bj17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICB2YWx1ZT17aW5kZXh9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2Ake2xhYmVsfSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCsxfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH19IHNob3dUaHVtYnM9e2ZhbHNlfT4gIFxuICAgICAgICAgIHtJTUFHRVMubWFwKChpbWFnZSk9PihcbiAgICAgICAgICAgIDxkaXY+ICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLVszNHJlbV0gb2JqZWN0LWNvbnRhaW4gYm9yZGVyLXItMlwiIGlkPXtpbWFnZS5pZH0gc3JjPXtpbWFnZS5wYXRofT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NpZnlcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJJTUFHRVMiLCJDYXJvdXNlbCIsIkNoZXZyb25SaWdodEljb24iLCJDaGV2cm9uTGVmdEljb24iLCJtb3Rpb24iLCJDbGFzc2lmeSIsImltYWdlcyIsInNyYyIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsInJlbmRlckFycm93UHJldiIsImNsaWNrSGFuZGxlciIsImhhc1ByZXYiLCJsYWJlbFByZXYiLCJvbkNsaWNrIiwid2hpbGVUYXAiLCJzY2FsZSIsInJlbmRlckFycm93TmV4dCIsImhhc05leHQiLCJsYWJlbE5leHQiLCJyZW5kZXJJbmRpY2F0b3IiLCJvbkNsaWNrSGFuZGxlciIsImlzU2VsZWN0ZWQiLCJpbmRleCIsImxhYmVsIiwiZGVmU3R5bGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJmbGV4V3JhcCIsImNvbG9yIiwiY3Vyc29yIiwic3R5bGUiLCJzcGFuIiwib25LZXlEb3duIiwidmFsdWUiLCJyb2xlIiwidGFiSW5kZXgiLCJhcmlhLWxhYmVsIiwic2hvd1RodW1icyIsIm1hcCIsImltYWdlIiwiaW1nIiwiaWQiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});