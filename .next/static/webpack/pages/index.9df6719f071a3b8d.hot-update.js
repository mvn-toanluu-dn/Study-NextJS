"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Features/Home/Product/index.tsx":
/*!***********************************************!*\
  !*** ./pages/Features/Home/Product/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images */ \"./assets/images/index.tsx\");\n/* harmony import */ var _components_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Animations/FadeIn */ \"./pages/components/Animations/FadeIn/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Product() {\n    _s();\n    var products = [\n        {\n            number: 0,\n            img: _assets_images__WEBPACK_IMPORTED_MODULE_2__.Images.product1,\n            title: \"Ataz Standard House\",\n            address: \"Pluto Street, Indonesia\",\n            price: \"$2,800,-\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLocationPin, {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            number: 1,\n            img: _assets_images__WEBPACK_IMPORTED_MODULE_2__.Images.product2,\n            title: \"Qiri Minimalist House\",\n            address: \"Jupiter Street, Indonesia\",\n            price: \"$4,800,-\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLocationPin, {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            number: 2,\n            img: _assets_images__WEBPACK_IMPORTED_MODULE_2__.Images.product3,\n            title: \"Qanan Luxury House\",\n            address: \"Mars Street, Indonesia\",\n            price: \"$6,800,-\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLocationPin, {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            number: 3,\n            img: _assets_images__WEBPACK_IMPORTED_MODULE_2__.Images.product4,\n            title: \"Tingah Elegant House\",\n            address: \"Venus Street, Indonesia\",\n            price: \"$8,800,-\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLocationPin, {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        }, \n    ];\n    var productRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var infoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var productListRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var productTextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var productBtnRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // useEffect(() => {\n    //   const onScroll = (scroll : Event) => {\n    //         let pos = document.documentElement.scrollTop;\n    //           if (window.scrollY >= 120) {\n    //               productRef.current?.classList.add(\"fade-left\");\n    //               infoRef.current?.classList.add(\"fade-right\");\n    //           } else {\n    //               productRef.current?.classList.remove(\"fade-left\");\n    //               infoRef.current?.classList.remove(\"fade-right\");\n    //           }\n    //           if (window.scrollY >= 200) {\n    //               productListRef.current?.classList.add(\"fade-in\");\n    //           } else {\n    //             productListRef.current?.classList.remove(\"fade-in\");\n    //           }\n    //           if (window.scrollY >= 800) {\n    //             productTextRef.current?.classList.add(\"fade-left\");\n    //             productBtnRef.current?.classList.add(\"fade-right\");\n    //         } else {\n    //           productTextRef.current?.classList.remove(\"fade-left\");\n    //           productBtnRef.current?.classList.remove(\"fade-right\")\n    //         }\n    //           // switch\n    //           console.log(pos);\n    //       }\n    //       window.addEventListener(\"scroll\", onScroll);\n    //       return () => window.removeEventListener(\"scroll\", onScroll);\n    //   })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"section-product section-padding\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product-content mb-20 flex align-items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"row row-no-gutters\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"product-title title col-6\",\n                                        ref: productRef,\n                                        children: \"Featured Listing\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"product-text sub-title col-6\",\n                                        ref: infoRef,\n                                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"product-list-info ptb-20 row row-no-gutters\",\n                            ref: productListRef\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product-bottom flex align-items-center justify-content-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-bottom-text sub-title\",\n                                    ref: productTextRef,\n                                    children: [\n                                        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/#\",\n                                    className: \"btn btn-more second\",\n                                    ref: productBtnRef,\n                                    children: \"See More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Animations_FadeIn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                productRef: productRef,\n                infoRef: infoRef,\n                productListRef: productListRef,\n                productTextRef: productTextRef,\n                productBtnRef: productBtnRef\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/pages/Features/Home/Product/index.tsx\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Product, \"czwD0ZhlfPhw88/4DhuaQqzpmlo=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9GZWF0dXJlcy9Ib21lL1Byb2R1Y3QvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ2lEO0FBQ0Y7QUFDSTtBQUNRO0FBQzNELFNBQVNJLE9BQU8sR0FBRzs7SUFTakIsSUFBTUMsUUFBUSxHQUFlO1FBQzNCO1lBQ0VDLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLEdBQUcsRUFBRUwsMkRBQWU7WUFDcEJPLEtBQUssRUFBRSxxQkFBcUI7WUFDNUJDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbENDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxJQUFJLGdCQUFFLDhEQUFDWCx5REFBYTs7OztvQkFBRztTQUN4QjtRQUNEO1lBQ0VLLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLEdBQUcsRUFBRUwsMkRBQWU7WUFDcEJPLEtBQUssRUFBRSx1QkFBdUI7WUFDOUJDLE9BQU8sRUFBRSwyQkFBMkI7WUFDcENDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxJQUFJLGdCQUFFLDhEQUFDWCx5REFBYTs7OztvQkFBRztTQUN4QjtRQUNEO1lBQ0VLLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLEdBQUcsRUFBRUwsMkRBQWU7WUFDcEJPLEtBQUssRUFBRSxvQkFBb0I7WUFDM0JDLE9BQU8sRUFBRSx3QkFBd0I7WUFDakNDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxJQUFJLGdCQUFFLDhEQUFDWCx5REFBYTs7OztvQkFBRztTQUN4QjtRQUNEO1lBQ0VLLE1BQU0sRUFBQyxDQUFDO1lBQ1JDLEdBQUcsRUFBRUwsMkRBQWU7WUFDcEJPLEtBQUssRUFBRSxzQkFBc0I7WUFDN0JDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbENDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxJQUFJLGdCQUFFLDhEQUFDWCx5REFBYTs7OztvQkFBRztTQUN4QjtLQUNGO0lBQ0QsSUFBTWUsVUFBVSxHQUFHaEIsbURBQVksQ0FBaUIsSUFBSSxDQUFDO0lBQ3JELElBQU1rQixPQUFPLEdBQUdsQixtREFBWSxDQUFpQixJQUFJLENBQUM7SUFDbEQsSUFBTW1CLGNBQWMsR0FBR25CLG1EQUFZLENBQW1CLElBQUksQ0FBQztJQUMzRCxJQUFNb0IsY0FBYyxHQUFHcEIsbURBQVksQ0FBdUIsSUFBSSxDQUFDO0lBQy9ELElBQU1xQixhQUFhLEdBQUdyQixtREFBWSxDQUFvQixJQUFJLENBQUM7SUFDM0Qsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyx3REFBd0Q7SUFFeEQseUNBQXlDO0lBQ3pDLGdFQUFnRTtJQUNoRSw4REFBOEQ7SUFDOUQscUJBQXFCO0lBQ3JCLG1FQUFtRTtJQUNuRSxpRUFBaUU7SUFDakUsY0FBYztJQUNkLHlDQUF5QztJQUN6QyxrRUFBa0U7SUFDbEUscUJBQXFCO0lBQ3JCLG1FQUFtRTtJQUNuRSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLGtFQUFrRTtJQUNsRSxrRUFBa0U7SUFDbEUsbUJBQW1CO0lBQ25CLG1FQUFtRTtJQUNuRSxrRUFBa0U7SUFDbEUsWUFBWTtJQUVaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLHFEQUFxRDtJQUVyRCxxRUFBcUU7SUFFckUsT0FBTztJQUNQLHFCQUNFOzswQkFFQSw4REFBQ3NCLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxpQ0FBaUM7MEJBQ2xELDRFQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDQyxLQUFHOzRCQUFDRCxTQUFTLEVBQUMsK0NBQStDO3NDQUM1RCw0RUFBQ0MsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLG9CQUFvQjs7a0RBQ25DLDhEQUFDRSxJQUFFO3dDQUFDRixTQUFTLEVBQUMsMkJBQTJCO3dDQUFDRyxHQUFHLEVBQUVWLFVBQVU7a0RBQUUsa0JBQWdCOzs7Ozs0Q0FBSztrREFDaEYsOERBQUNXLEdBQUM7d0NBQUNKLFNBQVMsRUFBQyw4QkFBOEI7d0NBQUNHLEdBQUcsRUFBRVIsT0FBTztrREFBRSw2SEFHMUQ7Ozs7OzRDQUFJOzs7Ozs7b0NBQ0U7Ozs7O2dDQUNGO3NDQUNOLDhEQUFDVSxJQUFFOzRCQUFDTCxTQUFTLEVBQUMsNkNBQTZDOzRCQUFDRyxHQUFHLEVBQUVQLGNBQWM7Ozs7O2dDQXlCMUU7c0NBQ0wsOERBQUNLLEtBQUc7NEJBQUNELFNBQVMsRUFBQyxnRUFBZ0U7OzhDQUM3RSw4REFBQ0ksR0FBQztvQ0FBQ0osU0FBUyxFQUFDLCtCQUErQjtvQ0FBQ0csR0FBRyxFQUFFTixjQUFjOzt3Q0FBRSw2SEFFTDt3Q0FBQyxHQUFHOzs7Ozs7d0NBQzdEOzhDQUNKLDhEQUFDUyxHQUFDO29DQUFDQyxJQUFJLEVBQUMsSUFBSTtvQ0FBQ1AsU0FBUyxFQUFDLHFCQUFxQjtvQ0FBQ0csR0FBRyxFQUFFTCxhQUFhOzhDQUFFLFVBRWpFOzs7Ozt3Q0FBSTs7Ozs7O2dDQUNBOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNFOzBCQUNWLDhEQUFDbEIscUVBQU07Z0JBQ0hhLFVBQVUsRUFBR0EsVUFBVTtnQkFDdkJFLE9BQU8sRUFBR0EsT0FBTztnQkFDakJDLGNBQWMsRUFBR0EsY0FBYztnQkFDL0JDLGNBQWMsRUFBR0EsY0FBYztnQkFDL0JDLGFBQWEsRUFBR0EsYUFBYTs7Ozs7b0JBQUc7O29CQUNqQyxDQUNIO0NBQ0g7R0EzSVFqQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE2SWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRmVhdHVyZXMvSG9tZS9Qcm9kdWN0L2luZGV4LnRzeD9lYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZExvY2F0aW9uUGluIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlc1wiO1xuaW1wb3J0IEZhZGVJbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9BbmltYXRpb25zL0ZhZGVJblwiO1xuZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgdHlwZSBQcm9kdWN0cyA9IHtcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgICBpbWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBwcmljZTogc3RyaW5nO1xuICAgIGljb246IEpTWC5FbGVtZW50O1xuICB9O1xuICBjb25zdCBwcm9kdWN0czogUHJvZHVjdHNbXSA9IFtcbiAgICB7XG4gICAgICBudW1iZXI6MCxcbiAgICAgIGltZzogSW1hZ2VzLnByb2R1Y3QxLFxuICAgICAgdGl0bGU6IFwiQXRheiBTdGFuZGFyZCBIb3VzZVwiLFxuICAgICAgYWRkcmVzczogXCJQbHV0byBTdHJlZXQsIEluZG9uZXNpYVwiLFxuICAgICAgcHJpY2U6IFwiJDIsODAwLC1cIixcbiAgICAgIGljb246IDxNZExvY2F0aW9uUGluIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbnVtYmVyOjEsXG4gICAgICBpbWc6IEltYWdlcy5wcm9kdWN0MixcbiAgICAgIHRpdGxlOiBcIlFpcmkgTWluaW1hbGlzdCBIb3VzZVwiLFxuICAgICAgYWRkcmVzczogXCJKdXBpdGVyIFN0cmVldCwgSW5kb25lc2lhXCIsXG4gICAgICBwcmljZTogXCIkNCw4MDAsLVwiLFxuICAgICAgaWNvbjogPE1kTG9jYXRpb25QaW4gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBudW1iZXI6MixcbiAgICAgIGltZzogSW1hZ2VzLnByb2R1Y3QzLFxuICAgICAgdGl0bGU6IFwiUWFuYW4gTHV4dXJ5IEhvdXNlXCIsXG4gICAgICBhZGRyZXNzOiBcIk1hcnMgU3RyZWV0LCBJbmRvbmVzaWFcIixcbiAgICAgIHByaWNlOiBcIiQ2LDgwMCwtXCIsXG4gICAgICBpY29uOiA8TWRMb2NhdGlvblBpbiAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIG51bWJlcjozLFxuICAgICAgaW1nOiBJbWFnZXMucHJvZHVjdDQsXG4gICAgICB0aXRsZTogXCJUaW5nYWggRWxlZ2FudCBIb3VzZVwiLFxuICAgICAgYWRkcmVzczogXCJWZW51cyBTdHJlZXQsIEluZG9uZXNpYVwiLFxuICAgICAgcHJpY2U6IFwiJDgsODAwLC1cIixcbiAgICAgIGljb246IDxNZExvY2F0aW9uUGluIC8+LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHByb2R1Y3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBpbmZvUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcHJvZHVjdExpc3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTFVMaXN0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHByb2R1Y3RUZXh0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcHJvZHVjdEJ0blJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQW5jaG9yRWxlbWVudD4obnVsbCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3Qgb25TY3JvbGwgPSAoc2Nyb2xsIDogRXZlbnQpID0+IHtcbiAgLy8gICAgICAgICBsZXQgcG9zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICBcbiAgLy8gICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMjApIHtcbiAgLy8gICAgICAgICAgICAgICBwcm9kdWN0UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWxlZnRcIik7XG4gIC8vICAgICAgICAgICAgICAgaW5mb1JlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKFwiZmFkZS1yaWdodFwiKTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgICAgcHJvZHVjdFJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1sZWZ0XCIpO1xuICAvLyAgICAgICAgICAgICAgIGluZm9SZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtcmlnaHRcIik7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjAwKSB7XG4gIC8vICAgICAgICAgICAgICAgcHJvZHVjdExpc3RSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBwcm9kdWN0TGlzdFJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pblwiKTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA4MDApIHtcbiAgLy8gICAgICAgICAgICAgcHJvZHVjdFRleHRSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZChcImZhZGUtbGVmdFwiKTtcbiAgLy8gICAgICAgICAgICAgcHJvZHVjdEJ0blJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKFwiZmFkZS1yaWdodFwiKTtcbiAgLy8gICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgcHJvZHVjdFRleHRSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtbGVmdFwiKTtcbiAgLy8gICAgICAgICAgIHByb2R1Y3RCdG5SZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtcmlnaHRcIilcbiAgLy8gICAgICAgICB9XG5cbiAgLy8gICAgICAgICAgIC8vIHN3aXRjaFxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2cocG9zKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG5cbiAgLy8gICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICAgICAgXG4gIC8vICAgfSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcHJvZHVjdCBzZWN0aW9uLXBhZGRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50IG1iLTIwIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LW5vLWd1dHRlcnNcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZSB0aXRsZSBjb2wtNlwiIHJlZj17cHJvZHVjdFJlZn0+RmVhdHVyZWQgTGlzdGluZzwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC10ZXh0IHN1Yi10aXRsZSBjb2wtNlwiIHJlZj17aW5mb1JlZn0+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdC1pbmZvIHB0Yi0yMCByb3cgcm93LW5vLWd1dHRlcnNcIiByZWY9e3Byb2R1Y3RMaXN0UmVmfSA+XG4gICAgICAgICAgey8qIHtwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IDw+PC8+O1xuICAgICAgICAgICAgaXRlbXMgPSAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWl0ZW0taW5mbyBjb2wtM1wiIGtleT17aXRlbS5udW1iZXJ9PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlLWluZm9cIj57aXRlbS5wcmljZX08L2g2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWctaW5mbyBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlLWluZm8gdGl0bGUgbWItMTZcIj57aXRlbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtaXRlbSBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtaWNvblwiPntpdGVtLmljb259PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWRkcmVzcyBzdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvdHRvbSBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtYm90dG9tLXRleHQgc3ViLXRpdGxlXCIgcmVmPXtwcm9kdWN0VGV4dFJlZn0+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEue1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1vcmUgc2Vjb25kXCIgcmVmPXtwcm9kdWN0QnRuUmVmfT5cbiAgICAgICAgICAgIFNlZSBNb3JlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8RmFkZUluIFxuICAgICAgICBwcm9kdWN0UmVmID17cHJvZHVjdFJlZn1cbiAgICAgICAgaW5mb1JlZiA9e2luZm9SZWZ9XG4gICAgICAgIHByb2R1Y3RMaXN0UmVmID17cHJvZHVjdExpc3RSZWZ9XG4gICAgICAgIHByb2R1Y3RUZXh0UmVmID17cHJvZHVjdFRleHRSZWZ9XG4gICAgICAgIHByb2R1Y3RCdG5SZWYgPXtwcm9kdWN0QnRuUmVmfS8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNZExvY2F0aW9uUGluIiwiSW1hZ2VzIiwiRmFkZUluIiwiUHJvZHVjdCIsInByb2R1Y3RzIiwibnVtYmVyIiwiaW1nIiwicHJvZHVjdDEiLCJ0aXRsZSIsImFkZHJlc3MiLCJwcmljZSIsImljb24iLCJwcm9kdWN0MiIsInByb2R1Y3QzIiwicHJvZHVjdDQiLCJwcm9kdWN0UmVmIiwidXNlUmVmIiwiaW5mb1JlZiIsInByb2R1Y3RMaXN0UmVmIiwicHJvZHVjdFRleHRSZWYiLCJwcm9kdWN0QnRuUmVmIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwicmVmIiwicCIsInVsIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Features/Home/Product/index.tsx\n"));

/***/ })

});