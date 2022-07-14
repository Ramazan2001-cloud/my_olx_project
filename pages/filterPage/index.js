import styles from "./filterPage.module.scss";
import cn from "classnames";
import globalStyles from "../../styles/Home.module.css";
import SearchFilter from "../../components/filtercomponents/searchfilter/searchfilter";
import SelectFilter from "../../components/filtercomponents/selectfilter/selectfilter";
import FilterLinks from "../../components/filtercomponents/filter_links/filter_links";

export const getStaticProps = async () => {
  try {
    const categoryResponse = await fetch(
      "http://qoldan-dev.com/api/ads/ad_cat/find_subcat"
    );
    const categoryData = await categoryResponse.json();
    if (!categoryData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        categoryData: categoryData,
      },
    };
  } catch (e) {
    return {
      props: {
        categoryData: null,
      },
    };
  }
};

const FilterPage = ({ categoryData }) => {

  return (
    <main className={cn(styles.main__filterpage)}>
      <div className={cn(globalStyles.container)}>
        <SearchFilter />
        <SelectFilter />
        <FilterLinks linkData={categoryData} />
      </div>
    </main>
  );
};
export default FilterPage;
