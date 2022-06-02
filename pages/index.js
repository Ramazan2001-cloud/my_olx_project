import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);


import Maincategories from "/components/maincategories/Maincategories";
import TopBarBaner from "/components/topbarbanner/topbarbaner";
import SearchMain from "/components/searchmain/searchmain";
import VipContent from "/components/vip_content/vip_content";
import Business from "/components/business/business";
import AboutStore from "/components/aboutStore/aboutStore";
import LastContent from "/components/lastContent/lastContent";

const Home = () => {
  return (
    <div className={cn("content")}>
      <section>
        <TopBarBaner />
      </section>
      <section>
        <SearchMain />
      </section>
      <section>
        <Maincategories />
      </section>
      <section>
        <VipContent />
      </section>
      <section className={cn("business__container")}>
        <Business/>
      </section>
      <section className={cn("about__container")}>
        <AboutStore />
      </section>
      <footer className={cn("footer__container")}>
        <LastContent />
      </footer>
    </div>
  );
};
export default Home;
