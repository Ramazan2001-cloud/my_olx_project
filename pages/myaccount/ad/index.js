import styles from "./ad.module.scss";
import globalStyles from "../../../styles/Home.module.css";
import MyAccountList from "../../../components/my_account_list/my_account_list";
import AdCategoryItem from "../../../components/my_account_components/ad_category/ad_category";
import cn from "classnames";

const MyAccountMessage = () => {
  const namePage = "Объявления";
  return (
    <main className={cn(styles.myaccount_main)}>
      <div className={cn(styles.myaccount__container, globalStyles.container)}>
        <h1 className={cn(styles.message__title)}>Ваши {namePage}</h1>
        <MyAccountList name={namePage} />
        <AdCategoryItem />
      </div>
    </main>
  );
};
export default MyAccountMessage;
