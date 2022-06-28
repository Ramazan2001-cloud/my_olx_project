import styles from "./more_info_carousel.module.scss";
import Carousel from "./carousel/carousel";
import cn from "classnames";

const MoreInfoCarousel = () => {

	return (
    <Carousel>
      <div className={cn(styles.item, styles.item__1)}>Item 1</div>
      <div className={cn(styles.item, styles.item__2)}>Item 2</div>
      <div className={cn(styles.item, styles.item__3)}>Item 3</div>
    </Carousel>
  );
}
export default MoreInfoCarousel;