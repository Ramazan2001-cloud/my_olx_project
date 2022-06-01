import styles from "./business.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const Business = () => {
  return (
    <div className={cn("business__container", "container")}>
      <img
        src="https://static.olx.kz/static/olxkz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"
        alt="diogram"
        className={cn("business__image")}
        width="130px"
        height="130px"
      />
      <h1 className={cn("business__title")}>
        Узнайте о возможностях OLX для бизнеса
      </h1>
      <a href="#" className={cn("business-button__link")}>
        Подробнее
      </a>
    </div>
  );
};
export default Business;
