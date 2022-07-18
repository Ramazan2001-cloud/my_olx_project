import styles from "./selectfilter.module.scss";
import cn from "classnames";
import Filter from "../filter/filter";
const SelectFilter = ({ category }) => {
  return (
    <div className={cn(styles.select__container)}>
      <div className={cn(styles.select__add)}>
        <div className={cn(styles.select_button)}>
          <input type="checkbox" className={cn(styles.select__input)} />
          <span className={cn(styles.select__span)}>Только с фото</span>
        </div>
        <button className={cn(styles.select__addheart)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="heart logo"
            width="16px"
            height="16px"
            className={cn(styles.addheart__heart)}
          />
          <span className={cn(styles.addheart__span)}>
            Добавить в избранное
          </span>
        </button>
      </div>
      <Filter categoryData={category} />
    </div>
  );
};
export default SelectFilter;
