import styles from "./filtercategory.module.scss";
import cn from "classnames";
import FilterCategoryItem from "../filtercategory__item/filtercategory__item";

const FilterCategory = ({ linkData }) => {
  const category = linkData.map((item) => {
    return (
      <FilterCategoryItem key={item.id} name={item.name} count={100} />
    );
  });
  return <ul className={cn(styles.filtercategory__list)}>{category}</ul>;
};
export default FilterCategory;
