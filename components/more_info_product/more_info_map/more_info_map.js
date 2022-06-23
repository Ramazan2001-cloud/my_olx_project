import styles from "./more_info_map.module.scss";
import cn from "classnames";

const MoreInfoMap = () => {
	return (
    <div className={cn(styles.map_container)}>
      <div className={cn(styles.map_first__content)}>
        <h1 className={cn(styles.map__title)}>Местоположение</h1>
        <div className={cn(styles.map__location__)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/927/927667.png"
            alt=""
            width="24px"
            height="24px"
            className={cn(styles.map__location_logo)}
          />
          <div className={cn(styles.__title)}>
            <strong className={cn(styles.title__city)}>Алматы</strong>
            <strong className={cn(styles.title__area)}>Ауэзовский район</strong>
            <span className={cn(styles.title__region)}>
              Алматинская область
            </span>
          </div>
        </div>
      </div>
      <div className={cn(styles.map_image)}>
        <img
          src="https://www.olx.kz/app/static/media/staticmap.65e20ad98.svg"
          alt="map image"
        />
      </div>
    </div>
  );
}
export default MoreInfoMap;