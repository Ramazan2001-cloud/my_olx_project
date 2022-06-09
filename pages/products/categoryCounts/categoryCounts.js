import styles from "./categoryCounts.module.css";
import cn from 'classnames';

const CategoryCounts = ({name, count}) => {
	return (
    <li className={cn(styles.categoryCount__item)}>
      <p className={cn(styles.categoryCount__name)}>{name}</p>
      <span className={cn(styles.categoryCount__price)}>{count}</span>
    </li>
  );
}
export default CategoryCounts;