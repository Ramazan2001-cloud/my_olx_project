import styles from "./place_an_ad.module.scss";
import globalStyles from "../../styles/Home.module.css";
import PlaceAd from "../../components/place_an_ad_components/place_ad";
import PlaceAdPhoto from "../../components/place_an_ad_components/place_ad__photo/place_ad__photo";
import PlaceDescription from "../../components/place_an_ad_components/place_ad__description/place_description";
import PlaceAdContacts from "../../components/place_an_ad_components/place_ad__contacts/place_ad__contacts";
import PlaceAdPublication from "../../components/place_an_ad_components/place_ad__publication/place_ad__publication";
import ModalCategories from "../../components/place_an_ad_components/place_ad_modal/modal_categories/modal_categories";

import cn from "classnames";

export const getStaticProps = async () => {
  const categoryResponse = await fetch(
    "http://dev.qoldan.com/api/ads/ad_cat/find_all"
  );
  const categoryData = await categoryResponse.json();
  return {
    props: {
      categoryData,
    },
  };
};

const PlaceAnAd = ({ categoryData }) => {
  console.log(categoryData);
  return (
    <div>
      <main className={cn(styles.main)}>
        <div className={cn(styles.placead__container, globalStyles.container)}>
          <form action="##">
            <h2 className={cn(styles.placead__title)}>Создать объявление</h2>
            <PlaceAd category={categoryData} />
            <PlaceAdPhoto />
            <PlaceDescription />
            <PlaceAdContacts />
            <PlaceAdPublication />
          </form>
        </div>
        <span className={cn(styles.lines)}></span>
      </main>
    </div>
  );
};
export default PlaceAnAd;
