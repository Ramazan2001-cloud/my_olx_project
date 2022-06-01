import styles from "./aboutStore.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const AboutStore = () => {
  return (
    <div className={cn("aboutStore__container", "container")}>
      <img
        src="https://static.olx.kz/static/olxkz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
        alt="olx logo"
        className={cn("olx-logo__image")}
      />
      <p className={cn("aboutStore__descr")}> Крупнейший онлайн-сервис объявлений Казахстана Все онлайн-объявления Казахстана на OLX - здесь вы найдете то, что искали! Нажав на кнопку Подать объявление" , вы сможете разместить объявление на любую тематику легко и быстро. С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.
      </p>
      <div className={cn("aboutStore__logos")}>
        <img
          src="https://static.olx.kz/static/olxkz/packed/font/2f8beb30d7b5a18302412e315921d6ce6d.svg"
          alt="facebook"
          className={cn("Facebook__logo")}
          width="79px"
          height="25px"
        />
        <img
          src="https://static.olx.kz/static/olxkz/packed/font/2f50fd81b399890d1544c4fad903220963.svg"
          alt="YouTube"
          className={cn("YouTube__logo")}
          width="60px"
          height="25px"
        />
        <img
          src="https://static.olx.kz/static/olxkz/packed/font/2fe4c504a1a3111e3d84bec81cd6635a61.svg"
          alt="Instagram"
          className={cn("Instagram__logo")}
          width="91.99px"
          height="31.99px"
        />
      </div>
      <span className={cn("aboutStore__span")}>
        Сообщества OLX.kz в социальных сетях
      </span>
    </div>
  );
};
export default AboutStore;
