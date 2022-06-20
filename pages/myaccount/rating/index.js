import styles from "./rating.module.scss";
import globalStyles from "../../../styles/Home.module.css";
import MyAccountList from "../../../components/my_account_list/my_account_list";
import RatingCategory from "../../../components/my_account_components/rating_category/rating_category";
import cn from "classnames";

const Rating = () => {
  const namePage = "Полученные оценки";
  return (
    <main className={cn(styles.myaccount_main)}>
      <div className={cn(styles.myaccount__container, globalStyles.container)}>
        <h1 className={cn(styles.message__title)}>{namePage}</h1>
        <MyAccountList name={namePage} />
        <RatingCategory />
      </div>
    </main>
  );
};
export default Rating;
