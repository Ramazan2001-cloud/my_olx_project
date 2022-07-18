import styles from "./filter_links.module.scss";
import cn from "classnames";
import Link from "next/link";
import FilterCategory from "../filtercategory/filtercategory";
import FilterProductList from "../filterproduct__list/filterproduct__list";
import FilterSelect from "./filter_select/filter_select";

const FilterLinks = ({ linkData, productData, name }) => {
  return (
    <div className={cn(styles.filterLink__container)}>
      {name ? (
        <FilterSelect/>
      ) : (
        <h1 className={cn(styles.filterLink__title)}>
          OLX.kz сервис объявлений Казахстана: купля/продажа товаров и
          недвижимости, оказание услуг, трудоустройство на OLX.kz
        </h1>
      )}
      <div className={cn(styles.filterLink_middle__content)}>
        <Link href="/">
          <a className={cn(styles.filterbutton__link)}>Главная</a>
        </Link>
        <div className={cn(styles.filtersort)}>
          <p className={cn(styles.filtersort__text)}>Сортировать по:</p>
          <div className={cn(styles.filtersort__select)}>
            <span>Рекомендованное вам</span>
            <img
              src="./arrowdown.png"
              alt="arrow down"
              width="30px"
              height="30px"
              className={cn(styles.filtersort__image)}
            />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6474/6474035.png"
            alt="blocks logo"
            width="25px"
            height="25px"
            className={cn(styles.filterLink__input)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747327.png"
            alt="square blocks"
            width="25px"
            height="25px"
            className={cn(styles.filterLink__input)}
          />
        </div>
      </div>
      <FilterCategory linkData={linkData} />
      <FilterProductList productData={productData} />
    </div>
  );
};
export default FilterLinks;
