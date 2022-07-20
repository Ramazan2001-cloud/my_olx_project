import styles from "./lastContent.module.css";
import classNames from "classnames/bind";
import LastContentFirstItem from "./lastContentFirstItem/lastContentFirstItem";
import LastContentSecondItem from "./lastContentSecondItem/lastContentSecondItem";
let cn = classNames.bind(styles);

const LastContent = () => {
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
  
  const elementsFirstItem = LastListContentItems.map((item, i) => {
    while (i < 11) {
      return <LastContentFirstItem key={i} nameCategory={item} />;
    }
  });

  //_________________________________
  
  let p = LastListContentItems.reverse();
  let lists = [];
  for(let i = 0; i < p.length; i++) {
    if(p[i] === "Партнёры"){
      break;
    }
    lists.push(p[i]);
  }
  let newLists = lists.reverse();
  
  
  const elementsSecondItem = newLists.map((item, i) => {
    return <LastContentSecondItem key={i} category={item} />;
  });
  
  return (
    <footer className={cn("footer__container")}>
      <div className={cn("line__content")}></div>
      <div className={cn("lastContent__lists", "container")}>
        <ul className={cn("lastContent-first__list","list__reset")}>{elementsFirstItem}</ul>
        <ul className={cn("lastContent-second__list","list__reset")}>{elementsSecondItem}</ul>
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
    </footer>
  );
};
export default LastContent;
