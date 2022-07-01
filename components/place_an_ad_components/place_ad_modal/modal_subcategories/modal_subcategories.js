import styles from "./modal_subcategories.module.scss";
import SubcategoriesItem from "./modal_subcategories__item/modal_subcategories__item";
import cn from "classnames";

const ModalSubCategories = ({data,}) => {
	console.log(data);
	const firstLevelCategory = data.map(item => {
		return <SubcategoriesItem key={item.id} name={item.name}/>;
	})
  return (
    <ul className={cn(styles.subcategories__content)}>{firstLevelCategory}</ul>
  );
};
export default ModalSubCategories;
