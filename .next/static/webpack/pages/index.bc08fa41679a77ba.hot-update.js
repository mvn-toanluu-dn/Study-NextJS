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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ \"./data/index.tsx\");\n// import React from \"react\";\n// import Link from \"next/link\";\n// import { FiChevronUp, FiChevronDown } from \"react-icons/fi\";\n// const MenuSmall = (props: any) => {\n//   const { item } = props;\n//   console.log(item);\n// //   const [active, setActive] = React.useState(false);\n// //   const [isToggle, setIsToggle] = React.useState(false);\n//   return (\n//     <>\n//     </>\n//   );\n// };\n// export default MenuSmall;\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ItemMenu = function(props) {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), active = ref[0], setActive = ref[1];\n    var a = \"dropdownmenu\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _data__WEBPACK_IMPORTED_MODULE_3__.menu.map(function(item, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"menu-item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sub-menu flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"col -6\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 33\n                        }, _this),\n                        item.addNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"icon-menu col-6 \".concat(active ? \"show\" : \"\"),\n                            children: !item.showMenu\n                        }, void 0, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 37\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 29\n                }, _this)\n            }, index, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/Study-NextJS/components/MenuSmall/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 25\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(ItemMenu, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = ItemMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemMenu);\nvar _c;\n$RefreshReg$(_c, \"ItemMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnVTbWFsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQywrREFBK0Q7QUFDL0Qsc0NBQXNDO0FBQ3RDLDRCQUE0QjtBQUM1Qix1QkFBdUI7QUFDdkIsMERBQTBEO0FBQzFELDhEQUE4RDtBQUM5RCxhQUFhO0FBQ2IsU0FBUztBQUVULFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUNMLDRCQUE0QjtBQUM1Qjs7OztBQUE2QjtBQUNIO0FBRVE7QUFLbEMsSUFBTUcsUUFBUSxHQUFHLFNBQUNDLEtBQVksRUFBSzs7SUFDakMsSUFBNEJILEdBQXFCLG9GQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBMUNLLE1BQU0sR0FBZUwsR0FBcUIsR0FBcEMsRUFBRU0sU0FBUyxHQUFJTixHQUFxQixHQUF6QjtJQUN4QixJQUFNTyxDQUFDLEdBQUcsY0FBYztJQUN4QixxQkFDRTtrQkFDYU4sMkNBQVEsQ0FBQyxTQUFDUSxJQUFJLEVBQUVDLEtBQUssRUFBSztZQUN2QixxQkFDSSw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBQ3JCLDRFQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsZUFBZTs7c0NBQzFCLDhEQUFDYixrREFBSTs0QkFBQ2UsSUFBSSxFQUFDLElBQUk7c0NBQ1gsNEVBQUNQLEdBQUM7Z0NBQUNLLFNBQVMsRUFBQyxRQUFROzBDQUFFSCxJQUFJLENBQUNNLEtBQUs7Ozs7O3FDQUFLOzs7OztpQ0FDbkM7d0JBQ05OLElBQUksQ0FBQ08sTUFBTSxrQkFDUiw4REFBQ0MsR0FBQzs0QkFBQ0wsU0FBUyxFQUFFLGtCQUFpQixDQUF1QixPQUFyQlAsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUU7c0NBQ2xELENBQUNJLElBQUksQ0FBQ1MsUUFBUTs7Ozs7aUNBQ2Y7Ozs7Ozt5QkFFTjtlQVZxQlIsS0FBSzs7OztxQkFXL0IsQ0FDUjtTQUNKLENBQUM7cUJBWVgsQ0FDSDtDQUNIO0dBbENLUixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnVTbWFsbC9pbmRleC50c3g/MjE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgeyBGaUNoZXZyb25VcCwgRmlDaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuLy8gY29uc3QgTWVudVNtYWxsID0gKHByb3BzOiBhbnkpID0+IHtcbi8vICAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcbi8vICAgY29uc29sZS5sb2coaXRlbSk7XG4vLyAvLyAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4vLyAvLyAgIGNvbnN0IFtpc1RvZ2dsZSwgc2V0SXNUb2dnbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBNZW51U21hbGw7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUNoZXZyb25Eb3duLCBGaUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG50eXBlIFByb3BzID0ge1xuICBkcm9wZG93bm1lbnU6IHN0cmluZztcbn07XG5cbmNvbnN0IEl0ZW1NZW51ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhID0gXCJkcm9wZG93bm1lbnVcIjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1tZW51IGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2wgLTZcIj57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYWRkTmV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGljb24tbWVudSBjb2wtNiAke2FjdGl2ZSA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0uc2hvd01lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPSdNZW51Jz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naXRlbS1tZW51LXNtYWxsLWxpbmsnPkxpc3Rpbmc8L2E+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uLW1lbnUtc21hbGwnIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmUgPyA8RmlDaGV2cm9uRG93biBjbGFzc05hbWU9J2Rvd24nIC8+IDogPEZpQ2hldnJvblVwIGNsYXNzTmFtZT0ndXAnIC8+fVxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICA8L2xpPiAqL31cbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlKCFhY3RpdmUpfT5BQkM8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7YWN0aXZlID8gXCJzaG93XCI6IFwiXCJ9YH0+XG4gICAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1NZW51O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIm1lbnUiLCJJdGVtTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJhIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwidGl0bGUiLCJhZGROZXciLCJpIiwic2hvd01lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MenuSmall/index.tsx\n"));

/***/ })

});