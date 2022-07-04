import styles from "./subcategories__item.module.scss";
import { useEffect } from "react";
import cn from "classnames";

const SubcategoriesItem = ({
  id,
  name,
  visibleThirdLevel,
  checkThreeCat,
}) => {
  return (
    <li className={cn(styles.subcategories_item)} onClick={visibleThirdLevel}>
      <span className={cn(styles.subcategories__name)}>{name}</span>
      {checkThreeCat !== false ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
          alt="arrow down"
          width="24px"
          height="24px"
        />
      ) : null}
    </li>
  );
};
export default SubcategoriesItem;
