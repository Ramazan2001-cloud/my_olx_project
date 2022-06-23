import styles from "./vip_content.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);
import VipContentCards from "./vip_content__cards/vip_content__cards";

const VipContent = ({ product }) => {

  const vipContentCardsList = product.map((item) => {
    return (
      <VipContentCards
        key={item.id}
        title={item.vip_product_name}
        address={item.address}
        price={item.price}
        image={item.img}
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
