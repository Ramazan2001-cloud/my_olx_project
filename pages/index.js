import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

import Maincategories from "/components/maincategories/Maincategories";
import TopBarBaner from "/components/topbarbanner/topbarbaner";
import SearchMain from "/components/searchmain/searchmain";
import VipContent from "/components/vip_content/vip_content";
import Business from "/components/business/business";
import AboutStore from "/components/aboutStore/aboutStore";
import {Html} from "next/document";
import next from "next";

export const getStaticProps = async () => {
  const response1 = await fetch("http://localhost:3000/api/hello");
  const data1 = await response1.json();
  
  const response1_1 = await fetch("http://localhost:3000/api/last-categories");
  const data1_1 = await response1_1.json();

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
    },
  };
  
};
const Home = ({ data1, data2, data3, data1_1}) => {
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
