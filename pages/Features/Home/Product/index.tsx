import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { Images } from "../../../../assets/images";
import FadeIn from "../../../../components/Animations/FadeIn";
function Product() {
  type Products = {
    number: number;
    img: string;
    title: string;
    address: string;
    price: string;
    icon: JSX.Element;
  };
  const products: Products[] = [
    {
      number:0,
      img: Images.product1,
      title: "Ataz Standard House",
      address: "Pluto Street, Indonesia",
      price: "$2,800,-",
      icon: <MdLocationPin />,
    },
    {
      number:1,
      img: Images.product2,
      title: "Qiri Minimalist House",
      address: "Jupiter Street, Indonesia",
      price: "$4,800,-",
      icon: <MdLocationPin />,
    },
    {
      number:2,
      img: Images.product3,
      title: "Qanan Luxury House",
      address: "Mars Street, Indonesia",
      price: "$6,800,-",
      icon: <MdLocationPin />,
    },
    {
      number:3,
      img: Images.product4,
      title: "Tingah Elegant House",
      address: "Venus Street, Indonesia",
      price: "$8,800,-",
      icon: <MdLocationPin />,
    },
  ];
  const productRef = React.useRef<HTMLDivElement>(null);
  const infoRef = React.useRef<HTMLDivElement>(null);
  const productListRef = React.useRef<HTMLUListElement>(null);
  const productTextRef = React.useRef<HTMLParagraphElement>(null);
  const productBtnRef = React.useRef<HTMLAnchorElement>(null);
  return (
    <>
    <section className="section-product section-padding">
      <div className="container">
        <div className="product-content mb-20 flex align-items-center">
          <div className="row row-no-gutters">
          <h3 className="product-title title col-6" ref={productRef}>Featured Listing</h3>
          <p className="product-text sub-title col-6" ref={infoRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
        </div>
        <ul className="product-list-info ptb-20 row row-no-gutters" ref={productListRef} >
          {products.map((item) => (
              <li className="product-item-info col-3" key={item.number}>
                <h6 className="product-price-info">{item.price}</h6>
                <div className="product-img-info mb-16">
                  <Image
                    src={item.img}
                    alt=""
                  />
                </div>
                <h4 className="product-title-info title mb-16">{item.title}</h4>
                <ul className="product-list">
                  <li className="product-list-item flex align-items-center">
                    <i className="product-list-icon">{item.icon}</i>
                    <span className="product-list-address sub-title">
                      {item.address}
                    </span>
                  </li>
                </ul>
              </li>
            )
          )}
        </ul>
        <div className="product-bottom flex align-items-center justify-content-between">
          <p className="product-bottom-text sub-title" ref={productTextRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Link href="/#">
          <a className="btn btn-more second" ref={productBtnRef}>
            See More
          </a>
          </Link>
        </div>
      </div>
    </section>
    <FadeIn 
        productRef ={productRef}
        infoRef ={infoRef}
        productListRef ={productListRef}
        productTextRef ={productTextRef}
        productBtnRef ={productBtnRef}/>
    </>
  );
}

export default Product;
