import styles from "./modal_subcategories.module.scss";
import SubcategoriesItem from "./subcategories__item/subcategories__item";
import { useState, useEffect } from "react";
import cn from "classnames";
import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";

const ModalSubCategories = ({ data, id }) => {
  const [secondCat, setSecondCat] = useState(""); // from data
  const [ThirdsubCat, setThirdSubCat] = useState("");
  const [secondCat1, setSecondCat1] = useState(""); // from here

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://qoldan-dev.com/api/ads/ad_cat/find_subcat_id?id=${id}`
      );
      const data = await response.json();

      const secondLevelResponse = await fetch(
        "http://qoldan-dev.com/api/ads/ad_cat/find_subcat"
      );
      const secondLevelData = await secondLevelResponse.json();

      setThirdSubCat((prev) => (prev = data));
      setSecondCat1((prev) => (prev = secondLevelData));
    };
    fetchData().catch(console.error);
  }, []);

  const firstLevelCategory = data.map((item) => {
    // const visibleSecondCategory = () => {
    //   setThirdSubCat((prev) => {
    //     prev = "";
    //     if (secondCat1) {
    //       secondCat1[+(prev + item.id) - 1].subcategory;
    //     }
    //     return prev + item.id;
    //   });
    // };
    return (
      <SubcategoriesItem
        key={item.id}
        name={item.name}
        // visibleThirdLevel={visibleSecondCategory}
      />
    );
  });

  //1  Просто вывести вторую категорию

  const secondLevelCategory = data[id - 1].subcategory.map((item, i) => {
    const visibleSecondCategory = () => {
      setSecondCat((prev) => {
        prev = "";
        return prev + item.id;
      });
    };
    let isBoolean;
    if (ThirdsubCat.subcategory) {
      if (ThirdsubCat.subcategory[i].subcategory.length === 0) {
        isBoolean = false;
      }
    }
    return (
      <SubcategoriesItem
        key={item.id}
        name={item.name}
        visibleThirdLevel={visibleSecondCategory}
        checkThreeCat={isBoolean}
      />
    );
  });

  let threeSecondCategory;
  if (ThirdsubCat.subcategory && secondCat) {
    for (let i = 0; i < ThirdsubCat.subcategory.length; i++) {
      if (ThirdsubCat.subcategory[i].id == secondCat) {
        threeSecondCategory = ThirdsubCat.subcategory[i].subcategory.map(
          (item) => {
            let noneDusplayArrow = true;
            if (item.subcategory === null) {
              noneDusplayArrow = false;
            }
            return (
              <SubcategoriesItem
                key={item.id}
                name={item.name}
                checkThreeCat={noneDusplayArrow}
              />
            );
          }
        );
      }
    }
  }

  return (
    <div className={cn(styles.categories_levels__content)}>
      <ul className={cn(styles.subcategories__content)}>
        {firstLevelCategory}
      </ul>
      <ul className={cn(styles.secondLevelcategories__content)}>
        {secondLevelCategory}
      </ul>
      <ul className={cn(styles.secondLevelcategories__content)}>
        {threeSecondCategory}
      </ul>
    </div>
  );
};
export default ModalSubCategories;
