import styles from "./vip_content__cards.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
import {useState} from "react";
let cn = classNames.bind(styles);

const VipContentCards = ({title,address,price,image}) => {
  const[idAd,seIdAd] = useState(0);
  
  return (
    <li className={cn("vip_content_card")}>
      <Link href="/more_info_product">
        <a>
          <img
            src={image}
            alt="vip content image"
            className={cn("vip_content_card__image")}
            width="230px"
            height="218px"
          />
          <h1 className={cn("vip_content_card__title")}>{title}</h1>
          <span className={cn("vip_content__address")}>{address}</span>
          <p className={cn("vip_content_card__price")}>{price}</p>
        </a>
      </Link>
    </li>
  );
};
export default VipContentCards;

