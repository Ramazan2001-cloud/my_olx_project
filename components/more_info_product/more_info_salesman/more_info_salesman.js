import styles from "./more_info_salesman.module.scss";
import name from "../../vip_content/vip_content";
import cn from "classnames";
import Link from "next/link";
const MoreInfoSalesman = () => {
  console.log(name);
  return (
    <div className={cn(styles.more_salesman)}>
      <h1 className={cn(styles.more_salesman__AdUser)}>Пользователь</h1>
      <div className={cn(styles.more_salesman__block)}>
        <div className={cn(styles.more_salesman_info__block)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="user logo"
            width="47px"
            height="47px"
            className={cn(styles.more_salesman__logo)}
          />
          <div className={cn(styles.more_salesman__info)}>
            <p className={cn(styles.more_salesman__name)}>Олег</p>
            <span className={cn(styles.more_salesman__date)}>
              на OLX с <strong>март 2019 г.</strong>{" "}
            </span>
            <span className={cn(styles.more_salesman__online)}>
              Онлайн в 11:22
            </span>
          </div>
        </div>
        <div className={cn(styles.more_salesman__user)}>
          <div className={cn(styles.more_salesman__question__block)}>
            <div className={cn(styles.question_mark__logo__block)}>
              <img
                src="https://www.olx.kz/app/static/media/ratingSelectedNone.674e805e7.svg"
                alt="logo"
                className={cn(styles.question_mark__logo)}
              />
            </div>
            <span className={cn(styles.question__mark__text)}>
              Этот автор пока не получил ни одного отзыва
            </span>
            <div className={cn(styles.question_mark__logo__block)}>
              <img
                src="https://www.olx.kz/app/static/media/ratingSelectedNone.674e805e7.svg"
                alt="logo"
                className={cn(styles.question_mark__logo)}
              />
            </div>
          </div>
          <Link href="/##">
            <a className={cn(styles.more_salesman__rating)}>
              Что такое рейтинг?
            </a>
          </Link>
        </div>
        <div className={cn(styles.more_salesman__button_block)}>
          <button className={cn(styles.more_info__button_number)}>
            <span className={cn(styles.more_salesman_first_text)}>
              Показать телефон
            </span>
          </button>
          <button className={cn(styles.more_info__button_msg)}>
            <span className={cn(styles.more_salesman_second_text)}>
              Сообщение
            </span>
          </button>
        </div>
        <Link href="/##">
          <a className={styles.more_salesman__ad}>
            <span className={cn(styles.more_salesman__span)}>
              Все объявления автора
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709586.png"
              alt=""
              width="16px"
              height="16px"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default MoreInfoSalesman;
