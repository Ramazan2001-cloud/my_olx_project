import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
import { useState } from "react";
let cn = classNames.bind(styles);

const Maincategories = ({ hello }) => {
  const [modal, setModal] = useState(false);
    const visibleModalActive = () => {
      setModal(true);
    };
  const visibleModalDeactive = () => {
    setModal(false);
  };

  const elements = hello.map((item, i) => {
    return (
      <Categories
        key={i}
        name={item.nameCategory}
        image={item.img}
        visibleModalActive={visibleModalActive}
      />
    );
  });
  return (
    <div className={cn("maincategories", "container")}>
      {modal && (
        <>
          <ul className={cn("maincategories_sub_list", "list__reset")}>
            <li className={cn("maincategories_sub_item")}>Одежда/обувь</li>
            <li className={cn("maincategories_sub_item")}>Для свадьбы</li>
            <li className={cn("maincategories_sub_item")}>Мода разное</li>
            <li className={cn("maincategories_sub_item")}>Наручные часы</li>
            <li className={cn("maincategories_sub_item")}>Аксессуары</li>
            <li className={cn("maincategories_sub_item")}>Подарки</li>
            <li className={cn("maincategories_sub_item")}>
              Товары для красоты и здоровья
            </li>
          </ul>
          <div
            className={cn("maincategories_sub_list__x")}
            onClick={visibleModalDeactive}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/75/75519.png"
              width="35px"
              height="35px"
              alt="logo"
            />
          </div>
        </>
      )}

      <div className={cn("maincategories__container", "container")}>
        <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
        <ul className={cn("maincategories__list", "list__reset")}>
          {elements}
        </ul>
      </div>
    </div>
  );
};
export default Maincategories;
