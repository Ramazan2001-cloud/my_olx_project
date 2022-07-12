import styles from "./additional_services.module.scss";
import { nameCat3 } from "../../place_ad";
import cn from "classnames";

const AdditionalServices = () => {
  
  return (
    <div className={cn(styles.additional_services)}>
      <h6 className={cn(styles.additional__title)}>
        Дополнительная информация
      </h6>
      <div className={cn(styles.additional__choice)}>
        <span className={cn(styles.additional__span)}>Частный или бизнес*</span>
        <div className={cn(styles.additional__buttons)}>
          <button className={cn(styles.additional__button)}>
            Частное лицо
          </button>
          <button className={cn(styles.additional__button)}>Бизнес</button>
        </div>
      </div>
      <div className={cn(styles.additional__checkbox)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6708/6708238.png"
          alt="arrow"
          width="20px"
          height="20px"
        />
        <div className={cn(styles.additional__text__block)}>
          <h6 className={cn(styles.additional__title_second)}>Автопродление</h6>
          <p className={cn(styles.additional__descr)}>
            Объявление будет деактивировано через 30 дней
          </p>
        </div>
        <input type="checkbox" className={cn(styles.additional__input)} />
      </div>
    </div>
  );
};
export default AdditionalServices;
