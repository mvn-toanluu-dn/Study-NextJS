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

/***/ "./components/MenuSmall/index.tsx":
/*!****************************************!*\
  !*** ./components/MenuSmall/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ItemMenu = function(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), active = ref[0], setActive = ref[1];\n    var title = props.title, values = props.values, addNew = props.addNew;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"menu-item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sub-menu flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"col-6\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"icon-menu col-6\",\n                            onClick: function() {\n                                return setActive(!active);\n                            },\n                            children: addNew && (!active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronDown, {\n                                className: \"down\"\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 34\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronUp, {\n                                className: \"up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 71\n                            }, _this))\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 12\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \" \".concat(active ? \"menu-small\" : \"is-hidden\"),\n                children: values.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"menu-item-sub\",\n                        children: item\n                    }, index, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ItemMenu, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = ItemMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemMenu);\nvar _c;\n$RefreshReg$(_c, \"ItemMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnVTbWFsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNkI7QUFDSDtBQUNrQztBQUU1RCxJQUFNSSxRQUFRLEdBQUcsU0FBQ0MsS0FBVSxFQUFLOztJQUMvQixJQUE0QkosR0FBcUIsb0ZBQXJCQSxxREFBYyxDQUFDLEtBQUssQ0FBQyxNQUExQ00sTUFBTSxHQUFlTixHQUFxQixHQUFwQyxFQUFFTyxTQUFTLEdBQUlQLEdBQXFCLEdBQXpCO0lBQ3hCLElBQU9RLEtBQUssR0FJYkosS0FBSyxDQUpHSSxLQUFLLEVBQ1ZDLE1BQU0sR0FHVEwsS0FBSyxDQUhGSyxNQUFNLEVBQ05DLE1BQU0sR0FFVE4sS0FBSyxDQUZGTSxNQUFNO0lBSVIscUJBQ0U7OzBCQUNBLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzswQkFDckIsNEVBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxlQUFlOztzQ0FDMUIsOERBQUNiLGtEQUFJOzRCQUFDZSxJQUFJLEVBQUMsSUFBSTtzQ0FDWCw0RUFBQ0MsR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLE9BQU87MENBQUVKLEtBQUs7Ozs7O3FDQUFLOzs7OztpQ0FDN0I7c0NBQ1IsOERBQUNRLE1BQUk7NEJBQUNKLFNBQVMsRUFBQyxpQkFBaUI7NEJBQUNLLE9BQU8sRUFBRTt1Q0FBTVYsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQzs2QkFBQTtzQ0FDbEVJLE1BQU0sSUFBSSxDQUFDLENBQUNKLE1BQU0saUJBQUcsOERBQUNMLHlEQUFhO2dDQUFDVyxTQUFTLEVBQUMsTUFBTTs7Ozs7cUNBQUcsaUJBQUcsOERBQUNWLHVEQUFXO2dDQUFDVSxTQUFTLEVBQUMsSUFBSTs7Ozs7cUNBQUcsQ0FBQzs7Ozs7aUNBQ2xGOzs7Ozs7eUJBQ0w7Ozs7O3FCQUNMOzBCQUNELDhEQUFDTSxJQUFFO2dCQUFDTixTQUFTLEVBQUUsR0FBRSxDQUFzQyxPQUFwQ04sTUFBTSxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUU7MEJBQ3ZERyxNQUFNLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxJQUFRLEVBQUNDLEtBQVE7eUNBRXRCLDhEQUFDVixJQUFFO3dCQUFhQyxTQUFTLEVBQUMsZUFBZTtrQ0FBRVEsSUFBSTt1QkFBdENDLEtBQUs7Ozs7NkJBQXVDO2lCQUNoRCxDQUFDOzs7OztxQkFDVDs7b0JBQ04sQ0FDSDtDQUNIO0dBNUJLbEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBNkJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51U21hbGwvaW5kZXgudHN4PzIxOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlDaGV2cm9uRG93biwgRmlDaGV2cm9uVXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuY29uc3QgSXRlbU1lbnUgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7dGl0bGUsXG4gICAgdmFsdWVzLFxuICAgIGFkZE5ldyxcbn1cbj1wcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLW1lbnUgZmxleFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29sLTZcIj57dGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLW1lbnUgY29sLTZcIiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9PlxuICAgICAgICAgICB7YWRkTmV3ICYmICghYWN0aXZlID8gPEZpQ2hldnJvbkRvd24gY2xhc3NOYW1lPSdkb3duJyAvPiA6IDxGaUNoZXZyb25VcCBjbGFzc05hbWU9J3VwJyAvPil9XG4gICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgICR7YWN0aXZlID8gXCJtZW51LXNtYWxsXCIgOiAnaXMtaGlkZGVuJ31gfT5cbiAgICAgICAge3ZhbHVlcy5tYXAoKGl0ZW06YW55LGluZGV4Om51KT0+KFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWVudS1pdGVtLXN1YlwiPntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1NZW51O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkZpQ2hldnJvbkRvd24iLCJGaUNoZXZyb25VcCIsIkl0ZW1NZW51IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRpdGxlIiwidmFsdWVzIiwiYWRkTmV3IiwibGkiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYSIsInNwYW4iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MenuSmall/index.tsx\n"));

/***/ })

});