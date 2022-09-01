import Image from "next/image";
import React, { useEffect } from "react";
import { Images } from "../../../../assets/images/index";
import { BiSearch } from "react-icons/bi";
function Intro() {
  type Counts = {
    number: number;
    suffix: string;
    text: string;
  };
  const count: Counts[] = [
    {
      number: 300,
      suffix: "+",
      text: "Awards Winnning",
    },
    {
      number: 80,
      suffix: "+",
      text: "Property Ready",
    },
    {
      number: 450,
      suffix: "+",
      text: "Happy Customers",
    },
  ];
  useEffect(() => {
    let valueDisplays:any = document.querySelectorAll(".intro-count-number-up") ;
    let interval = 2000;
    
    valueDisplays.forEach((valueDisplays: {
      textContent: number; getAttribute: (arg0: string) => string; 
}) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue +=1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    })
  })
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
                <button className="intro-btn">
                  <i className="btn btn-search">
                  <BiSearch />
                  </i>
                </button>
              </div>
            </form>
            <div className="intro-count">
              <ul className="intro-count-list row row-no-gutters">
                {count.map((item) => (
                  <li className="intro-count-item col-4" key={item.number}>
                    <h4 className="intro-count-number">
                      <span className="intro-count-number-up" data-val={item.number}>
                        0
                      </span>
                      {item.suffix}
                    </h4>
                    <p className="intro-count-text">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="intro-img col-6">
            <Image src={Images.intro_house} loading="eager" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
