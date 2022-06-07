import styles from "./products.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const Products = () => {
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
            <p className={cn("radio__p")}>
              <input type="radio" className={cn("products_radio-input")} />
              Искать в описании
            </p>
            <p className={cn("radio__p")}>
              <input type="radio" className={cn("products_radio-input")} />
              Только с фото
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Products;
