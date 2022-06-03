import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
let cn = classNames.bind(styles);

const Maincategories = ({ hello }) => {

  const elements = hello.map((item, i) => {
    return <Categories key={i} name={item.nameCategory} image={item.img} />;
  });
  
  return (
    <div className={cn("maincategories__container", "container")}>
      <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
      <ul className={cn("maincategories__list", "list__reset")}>{elements}</ul>
    </div>
  );
  
};
export default Maincategories;