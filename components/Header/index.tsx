import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { FaRegWindowClose } from "react-icons/fa";
import { Images } from "../../assets/images/index";
import Link from "next/link";
// import MenuSmall from "../MenuSmall";
// import ItemMenu from "../MenuSmall";
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
  const [active, setActive] = useState(false);
  type Menu = {
    title: string;
    values?: string[];
    addNew?: boolean;
    showMenu: boolean;
  };

  const menu: Menu[] = [
    {
      title: "Home",
      values: [],
      addNew: false,
      showMenu: false,
    },
    {
      title: "Listing",
      values: ["Details Listing"],
      addNew: true,
      showMenu: false,
    },
    {
      title: "Services",
      values: [],
      addNew: false,
      showMenu: false,
    },
    {
      title: "Blog",
      values: ["Single Post"],
      addNew: true,
      showMenu: false,
    },
    {
      title: "Page",
      values: ["404", "Gallery", "Help Center", "Team"],
      addNew: true,
      showMenu: false,
    },
    {
      title: "About",
      values: [],
      addNew: false,
      showMenu: false,
    },
    {
      title: "Contact Us",
      values: [],
      addNew: false,
      showMenu: false,
    },
  ];

  const [loadMenu, setLoadMenu] = useState(menu);

  console.log(loadMenu);

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
        {/* <MenuSmall item={loadMenu}/> */}
        {!isToggle ? (
          <div className="header-menu-small dis-none"></div>
        ) : (
          <div className="header-menu-small dis-block">
            <nav className="header-nav-small">
              <ul className="menu-list">
                {loadMenu.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="menu-item"
                    onClick={() => setActive(!active)}
                  >
                    <div className="sub-menu flex">
                      <Link href="/#">
                        <a className="col-6">{item.title}</a>
                      </Link>
                      {item.addNew && (
                        <i
                          className={`icon-menu col-6 ${active ? "show" : ""}`}
                        >
                          {!item.showMenu ? (
                            <FiChevronDown className="down" />
                          ) : (
                            <FiChevronUp className="up"/>
                          )}
                        </i>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* {!isToggle ? (
        <div className="header-menu-small dis-none"></div>
      ) : (
        <div className="header-menu-small dis-block">
          <nav className="header-nav-small">
            <ul className="menu-list">
              {loadMenu.map((item,index)=> {
                return (
                  <li className="menu-item" key={`menu-item-${index}`}>
                  <div className="sub-menu flex">
                  <Link href="/#">
                    <a className={`col-6`}>{item.title}</a>
                  </Link>
                    {item.addNew && (
                      <i className={`icon-menu col-6`}>
                        {!item.showMenu ? (
                          <FiChevronDown 
                            className="down"
                            onClick={() => {
                              setLoadMenu([
                                ...loadMenu,
                                item.showMenu = true
                              ]);
                            }}
                          />
                        ) : (
                          <FiChevronUp
                            className="up"
                            onClick={() => {
                              setLoadMenu([
                                ...loadMenu,
                                item.showMenu = false
                              ]);
                            }}
                          />
                        )}
                      </i>
                    )}
                  </div>
                  <ul className="menu-small">
                    {item.values
                      ? item.values.map((value, index) => {
                          return item.showMenu ? (
                            <li
                              className="menu-item-sub animation-show-menu"
                              key={`value-${index}`}
                            >
                              {value}
                            </li>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </ul>
                </li>
                )
              })}
           </ul>
          </nav>
        </div>
      )}  */}
        {/* <ItemMenu dropdownmenu="dropdown"></ItemMenu>
      <ItemMenu dropdownmenu="dropdown"></ItemMenu> */}
      </header>
    </>
  );
}

export default Header;
