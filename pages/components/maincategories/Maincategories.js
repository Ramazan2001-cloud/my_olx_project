import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
let cn = classNames.bind(styles);

const Maincategories = () => {
	// const listCategories = ["Услуги", "", "", "", "", ""];
	return (
    <div className={cn("maincategories__container", "container")}>
      <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
      <ul className={cn("maincategories__list", "list__reset")}>
        <Categories/>
      </ul>
    </div>
  );
};
export default Maincategories;
