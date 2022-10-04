import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { FaRegWindowClose } from "react-icons/fa";
import { Images } from "../../assets/images/index";
import Link from "next/link";
import { menu } from "../../data";
// import MenuSmall from "../MenuSmall";
import ItemMenu from "../MenuSmall";
function Header() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = (scroll: Event) => {
      if (window.scrollY >= 100) {
        headerRef.current?.classList.add("fixed");
      } else {
        headerRef.current?.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [isToggle, setIsToggle] = useState(false);
  // const [active, setActive] = useState(false);

  // const [loadMenu, setLoadMenu] = useState(menu);

  // console.log(loadMenu);

  return (
    <>
      <header className="page-header" ref={headerRef}>
        <div className="header flex">
          <div className="header-logo">
            <a href="/#">
              <Image src={Images.logo} width={111} height={40} alt="" />
            </a>
          </div>
          <div className="header-menu flex">
            <nav className="header-nav">
              <ul className="header-menu-list flex">
                <li className="header-menu-item">
                  <a href="/#">Home</a>
                </li>
                <li className="header-menu-item menu-down">
                  <Link href="/#">
                    <a>
                      Listing
                      <FiChevronDown className="icon" />
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">Details Listing</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item">
                  <Link href="/#">
                    <a>Services</a>
                  </Link>
                </li>
                <li className="header-menu-item menu-down">
                  <Link href="#">
                    <a>
                      Blog
                      <FiChevronDown className="icon" />
                    </a>
                  </Link>

                  <ul className="sub-menu">
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">Single Post</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item menu-down">
                  <Link href="/#">
                    <a>
                      Page
                      <FiChevronDown className="icon" />
                    </a>
                  </Link>

                  <ul className="sub-menu">
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">404</a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">Gallery</a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">Help Center</a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/#">
                        <a className="sub-item-link">Team</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item">
                  <Link href="/#">
                    <a>About</a>
                  </Link>
                </li>
                <li className="header-menu-item">
                  <Link href="/#">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header-sub" onClick={() => setIsToggle(!isToggle)}>
              {isToggle ? (
                <FaRegWindowClose className="close" />
              ) : (
                <GoThreeBars className="open" />
              )}
            </div>
            <div className="header-btn">
              <Link href="/#">
                <a className="btn links">Get a Quote</a>
              </Link>
            </div>
          </div>
        </div>
        {!isToggle ? (
          <div className="header-menu-small dis-none"></div>
        ) : (
          <div className="header-menu-small dis-block">
            <nav className="header-nav-small">
              <ul className="menu-list">
                {menu.map((items, index) => (
                  <ItemMenu key={index} {...items} />
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
