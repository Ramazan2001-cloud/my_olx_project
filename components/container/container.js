import styles from "./container.module.scss";
import cn from "classnames";
const Container = (props) => {
	return <div className={cn(styles.container)}>{props.children}</div>
}
export default Container;