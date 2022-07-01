import styles from "./modal_subcategories__item.module.scss";
import cn from "classnames";

const SubcategoriesItem = ({ name }) => {
  return (
    <li className={cn(styles.subcategories_item)}>
      <span className={cn(styles.subcategories__name)}>{name}</span>
      <img
        src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
        alt="arrow down"
				width="24px"
				height="24px"
      />
    </li>
  );
};
export default SubcategoriesItem;
