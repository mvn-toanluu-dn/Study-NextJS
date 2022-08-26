import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Images } from "../../../../assets/images";
function Service() {
  type Services = {
    number: number;
    img: string;
    title: string;
    text: string;
  };

  const services: Services[] = [
    {
      number: 0,
      img: Images.service1,
      title: "View Listing",
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      number: 1,
      img: Images.service2,
      title: "Contact Us",
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      number: 2,
      img: Images.service3,
      title: "Request a Visit",
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      number: 3,
      img: Images.service4,
      title: "Buy The House",
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  return (
    <section className="section-service section-padding">
      <div className="container">
        <div className="service-content mb-40 row row-no-gutters">
          <h3 className="service-title title col-6">
            Easy Step to Buy Property on Dhalem Real Estate
          </h3>
          <p className="service-text sub-title col-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className="service-list row row-no-gutters">
          {services.map((item) => (
              <li className="service-item col-3" key={item.number}>
                <div className="service-img">
                  <Image src={item.img} alt="" />
                </div>
                <div className="service-info">
                  <h4 className="service-info-title title">{item.title}</h4>
                  <p className="service-info-text sub-title">{item.text}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className="service-bottom flex justify-content-between align-items-center mt-40">
          <p className="service-bottom-text sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Link href="/#">
          <a className="btn btn-faq second">See Our FAQ</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;
