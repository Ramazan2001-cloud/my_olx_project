import styles from "./place_description.module.scss";
import cn from "classnames";
const PlaceDescription = () => {
  return (
    <div className={cn(styles.description__content)}>
      <label className={cn(styles.descr__span)}>Описание*</label>
      <div className={cn(styles.descr__textarea__block)}>
        <textarea
          name="description"
          className={cn(styles.descr__textarea)}
          placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
        ></textarea>
      </div>
    </div>
  );
};
export default PlaceDescription;
