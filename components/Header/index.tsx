import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { FaRegWindowClose } from "react-icons/fa";
import { Images } from "../../assets/images/index";
function Header() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = (scroll : Event) => {
      if(window.scrollY >= 100) {
        headerRef.current?.classList.add("fixed");
      } else {
        headerRef.current?.classList.remove("fixed");
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const [isToggle, setIsToggle] = useState(false);

  type Menu = {
    title: string;
    values?: string[];
    addNew: boolean;
    showMenu: boolean;
  };

  const menu: Menu[] = [
    {
      title: "Home",
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
      addNew: false,
      showMenu: false,
    },
    {
      title: "Contact Us",
      addNew: false,
      showMenu: false,
    },
  ];

  const [loadMenu, setLoadMenu] = useState(menu);

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
                  <a href="/#">
                    Listing
                    <FiChevronDown className="icon" />
                  </a>
                  <ul className="sub-menu">
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        Details Listing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item">
                  <a href="/#">Services</a>
                </li>
                <li className="header-menu-item menu-down">
                  <a href="/#">
                    Blog
                    <FiChevronDown className="icon" />
                  </a>

                  <ul className="sub-menu">
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item menu-down">
                  <a href="/#">
                    Page
                    <FiChevronDown className="icon" />
                  </a>

                  <ul className="sub-menu">
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        404
                      </a>
                    </li>
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        Gallery
                      </a>
                    </li>
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        Help Center
                      </a>
                    </li>
                    <li className="sub-item">
                      <a className="sub-item-link" href="/#">
                        Team
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header-menu-item">
                  <a href="/#">About</a>
                </li>
                <li className="header-menu-item">
                  <a href="/#">Contact Us</a>
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
            <a className="btn links">Get a Quote</a>
            </div>
          </div>
        </div>
      </header>
      {!isToggle ? (
        <div className="header-menu-small dis-none"></div>
      ) : (
        <div className="header-menu-small dis-block">
          <nav className="header-nav-small">
            <ul className="menu-list">
              {loadMenu.map((item,index)=> {
                return (
                  <li className="menu-item" key={`menu-item-${index}`}>
                  <div className="sub-menu flex">
                    <a className={`col-6`}>{item.title}</a>
                    {item.addNew && (
                      <i className={`icon-menu col-6`}>
                        {!item.showMenu ? (
                          <FiChevronDown
                            className="down"
                            onClick={() => {
                              setLoadMenu([
                                // ...loadMenu,
                                // (item.showMenu = true),
                              ]);
                            }}
                          />
                        ) : (
                          <FiChevronUp
                            className="up"
                            onClick={() => {
                              setLoadMenu([
                                // ...loadMenu,
                                // (item.showMenu = false),
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
                            <li
                              className="menu-item-sub animation-close-menu"
                              key={`value-${index}`}
                            >
                              {value}
                            </li>
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
      )}
    </>
  );
}

export default Header;
