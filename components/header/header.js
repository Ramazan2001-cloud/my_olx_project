import styles from "./header.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
let cn = classNames.bind(styles);

const Header = () => {
  return (
    <>
      <header className={cn("header")}>
        <div className={cn("header__container", "container")}>
          <Link href="/">
            <a className={cn("header-logo__link")}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OLX_blue_logo.svg/2560px-OLX_blue_logo.svg.png"
                width="70px"
                height="50px"
                alt="olx logo"
                className="header-logo__img"
              />
            </a>
          </Link>
          <ul className={cn("header__list", "list__reset")}>
            <li className={cn("header__item")}>
              <p className={cn("header__ru")}>ру</p>
              <span className={cn("header__span")}></span>
              <p className={cn("header__kz")}>қаз</p>
            </li>
            <li className={cn("header__item")}>
              <Link href="/myaccount/message">
                <a className={cn("header-msg__link", "link__reset")}>
                  <img
                    src="/messageIcon.png"
                    width="35px"
                    height="35px"
                    alt="meassage logo"
                    className={cn("header-logo__msg")}
                  />
                  <span className={cn("header__text")}>Сообщения</span>
                </a>
              </Link>
            </li>
            <li className={cn("header__item")}>
              <Link href="/favorites">
                <a className={cn("header-heart__link", "link__reset")}>
                  <img
                    src="/heart.png"
                    alt="heart"
                    width="30px"
                    height="30px"
                    className={cn("header-heart__image")}
                  />
                </a>
              </Link>
            </li>
            <li className={cn("header__item")}>
              <Link href="/myaccount/ad">
                <a className={cn("header__myProfile", "link__reset")}>
                  <img
                    src="/user.png"
                    alt="my profile"
                    width="30px"
                    height="30px"
                    className={cn("header-logo__myProfile")}
                  />
                  <span className={cn("header__text", "link__reset")}>
                    Мой профиль
                  </span>
                </a>
              </Link>
            </li>
            <li className={cn("header__item")}>
              <Link href="/place_an_ad">
                <a
                  className={cn(
                    "header-button__link",
                    "link__reset",
                    "header__text"
                  )}
                >
                  Подать объявление
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={cn("header__container", "header__container__relative")}
      ></div>
    </>
  );
};
export default Header;
