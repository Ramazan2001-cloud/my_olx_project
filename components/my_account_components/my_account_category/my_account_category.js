import styles from "./my_account_category.module.css";
import cn from "classnames";

const MyAccountCategory = ({ name, VisiBleState}) => {
  return (
    <li className={cn(styles.myaccount_item)} onClick={VisiBleState}>
      <span className={cn(styles.myaccount_span)}>{name}</span>
    </li>
  );
};
export default MyAccountCategory;