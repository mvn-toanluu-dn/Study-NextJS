import Image from "next/image";
import React, { useRef } from "react";
import { Images } from "../../../../assets/images";
import FadeIn from "../../../../components/Animations/FadeIn";
function Vision() {
  type Visions = {
    number: number;
    title: string;
    info: string;
    img: string;
  };
  const visions: Visions[] = [
    {
      number: 0,
      title: "Our Vision",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: Images.vision1,
    },
    {
      number: 1,
      title: "Our Vision",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: Images.vision2,
    },
  ];
  const visionLRRef = React.useRef<HTMLLIElement>(null);
  return (
    <>
      {/* <FadeIn
        productRef={productRef}
        infoRef={infoRef}
        productListRef={productListRef}
        productTextRef={productTextRef}
        productBtnRef={productBtnRef}
        visionLRRef={visionLRRef}
      /> */}
      <section className="section-vision section-padding">
        <div className="container">
          <ul className="vision-list row row-no-gutters">
            {visions.map((item) => (
              <li
                className="vision-item flex col-6"
                //   ref={visionLRRef}
                key={item.number}
              >
                <div className="vision-item-content mb-16">
                  <h3 className="vision-title title">{item.title}</h3>
                  <p className="vision-info sub-title">{item.info}</p>
                </div>
                <div className="vision-img">
                  <Image src={item.img} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Vision;
