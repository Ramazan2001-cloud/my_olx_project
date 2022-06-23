import styles from "./more_info_ad.module.scss";
import cn from "classnames";
import Link from "next/link";

const MoreInfoAd = ({ ad_info, ad_check }) => {
	

	
  return (
    <div className={cn(styles.productAd__container)}>
      <div className={cn(styles.productAd__header)}>
        <span className={cn(styles.productAd__date)}></span>
        <img
          src="https://cdn-icons.flaticon.com/png/128/2961/premium/2961957.png?token=exp=1655984747~hmac=5978112627d3e88ef19ea30861f7ab7d"
          alt="heart logo"
          className={cn(styles.productAd__addHeart)}
          width="24px"
          height="24px"
        />
        {/* https://cdn-icons-png.flaticon.com/512/2107/2107845.png */}
      </div>
      <h1 className={cn(styles.productAd__title)}></h1>
      <p className={cn(styles.productAd__price)}>
        <strong></strong>
        <span></span>
      </p>
      <div className={cn(styles.productAd__characteristic)}></div>
      <div className={cn(styles.productAd_descr__content)}>
        <h2 className={cn(styles.productAd_descr__title)}></h2>
        <p className={cn(styles.productAd_descr__title)}></p>
      </div>
      <span className={cn(styles.line)}></span>
      <div className={cn(styles.productAd__footer)}>
        <p className={cn(styles.productAd__id)}></p>
        <p className={cn(styles.productAd__id)}></p>
        <p className={cn(styles.productAd__id)}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2183/premium/2183595.png?token=exp=1655984427~hmac=1f06b6e4b8b616872fff08b4f5c15a2e"
            alt="red flag"
            className={cn(styles.productAd__descr)}
            width="24px"
            height="24px"
          />
          <span></span>
        </p>
      </div>
    </div>
  );
};
export default MoreInfoAd;
