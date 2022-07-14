import styles from "./searchmain.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
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
              src="https://t4.ftcdn.net/jpg/00/75/69/13/240_F_75691329_CLLuXHPb6zqvgBnFkQjVnufsLEtmbL3e.jpg"
              alt="X"
              width="25px"
              height="25px"
            />
          </div>
        </div>
        <div className={cn("searchInputBlock__second")}>
          <div className={cn("search-second__block", "backGround_block-color")}>
            <img
              src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg"
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
        <Link href="/filterpage">
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
        </Link>
      </form>
    </div>
  );
};
export default SearchMain;
