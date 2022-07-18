import styles from "./filtercategory__item.module.scss";
import cn from "classnames";
import Link from "next/link";

const FilterCategoryItem = ({ name, count }) => {
  return (
    <li className={cn(styles.category__item)}>
      <Link href="##">
        <a className={styles.item__link} onClick={event => event.preventDefault()}>
          <p className={cn(styles.item__name)}>{name}</p>
					<span className={cn(styles.item__count)}>{count}</span>
        </a>
      </Link>
    </li>
  );
};
export default FilterCategoryItem;
