import styles from "./place_ad.module.scss";
import ModalCategories from "./place_ad_modal/modal_categories/modal_categories";
import { useState } from "react";
import cn from "classnames";
import { answer } from "../place_an_ad_components/place_ad_modal/modal_subcategories/subcategories__item/subcategories__item";
const PlaceAd = ({ category, subCategory }) => {
  const [modalActive, setModalActive] = useState(false);
  // console.log(answer);
  return (
    <div className={cn(styles.placead__content)}>
      <div className={cn(styles.placead_descr__cat)}>
        <h3 className={cn(styles.descr__cat__title)}>Опишите в подробностях</h3>
        <div className={cn(styles.placead__addcat)}>
          <span className={cn(styles.descr__cat__span1)}>
            Укажите название*
          </span>
          <div className={cn(styles.textareaBlock)}>
            <textarea
              name="descrtitle"
              className={cn(styles.descr__cat__textarea)}
              placeholder="Например, iPhone 13"
            ></textarea>
          </div>
        </div>
        <div>
          <span className={cn(styles.descr__cat__span2)}>Категория*</span>
          {answer ? (
            <div className={cn(styles.selectedCat)} onClick={setModalActive}>
              <span>{answer}</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
                alt="arrow"
                width="30px"
                height="30px"
              />
            </div>
          ) : (
            <div
              className={cn(styles.descr__cat__select)}
              onClick={setModalActive}
            >
              <span className={cn(styles.descr__cat__span)}>
                Выберите категорию
              </span>
              <img src="arrowdown.png" alt="arrow_down" />
            </div>
          )}
        </div>
      </div>
      <ModalCategories
        active={modalActive}
        setActive={setModalActive}
        categoryDate={category}
        subCatData={subCategory}
      />
    </div>
  );
};
export default PlaceAd;
