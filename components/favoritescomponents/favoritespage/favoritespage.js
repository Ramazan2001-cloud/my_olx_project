import styles from "./favorites.module.scss";
import cn from "classnames";

const FavoritesPage = ({ image, title, description1, description2 }) => {
  return (
    <>
      <div className={cn(styles.favorites__container)}>
        <div className={cn(styles.favorites__content)}>
          <img
            src={image}
            alt="favorties image"
            className={cn(styles.favorites__image)}
          />
          <h1 className={cn(styles.favorites__title)}>{title}</h1>
          <p className={cn(styles.favorites__descr)}>
            {description1}
            <br />
            {description2}
          </p>
        </div>
      </div>
    </>
  );
};
export default FavoritesPage;
