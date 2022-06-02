import styles from "./topbarbanner.module.css";
import classNames from "classnames/bind";
let cd = classNames.bind(styles);

const TopBarBaner = () => {
  return (
    <div className={cd("topbarbanner")}>
      <div className={cd("bannerWrapper", "left")}>
        <img
          src="https://static.olx.kz/static/olxkz/packed/font/2f8c0a722248ad084d28fa935bc6673670.svg"
          alt="logo"
          className={cd("icon")}
        />
        <p className={cd("text")}>Будьте бдительны! Ложная доставка</p>
      </div>
      <div className={cd("bannerWrapper", "right")}>
        <div className={cd("cta")}>
          <a
            className={cd("cta-link")}
            target="_blank"
            href="https://blog.olx.kz/security/%D0%BB%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F-%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-olx-%D0%BA%D0%B0%D0%BA-%D0%B8%D0%B7%D0%B1%D0%B5%D0%B6/?utm_source=olx_dfp&amp;utm_medium=own&amp;utm_campaign=may_2021_false_deelivery_1x1"
          >
            Подробнее
          </a>
          <i className={cd("underline")}></i>
        </div>
        <button className={cd("closeIcon")}></button>
      </div>
    </div>
  );
};
export default TopBarBaner;
