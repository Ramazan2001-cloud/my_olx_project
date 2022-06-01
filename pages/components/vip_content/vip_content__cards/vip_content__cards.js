import styles from "./vip_content__cards.module.css";
import classNames from "classnames/bind";

let cn = classNames.bind(styles);

const VipContentCards = ({title,address,price}) => {
  return (
    <li className={cn("vip_content_card")}>
      <img
        src="https://frankfurt.apollo.olxcdn.com/v1/files/ksv7347o7tz01-KZ/image;s=644x461"
        alt="vip content image"
        className={cn("vip_content_card__image")}
        width="230px"
        height="218px"
      />
      <h1 className={cn("vip_content_card__title")}>
        {title}
      </h1>
      <span className={cn("vip_content__address")}>
        {address}
      </span>
      <p className={cn("vip_content_card__price")}>
        {price}
      </p>
    </li>
  );
};
export default VipContentCards;

