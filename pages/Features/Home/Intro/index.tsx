import Image from "next/image";
import React, { useEffect } from "react";
import { Images } from "../../../../assets/images/index";
import { BiSearch } from "react-icons/bi";
function Intro() {
  type Counts = {
    number: number;
    plus: string;
    text: string;
  };
  const count: Counts[] = [
    {
      number: 300,
      plus: "+",
      text: "Awards Winnning",
    },
    {
      number: 80,
      plus: "+",
      text: "Property Ready",
    },
    {
      number: 450,
      plus: "+",
      text: "Happy Customers",
    },
  ];
  return (
    <section className="section-intro section-padding">
      <div className="container">
        <div className="row row-no-gutters">
        <div className="intro-content mb-20 col-6">
          <h1 className="intro-title mb-16">
            Bring Your Family's Happiness to Your Dream House
          </h1>
          <p className="intro-info sub-title mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="intro-form m-16">
            <div className="intro-form-search">
              <input
                className="intro-input"
                placeholder="Search here"
                type="search"
              />
              <button className="btn intro-btn">
                <BiSearch />
              </button>
            </div>
          </form>
          <div className="intro-count">
            <ul className="intro-count-list row row-no-gutters">
                {count.map((item) => {
                    let items = <></>;
                    items = (
                        <li className="intro-count-item col-4" key={item.number}>
                            <h4 className="intro-count-number">
                                <span className="intro-count-number-up">{item.number}</span>
                                {item.plus}
                            </h4>
                            <p className="intro-count-text">{item.text}</p>
                        </li>
                    );
                    return items;
                })}
            </ul>
          </div>
        </div>
        <div className="intro-img col-6">
          <Image
            src={Images.intro_house}
            alt=""
            priority={true}
          />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
