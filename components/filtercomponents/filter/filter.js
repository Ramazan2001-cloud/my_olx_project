import styles from "./filter.module.scss";
import { useState } from "react";
import FilterItem from "./filter__item/filter__item";
import FilterLinks from "../filter_links/filter_links";
import cn from "classnames";


const Filter = ({ categoryData, linkData, productData }) => {
  const [category, setcategory] = useState(false);
  const [name, setName] = useState("");
  const visibleCategory = () => {
    setcategory((prev) => {
      return !prev ? (prev = true) : (prev = false);
    });
  };
  const categories = categoryData.map((item) => {
    const getNameCategory = () => {
      setName((prev) => {
        prev = "";
        return prev + item.name;
      });
    };
    return (
      <FilterItem
        key={item.id}
        name={item.name}
        count={144367}
        visible={visibleCategory}
        getName={getNameCategory}
      />
    );
  });
  
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
            {name ? <span>{name}</span> : <span>Любая категория..</span>}
            <img
              src="./arrowdown.png"
              alt="arrow down"
              className={cn(styles.accordion__arrow)}
            />
          </div>
        </div>
        {name === "Услуги" ? (
          <div></div>
        ) : (
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
        )}
      </div>
      {category && <ul className={cn(styles.filter__list)}>{categories}</ul>}
      {name ? (
        <div></div>
      ) : (
        <div className={cn(styles.lines)}></div>
      )}
      <FilterLinks linkData={linkData} productData={productData} name={name}/>
    </div>
  );
};
export default Filter;
