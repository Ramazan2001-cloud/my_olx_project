import { useState } from "react";
import styles from "./categories.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

export default function Categories({ name, image ,visibleModalActive}) {
  const SubCategory = () => {};
  return (
    <li
      className={cn("maincategories__item", "maincategories__item__active")}
      onClick={visibleModalActive}
    >
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
    </li>
  );
}
