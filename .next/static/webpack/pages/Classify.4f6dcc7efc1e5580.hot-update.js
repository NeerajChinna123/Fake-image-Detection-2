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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[3rem] mt-20 flex justify-center max-w-3xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex -ml-[40rem]\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-mono absolute group top-[38rem] right-[19rem] w-[4rem] text-[0.9rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                renderArrowPrev: function(clickHandler, hasPrev, labelPrev) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[10rem] cursor-pointer\",\n                        onClick: clickHandler,\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, {\n                            className: \"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[13rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                            onClick: clickHandler,\n                            className: \"w-14 h-14 cursor-pointer rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                renderIndicator: function(onClickHandler, isSelected, index, label) {\n                    var defStyle = {\n                        marginLeft: 10,\n                        marginTop: 10,\n                        width: 20,\n                        flexWrap: \"wrap\",\n                        color: \"white\",\n                        cursor: \"pointer\"\n                    };\n                    var style = isSelected ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle), {\n                        color: \"red\"\n                    }) : (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, defStyle);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: style,\n                        onClick: onClickHandler,\n                        onKeyDown: onClickHandler,\n                        value: index,\n                        role: \"button\",\n                        tabIndex: 0,\n                        \"aria-label\": \"\".concat(label, \" \").concat(index + 1),\n                        children: index + 1\n                    }, index, false, void 0, void 0);\n                },\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-2\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7dUJBTEhBLEtBQUssd0JBTUwsQ0FDUDtnQkFDSixDQUFDO2dCQUFFZ0IsVUFBVSxFQUFFLEtBQUs7MEJBQ2ZsRCwwREFBVSxDQUFDLFNBQUNvRCxLQUFLO3lDQUNoQiw4REFBQ3BDLEtBQUc7a0NBQ0EsNEVBQUNxQyxLQUFHOzRCQUFDcEMsU0FBUyxFQUFDLHFDQUFxQzs0QkFBQ3FDLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQUFFOzRCQUFFL0MsR0FBRyxFQUFFNkMsS0FBSyxDQUFDRyxJQUFJOzs7OztpQ0FBUTs7Ozs7NkJBQ3hGO2lCQUNQLENBQUM7Ozs7O3FCQUNPOzs7OztpQkFDUDs7Ozs7YUFDRixDQUNQO0FBQ0gsQ0FBQztBQTVFS2xELEtBQUFBLFFBQVE7QUE4RWQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2xhc3NpZnkuanM/ZDBlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBJTUFHRVMgZnJvbSAnLi4vSW1hZ2VzL0ltYWdlcydcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IHtDaGV2cm9uUmlnaHRJY29uLCBDaGV2cm9uTGVmdEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgQ2xhc3NpZnkgPSAoKSA9PiB7XG5cbiAgXG4gY29uc3QgaW1hZ2VzID0gW3sgc3JjOiBcIi4uL0ltYWdlc1wiLCBhbHQ6IFwiWW91ciBkZXNjcmlwdGlvbiBoZXJlIDFcIiB9XTtcbiAgY29uc3QgYXJyb3dTdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLjdlbVwiLFxuICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgcGFkZGluZzogXCIuNGVtXCIsXG4gICAgekluZGV4OiAyLFxuICAgIFxuICB9O1xuICBjb25zdCBhcnJvd1N0eWxlczEgPSB7XG4gICAgdG9wOiBcIi43ZW1cIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBsZzp3LWZ1bGwgbGc6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LVszcmVtXSBtdC0yMCBmbGV4IGp1c3RpZnktY2VudGVyIG1heC13LTN4bFwiPlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggLW1sLVs0MHJlbV1cIlxuICAgICAgICAgc3RhdHVzRm9ybWF0dGVyPXsoY3VycmVudEl0ZW0sdG90YWwpID0+IChcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gYWJzb2x1dGUgZ3JvdXAgdG9wLVszOHJlbV0gcmlnaHQtWzE5cmVtXSB3LVs0cmVtXSB0ZXh0LVswLjlyZW1dIHRleHQtZGFya0JnXCI+e2N1cnJlbnRJdGVtfSAvIHt0b3RhbH08L2Rpdj5cbiAgICAgICAgICl9XG4gICAgICAgIHJlbmRlckFycm93UHJldj17KGNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWxQcmV2KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM3cmVtXSBsZWZ0LVsxMHJlbV0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSBcbiAgICAgICAgICAgIFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQtZnVsbCBiZy1kYXJrQmdMaWdodCBwLTQgdGV4dC1ncmF5LTQwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgZ3JvdXAtaG92ZXI6YmctZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhjbGlja0hhbmRsZXIsIGhhc05leHQsIGxhYmVsTmV4dCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZ3JvdXAgdG9wLVszN3JlbV0gbGVmdC1bMTNyZW1dIG1sLTYwXCJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSAgXG4gICAgICAgICAgIFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT1cInctMTQgaC0xNCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgYmctZGFya0JnTGlnaHQgcC00IHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgIGdyb3VwLWhvdmVyOmJnLWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICApfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVySW5kaWNhdG9yPXsob25DbGlja0hhbmRsZXIsIGlzU2VsZWN0ZWQsIGluZGV4LCBsYWJlbCkgPT4ge1xuICAgICAgICBjb25zdCBkZWZTdHlsZSA9IHttYXJnaW5MZWZ0OiAxMCxtYXJnaW5Ub3A6MTAsd2lkdGg6MjAsIGZsZXhXcmFwOid3cmFwJywgY29sb3I6IFwid2hpdGVcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9O1xuICAgICAgICBjb25zdCBzdHlsZSA9IGlzU2VsZWN0ZWRcbiAgICAgICAgICA/IHsgLi4uZGVmU3R5bGUsIGNvbG9yOiBcInJlZFwiIH1cbiAgICAgICAgICA6IHsgLi4uZGVmU3R5bGUgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICBvbktleURvd249e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgJHtsYWJlbH0gJHtpbmRleCArIDF9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5kZXgrMX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICB9fSBzaG93VGh1bWJzPXtmYWxzZX0+ICBcbiAgICAgICAgICB7SU1BR0VTLm1hcCgoaW1hZ2UpPT4oXG4gICAgICAgICAgICA8ZGl2PiAgIFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC1bMzRyZW1dIG9iamVjdC1jb250YWluIGJvcmRlci1yLTJcIiBpZD17aW1hZ2UuaWR9IHNyYz17aW1hZ2UucGF0aH0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzaWZ5XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiSU1BR0VTIiwiQ2Fyb3VzZWwiLCJDaGV2cm9uUmlnaHRJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwibW90aW9uIiwiQ2xhc3NpZnkiLCJpbWFnZXMiLCJzcmMiLCJhbHQiLCJhcnJvd1N0eWxlcyIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwicGFkZGluZyIsInpJbmRleCIsImFycm93U3R5bGVzMSIsImRpdiIsImNsYXNzTmFtZSIsInN0YXR1c0Zvcm1hdHRlciIsImN1cnJlbnRJdGVtIiwidG90YWwiLCJyZW5kZXJBcnJvd1ByZXYiLCJjbGlja0hhbmRsZXIiLCJoYXNQcmV2IiwibGFiZWxQcmV2Iiwib25DbGljayIsIndoaWxlVGFwIiwic2NhbGUiLCJyZW5kZXJBcnJvd05leHQiLCJoYXNOZXh0IiwibGFiZWxOZXh0IiwicmVuZGVySW5kaWNhdG9yIiwib25DbGlja0hhbmRsZXIiLCJpc1NlbGVjdGVkIiwiaW5kZXgiLCJsYWJlbCIsImRlZlN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiZmxleFdyYXAiLCJjb2xvciIsImN1cnNvciIsInN0eWxlIiwic3BhbiIsIm9uS2V5RG93biIsInZhbHVlIiwicm9sZSIsInRhYkluZGV4IiwiYXJpYS1sYWJlbCIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});