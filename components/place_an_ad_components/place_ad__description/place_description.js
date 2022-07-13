import styles from "./place_description.module.scss";
import cn from "classnames";
import { useState } from "react";


const PlaceDescription = () => {
  const [countText, setCountText] = useState(80);
  const [countMax, setCountMax] = useState(0);
  
  const visibleCountText = () => {
    setCountText((prev) => {
      return prev - 1;
    });
    setCountMax((prev) => {
      return prev + 1;
    })
  };
  return (
    <div className={cn(styles.description__content)}>
      <label className={cn(styles.descr__span)}>Описание*</label>
      <div className={cn(styles.descr__textarea__block)}>
        <textarea
          name="description"
          className={cn(styles.descr__textarea)}
          placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
          onChange={visibleCountText}
        ></textarea>
      </div>
      <div className={cn(styles.descr__footer)}>
        <span className={cn(styles.descr__footer__span)}>
          Напишите еще {countText} символов
        </span>
        <span className={cn(styles.descr__footer__span)}>{countMax}/9000</span>
      </div>
    </div>
  );
};
export default PlaceDescription;
