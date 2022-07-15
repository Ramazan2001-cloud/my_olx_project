import styles from "./filterproduct__item.module.scss";
import cn from "classnames";

const FilterProductItem = ({ name, address, price, status, img }) => {
  return (
    <li className={cn(styles.product__item)}>
      <div className={cn(styles.product__info)}>
        <img src={""} alt="filter image ad" />
        <div className={cn(styles.product__title)}>
          <h1 className={cn(styles.product__name)}>

          </h1>
          <p className={cn(styles.product__address)}>
    
          </p>
        </div>
      </div>
      <div className={cn(styles.product__item__)}>
        <p className={cn(styles.__price)}>

				</p>
				<span className={cn(styles.__status)}>
		
				</span>
      </div>
    </li>
  );
};
export default FilterProductItem;
