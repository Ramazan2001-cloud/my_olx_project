import styles from "./searchmain.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const SearchMain = () => {
  return (
    <div className={cn("searchmain__container")}>
      <form action="#" className={cn("search__form", "container")}>
        <div className={cn("searchInputBlock", "backGround_block-color")}>
          <div className={cn("search__block")}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
              alt="search"
              width="25px"
              height="25px"
            />
          </div>
          <input
            type="text"
            placeholder="3 280 415 объявлений рядом"
            className={cn("searchmain-input__ad", "backGround_block-color")}
          />
          <div className={cn("search__x")}>
            <img
              src="https://cdn-icons.flaticon.com/png/128/2723/premium/2723639.png?token=exp=1653981468~hmac=b47cb9007edf68ac14def3686adb679b"
              alt="X"
              width="25px"
              height="25px"
            />
          </div>
        </div>
        <div className={cn("searchInputBlock__second")}>
          <div className={cn("search-second__block", "backGround_block-color")}>
            <img
              src="https://cdn-icons.flaticon.com/png/128/3177/premium/3177361.png?token=exp=1653981527~hmac=8c3ce2582f02c81bf896d3d68eb084fb"
              alt="location"
              width="30px"
              height="30px"
            />
          </div>
          <input
            type="text"
            placeholder="Весь Казахстан"
            className={cn("searchmain-input__region", "backGround_block-color")}
          />
        </div>
        <button
          type="submit"
          className={cn("searchmain__button", "backGround_block-color")}
        >
          <span className={cn("srh-button__text")}>Поиск</span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
            alt="search"
            width="25px"
            height="25px"
          />
        </button>
      </form>
    </div>
  );
};
export default SearchMain;

