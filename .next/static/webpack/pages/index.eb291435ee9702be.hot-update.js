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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n// import React from \"react\";\n// import Link from \"next/link\";\n// import { FiChevronUp, FiChevronDown } from \"react-icons/fi\";\n// const MenuSmall = (props: any) => {\n//   const { item } = props;\n//   console.log(item);\n// //   const [active, setActive] = React.useState(false);\n// //   const [isToggle, setIsToggle] = React.useState(false);\n//   return (\n//     <>\n//     </>\n//   );\n// };\n// export default MenuSmall;\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// type Props = {\n//     title: string;\n//     values?: string[];\n//     addNew?: boolean;\n//     showMenu: boolean;\n// };\nvar ItemMenu = function(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), active = ref[0], setActive = ref[1];\n    var title = props.title, values = props.values, addNew = props.addNew;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"menu-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sub-menu flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"col-6\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: function() {\n                            return setActive(!active);\n                        },\n                        children: addNew && (active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronDown, {\n                            className: \"down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 33\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronUp, {\n                            className: \"up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 70\n                        }, _this))\n                    }, void 0, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 12\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"menu-small \".concat(active ? \"show\" : \"is-hidden\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"\",\n                            children: values\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(ItemMenu, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = ItemMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemMenu);\nvar _c;\n$RefreshReg$(_c, \"ItemMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnVTbWFsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQywrREFBK0Q7QUFDL0Qsc0NBQXNDO0FBQ3RDLDRCQUE0QjtBQUM1Qix1QkFBdUI7QUFDdkIsMERBQTBEO0FBQzFELDhEQUE4RDtBQUM5RCxhQUFhO0FBQ2IsU0FBUztBQUVULFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUNMLDRCQUE0QjtBQUM1Qjs7OztBQUE2QjtBQUNIO0FBQ2tDO0FBRTVELGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsS0FBSztBQUVMLElBQU1JLFFBQVEsR0FBRyxTQUFDQyxLQUFVLEVBQUs7O0lBQy9CLElBQTRCSixHQUFxQixvRkFBckJBLHFEQUFjLENBQUMsS0FBSyxDQUFDLE1BQTFDTSxNQUFNLEdBQWVOLEdBQXFCLEdBQXBDLEVBQUVPLFNBQVMsR0FBSVAsR0FBcUIsR0FBekI7SUFDeEIsSUFBT1EsS0FBSyxHQUliSixLQUFLLENBSkdJLEtBQUssRUFDVkMsTUFBTSxHQUdUTCxLQUFLLENBSEZLLE1BQU0sRUFDTkMsTUFBTSxHQUVUTixLQUFLLENBRkZNLE1BQU07SUFJUixxQkFDRTtrQkFDQSw0RUFBQ0MsSUFBRTtZQUFDQyxTQUFTLEVBQUMsV0FBVztzQkFDckIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxlQUFlOztrQ0FDMUIsOERBQUNiLGtEQUFJO3dCQUFDZSxJQUFJLEVBQUMsSUFBSTtrQ0FDWCw0RUFBQ0MsR0FBQzs0QkFBQ0gsU0FBUyxFQUFDLE9BQU87c0NBQUVKLEtBQUs7Ozs7O2lDQUFLOzs7Ozs2QkFDN0I7a0NBQ1IsOERBQUNRLE1BQUk7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVYsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQzt5QkFBQTtrQ0FDdENJLE1BQU0sSUFBSSxDQUFDSixNQUFNLGlCQUFHLDhEQUFDTCx5REFBYTs0QkFBQ1csU0FBUyxFQUFDLE1BQU07Ozs7O2lDQUFHLGlCQUFHLDhEQUFDVix1REFBVzs0QkFBQ1UsU0FBUyxFQUFDLElBQUk7Ozs7O2lDQUFHLENBQUM7Ozs7OzZCQUNqRjtrQ0FDUCw4REFBQ00sSUFBRTt3QkFBQ04sU0FBUyxFQUFFLGFBQVksQ0FBZ0MsT0FBOUJOLE1BQU0sR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFFO2tDQUN4RCw0RUFBQ0ssSUFBRTs0QkFBQ0MsU0FBUyxFQUFDLEVBQUU7c0NBQUVILE1BQU07Ozs7O2lDQUFNOzs7Ozs2QkFDN0I7Ozs7OztxQkFDSDs7Ozs7aUJBQ0w7cUJBY0YsQ0FDSDtDQUNIO0dBdENLTixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF1Q2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnVTbWFsbC9pbmRleC50c3g/MjE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgeyBGaUNoZXZyb25VcCwgRmlDaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuLy8gY29uc3QgTWVudVNtYWxsID0gKHByb3BzOiBhbnkpID0+IHtcbi8vICAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcbi8vICAgY29uc29sZS5sb2coaXRlbSk7XG4vLyAvLyAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4vLyAvLyAgIGNvbnN0IFtpc1RvZ2dsZSwgc2V0SXNUb2dnbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBNZW51U21hbGw7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUNoZXZyb25Eb3duLCBGaUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG4vLyB0eXBlIFByb3BzID0ge1xuLy8gICAgIHRpdGxlOiBzdHJpbmc7XG4vLyAgICAgdmFsdWVzPzogc3RyaW5nW107XG4vLyAgICAgYWRkTmV3PzogYm9vbGVhbjtcbi8vICAgICBzaG93TWVudTogYm9vbGVhbjtcbi8vIH07XG5cbmNvbnN0IEl0ZW1NZW51ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RpdGxlLFxuICAgIHZhbHVlcyxcbiAgICBhZGROZXcsXG59XG49cHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1tZW51IGZsZXhcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNvbC02XCI+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfT5cbiAgICAgICAgICAge2FkZE5ldyAmJiAoYWN0aXZlID8gPEZpQ2hldnJvbkRvd24gY2xhc3NOYW1lPSdkb3duJyAvPiA6IDxGaUNoZXZyb25VcCBjbGFzc05hbWU9J3VwJyAvPil9XG4gICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1lbnUtc21hbGwgJHthY3RpdmUgPyBcInNob3dcIiA6ICdpcy1oaWRkZW4nfWB9PlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj57dmFsdWVzfTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICBcblxuICAgICAgey8qIDxsaSBjbGFzc05hbWU9J01lbnUnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpdGVtLW1lbnUtc21hbGwtbGluayc+TGlzdGluZzwvYT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24tbWVudS1zbWFsbCcgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfT5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSA/IDxGaUNoZXZyb25Eb3duIGNsYXNzTmFtZT0nZG93bicgLz4gOiA8RmlDaGV2cm9uVXAgY2xhc3NOYW1lPSd1cCcgLz59XG4gICAgICAgICAgICAgICAgPC9pPlxuICAgIDwvbGk+ICovfVxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCk9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9PkFCQzwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHthY3RpdmUgPyBcInNob3dcIjogXCJcIn1gfT5cbiAgICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSXRlbU1lbnU7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiRmlDaGV2cm9uRG93biIsIkZpQ2hldnJvblVwIiwiSXRlbU1lbnUiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidGl0bGUiLCJ2YWx1ZXMiLCJhZGROZXciLCJsaSIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJhIiwic3BhbiIsIm9uQ2xpY2siLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MenuSmall/index.tsx\n"));

/***/ })

});