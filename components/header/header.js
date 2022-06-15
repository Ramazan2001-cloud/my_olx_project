// import styles from './header.module.css';
import styles from "./header.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
// import Enter from "../enter/enter";
let cn = classNames.bind(styles);

const Header = () => {
  return (
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
            <a className={cn("header-msg__link", "link__reset")}>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059975.png?token=exp=1654765224~hmac=95b15f532fc0c21015b3925f3e6e8b38"
                width="30px"
                height="30px"
                alt="meassage logo"
                className={cn("header-logo__msg")}
              />
            </a>
            <Link href="/myaccount">
              <a className={cn("header__text", "link__reset")}>Сообщения</a>
            </Link>
          </li>
          <li className={cn("header__item")}>
            <a href="#" className={cn("header-heart__link", "link__reset")}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1177/1177543.png"
                alt="#"
                width="30px"
                height="30px"
                className={cn("header-heart__image")}
              />
            </a>
          </li>
          <li className={cn("header__item")}>
            <a className={cn("header__myProfile", "link__reset")}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7420/7420785.png"
                alt="#"
                width="30px"
                height="30px"
                className={cn("header-logo__myProfile")}
              />
            </a>
            <Link href="/myaccount">
              <a className={cn("header__text", "link__reset")}>Мой профиль</a>
            </Link>
          </li>
          <li className={cn("header__item")}>
            <a
              href="#"
              className={cn(
                "header-button__link",
                "link__reset",
                "header__text"
              )}
            >
              Подать объявление
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="burger__container">
			<span className="burger__span"></span>
			<span className="burger__span"></span>
			<span className="burger__span"></span>
		</div> */}
    </header>
  );
};
export default Header;
