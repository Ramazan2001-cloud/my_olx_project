import styles from "./main.module.scss";
import cn from "classnames";
const Main = (props) => {
  return <main className={cn(styles.main)}>{props.children}</main>;
};
export default Main;
