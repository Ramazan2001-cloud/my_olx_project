import SubCategory from "../sub_categories/sub_categories";
import styles from "./fashion_stylesCategory.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const FashionStylesCategory = ({ subCat }) => {
  const sub_category6 = subCat[5].subcategory;
  const elements = sub_category6.map((item, i) => {
    return <SubCategory key={i} name={item.name} />;
  });
  return (
    <div className={cn("main_subcategory", "container")}>
      <a href="##" className={cn("main_subcategory__title-block")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
          alt="logo"
          width="15px"
          height="15px"
          className={cn("main_subcategory__logo")}
        />
        <span className={cn("main_subcategory__title")}>
          Посмотреть все объявления
        </span>
        <strong className={cn("main_sub-strong")}> в Мода и стиль</strong>
      </a>
      <span className={cn("line")}></span>
      <div className={cn("main_sub_lists")}>{elements}</div>
    </div>
  );
};
export default FashionStylesCategory;
