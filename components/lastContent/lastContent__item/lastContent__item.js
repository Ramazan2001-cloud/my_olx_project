import styles from "./lastContent__item.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
let cn = classNames.bind(styles);

const LastContentItem = (props) => {
  return (
    <li
      className={cn("last_content__item")}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <Link href="/filterpage">
        <a className={cn("last-contanet__link", "link__reset")}>
          {props.nameOfCategory},
        </a>
      </Link>
    </li>
  );
};
export default LastContentItem;
