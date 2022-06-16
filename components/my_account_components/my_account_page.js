import styles from "./my_account_page.module.css";
import styles2 from "../../styles/Home.module.css";
import MyAccountCategory from "../my_account_components/my_account_category/my_account_category";
import AdCategory from "./ad_category/ad_category";
import MessageCategory from "./message_category/message_category";
import RatingCategory from "./rating_category/rating_category";
import SettingsCategory from "./settings_category/setting_category";

import {useState} from "react";
import cn from "classnames";

const MyAccountPage = ({ myAccountInfo }) => {
	const[state,setState] = useState("");
	const elements = myAccountInfo.map(item => {
		const VisiBleState = () => {
      setState((prev) => {
        prev = "";
        return prev + item.id;
      });
    };
		return <MyAccountCategory key={item.id} name={item.name} VisiBleState={VisiBleState} />;
	});
  
	return (
    <div className={cn(styles.myaccount_container, styles2.container)}>
      <div className={cn(styles.myaccount_titleBlock)}>
        <h1 className={cn(styles.myaccount_title)}>
          {myAccountInfo[0].name == "Обьявление"
            ? "Ваши " + myAccountInfo[0].name
            : null}
        </h1>
      </div>
      <ul className={cn(styles.myaccount__list, styles2.list__reset)}>
        {elements}
      </ul>
			<span className={cn(styles.line)}></span>
      {state === "1" && <AdCategory adCatName={myAccountInfo}/>}
      {state === "2" && <MessageCategory/>}
      {state === "3" && <RatingCategory/>}
      {state === "4" && <SettingsCategory/>}
    </div>
  );
};
export default MyAccountPage;