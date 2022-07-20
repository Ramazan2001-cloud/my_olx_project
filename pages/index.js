import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

import Maincategories from "/components/maincategories/Maincategories";
import SearchMain from "/components/searchmain/searchmain";
import VipContent from "/components/vip_content/vip_content";
import Business from "/components/business/business";
import AboutStore from "/components/aboutStore/aboutStore";
import ContentServices from "../components/lastContent/lastContent__services/content_services";

export const getStaticProps = async () => {
  try {
    const categoryResponse = await fetch(
      "http://qoldan-dev.com/api/ads/ad_cat/find_all"
    );
    const categoryData = await categoryResponse.json();
    //________________________________________________
    const LastCategoriesResponse = await fetch(
      "http://localhost:3000/api/last-categories"
    );
    const LastCategoriesData = await LastCategoriesResponse.json();
    //________________________________________________
    const SubCategoriesResponse = await fetch(
      "http://qoldan-dev.com/api/ads/ad_cat/find_subcat"
    );
    const SubCategoriesData = await SubCategoriesResponse.json();
    //________________________________________________
    const VipProductsResponse = await fetch(
      "http://localhost:3000/api/vipProducts"
    );
    const VipProductsData = await VipProductsResponse.json();
    //________________________________________________
    if (!categoryData) {
      return {
        notFound: true,
      };
    }
    if (!LastCategoriesData) {
      return {
        notFound: true,
      };
    }
    if (!SubCategoriesData) {
      return {
        notFound: true,
      };
    }
    if (!VipProductsData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        categoryData: categoryData,
        LastCategoriesData: LastCategoriesData,
        SubCategoriesData: SubCategoriesData,
        VipProductsData: VipProductsData,
      },
    };
  } catch (e) {
    return {
      props: {
        categoryData: null,
        LastCategoriesData: null,
        SubCategoriesData: null,
        VipProductsData: null,
      },
    };
  }
};
const Home = ({
  categoryData,
  LastCategoriesData,
  SubCategoriesData,
  VipProductsData,
}) => {

  return (
    <div className={cn("content")}>
      <section>
        <SearchMain />
      </section>
      <section>
        <Maincategories
          categories={categoryData}
          lastcategories={LastCategoriesData}
          subcategories={SubCategoriesData}
        />
      </section>
      <section>
        <VipContent product={VipProductsData} />
      </section>
      <section className={cn("business__container")}>
        <Business />
      </section>
      <section className={cn("about__container")}>
        <AboutStore />
      </section>
      <section>
        <ContentServices/>
      </section>
    </div>
  );
};
export default Home;
