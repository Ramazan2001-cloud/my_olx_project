import styles from "./lastContent.module.css";
import classNames from "classnames/bind";
import LastContentItem from "./lastContent__item/lastContent__item";
import lastContentFirstItem from "./lastContentFirstItem/lastContentFirstItem";

let cn = classNames.bind(styles);

const LastContent = () => {
  let listContentItem = [
    " Услуги, ",
    " Недвижимость, ",
    " Электроника, ",
    " Дом и сад, ",
    " Работа, ",
    " Мода и стиль, ",
    " Детский мир, ",
    " Хобби, отдых и спорт, ",
    " Транспорт, ",
    " Животные, ",
    " Отдам даром. ",
  ];
  let LastListContentItems = [
    "Мобильные приложения",
    "Помощь и Обратная связь",
    "Платные услуги",
    "OLX PRO",
    "Бизнес на OLX",
    "Реклама на сайте",
    "Сотрудничество",
    "Блог OLX",
    "Условия использования",
    "Политика конфиденциальности",
    "Партнёры",
    "Как продавать и покупать?",
    "Правила безопасности",
    "Карта сайта",
    "Карта регионов",
    "Популярные запросы",
    "Работа в OLX",
  ];
  const elements = listContentItem.map((item, i) => {
    return <LastContentItem key={i} nameOfCategory={item} />;
  });
  //_________________________________

  const elements2 = () => {
    for (let i = 0; i < LastListContentItems.length; i++) {
      if (LastListContentItems[i] === "Как продавать и покупать?") {
        break;
      }
      return <lastContentFirstItem nameCategory={LastListContentItems[i]} />;
    }
  }
  
  //_________________________________
  
  return (
    <>
      <div className={cn("lastContent__container", "container")}>
        <img
          src="https://static.olx.kz/static/olxkz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
          alt="document"
          width="111px"
          height="132px"
          className={cn("lastContent-document__image")}
        />
        <ul className={cn("lastContent__list", "list__reset")}>
          <span className={cn("lastContent__span")}>
            Разделы на сервисе OLX:
          </span>
          {elements}
        </ul>
      </div>
      <span className={cn("line__content")}></span>
      <div className={cn("lastContent__lists", "container")}>
        <ul className={cn("lastContent-first__list")}>{this.elements2}</ul>
        <ul className={cn("lastContent-second__list")}></ul>
        <div className={cn("lastContent__logos")}>
          <div className={cn("lastContent-logos__links")}>
            <a href="#" className={cn("listContent-logoFirstLink")}>
              <img
                src="https://static.olx.kz/static/olxkz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg"
                alt="google play"
                width="140px"
                height="48px"
              />
            </a>
            <a href="#" className={cn("listContent-logoSecondLink")}>
              <img
                src="https://static.olx.kz/static/olxkz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg"
                alt="App Store"
                width="140px"
                height="48px"
              />
            </a>
          </div>
          <span className={cn("lastContent-logo__span")}>
            Бесплатное приложение для твоего телефона
          </span>
        </div>
      </div>
    </>
  );
};
export default LastContent;
