import styles from "./filterPage.module.scss";
import cn from "classnames";
import globalStyles from "../../styles/Home.module.css";
import SearchFilter from "../../components/filtercomponents/searchfilter/searchfilter";

const FilterPage = () => {
  return (
    <main className={cn(styles.main__filterpage)}>
      <div className={cn(globalStyles.container)}>
        <SearchFilter />
      </div>
    </main>
  );
};
export default FilterPage;
