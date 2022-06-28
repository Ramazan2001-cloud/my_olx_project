import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

import Maincategories from "/components/maincategories/Maincategories";
import TopBarBaner from "/components/topbarbanner/topbarbaner";
import SearchMain from "/components/searchmain/searchmain";
import VipContent from "/components/vip_content/vip_content";
import Business from "/components/business/business";
import AboutStore from "/components/aboutStore/aboutStore";
import { Html } from "next/document";

export const getStaticProps = async () => {
  const response1 = await fetch("http://localhost:3000/api/hello");
  const data1 = await response1.json();

    // const response7 = await fetch(
    //   "http://dev.qoldan.com/api/ads/ad_cat/find_all"
    // );
    // const data5 = await response7.json();


  const response1_1 = await fetch("http://localhost:3000/api/last-categories");
  const data1_1 = await response1_1.json();

  // const subcategoryResponse = await fetch(
  //   "http://dev.qoldan.com/api/ads/core-api/ad_cat/find_subcat"
  // );
  // const subcategoryData = await subcategoryResponse.json();


  //_______________________
  const response2 = await fetch("http://localhost:3000/api/vipProducts");
  const data2 = await response2.json();

  const response3 = await fetch("http://localhost:3000/api/subcategories");
  const data3 = await response3.json();

  return {
    props: {
      data1,
      data2,
      data3,
      data1_1,
      // data5,
      // subcategoryData,
    },
  };
};

const Home = ({ data1, data2, data3, data1_1}) => {
  // console.log(data5);
  return (
    <div className={cn("content")}>
      <section>
        <TopBarBaner />
      </section>
      <section>
        <SearchMain />
      </section>
      <section>
        <Maincategories
          categories={data1}
          lastcategories={data1_1}
          subcategories={data3}
        />
      </section>
      <section>
        <VipContent product={data2} />
      </section>
      <section className={cn("business__container")}>
        <Business />
      </section>
      <section className={cn("about__container")}>
        <AboutStore />
      </section>
    </div>
  );
};
export default Home;
