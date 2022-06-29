import styles from "./place_ad__photo.module.scss";
import PlacePhotoItem from "./place_photo_item/place_photo_item";
import cn from "classnames";

const PlaceAdPhoto = () => {
  const arrayImage = [
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
    "/photoLogo.png",
  ];

  const elements = arrayImage.map((item, i) => {
    return <PlacePhotoItem key={i} photologo={item} />;
  });
	
  return (
    <div className={cn(styles.photo__content)}>
      <h6 className={cn(styles.photo__title)}>Фото</h6>
      <p className={cn(styles.photo__descr)}>
        Первое фото будет на обложке объявления. Перетащите, чтобы изменить
        порядок.
      </p>
      <ul className={cn(styles.photo__add_list)}>{elements}</ul>
    </div>
  );
};
export default PlaceAdPhoto;
