import styles from "./place_an_ad.module.scss";
import globalStyles from "../../styles/Home.module.css";
import PlaceAd from "../../components/place_an_ad_components/place_ad";
import PlaceAdPhoto from "../../components/place_an_ad_components/place_ad__photo/place_ad__photo";
import PlaceDescription from "../../components/place_an_ad_components/place_ad__description/place_description";
import cn from "classnames";

const PlaceAnAd = () => {
  return (
    <main className={cn(styles.main)}>
      <div className={cn(styles.placead__container, globalStyles.container)}>
        <form action="##">
          <h2 className={cn(styles.placead__title)}>Создать объявление</h2>
          <PlaceAd />
          <PlaceAdPhoto />
          <PlaceDescription />
        </form>
      </div>
    </main>
  );
};
export default PlaceAnAd;
