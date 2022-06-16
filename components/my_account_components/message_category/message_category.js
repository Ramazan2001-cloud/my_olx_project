import styles from "./message_category.module.css";
import styles2 from "../../../styles/Home.module.css";
import cn from "classnames";

const MessageCategory = () => {
  return (
    <div className={cn(styles.message_category, styles.container)}>
      <div className={cn(styles.message_content)}>
        <img
          src="https://www.olx.kz/app/static/media/conversation.42821e43c.svg"
          alt="message image"
					style={{marginBottom: "20px"}}
        />
        <h1 className={cn(styles.message_content_text)}>
          Добро пожаловать в чат OLX
        </h1>
        <p className={cn(styles.message_content_descr)}>
          Это самое безопасное место для общения с другими участниками OLX.
          Используйте его, чтобы делиться фото, местоположением, а также для
          заключения сделок.
        </p>
        <p className={cn(styles.message_content_descrLinks)}>
          Чтобы начать общаться с другими участниками,
          <a href="#" className={cn(styles.message_link)}>
            {" "}
            найдите что-нибудь{" "}
          </a>
          или{" "}
          <a href="#" className={cn(styles.message_link)}>
            опубликуйте объявление
          </a>{" "}
          на OLX.
        </p>
      </div>
    </div>
  );
};
export default MessageCategory;
