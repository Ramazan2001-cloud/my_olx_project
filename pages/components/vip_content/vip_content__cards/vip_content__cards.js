import styles from "./vip_content_card.css";
import className from "className/bind";

let cn = className.bind(styles);

const VipContentCards = () => {
  return (
    <li className={cn("vip_content_card")}>
      <img
        src="#"
        alt="#"
        className="vip_content_card__image"
        width="216px"
        height="156px"
      />
      <h1 className={cn("vip_content_card__title")}></h1>
      <span className="vip_content__address"></span>
      <p className="vip_content_card__price"></p>
    </li>
  );
};
export default VipContentCards;
