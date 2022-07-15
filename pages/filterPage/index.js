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
    //________________________________________________
    const filterProductResponse = await fetch(
      "http://localhost:3000/api/get-filter-products"
    );
    const filterProductData = await filterProductResponse.json();

    if (!categoryData || !filterProductData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        categoryData: categoryData,
        filterProductData: filterProductData,
      },
    };
  } catch (e) {
    return {
      props: {
        categoryData: null,
        filterProductData: null,
      },
    };
  }
};

const FilterPage = ({ categoryData, filterProductData }) => {
  
  return (
    <main className={cn(styles.main__filterpage)}>
      <div className={cn(globalStyles.container)}>
        <SearchFilter />
        <SelectFilter />
        <FilterLinks linkData={categoryData} productData={filterProductData} />
      </div>
    </main>
  );
};
export default FilterPage;
