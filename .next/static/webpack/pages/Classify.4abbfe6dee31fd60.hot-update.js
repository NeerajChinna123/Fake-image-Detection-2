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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Images */ \"./Images/Images.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n // requires a loader\n\n\n\nvar Classify = function() {\n    var images = [\n        {\n            src: \"../Images\",\n            alt: \"Your description here 1\"\n        }\n    ];\n    var arrowStyles = {\n        position: \"absolute\",\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    var arrowStyles1 = {\n        top: \".7em\",\n        bottom: \"auto\",\n        padding: \".4em\",\n        zIndex: 2\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-100 min-h-screen lg:w-full lg:justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[3rem] h-[54rem] mt-10 flex justify-center max-w-4xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n                className: \"flex -ml-[40rem]\",\n                statusFormatter: function(currentItem, total) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute font-sans group top-[38rem] right-[18.5rem] w-[5rem] text-[1rem] text-darkBg\",\n                        children: [\n                            currentItem,\n                            \" / \",\n                            total\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                // renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (\n                //   <motion.div\n                //   className=\"absolute group top-[37rem] left-[10rem] cursor-pointer\"\n                //   onClick={clickHandler}\n                //   whileTap={{ scale: 0.95 }} \n                //   >\n                //     <ChevronLeftIcon className=\"w-14 h-14 rounded-full bg-darkBgLight p-4 text-gray-300 transition duration-500 ease-in-out  group-hover:bg-gray-500 group-hover:text-darkBgLight\" />\n                //   </motion.div>\n                // )}\n                renderArrowNext: function(clickHandler, hasNext, labelNext) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"absolute group top-[37rem] left-[13rem] ml-60\",\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                            onClick: clickHandler,\n                            className: \"w-14 h-14 cursor-pointer rounded-full bg-darkBgLight p-4 text-gray-400 transition duration-500 ease-in-out group-hover:bg-gray-500 group-hover:text-darkBgLight\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                },\n                //   renderIndicator={(onClickHandler, isSelected, index, label) => {\n                //   return (\n                //     <span\n                //      // style={style}\n                //       className={isSelected ? 'bg-gray-500 transition duration-500 ease-in-out  hover:text-darkBgLight text-darkBgLight hover:bg-gray-500 rounded-full p-3 mr-2 mb-2 w-12 h-12 flex-wrap cursor-pointer' : 'bg-darkBgLight mb-2 transition duration-500 ease-in-out  hover:bg-gray-500 rounded-full p-3 mr-2 text-gray-300 w-12 h-12 flex-wrap cursor-pointer'}\n                //       onClick={onClickHandler}\n                //       onKeyDown={onClickHandler}\n                //       value={index}\n                //       key={index}\n                //       role=\"button\"\n                //       tabIndex={0}\n                //       aria-label={`${label} ${index + 1}`}\n                //     >\n                //       {index+1}\n                //     </span>\n                //   );\n                // }}\n                showThumbs: false,\n                children: _Images_Images__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-[34rem] object-contain border-r-4\",\n                            id: image.id,\n                            src: image.path\n                        }, void 0, false, {\n                            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Classify.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = Classify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Classify);\nvar _c;\n$RefreshReg$(_c, \"Classify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DbGFzc2lmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0U7QUFDTztBQUMwQixDQUFDLG9CQUFvQjtBQUMvQjtBQUNxQjtBQUNuQztBQUV2QyxJQUFNTyxRQUFRLEdBQUcsV0FBTTtJQUd0QixJQUFNQyxNQUFNLEdBQUc7UUFBQztZQUFFQyxHQUFHLEVBQUUsV0FBVztZQUFFQyxHQUFHLEVBQUUseUJBQXlCO1NBQUU7S0FBQztJQUNwRSxJQUFNQyxXQUFXLEdBQUc7UUFDbEJDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxHQUFHLEVBQUUsTUFBTTtRQUNYQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxNQUFNLEVBQUUsQ0FBQztLQUVWO0lBQ0QsSUFBTUMsWUFBWSxHQUFHO1FBQ25CSixHQUFHLEVBQUUsTUFBTTtRQUNYQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxNQUFNLEVBQUUsQ0FBQztLQUVWO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJEQUE0RDtrQkFDekUsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdFQUFnRTtzQkFDN0UsNEVBQUNoQiwrREFBUTtnQkFDUmdCLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQzVCQyxlQUFlLEVBQUUsU0FBQ0MsV0FBVyxFQUFDQyxLQUFLO3lDQUNqQyw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHVGQUF1Rjs7NEJBQUVFLFdBQVc7NEJBQUMsS0FBRzs0QkFBQ0MsS0FBSzs7b0RBQU87aUJBQ3JJO2dCQUNGLDJEQUEyRDtnQkFDM0QsZ0JBQWdCO2dCQUNoQix1RUFBdUU7Z0JBQ3ZFLDJCQUEyQjtnQkFDM0IsZ0NBQWdDO2dCQUVoQyxNQUFNO2dCQUNOLHdMQUF3TDtnQkFDeEwsa0JBQWtCO2dCQUNsQixLQUFLO2dCQUNMQyxlQUFlLEVBQUUsU0FBQ0MsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7eUNBQ2hELDhEQUFDcEIscURBQVU7d0JBQ1hhLFNBQVMsRUFBQywrQ0FBK0M7d0JBQ3pEUSxRQUFRLEVBQUU7NEJBQUVDLEtBQUssRUFBRSxJQUFJO3lCQUFFO2tDQUd2Qiw0RUFBQ3hCLG9FQUFnQjs0QkFBRXlCLE9BQU8sRUFBRUwsWUFBWTs0QkFBRUwsU0FBUyxFQUFDLGlLQUFrSzt5REFBRztxREFDOU07aUJBQ2Y7Z0JBRUYscUVBQXFFO2dCQUNyRSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osd0JBQXdCO2dCQUN4QixrV0FBa1c7Z0JBQ2xXLGlDQUFpQztnQkFDakMsbUNBQW1DO2dCQUNuQyxzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2dCQUN0QixxQkFBcUI7Z0JBQ3JCLDZDQUE2QztnQkFDN0MsUUFBUTtnQkFDUixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsT0FBTztnQkFDUCxLQUFLO2dCQUNKVyxVQUFVLEVBQUUsS0FBSzswQkFDYjVCLDBEQUFVLENBQUMsU0FBQzhCLEtBQUs7eUNBQ2hCLDhEQUFDZCxLQUFHO2tDQUNBLDRFQUFDZSxLQUFHOzRCQUFDZCxTQUFTLEVBQUMscUNBQXFDOzRCQUFDZSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFBRTs0QkFBRXpCLEdBQUcsRUFBRXVCLEtBQUssQ0FBQ0csSUFBSTs7Ozs7aUNBQVE7Ozs7OzZCQUN4RjtpQkFDUCxDQUFDOzs7OztxQkFDTzs7Ozs7aUJBQ1A7Ozs7O2FBSUYsQ0FDUDtBQUNILENBQUM7QUE3RUs1QixLQUFBQSxRQUFRO0FBK0VkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NsYXNzaWZ5LmpzP2QwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSU1BR0VTIGZyb20gJy4uL0ltYWdlcy9JbWFnZXMnXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCB7Q2hldnJvblJpZ2h0SWNvbiwgQ2hldnJvbkxlZnRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IENsYXNzaWZ5ID0gKCkgPT4ge1xuXG4gIFxuIGNvbnN0IGltYWdlcyA9IFt7IHNyYzogXCIuLi9JbWFnZXNcIiwgYWx0OiBcIllvdXIgZGVzY3JpcHRpb24gaGVyZSAxXCIgfV07XG4gIGNvbnN0IGFycm93U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIi43ZW1cIixcbiAgICBib3R0b206IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgIHpJbmRleDogMixcbiAgICBcbiAgfTtcbiAgY29uc3QgYXJyb3dTdHlsZXMxID0ge1xuICAgIHRvcDogXCIuN2VtXCIsXG4gICAgYm90dG9tOiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIi40ZW1cIixcbiAgICB6SW5kZXg6IDIsXG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gbGc6dy1mdWxsIGxnOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1bM3JlbV0gaC1bNTRyZW1dIG10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCAtbWwtWzQwcmVtXVwiXG4gICAgICAgICBzdGF0dXNGb3JtYXR0ZXI9eyhjdXJyZW50SXRlbSx0b3RhbCkgPT4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2FucyBncm91cCB0b3AtWzM4cmVtXSByaWdodC1bMTguNXJlbV0gdy1bNXJlbV0gdGV4dC1bMXJlbV0gdGV4dC1kYXJrQmdcIj57Y3VycmVudEl0ZW19IC8ge3RvdGFsfTwvZGl2PlxuICAgICAgICAgKX1cbiAgICAgICAgLy8gcmVuZGVyQXJyb3dQcmV2PXsoY2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbFByZXYpID0+IChcbiAgICAgICAgLy8gICA8bW90aW9uLmRpdlxuICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImFic29sdXRlIGdyb3VwIHRvcC1bMzdyZW1dIGxlZnQtWzEwcmVtXSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIC8vICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAvLyAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19IFxuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgPlxuICAgICAgICAvLyAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWRhcmtCZ0xpZ2h0IHAtNCB0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBncm91cC1ob3ZlcjpiZy1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cbiAgICAgICAgLy8gICA8L21vdGlvbi5kaXY+XG4gICAgICAgIC8vICl9XG4gICAgICAgIHJlbmRlckFycm93TmV4dD17KGNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWxOZXh0KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBncm91cCB0b3AtWzM3cmVtXSBsZWZ0LVsxM3JlbV0gbWwtNjBcIlxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19ICBcbiAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPVwidy0xNCBoLTE0IGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1kYXJrQmdMaWdodCBwLTQgdGV4dC1ncmF5LTQwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgZ3JvdXAtaG92ZXI6YmctZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICl9XG4gICAgICAgIFxuICAgICAgLy8gICByZW5kZXJJbmRpY2F0b3I9eyhvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSA9PiB7XG4gICAgICAvLyAgIHJldHVybiAoXG4gICAgICAvLyAgICAgPHNwYW5cbiAgICAgIC8vICAgICAgLy8gc3R5bGU9e3N0eWxlfVxuICAgICAgLy8gICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJ2JnLWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0ICBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0IHRleHQtZGFya0JnTGlnaHQgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIG1iLTIgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcicgOiAnYmctZGFya0JnTGlnaHQgbWItMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCAgaG92ZXI6YmctZ3JheS01MDAgcm91bmRlZC1mdWxsIHAtMyBtci0yIHRleHQtZ3JheS0zMDAgdy0xMiBoLTEyIGZsZXgtd3JhcCBjdXJzb3ItcG9pbnRlcid9XG4gICAgICAvLyAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgIC8vICAgICAgIG9uS2V5RG93bj17b25DbGlja0hhbmRsZXJ9XG4gICAgICAvLyAgICAgICB2YWx1ZT17aW5kZXh9XG4gICAgICAvLyAgICAgICBrZXk9e2luZGV4fVxuICAgICAgLy8gICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAvLyAgICAgICB0YWJJbmRleD17MH1cbiAgICAgIC8vICAgICAgIGFyaWEtbGFiZWw9e2Ake2xhYmVsfSAke2luZGV4ICsgMX1gfVxuICAgICAgLy8gICAgID5cbiAgICAgIC8vICAgICAgIHtpbmRleCsxfVxuICAgICAgLy8gICAgIDwvc3Bhbj5cbiAgICAgIC8vICAgKTtcbiAgICAgIC8vIH19XG4gICAgICAgc2hvd1RodW1icz17ZmFsc2V9PiAgXG4gICAgICAgICAge0lNQUdFUy5tYXAoKGltYWdlKT0+KFxuICAgICAgICAgICAgPGRpdj4gICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtWzM0cmVtXSBvYmplY3QtY29udGFpbiBib3JkZXItci00XCIgaWQ9e2ltYWdlLmlkfSBzcmM9e2ltYWdlLnBhdGh9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yLTIgYmctZ3JheS01MDAgdy0xNiBoLTE2XCI+XG4gICAgICAgIDxwPiBGT1JNIFNFQ1RJT048L3A+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NpZnlcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJJTUFHRVMiLCJDYXJvdXNlbCIsIkNoZXZyb25SaWdodEljb24iLCJDaGV2cm9uTGVmdEljb24iLCJtb3Rpb24iLCJDbGFzc2lmeSIsImltYWdlcyIsInNyYyIsImFsdCIsImFycm93U3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJwYWRkaW5nIiwiekluZGV4IiwiYXJyb3dTdHlsZXMxIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzRm9ybWF0dGVyIiwiY3VycmVudEl0ZW0iLCJ0b3RhbCIsInJlbmRlckFycm93TmV4dCIsImNsaWNrSGFuZGxlciIsImhhc05leHQiLCJsYWJlbE5leHQiLCJ3aGlsZVRhcCIsInNjYWxlIiwib25DbGljayIsInNob3dUaHVtYnMiLCJtYXAiLCJpbWFnZSIsImltZyIsImlkIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Classify.js\n"));

/***/ })

});