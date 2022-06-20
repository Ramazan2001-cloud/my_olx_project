import styles from "./my_account_list.module.scss";
import globalStyles from "../../styles/Home.module.css";
import Link from "next/link";
import cn from "classnames";

const MyAccountList = ({ name }) => {
  return (
    <ul className={cn(styles.myaccount__list, globalStyles.list__reset)}>
      <li className={cn(styles.myaccount__item)}>
        <Link href="/myaccount/ad">
          <a className={cn(styles.myaccount__link, globalStyles.link__reset)}>
            <span
              className={
                name == "Объявления" ? styles.myaccount__span : undefined
              }
            >
              Объявления
            </span>
          </a>
        </Link>
      </li>
      <li className={cn(styles.myaccount__item)}>
        <Link href="/myaccount/message">
          <a className={cn(styles.myaccount__link, globalStyles.link__reset)}>
            <span
              className={
                name == "Сообщения" ? styles.myaccount__span : undefined
              }
            >
              Сообщения
            </span>
          </a>
        </Link>
      </li>
      <li className={cn(styles.myaccount__item)}>
        <Link href="/myaccount/rating">
          <a className={cn(styles.myaccount__link, globalStyles.link__reset)}>
            <span
              className={
                name == "Полученные оценки" ? styles.myaccount__span : undefined
              }
            >
              Полученные оценки
            </span>
          </a>
        </Link>
      </li>
      <li className={cn(styles.myaccount__item)}>
        <Link href="/myaccount/settings">
          <a className={cn(styles.myaccount__link, globalStyles.link__reset)}>
            <span
              className={
                name == "Настройки" ? styles.myaccount__span : undefined
              }
            >
              Настройки
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default MyAccountList;
