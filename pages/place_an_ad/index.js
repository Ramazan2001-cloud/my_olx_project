import styles from "./place_an_ad.module.scss";
import globalStyles from "../../styles/Home.module.css";
import PlaceAd from "../../components/place_an_ad_components/place_ad";
import PlaceAdPhoto from "../../components/place_an_ad_components/place_ad__photo/place_ad__photo";
import PlaceDescription from "../../components/place_an_ad_components/place_ad__description/place_description";
import PlaceAdContacts from "../../components/place_an_ad_components/place_ad__contacts/place_ad__contacts";
import PlaceAdPublication from "../../components/place_an_ad_components/place_ad__publication/place_ad__publication";
import AdditionalInformation from "../../components/place_an_ad_components/place_additional_information/additional_information";
import cn from "classnames";

export const getStaticProps = async () => {
  try {
    const categoryResponse = await fetch(
      "http://qoldan-dev.com/api/ads/ad_cat/find_all"
    );
    const categoryData = await categoryResponse.json();

    const subCategoryResponse = await fetch(
      "http://qoldan-dev.com/api/ads/ad_cat/find_subcat"
    );

    const subCategoryData = await subCategoryResponse.json();

    if (!categoryData || !subCategoryData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        categoryData: categoryData,
        subCategoryData: subCategoryData,
      },
    };
  } catch (e) {
    return {
      props: {
        categoryData: null,
        subCategoryData: null,
      },
    };
  }
};

const PlaceAnAd = ({ categoryData, subCategoryData }) => {

  return (
    <div>
      <main className={cn(styles.main)}>
        <div className={cn(styles.placead__container, globalStyles.container)}>
          <form action="##">
            <h2 className={cn(styles.placead__title)}>Создать объявление</h2>
            <PlaceAd category={categoryData} subCategory={subCategoryData} />
            <PlaceAdPhoto />
            <PlaceDescription />
            <AdditionalInformation />
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
