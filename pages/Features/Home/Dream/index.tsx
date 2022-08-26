import React from "react";
import Image from "next/image";
import { Images } from "../../../../assets/images";
function Dream() {
  type Dreams = {
    img: string;
  };
  const dreams: Dreams[] = [
    {
      img: Images.dream2,
    },
    {
      img: Images.need2,
    },
    {
      img: Images.dream3,
    },
  ];
  return (
    <section className="section-dream section-padding">
      <div className="container">
        <div className="row row-no-gutters">
          <div className="col-6">
            <div className="dream-img">
            <Image src={Images.dream1} alt="" />
            </div>
          </div>
          <div className="dream-content col-6">
            <h2 className="dream-title title mb-16">
              Let's Move to Your Dream Family Home
            </h2>
            <p className="dream-info sub-title mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="btn btn-get mb-16" href="/#">
              Get Quote Now
            </a>
            <ul className="dream-list row row-no-gutters">
              {dreams.map((item, index) => (
                <li className="dream-item col-4" key={index}>
                <div className="dream-item-img">
                  <Image src={item.img} alt="" />
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dream;
