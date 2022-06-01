import styles from './lastContent__item.module.css';
import classNames from 'classnames/bind';

let cn = classNames.bind(styles);

const LastContentItem = (props) => {
	return (
    <li className={cn("last_content__item", "")}>
      <a href="#" className={cn("last-contanet__link", "link__reset")}>
        {props.nameOfCategory}
      </a>
    </li>
  );
}
export default LastContentItem;