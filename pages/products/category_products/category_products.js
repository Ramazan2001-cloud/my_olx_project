import styles from "./category_products.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const CategoryProducts = ({ nameCategory }) => {
  return <option value={nameCategory}>{nameCategory}</option>;
};
export default CategoryProducts;
