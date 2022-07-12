import styles from "./sub_categories.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
let cn = classNames.bind(styles);

const SubCategory = ({ name }) => {
  return (
    <Link href="/filterpage">
      <li className={cn("main__list-item")}>
        <a className={cn("main_sub_link")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
            alt="arrow logo"
            width="15px"
            height="15px"
            className={cn("main_subcategory__logo")}
          />
          <span className={cn("main_sub_link_text")}>{name}</span>
        </a>
      </li>
    </Link>
  );
};
export default SubCategory;
