"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ simpleScroll),
/* harmony export */   "g": () => (/* binding */ onScroll)
/* harmony export */ });
const onScroll = (animate)=>{
    const windowHeight = window.innerHeight;
    for(let i = 0; i < animate.length; i++){
        const elementTop = animate[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 30) {
            animate[i].classList.add("active");
        }
    }
};
const simpleScroll = (animate)=>{
    const windowHeight = window.innerHeight;
    const elementTop = animate.getBoundingClientRect().top;
    if (elementTop < windowHeight - 20) {
        animate.classList.add("active");
    }
};


/***/ }),

/***/ 3963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6883);
/* harmony import */ var _components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5144);






function Service() {
    const services = [
        {
            number: 0,
            img: _assets_images__WEBPACK_IMPORTED_MODULE_4__/* .Images.service1 */ .r.service1,
            title: "View Listing",
            text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            number: 1,
            img: _assets_images__WEBPACK_IMPORTED_MODULE_4__/* .Images.service2 */ .r.service2,
            title: "Contact Us",
            text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            number: 2,
            img: _assets_images__WEBPACK_IMPORTED_MODULE_4__/* .Images.service3 */ .r.service3,
            title: "Request a Visit",
            text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            number: 3,
            img: _assets_images__WEBPACK_IMPORTED_MODULE_4__/* .Images.service4 */ .r.service4,
            title: "Buy The House",
            text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }, 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handlerScroll = ()=>{
            const animated = document.querySelectorAll(".service-box");
            const animateTitle = document.querySelector(".service-box .title");
            const animateSubTitle = document.querySelector(".service-box .sub-title");
            const animateItem = document.querySelectorAll(".service-box-list .item");
            const animateFaq = document.querySelector(".service-box .btn-faq");
            (0,_components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__/* .onScroll */ .g)(animated);
            (0,_components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__/* .simpleScroll */ .N)(animateTitle);
            (0,_components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__/* .simpleScroll */ .N)(animateSubTitle);
            (0,_components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__/* .onScroll */ .g)(animateItem);
            (0,_components_Animations_FadeLR__WEBPACK_IMPORTED_MODULE_5__/* .simpleScroll */ .N)(animateFaq);
        };
        window.addEventListener("scroll", handlerScroll);
        return ()=>window.removeEventListener("scroll", handlerScroll);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section-service section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "service-content mb-40 row row-no-gutters service-box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "service-title title col-6",
                            children: "Easy Step to Buy Property on Dhalem Real Estate"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "service-text sub-title col-6",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "service-list row row-no-gutters service-box-list",
                    children: services.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "service-item col-3 item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "service-img",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: item.img,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "service-info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "service-info-title title",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "service-info-text sub-title",
                                            children: item.text
                                        })
                                    ]
                                })
                            ]
                        }, item.number))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "service-bottom flex justify-content-between align-items-center mt-40 service-box",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "service-bottom-text sub-title",
                            children: [
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "btn btn-faq second",
                                children: "See Our FAQ"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


/***/ })

};
;