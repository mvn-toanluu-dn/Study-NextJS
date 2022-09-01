import React from "react";
import Link from "next/link";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
const MenuSmall = (props: any) => {
  const { item } = props;
  console.log(item);
//   const [active, setActive] = React.useState(false);
//   const [isToggle, setIsToggle] = React.useState(false);
  return (
    <>

    </>
  );
};
export default MenuSmall;
// import Link from 'next/link';
// import React from 'react'
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// type Props = {
//     dropdownmenu: string
// }

// const ItemMenu = (props: Props) => {
//     const [active, setActive] = React.useState(false);
//     const a = "dropdownmenu";
//   return (
//     <>
//     <li className='Menu'>
//             <a className='item-menu-small-link'>Listing</a>
//                 <i className='icon-menu-small' onClick={() => setActive(!active)}>
//                     {active ? <FiChevronDown className='down' /> : <FiChevronUp className='up' />}
//                 </i>
//     </li>
//     {/* <button onClick={()=> setActive(!active)}>ABC</button>
//     <div className={`dropdown ${active ? "show": ""}`}>
//         <h1>Hello</h1>
//     </div> */}
//     </>
//   )
// }
// export default ItemMenu;
