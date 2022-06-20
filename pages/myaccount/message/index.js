import styles from "./message.module.scss";
import globalStyles from "../../../styles/Home.module.css";
import MyAccountList from "../../../components/my_account_list/my_account_list";
import MessageCategory from "../../../components/my_account_components/message_category/message_category";
import cn from "classnames";

const MyAccountMessage = () => {
  const namePage = "Сообщения";
  return (
    <main className={cn(styles.myaccount_main)}>
      <div className={cn(styles.myaccount__container, globalStyles.container)}>
        <h1 className={cn(styles.message__title)}>{namePage}</h1>
        <MyAccountList name={namePage} />
        <MessageCategory />
      </div>
    </main>
  );
};
export default MyAccountMessage;