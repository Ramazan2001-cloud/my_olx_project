import styles from "./categories.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

export default function Categories({ name }) {
  return (
    <li className={cn("maincategories__item")}>
      <a href="#" className={cn("maincategories__link", "link__reset")}>
        <img
          src="https://categories.olxcdn.com/assets/categories/olxkz/uslugi-7-2x.png"
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
