import styles from "./subcategories__item.module.scss";
import { useState } from "react";
import cn from "classnames";

export let answer;

const SubcategoriesItem = ({
  name,
  visibleThirdLevel,
  checkThreeCat,
  setActive,
}) => {
  const [nName, setNname] = useState(undefined);
  
  return (
    <>
      {checkThreeCat === false ? (
        <li
          className={cn(styles.subcategories_item)}
          onClick={() => {
            setActive(false);
            setNname((prev) => {
              prev = "";
              answer = prev + name;
              return prev + name;
            })
          }}
        >
          <span className={cn(styles.subcategories__name)}>{name}</span>
        </li>
      ) : (
        <li
          className={cn(styles.subcategories_item)}
          onClick={visibleThirdLevel}
        >
          <span className={cn(styles.subcategories__name)}>{name}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
            alt="arrow down"
            width="24px"
            height="24px"
          />
        </li>
      )}
    </>
  );
};
export default SubcategoriesItem;
