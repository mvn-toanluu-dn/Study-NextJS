import Image from "next/image";
import React, { useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import { Images } from "../../../../assets/images";
import { onScroll } from "../../../../components/Animations/FadeLR";
function Needs() {
  type Needs = {
    icon: JSX.Element,
    title: string,
    info: string,
  };
  const needs: Needs[] = [
    {
      icon: <FiCheck className="icon" />,
      title: "Comfortable Home Design",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FiCheck className="icon"  />,
      title: "Comfortable Home Design",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FiCheck className="icon" />,
      title: "Comfortable Home Design",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  useEffect(() => {
    const handlerScroll =()=>{
      const animateItem = document.querySelectorAll(".needs-list .needs-box");
      const animateImg = document.querySelectorAll(".needs-img-item");
    onScroll(animateItem)
    onScroll(animateImg)
    }
    
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll",handlerScroll );
},[]);
  return (
    <section className="section-needs section-padding">
      <div className="container">
        <div className="row row-no-gutters">
        <div className="needs-content col-6">
          <h3 className="needs-title mb-16 title">
            Why Choose Us for Your House Needs?
          </h3>
          <p className="needs-subtitle mb-16 sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="needs-list row row-no-gutters">
            {needs.map((item, index) => (
                    <li className="needs-item flex needs-box" key={index}>
                        <i className="needs-item-icon">{item.icon}</i>
                        <div className="needs-item-content">
                            <h4 className="needs-item-title title">{item.title}</h4>
                            <p className="need-item-subtitle sub-title">{item.info}</p>
                        </div>
                    </li>
                ))}
          </ul>
        </div>
        <div className="needs-img  col-6">
            <div className="needs-img-item parent">
                <Image src={Images.need1} alt="" />
            </div>
            <div className="needs-img-item child">
                <Image src={Images.need2} alt="" />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Needs;
