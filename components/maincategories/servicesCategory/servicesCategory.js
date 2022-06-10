import styles from "./servicesCategory.module.css";
import classNames from 'classnames/bind';
import SubCategory from "../sub_categories/sub_categories";
let cn = classNames.bind(styles);

const ServicesCategory = ({subCat}) => {
	const sub_category1 = subCat[0].subcategory;
	const elements = sub_category1.map((item, i) => {
		return (
			<SubCategory key={i} name={item.name}/>
		)
	});

  return (
    <div className={cn("main_subcategory", "container")}>
      <a href="##" className={cn("main_subcategory__title-block")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
          alt="logo"
          width="15px"
          height="15px"
          className={cn("main_subcategory__logo")}
        />
        <span className={cn("main_subcategory__title")}>
          Посмотреть все объявления
        </span>
        <strong className={cn("main_sub-strong")}>в Услуги</strong>
      </a>
      <span className={cn("line")}></span>
      <div className={cn("main_sub_lists")}>{elements}</div>
    </div>
  );
};
export default ServicesCategory;