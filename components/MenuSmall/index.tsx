import Link from "next/link";
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ItemMenu = (props: any) => {
  const [active, setActive] = React.useState(false);
  const { title, values, addNew, className, className2 } = props;

  return (
    <>
      <li className="menu-item">
        <div className="sub-menu flex">
          <Link href="/#">
            <a className="col-6">{title}</a>
          </Link>
          <span className="icon-menu col-6" onClick={() => setActive(!active)}>
            {addNew &&
              (!active ? (
                <FiChevronDown className="down" />
              ) : (
                <FiChevronUp className="up" />
              ))}
          </span>
        </div>
      </li>
      <ul className={` ${active ? className2 : "is-hidden"}`}>
        {values.map((item: string, index: number) => (
          <li key={index} className={className}>
            <Link href="/#">
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ItemMenu;
