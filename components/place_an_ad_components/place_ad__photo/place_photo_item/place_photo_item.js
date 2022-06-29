import styles from "./place_photo_item.module.scss";
import cn from "classnames";

const PlacePhotoItem = ({ photologo }) => {
  return (
    <li className={cn(styles.photo__item)}>
      <img
        src={photologo}
        alt="photo logo"
				width="32px"
				height="32px"
        className={cn(styles.photo__image)}
      />
      <input type="file" className={styles.inputFile} />
    </li>
  );
};
export default PlacePhotoItem;
