import styles from "./filter.module.scss";
import { useState } from "react";
import cn from "classnames";

const Filter = ({categoryData}) => {
  const [category, setcategory] = useState(false);
  const visibleCategory = () => {
    setcategory((prev) => {
      if (prev === false) {
        return prev = true;
      }
      else {
        return prev = false;
      }
    });
  };
  const categories = categoryData.map(item => {
    
  })
  return (
    <div className={cn(styles.filter)}>
      <h4 className={cn(styles.filter_title)}>Фильтры</h4>
      <div className={cn(styles.filter__inputs)}>
        <div className={cn(styles.filter__category)}>
          <p className={cn(styles.category__title)}>Категория</p>
          <div
            className={cn(styles.accordion__block)}
            onClick={visibleCategory}
          >
            <span>Любая категория..</span>
            <img
              src="./arrowdown.png"
              alt="arrow down"
              className={cn(styles.accordion__arrow)}
            />
          </div>
        </div>
        <div className={cn(styles.price)}>
          <p className={cn(styles.price__text)}>Цена</p>
          <div className={cn(styles.price__inputs)}>
            <input
              type="number"
              name="price"
              placeholder="От:"
              className={cn(styles.price__input)}
            />
            <input
              type="number"
              name="price"
              placeholder="До:"
              className={cn(styles.price__input)}
            />
          </div>
        </div>
      </div>
      {category && (
        <ul className={cn(styles.filter__list)}>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
        </ul>
      )}
      <div className={cn(styles.lines)}></div>
    </div>
  );
};
export default Filter;
