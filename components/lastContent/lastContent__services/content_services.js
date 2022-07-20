import LastContentItem from "../lastContent__item/lastContent__item";
import styles from "./content_services.module.css";
import cn from "classnames";
import container from "../../../styles/Home.module.css";
import { useState, useEffect } from "react";

const ContentServices = () => {
  const [services, setSevices] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://qoldan-dev.com/api/ads/ad_cat/find_all`
      );
      const data = await response.json();
      setSevices((prev) => prev = data);
    };
    fetchData().catch(console.error);
  }, []);

  let elements;
  if (services) {
    elements = services.map((item) => {
      return <LastContentItem key={item.id} nameOfCategory={item.name} />;
    });
  }
  
  return (
    <div className={cn(styles.lastContent__container, container.container)}>
      <img
        src="https://static.olx.kz/static/olxkz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
        alt="document"
        width="111px"
        height="132px"
        className={cn(styles.lastContent__document__image)}
      />
      <ul className={cn(styles.lastContent__list)}>
        <span className={cn(styles.lastContent__span)}>
          <strong>Разделы на сервисе OLX:</strong>
        </span>
        {elements}
      </ul>
    </div>
  );
};
export default ContentServices;