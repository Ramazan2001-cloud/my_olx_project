import styles from "./more_info_product.module.scss";
import SearchMain from "../../components/searchmain/searchmain";
import gloabalStyles from "../../styles/Home.module.css";
import MoreInfoCategoryList from "../../components/more_info_product/more_info_category_list/more_info_category_list";
import MoreInfoSliders from "../../components/more_info_product/more_info_sliders/more_info_sliders";
import cn from "classnames";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/get-more-info-products");
  const data = await response.json();

  const categoryResponse = await fetch("http://localhost:3000/api/hello");
  const categoryData = await categoryResponse.json();

	const subcategoryResponse = await fetch("http://localhost:3000/api/subcategories");
	const subcategoryData = await subcategoryResponse.json();


	return {
    props: {
      data,
      categoryData,
      subcategoryData,
    },
  };
};
const MoreInfoProduct = ({ data, categoryData, subcategoryData }) => {
  return (
    <main className={cn(styles.main, gloabalStyles.content)}>
      <div className={cn(styles.main_container, gloabalStyles.container)}>
        <SearchMain />
        <MoreInfoCategoryList
          categoryList={categoryData}
          subcategoryList={subcategoryData}
        />
        <div className={cn(styles.main__sliders__block)}>
          <MoreInfoSliders moreinfo={data} />
          
        </div>
      </div>
    </main>
  );
};
export default MoreInfoProduct;
