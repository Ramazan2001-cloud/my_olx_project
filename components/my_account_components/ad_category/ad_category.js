import styles from "./ad_category.module.css";
import AdCategoryItem from "./ad_category_item/ad_category_item";
import { useState } from "react";
import cn from "classnames";

const AdCategory = ({ adCatName }) => {
  // for (let i = 0; i < adCatName[0].subcategory.length; i++) {
  //   console.log(adCatName[0].subcategory[i].name);
  // }
  const adCatItems = adCatName[0].subcategory.map((item) => {
    return <AdCategoryItem key={item.id} name={item.name} />;
  });
	
  return (
    <div>
      <ul className={cn(styles.adcategory__list)}>{adCatItems}</ul>
      <span className={cn(styles.line)}></span>
      <ul className={cn(styles.adcategory_list, styles.list__reset)}>
        <li className={cn(styles.adcategory_item)}>
          <button className={cn(styles.adcategory_button)}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/3839/premium/3839020.png?token=exp=1655297154~hmac=2455e99535ddba14830dcb6b4a30f0be"
							width="20px"
							height="20px"
              alt="filter"
            />
            <span>Добавить фильтр</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default AdCategory;
