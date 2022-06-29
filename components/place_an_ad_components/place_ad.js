import styles from "./place_ad.module.scss";
import cn from "classnames";

const PlaceAdDescrTitle = () => {
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
          <div className={cn(styles.descr__cat__select)}>
            <span className={cn(styles.descr__cat__span)}>
              Выберите категорию
            </span>
            <img src="arrowdown.png" alt="arrow_down" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceAdDescrTitle;
