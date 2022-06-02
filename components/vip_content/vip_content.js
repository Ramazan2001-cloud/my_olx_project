import styles from "./vip_content.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);
import VipContentCards from "./vip_content__cards/vip_content__cards";

const VipContent = () => {
  let listVipCards = [
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
    {
      title: "Обрезка кустарников и деревьев",
      address: "Актобе, микрорайон 5",
      price: "5 000 тг.",
    },
  ];

  const vipContentCardsList = listVipCards.map((item, i) => {
    return (
      <VipContentCards
				key={i}
        title={item.title}
        address={item.address}
        price={item.price}
      />
    );
  });
  return (
    <div className={cn("vip_content__container", "container")}>
      <h1 className={cn("vip_content__title")}>VIP-объявления</h1>
      <ul className={cn("vip_content__list", "container","list__reset")}>
        {vipContentCardsList}
      </ul>
    </div>
  );
};
export default VipContent;
