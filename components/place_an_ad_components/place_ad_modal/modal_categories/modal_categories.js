import ModalCategoriesItem from "./modal_categories__item/modal_categories__item";
import styles from "./modal_categories.module.scss";
import { useState } from "react";
import cn from "classnames";
import ModalSubCategories from "../modal_subcategories/modal_subcategories";
import { nName } from "../../test/test";

export let nameCat;
export let nameCat2;

const ModalCategories = ({ active, setActive, categoryDate, subCatData }) => {
  const [subCat, setSubCat] = useState(0);
  // const [getCategory, setCategory] = useState(undefined);

  const image = [
    "https://categories.olxcdn.com/assets/categories/olxkz/uslugi-7-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/nedvizhimost-1-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/dom-i-sad-899-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/rabota-6-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/moda-i-stil-891-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/detskiy-mir-36-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/hobbi-otdyh-i-sport-903-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/transport-3-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/zhivotnye-35-2x.png",
  ];


  const modalcat = categoryDate.map((item, i) => {
    const visibleSubCat = () => {
      setSubCat((prev) => {
        nameCat = item.name;
        nName.name = item.name;
        return prev + item.id;
      });
    };
    return (
      <ModalCategoriesItem
        key={item.id}
        id={item.id}
        imageItem={image[i]}
        nameItem={item.name}
        visibleSubCategory={visibleSubCat}
      />
    );
  });
  const modalSubCat = categoryDate.map((item, i) => {
    if (item.id === subCat) {
      return (
        <ModalSubCategories
          key={item.id}
          data={subCatData}
          id={subCat}
          setActive={setActive}
        />
      );
    }
  });

  return (
    <div
      className={
        active
          ? cn(styles.modalCat__container, styles.active)
          : cn(styles.modalCat__container)
      }
      onClick={() => {
        setActive(false);
        setSubCat((prev) => prev * 0);
      }}
    >
      <div
        className={cn(styles.modalCat__content)}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/60/60994.png"
          alt="logo x"
          width="20px"
          height="20px"
          style={{ float: "right" }}
          onClick={() => {
            setActive(false);
            setSubCat((prev) => prev * 0);
          }}
        />
        <h2 className={cn(styles.modalCat__title)}>Выберите категорию</h2>
        {subCat == 0 ? (
          <ul className={cn(styles.modalCat__list)}>{modalcat}</ul>
        ) : null}
        {modalSubCat}
      </div>
    </div>
  );
};
export default ModalCategories;
