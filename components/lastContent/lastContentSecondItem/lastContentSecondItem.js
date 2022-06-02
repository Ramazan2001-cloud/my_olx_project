import styles from './lastContentSecond.module.css';
import classNames  from 'classnames/bind';
let cn = classNames.bind(styles);

const LastContentSecondItem = ({category}) => {
  return (
    <li className={cn("listItem")}>
      <a href="#" className={cn("listItemLink")}>
        {category}
      </a>
    </li>
  );
};
export default LastContentSecondItem;
