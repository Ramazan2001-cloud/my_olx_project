import styles from "./products.module.css";
import classNames from "classnames/bind";
import CategoryProducts from "./category_products/category_products";
import CategoryLists from "./categoryLists/categoryLists";
import {useState} from "react";
let cn = classNames.bind(styles);

export const getStaticProps = async () => {
    const response1 = await fetch("http://localhost:3000/api/hello");
    const data1 = await response1.json();
    return {
      props:{
        data1
      }
    }
}
const Products = ({data1}) => {
  
  const [select,setSelect] = useState(false);
  const visibleSelect = () => {
    setSelect(!select);
  }

  const elements = data1.map((item,i) => {
    return <CategoryProducts key={i} nameCategory={item.nameCategory} />;
  });
  
  return (
    <section className={cn("products")}>
      <div className={cn("products_wrapper", "container")}>
        <form action="#" className={cn("products__form")}>
          <div className={cn("products__block", "container")}>
            <input
              type="text"
              className={cn("products__search-product")}
              placeholder="Что ищете ?"
            />
            <input
              type="text"
              className={cn("products__search-city")}
              placeholder="вся cтрана"
            />
            <button type="submit" className={cn("products__button")}>
              Поиск
            </button>
          </div>
          <div className={cn("products_radio-inputs", "container")}>
            <div className={cn("products_checkbox-block")}>
              <input type="checkbox" className={cn("products_radio-input")} />
              <p className={cn("radio__p")}>Искать в описании</p>
              <input type="checkbox" className={cn("products_radio-input")} />
              <p className={cn("radio__p")}>Только с фото</p>
            </div>
            <button tpye="submit" className={cn("radio__button")}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/25/25424.png"
                alt="logo heart"
                width="20px"
                height="20px"
                className={cn("form-heart__logo")}
              />
              Добавить в избранное
            </button>
          </div>
          <div className={cn("form__filter")}>
            <span className={cn("form__filter-text")}>Фильтры</span>
            <span className={cn("form__filter-category-text")}>Категория</span>
            <div className={cn("select")}>
              <div>
                <div className={cn("select__category")} onClick={visibleSelect}>
                  <span className={cn("select__category__text")}>выбрать</span>
                  {/* <img
                    src="https://cdn-icons-png.flaticon.com/128/54/54785.png"
                    alt="arrow logo"
                    width="20px"
                    height="20px"
                  /> */}
                </div>
              </div>
              <div>
                <span className={cn("select__price-text")}>Цена</span>
                <div className={cn("select__price-block")}>
                  <input
                    type="number"
                    className={cn("select__input-price")}
                    placeholder="От:"
                  />
                  <input
                    type="number"
                    className={cn("select__input-price")}
                    placeholder="До:"
                  />
                </div>
              </div>
            </div>
            {select && (
              <select
                className={cn("form__select")}
                defaultValue={"default"}
                size="4"
              >
                <option value="Любая категория">Любая категория</option>
                {elements}
              </select>
            )}
            <CategoryLists categoryCount={data1} />
            <h1 className={cn("products__title")}>Мы нашли 1 000 объявлений</h1>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Products;
