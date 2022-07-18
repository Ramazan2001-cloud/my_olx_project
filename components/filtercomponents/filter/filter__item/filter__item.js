import styles from "./filter__item.module.scss";
import cn from "classnames";
const FilterItem = ({ name, count, visible, getName }) => {
  return (
    <li
      className={cn(styles.filter__item)}
      onClick={() => {
        visible();
        getName();
      }}
    >
      <p className={cn(styles.item__name)}>{name}</p>
      <div className={cn(styles.item__block)}>
        <span className={cn(styles.item__count)}>{count}</span>
        <img src="./next.png" alt="arrow" width="15px" height="15px" />
      </div>
    </li>
  );
};
export default FilterItem;
