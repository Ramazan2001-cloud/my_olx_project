import styles from "./filterproduct__list.module.scss";
import cn from "classnames";
import FilterProductItem from "./filterproduct__item/filterproduct__item";

const FilterProductList = ({productData}) => {
	// console.log(productData);
	const filterProductsElements = productData.map(item => {
	});
	return (
		<ul className={cn(styles.product__list)}>
			<FilterProductItem/>
		</ul>
	);
};
export default FilterProductList;
