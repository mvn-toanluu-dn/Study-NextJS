import Image from "next/image";
import React from "react";
import { Images } from "../../../assets/images";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
function Footer() {
  type Useful = {
    info: string;
  };
  const links: Useful[] = [
    {
      info: "Listing",
    },
    {
      info: "About Us",
    },
    {
      info: "Contact Us",
    },
    {
      info: "Our Team",
    },
  ];
  type Info = {
    icon: JSX.Element;
    detail: string;
  }
  const info: Info[] = [
    {
      icon: <FaMapMarkerAlt />,
      detail: "123 Anywhere Street, Any City, 12345 ST, Indonesia",
    },
    {
      icon: <FaPhoneAlt />,
      detail: "+123 456 7890",
    },
    {
      icon: <FaEnvelope />,
      detail: "hello@dhalem.com",
    },
  ]
  return (
    <footer className="page-footer">
      <div className="footer section-padding">
        <div className="container">
          <ul className="footer-list flex">
            <li className="footer-item">
              <div className="footer-img mb-16">
                <Image src={Images.logo} alt="" />
              </div>
              <p className="footer-img-info sub-title">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </li>
            <li className="footer-item">
              <h6 className="footer-title mb-16">Useful Links</h6>
              <ul className="footer-item-list">
                {links.map((item, index) => {
                  let items = <></>;
                  items = (
                    <li className="footer-item-list-info" key={index}>
                      <a href="/#" className="footer-item-link">
                        {item.info}
                      </a>
                    </li>
                  );
                  return items;
                })}
              </ul>
            </li>
            <li className="footer-item">
              <h6 className="footer-title mb-16">Get in Touch</h6>
              <ul className="footer-info-list">
                {info.map((item, index) => {
                  let items = <></>
                  items = (
                    <li className="footer-info-item" key={index}>
                      <a href="/#">
                      <i className="footer-icon">{item.icon}</i>
                      <span className="footer-detail sub-title">{item.detail}</span>
                      </a> 
                    </li>
                  )
                  return items;
                })}
              </ul>
            </li>
            <li className="footer-item">
              <h6 className="footer-title-form mb-16">Newsletter</h6>
              <form className="footer-form flex">
                <input className="footer-input mb-16" type="email" placeholder="Your Email" />
                <button className="btn footer-btn">Submit</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
