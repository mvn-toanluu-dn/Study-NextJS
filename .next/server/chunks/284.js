"use strict";
exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 7284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home_Product)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./assets/images/index.tsx
var assets_images = __webpack_require__(6883);
;// CONCATENATED MODULE: ./components/Animations/FadeIn/index.tsx


function FadeIn({ productRef , infoRef , productListRef , productTextRef , productBtnRef , visionLRRef  }) {
    // const productRef = React.useRef<HTMLDivElement>(null);
    // const infoRef = React.useRef<HTMLDivElement>(null);
    // const productListRef = React.useRef<HTMLUListElement>(null);
    // const productTextRef = React.useRef<HTMLParagraphElement>(null);
    // const productBtnRef = React.useRef<HTMLAnchorElement>(null);
    (0,external_react_.useEffect)(()=>{
        const onScroll = (scroll)=>{
            switch(true){
                // case window.scrollY >= 1250:
                //     visionLRRef.current?.classList.add("fade-lr");
                //     break;
                case window.scrollY >= 800:
                    productTextRef.current?.classList.add("fade-left");
                    productBtnRef.current?.classList.add("fade-right");
                    break;
                case window.scrollY >= 200:
                    productListRef.current?.classList.add("fade-in");
                    break;
                case window.scrollY >= 120:
                    productRef.current?.classList.add("fade-left");
                    infoRef.current?.classList.add("fade-right");
                    break;
            }
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}
/* harmony default export */ const Animations_FadeIn = (FadeIn);

;// CONCATENATED MODULE: ./pages/Features/Home/Product/index.tsx






function Product() {
    const products = [
        {
            number: 0,
            img: assets_images/* Images.product1 */.r.product1,
            title: "Ataz Standard House",
            address: "Pluto Street, Indonesia",
            price: "$2,800,-",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {})
        },
        {
            number: 1,
            img: assets_images/* Images.product2 */.r.product2,
            title: "Qiri Minimalist House",
            address: "Jupiter Street, Indonesia",
            price: "$4,800,-",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {})
        },
        {
            number: 2,
            img: assets_images/* Images.product3 */.r.product3,
            title: "Qanan Luxury House",
            address: "Mars Street, Indonesia",
            price: "$6,800,-",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {})
        },
        {
            number: 3,
            img: assets_images/* Images.product4 */.r.product4,
            title: "Tingah Elegant House",
            address: "Venus Street, Indonesia",
            price: "$8,800,-",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdLocationPin, {})
        }, 
    ];
    const productRef = external_react_default().useRef(null);
    const infoRef = external_react_default().useRef(null);
    const productListRef = external_react_default().useRef(null);
    const productTextRef = external_react_default().useRef(null);
    const productBtnRef = external_react_default().useRef(null);
    // useEffect(() => {
    //   const onScroll = (scroll : Event) => {
    //         let pos = document.documentElement.scrollTop;
    //           if (window.scrollY >= 120) {
    //               productRef.current?.classList.add("fade-left");
    //               infoRef.current?.classList.add("fade-right");
    //           } else {
    //               productRef.current?.classList.remove("fade-left");
    //               infoRef.current?.classList.remove("fade-right");
    //           }
    //           if (window.scrollY >= 200) {
    //               productListRef.current?.classList.add("fade-in");
    //           } else {
    //             productListRef.current?.classList.remove("fade-in");
    //           }
    //           if (window.scrollY >= 800) {
    //             productTextRef.current?.classList.add("fade-left");
    //             productBtnRef.current?.classList.add("fade-right");
    //         } else {
    //           productTextRef.current?.classList.remove("fade-left");
    //           productBtnRef.current?.classList.remove("fade-right")
    //         }
    //           // switch
    //           console.log(pos);
    //       }
    //       window.addEventListener("scroll", onScroll);
    //       return () => window.removeEventListener("scroll", onScroll);
    //   })
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section-product section-padding",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "product-content mb-20 flex align-items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row row-no-gutters",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "product-title title col-6",
                                        ref: productRef,
                                        children: "Featured Listing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "product-text sub-title col-6",
                                        ref: infoRef,
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "product-list-info ptb-20 row row-no-gutters",
                            ref: productListRef,
                            children: products.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "product-item-info col-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "product-price-info",
                                            children: item.price
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "product-img-info mb-16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: item.img,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "product-title-info title mb-16",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "product-list",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "product-list-item flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "product-list-icon",
                                                        children: item.icon
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "product-list-address sub-title",
                                                        children: item.address
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, item.number))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "product-bottom flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "product-bottom-text sub-title",
                                    ref: productTextRef,
                                    children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/#",
                                    className: "btn btn-more second",
                                    ref: productBtnRef,
                                    children: "See More"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Animations_FadeIn, {
                productRef: productRef,
                infoRef: infoRef,
                productListRef: productListRef,
                productTextRef: productTextRef,
                productBtnRef: productBtnRef
            })
        ]
    });
}
/* harmony default export */ const Home_Product = (Product);


/***/ })

};
;