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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[3rem] mt-20 flex justify-center max-w-3xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex -ml-[40rem]\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute font-sans group top-[38rem] right-[18.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[10rem] cursor-pointer\",\n                        onClick: clickHandler,\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[13rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                            onClick: clickHandler,\n                            className: \"w-14 h-14 cursor-pointer rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderIndicator: function(onClickHandler, isSelected, index, label) {\n                    var defStyle = {\n                        marginLeft: 10,\n                        marginTop: 10,\n                        width: 20,\n                        flexWrap: \"wrap\",\n                        color: \"white\",\n                        cursor: \"pointer\"\n                    };\n                    var style = isSelected ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle), {\n                        color: \"red\"\n                    }) : (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        // style={style}\n                        onClick: onClickHandler,\n                        onKeyDown: onClickHandler,\n                        value: index,\n                        role: \"button\",\n                        tabIndex: 0,\n                        \"aria-label\": \"\".concat(label, \" \").concat(index + 1),\n                        children: index + 1\n                    }, index, false, void 0, void 0);\n                },\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-2\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFMSEEsS0FBSyx3QkFNTCxDQUNQO2dCQUNKLENBQUM7Z0JBQUVnQixVQUFVLEVBQUUsS0FBSzswQkFDZmxELDBEQUFVLENBQUMsU0FBQ29ELEtBQUs7eUNBQ2hCLDhEQUFDcEMsS0FBRztrQ0FDQSw0RUFBQ3FDLEtBQUc7NEJBQUNwQyxTQUFTLEVBQUMscUNBQXFDOzRCQUFDcUMsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBQUU7NEJBQUUvQyxHQUFHLEVBQUU2QyxLQUFLLENBQUNHLElBQUk7Ozs7O2lDQUFROzs7Ozs2QkFDeEY7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ087Ozs7O2lCQUNQOzs7OzthQUNGLENBQ1A7QUFDSCxDQUFDO0FBNUVLbEQsS0FBQUEsUUFBUTtBQThFZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9DbGFzc2lmeS5qcz9kMGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IElNQUdFUyBmcm9tICcuLi9JbWFnZXMvSW1hZ2VzJ1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQge0NoZXZyb25SaWdodEljb24sIENoZXZyb25MZWZ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBDbGFzc2lmeSA9ICgpID0+IHtcblxuICBcbiBjb25zdCBpbWFnZXMgPSBbeyBzcmM6IFwiLi4vSW1hZ2VzXCIsIGFsdDogXCJZb3VyIGRlc2NyaXB0aW9uIGhlcmUgMVwiIH1dO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIGNvbnN0IGFycm93U3R5bGVzMSA9IHtcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgYmctZ3JheS0xMDAgbWluLWgtc2NyZWVuIGxnOnctZnVsbCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctWzNyZW1dIG10LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctM3hsXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCAtbWwtWzQwcmVtXVwiXG4gICAgICAgICBzdGF0dXNGb3JtYXR0ZXI9eyhjdXJyZW50SXRlbSx0b3RhbCkgPT4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyBncm91cCB0b3AtWzM4cmVtXSByaWdodC1bMTguNXJlbV0gdy1bNXJlbV0gdGV4dC1bMXJlbV0gdGV4dC1kYXJrQmdcIj57Y3VycmVudEl0ZW19IC8ge3RvdGFsfTwvZGl2PlxuICAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQXJyb3dQcmV2PXsoY2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbFByZXYpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzdyZW1dIGxlZnQtWzEwcmVtXSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19IFxuICAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWRhcmtCZ0xpZ2h0IHAtNCB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBncm91cC1ob3ZlcjpiZy1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KGNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWxOZXh0KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM3cmVtXSBsZWZ0LVsxM3JlbV0gbWwtNjBcIlxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19ICBcbiAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwidy0xNCBoLTE0IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1kYXJrQmdMaWdodCBwLTQgdGV4dC1ncmF5LTQwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgZ3JvdXAtaG92ZXI6YmctZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICl9XG4gICAgICAgIFxuICAgICAgICByZW5kZXJJbmRpY2F0b3I9eyhvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZlN0eWxlID0ge21hcmdpbkxlZnQ6IDEwLG1hcmdpblRvcDoxMCx3aWR0aDoyMCwgZmxleFdyYXA6J3dyYXAnLCBjb2xvcjogXCJ3aGl0ZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gaXNTZWxlY3RlZFxuICAgICAgICAgID8geyAuLi5kZWZTdHlsZSwgY29sb3I6IFwicmVkXCIgfVxuICAgICAgICAgIDogeyAuLi5kZWZTdHlsZSB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgIC8vIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgb25LZXlEb3duPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgIHZhbHVlPXtpbmRleH1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YCR7bGFiZWx9ICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4KzF9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfX0gc2hvd1RodW1icz17ZmFsc2V9PiAgXG4gICAgICAgICAge0lNQUdFUy5tYXAoKGltYWdlKT0+KFxuICAgICAgICAgICAgPGRpdj4gICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtWzM0cmVtXSBvYmplY3QtY29udGFpbiBib3JkZXItci0yXCIgaWQ9e2ltYWdlLmlkfSBzcmM9e2ltYWdlLnBhdGh9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmeVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIklNQUdFUyIsIkNhcm91c2VsIiwiQ2hldnJvblJpZ2h0SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIm1vdGlvbiIsIkNsYXNzaWZ5IiwiaW1hZ2VzIiwic3JjIiwiYWx0IiwiYXJyb3dTdHlsZXMiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsInBhZGRpbmciLCJ6SW5kZXgiLCJhcnJvd1N0eWxlczEiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXNGb3JtYXR0ZXIiLCJjdXJyZW50SXRlbSIsInRvdGFsIiwicmVuZGVyQXJyb3dQcmV2IiwiY2xpY2tIYW5kbGVyIiwiaGFzUHJldiIsImxhYmVsUHJldiIsIm9uQ2xpY2siLCJ3aGlsZVRhcCIsInNjYWxlIiwicmVuZGVyQXJyb3dOZXh0IiwiaGFzTmV4dCIsImxhYmVsTmV4dCIsInJlbmRlckluZGljYXRvciIsIm9uQ2xpY2tIYW5kbGVyIiwiaXNTZWxlY3RlZCIsImluZGV4IiwibGFiZWwiLCJkZWZTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImZsZXhXcmFwIiwiY29sb3IiLCJjdXJzb3IiLCJzdHlsZSIsInNwYW4iLCJvbktleURvd24iLCJ2YWx1ZSIsInJvbGUiLCJ0YWJJbmRleCIsImFyaWEtbGFiZWwiLCJzaG93VGh1bWJzIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJpZCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});