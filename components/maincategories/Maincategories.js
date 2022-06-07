import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
import SubCategoryServices from "./sub_categories/sub_categories_services/sub_categories_services";
import Link from "next/link";
import { useState } from "react";
let cn = classNames.bind(styles);

const Maincategories = ({ categories, subcategories }) => {
  const [subCategory, setSubCategory] = useState(false);

  const visibleSubCategoryActive = () => {
    setSubCategory(!subCategory);
  };
 
  const elements = categories.map((item, i) => {
    return (
      <Categories
        key={i}
        name={item.nameCategory}
        image={item.img}
        visibleSubCategoryActive={visibleSubCategoryActive}
      />
    );
  });

  let c1 = [],
    c2 = [],
    c3 = [],
    c4 = [];
  function subCategoryRows(start, finish, box) {
    for (let i = start; i < subcategories.length; i++) {
      if (i === finish) {
        break;
      }
      box[i] = subcategories[i];
    }
  }

  subCategoryRows(0, 5, c1);
  const subCategoriesRow1 = c1.map((item, i) => {
    return <SubCategoryServices key={i} name={item.name} />;
  });
  subCategoryRows(5, 10, c2);
  const subCategoriesRow2 = c2.map((item, i) => {
    return <SubCategoryServices key={i} name={item.name} />;
  });
  subCategoryRows(10, 15, c3);
  const subCategoriesRow3 = c3.map((item, i) => {
    return <SubCategoryServices key={i} name={item.name} />;
  });
  subCategoryRows(15, 20, c4);
  const subCategoriesRow4 = c4.map((item, i) => {
    return <SubCategoryServices key={i} name={item.name} />;
  });

  return (
    <div className={cn("maincategories", "container")}>
      <div className={cn("maincategories__container", "container")}>
        <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
        <ul className={cn("maincategories__list", "list__reset")}>
          {elements}
        </ul>
      </div>
      {subCategory && (
        <div className={cn("main_subcategory", "container")}>

          <Link href="/products">
            <a className={cn("main_subcategory__title-block")}>
            <img
              src="https://cdn-icons.flaticon.com/png/128/2989/premium/2989988.png?token=exp=1654583975~hmac=5b99ca09821d575208f27a3ebe8aa9eb"
              alt="logo"
              width="30px"
              height="30px"
              className={cn("main_subcategory__logo")}
            />
            <span className={cn("main_subcategory__title")}>
              Посмотреть все объявления
            </span>
            <strong className={cn("main_sub-strong")}>в Услуги</strong>
          </a>
          </Link>
          <span className={cn("line")}></span>

          <div className={cn("main_sub_lists")}>
            <ul className={cn("main_sub", "list__reset")}>
              {subCategoriesRow1}
            </ul>
            <ul className={cn("main_sub", "list__reset")}>
              {subCategoriesRow2}
            </ul>
            <ul className={cn("main_sub", "list__reset")}>
              {subCategoriesRow3}
            </ul>
            <ul className={cn("main_sub", "list__reset")}>
              {subCategoriesRow4}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Maincategories;
