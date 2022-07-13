import cn from "classnames";
import styles from "./searchfilter.module.scss";

const SearchFilter = () => {
  return (
    <div className={cn(styles.searchFilter__block)}>
      <div className={cn(styles.searchinput__block1)}>
        <input
          type="text"
          placeholder="Что ищете?"
          className={cn(styles.first__input)}
        />
      </div>
      <div className={cn(styles.searchinput__block2)}>
        <input
          type="text"
          placeholder="Вся страна"
          className={cn(styles.first__second)}
        />
      </div>
      <button className={cn(styles.searchbutton)}>
        <span className={cn(styles.button__text)}>Поиск</span>
        <img
          src="./search.svg"
          alt="searchlogo"
          width="30px"
          height="30px"
          className={cn(styles.buttonimage)}
        />
      </button>
    </div>
  );
};
export default SearchFilter;
