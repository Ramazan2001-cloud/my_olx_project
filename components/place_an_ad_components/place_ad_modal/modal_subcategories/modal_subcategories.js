import styles from "./modal_subcategories.module.scss";
import SubcategoriesItem from "./subcategories__item/subcategories__item";
import { useState, useEffect } from "react";
import cn from "classnames";

const ModalSubCategories = ({ data, id }) => {
  const [secondCat, setSecondCat] = useState("");
  const [ThirdsubCat, setThirdSubCat] = useState("");
  const [secondCat1, setSecondCat1] = useState(undefined); // id here
  const [levelThirdValue, setLevelThirdValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://qoldan-dev.com/api/ads/ad_cat/find_subcat_id?id=${id}`
      );
      const data = await response.json();
      setThirdSubCat((prev) => (prev = data));
      setLevelThirdValue((prev) => (prev = levelThirdValue));
    };
    fetchData().catch(console.error);
  }, []);

  //1  Просто вывести вторую категорию done
  //2 Переходы между вторыми первыми категориями done
  //3 Вывод и переходы между вторыми и первыми категориями done
  //4 Верстка 
  
  useEffect(() => {
    if (secondCat1) {
      const fetchData = async () => {
        const response = await fetch(
          `http://qoldan-dev.com/api/ads/ad_cat/find_subcat_id?id=${secondCat1}`
        );
        const data = await response.json();
        setThirdSubCat((prev) => (prev = data));
      };
      fetchData().catch(console.error);
    }
  }, [secondCat1]);

  const firstLevelCategory = data.map((item) => {
    const visibleSecondCategoryhere = () => {
      setSecondCat1((prev) => {
        prev = "";
        return +(prev + item.id);
      });
    };
    return (
      <SubcategoriesItem
        key={item.id}
        name={item.name}
        visibleThirdLevel={visibleSecondCategoryhere}
      />
    );
  });
  
  let secondLevelCategory, threeSecondCategory;
  if (secondCat1) {
    GetSubCategories(secondCat1);
  } else {
    GetSubCategories(id);
  }
  
  function GetSubCategories(id) {
    secondLevelCategory = data[id - 1].subcategory.map((item, i) => {
      const visibleSecondCategory = () => {
        setSecondCat((prev) => {
          prev = "";
          return prev + item.id;
        });
      };
      let isBoolean = true;

      if (ThirdsubCat?.subcategory?.[i]?.subcategory) {
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
    }, 0);

    if (ThirdsubCat.subcategory && id) {
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
