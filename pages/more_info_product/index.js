import styles from "./more_info_product.module.scss";
import SearchMain from "../../components/searchmain/searchmain";
import gloabalStyles from "../../styles/Home.module.css";
import MoreInfoCategoryList from "../../components/more_info_product/more_info_category_list/more_info_category_list";
import MoreInfoSliders from "../../components/more_info_product/more_info_sliders/more_info_sliders";
import MoreInfoSalesman from "../../components/more_info_product/more_info_salesman/more_info_salesman";
import MoreInfoMap from "../../components/more_info_product/more_info_map/more_info_map";
import MoreInfoAd from "../../components/more_info_product/more_info_ad/more_info_ad";
import MoreInfoAuthor from "../../components/more_info_product/more_info_author/more_info_author";
import MoreInfoCarousel from "../../components/more_info_product/more_info_carousel/more_info_carousel";
import cn from "classnames";

export const getStaticProps = async () => {
  const AdResponse = await fetch(
    "http://localhost:3000/api/get-more-info-products"
  );
  const AdData = await AdResponse.json();

  const categoryResponse = await fetch("http://localhost:3000/api/hello");
  const categoryData = await categoryResponse.json();

  const subcategoryResponse = await fetch(
    "http://localhost:3000/api/subcategories"
  );
  const subcategoryData = await subcategoryResponse.json();

  const vipAdResponse = await fetch("http://localhost:3000/api/vipProducts");
  const vipData = await vipAdResponse.json();
  
  return {
    props: {
      AdData,
      categoryData,
      subcategoryData,
      vipData,
    },
  };
};
const MoreInfoProduct = ({
  AdData,
  categoryData,
  subcategoryData,
  vipData,
}) => {
  return (
    <main className={cn(styles.main, gloabalStyles.content)}>
      <div className={cn(styles.main_container, gloabalStyles.container)}>
        <SearchMain />
        <MoreInfoCategoryList
          categoryList={categoryData}
          subcategoryList={subcategoryData}
        />
        <div className={cn(styles.main__sliders__block)}>
          <MoreInfoSliders moreinfo={AdData} />
          <div>
            <MoreInfoSalesman />
            <MoreInfoMap />
          </div>
        </div>
        <MoreInfoAd ad_info={AdData} ad_check={vipData} />
        <MoreInfoAuthor infoAuthor={AdData} />
      </div>
    </main>
  );
};
export default MoreInfoProduct;
