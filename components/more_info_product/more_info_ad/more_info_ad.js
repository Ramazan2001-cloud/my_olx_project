import styles from "./more_info_ad.module.scss";
import cn from "classnames";
import MoreInfoChartacteristic from "./more_info_characteristic/more_info_characteristic";
import Link from "next/link";

const MoreInfoAd = ({ ad_info }) => {
  const item = 0;
  const characteristicAd = ad_info[item].product_characteristics.map(
    (item, i) => {
      return <MoreInfoChartacteristic key={i} name={item} />;
    }
  );

  return (
    <div className={cn(styles.productAd__container)}>
      <div className={cn(styles.productAd__header)}>
        <span className={cn(styles.productAd__date)}>20 июня 2022 г.</span>
        <img
          src="https://cdn-icons.flaticon.com/png/128/2961/premium/2961957.png?token=exp=1655984747~hmac=5978112627d3e88ef19ea30861f7ab7d"
          alt="heart logo"
          className={cn(styles.productAd__addHeart)}
          width="24px"
          height="24px"
        />
      </div>
      <h1 className={cn(styles.productAd__title)}>
        {ad_info[item].product_name}
      </h1>
      <p className={cn(styles.productAd__price)}>
        <strong>{ad_info[item].price}</strong>
        <span className={cn(styles.productAd__span)}>Договорная</span>
      </p>
      <ul className={cn(styles.productAd__characteristic)}>
        {characteristicAd}
      </ul>
      <div className={cn(styles.productAd_descr__content)}>
        <h2 className={cn(styles.productAd_descr__title)}>ОПИСАНИЕ</h2>
        <p className={cn(styles.productAd_descr)}>
          {ad_info[item].product_descr}
        </p>
      </div>
      <span className={cn(styles.line)}></span>
      <div className={cn(styles.productAd__footer)}>
        <p className={cn(styles.productAd__id)}>
          ID: {ad_info[item].product_ID}
        </p>
        <p className={cn(styles.productAd__views)}>
          Просмотров : {ad_info[item].product_count_views}
        </p>
        <a className={cn(styles.productAd__id__link)}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2183/premium/2183595.png?token=exp=1655984427~hmac=1f06b6e4b8b616872fff08b4f5c15a2e"
            alt="red flag"
            className={cn(styles.productAd__descr__image)}
          />
          <span className={cn(styles.productAd__descr__span)}>
            Пожаловаться
          </span>
        </a>
      </div>
    </div>
  );
};
export default MoreInfoAd;
