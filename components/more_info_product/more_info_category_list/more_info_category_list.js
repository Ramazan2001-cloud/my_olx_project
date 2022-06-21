import styles from "./more_info_category_list.module.scss";
import globalStyles from "../../../styles/Home.module.css";
import cn from "classnames";
import Link from "next/link";

const MoreInfoCategoryList = ({ categoryList,subcategoryList }) => {
	// console.log(categoryList);
	const subName = subcategoryList[2].subcategory[4].name;
  return (
    <div className={cn(styles.more_info_category__block)}>
      <Link href="/">
        <a
          className={cn(styles.more_info_back__block, globalStyles.link__reset)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/860/860790.png"
            alt="arrow logo"
            width="24px"
            height="24px"
          />
          <span>Назад </span>
        </a>
      </Link>
      <ul className={cn(styles.more_info__list, globalStyles.list__reset)}>
        <li className={cn(styles.more_info__item)}>
          <a
            href="#"
            className={cn(styles.more_info__link, globalStyles.link__reset)}
          >
           <span> Главная </span>
          </a>
        </li>
        <li className={cn(styles.more_info__item)}>
          <a
            href="#"
            className={cn(styles.more_info__link, globalStyles.link__reset)}
          >
            {"/ " + categoryList[2].nameCategory}
          </a>
        </li>
        <li className={cn(styles.more_info__item)}>
          <a
            href="#"
            className={cn(styles.more_info__link, globalStyles.link__reset)}
          >
            {"/ " + subName}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MoreInfoCategoryList;