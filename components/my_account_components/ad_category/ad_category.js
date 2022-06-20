import styles from "./ad_category.module.css";
import AdCategoryItem from "./ad_category_item/ad_category_item";
import { useState } from "react";
import cn from "classnames";

const AdCategory = () => {
  const adCatItems = [
    "Активные",
    "Ожидающие",
    "Неоплаченные",
    "Неактивные",
    "Отклоненные",
  ];
  const elements = adCatItems.map((item, i) => {
    return(
      <AdCategoryItem key={i} name={item}/>
    )
  })
  return (
    <div>
      <ul className={cn(styles.adcategory__list)}>{elements}</ul>
      <span className={cn(styles.line)}></span>
      <form action="#">
        <ul className={cn(styles.adcategory_list, styles.list__reset)}>
          <li className={cn(styles.adcategory_item)}>
            <button className={cn(styles.adcategory_button)} disabled>
              <img
                src="https://cdn-icons.flaticon.com/png/128/3161/premium/3161370.png?token=exp=1655361764~hmac=4a3a4c0966bc85bf52792572d4e7d2a4"
                width="30px"
                height="30px"
                alt="filter"
                className={cn(styles.adcategory_button_img)}
              />
              <span>Добавить фильтр</span>
            </button>
          </li>
          <li className={cn(styles.adcategory_item)}>
            <input
              type="search"
              placeholder="Заголовоку или ID"
              className={cn(styles.adcategory_item_image)}
              disabled
            />
          </li>
          <li className={cn(styles.adcategory_item)}>
            <input
              type="button"
              value="Любая категория"
              className={cn(styles.adcategory_item_category)}
              disabled
            />
          </li>
          <li className={cn(styles.adcategory_item)}>
            <input
              type="button"
              value="Сортировать"
              className={cn(styles.adcategory_item_category)}
              disabled
            />
          </li>
        </ul>
        <div className={cn(styles.adcategory_blockAd)}>
          <span>Всего объявлений: 0</span>
          <span className={cn(styles.line)} />
          <input type="checkbox" className={cn(styles.adcategory_checkbox)} />
        </div>
      </form>
    </div>
  );
};
export default AdCategory;
