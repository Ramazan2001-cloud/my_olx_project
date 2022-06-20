import styles from "./settings.module.scss";
import globalStyles from "../../../styles/Home.module.css";
import MyAccountList from "../../../components/my_account_list/my_account_list";
import SettingsCategory from "../../../components/my_account_components/settings_category/setting_category";
import cn from "classnames";

const Settings = () => {
  const namePage = "Настройки";
  return (
    <main className={cn(styles.myaccount_main)}>
      <div className={cn(styles.myaccount__container, globalStyles.container)}>
        <h1 className={cn(styles.message__title)}>{namePage}</h1>
        <MyAccountList name={namePage}/>
        <SettingsCategory/>
      </div>
    </main>
  );
};
export default Settings;