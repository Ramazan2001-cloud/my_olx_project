import styles from "./place_ad__contacts.module.scss";
import cn from "classnames";

const PlaceAdContacts = () => {
  return (
    <div className={cn(styles.contacts__content)}>
      <h6 className={cn(styles.contact__title)}>Контактная информация</h6>
      <div>
        <label htmlFor="#" className={cn(styles.contact__label)}>
          Местоположение
        </label>
        <div className={cn(styles.contact_input__block)}>
          <input
            type="text"
            name="city"
            className={cn(styles.contact_input)}
            placeholder="Название города или индекс"
          />
        </div>
      </div>
      <div>
        <label htmlFor="#" className={cn(styles.contact__label)}>
          Email-адрес
        </label>
        <div className={cn(styles.contact_input__block)}>
          <input
            type="email"
            name="emailaddress"
            className={cn(styles.contact_input)}
            placeholder="sterlingedvard@gmail.com"
            disabled
          />
        </div>
      </div>
      <div>
        <label htmlFor="#" className={cn(styles.contact__label)}>
          Номер телефона
        </label>
        <div className={cn(styles.contact_input__block)}>
          <input type="tel" name="phone" className={cn(styles.contact_input)} />
        </div>
      </div>
    </div>
  );
};
export default PlaceAdContacts;
