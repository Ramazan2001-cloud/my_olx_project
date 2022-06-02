import styles from "./lastContentFirstItem.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const LastContentFirstItem = ({nameCategory}) => {
	return (
    <li className={cn("listItem")}>
      <a href="#" className={cn("listItemLink")}>
        {nameCategory}
      </a>
    </li>
  );
}
export default LastContentFirstItem;
