import styles from "./ad_category_item.module.css";
import cn from "classnames";

const AdCategoryItem = ({name}) => {
  return (
		<li className={cn(styles.adcategory_item)}>
			<span className={cn(styles.adcategory_span)}>{name}</span>
		</li>
	)
};
export default AdCategoryItem;