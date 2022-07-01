import styles from "./modal_categories__item.module.scss";
import cn from "classnames";

const ModalCategoriesItem = ({ id, imageItem, nameItem, visibleSubCategory }) => {
  
  return (
    <li className={cn(styles.categories__item)} onClick={visibleSubCategory}>
      <img
        src={imageItem}
        alt="category logo"
        width="48px"
        height="48px"
        className={cn(styles.categories__image)}
      />
      <span className={cn(styles.categories__name)}>{nameItem}</span>
    </li>
  );
};
export default ModalCategoriesItem;
