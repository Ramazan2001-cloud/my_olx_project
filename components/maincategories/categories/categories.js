import styles from "./categories.module.css";
import { useState } from "react";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

export default function Categories({name,image}) { 
  // const [count,setCount] = useState(false);
  // const changeView = () => {
  //     setCount(true);
  // }
  return (
    <li  className={cn("maincategories__item")}>
      <a href="#" className={cn("maincategories__link", "link__reset")}>
        <img
          src={image}
          alt="category"
          width="70px"
          height="71px"
          className={cn("maincategories__image")}
        />
        <span className={cn("maincategories__name")}>{name}</span>
      </a>
      {/* {count && <div className={cn("block")}>hello world</div>} */}
    </li>
  );
}
