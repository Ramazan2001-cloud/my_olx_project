import styles from "./vip_content.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);
import { useState } from "react";
import MoreInfoAd from "../more_info_product/more_info_ad/more_info_ad";
import VipContentCards from "./vip_content__cards/vip_content__cards";

const VipContent = ({ product }) => {

  const [set, foo] = useState(false);
  const vipContentCardsList = product.map((item) => {
    const NewFoo = () => {
      foo((prev) => {
        if (prev == item.id) {
          return !prev;
        }
        prev = "";
        return prev + item.id;
      });
    };
    
    return (
      <VipContentCards
        key={item.id}
        Id={item.id}
        title={item.vip_product_name}
        address={item.address}
        price={item.price}
        image={item.img}
        visibleID={NewFoo}
      />
    );
  });
  return (
    <div className={cn("vip_content__container", "container")}>
      <h1 className={cn("vip_content__title")}>VIP-объявления</h1>
      <ul className={cn("vip_content__list", "container", "list__reset")}>
        {vipContentCardsList}
      </ul>
    </div>
  );
};
export default VipContent;
