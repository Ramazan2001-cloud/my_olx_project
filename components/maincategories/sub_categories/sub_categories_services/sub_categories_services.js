import styles from './sub_categories_services.module.css';
import classNames from 'classnames/bind';
let cn = classNames.bind(styles);

const SubCategoryServices = ({name}) => {
	return (
    <li>
      <a href="##" className={cn("main_sub_link")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
          alt="logo"
          width="15px"
          height="15px"
          className={cn("main_subcategory__logo")}
        />
        <span className={cn("main_sub_link_text")}>{name}</span>
      </a>
    </li>
  );
}
export default SubCategoryServices;