import styles from './sub_categories_services.module.css';
import classNames from 'classnames/bind';
let cn = classNames.bind(styles);

const SubCategoryServices = ({name}) => {
	return (
    <li>
      <a href="##" className={cn("main_sub_link")}>
        <img
          src="https://cdn-icons.flaticon.com/png/128/2989/premium/2989988.png?token=exp=1654583975~hmac=5b99ca09821d575208f27a3ebe8aa9eb"
          alt="logo"
          width="30px"
          height="30px"
          className={cn("main_subcategory__logo")}
        />
        <span className={cn("main_sub_link_text")}>{name}</span>
      </a>
    </li>
  );
}
export default SubCategoryServices;