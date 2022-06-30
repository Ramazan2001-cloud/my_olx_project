import styles from "./place_ad_publication.module.scss";
import cn from "classnames";
const PlaceAdPublication = () => {
  return (
    <div className={cn(styles.publication__content)}>
      <div className={cn(styles.publication__buttons)}>
        <button
          type="button"
          className={cn(styles.publication_button__preview)}
        >
          <span>Предпросмотр</span>
          <div className={styles.span__underline}></div>
        </button>
        <button
          type="submit"
          className={cn(styles.publication__button__public)}
        >
          Опубликовать
        </button>
      </div>
    </div>
		
  );
};
export default PlaceAdPublication;
