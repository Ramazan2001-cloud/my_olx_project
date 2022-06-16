import styles from "./servicesCategory.module.css";
import classNames from "classnames/bind";
import SubCategory from "../sub_categories/sub_categories";
import Link from "next/link";
let cn = classNames.bind(styles);

const ServicesCategory = ({ subCat }) => {
  const sub_category1 = subCat[0].subcategory;

  const elements = sub_category1.map((item, i) => {
    return <SubCategory key={i} name={item.name} />;
  });
  
  return (
    <div className={cn("block")}>
      <div className={cn("arrow_white")}></div>
      <div className={cn("main_subcategory", "container")}>
        <Link href={"/filterPage"}>
          <a className={cn("main_subcategory__title-block")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
              alt="logo"
              width="15px"
              height="15px"
              className={cn("main_subcategory__logo")}
            />
            <strong className={cn("main_subcategory__title")}>
              Посмотреть все объявления
            </strong>
            <span className={cn("main_sub-strong")}> в Услуги</span>
          </a>
        </Link>
        <div className={cn("arrow_white2")} />
        <span className={cn("line")}></span>
        <ul className={cn("main_sub_lists", "list__reset")}>{elements}</ul>
      </div>
    </div>
  );
};
export default ServicesCategory;
