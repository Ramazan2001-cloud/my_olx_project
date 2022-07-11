import styles from "./additional_services.module.scss";
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
    </div>
  );
};
export default AdditionalServices;
