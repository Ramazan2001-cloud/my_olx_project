import SubCategory from "../sub_categories/sub_categories";
import styles from "./realEstateCategory.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);


const RealEstateCategory = ({subCat}) => {
	const sub_category2 = subCat[1].subcategory;
  const elements = sub_category2.map((item, i) => {
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
        <strong className={cn("main_sub-strong")}>в Недвижимость</strong>
      </a>
      <span className={cn("line")}></span>
      <div className={cn("main_sub_lists")}>{elements}</div>
    </div>
  );
};
export default RealEstateCategory;