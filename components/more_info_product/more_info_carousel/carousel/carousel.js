import styles from "./carousel.module.scss";
import cn from "classnames";

const Carousel = ({ children }) => {
  return (
    <div className={cn(styles.main__container)}>
      <div className={cn(styles.window)}>
        <div className={cn(styles.all__items__container)}>{children}</div>
				
      </div>
    </div>
  );
};
export default Carousel;
