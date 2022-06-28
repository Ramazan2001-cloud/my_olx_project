import styles from "./more_info_author.module.scss";
import cn from "classnames";

const MoreInfoAuthor = (props) => {
  // console.log(props.infoAuthor);
  return (
    <div className={cn(styles.author__container)}>
      <div className={cn(styles.author__header)}>
        <div className={cn(styles.author_logo__content)}>
          <div className={cn(styles.author__logo__info)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="author logo"
              width="47.18px"
              height="47.18px"
              className={cn(styles.author__logo__image)}
            />
            <div className={cn(styles.author__info__)}>
              <h4 className={cn(styles.info__name)}>
                {props.infoAuthor[0].author_name}
              </h4>
              <p className={cn(styles.info__date__teg)}>
                <span>
                  на OLX с{" "}
                  <strong>{props.infoAuthor[0].author_reg_date}</strong>{" "}
                </span>
              </p>
              <span className={cn(styles.info__online)}>
                <span>Онлайн в </span>{" "}
                {props.infoAuthor[0].author_status_online}
              </span>
            </div>
          </div>
          <div className={cn(styles.author__info__contact__)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="phone logo"
              className={cn(styles.contact__logo)}
              width="32px"
              height="32px"
            />
            <span className={cn(styles.contact__number)}>xxx xxx xxx</span>
            <button className={cn(styles.contact__show)}>показать</button>
          </div>
        </div>
        <form action="#">
          <textarea
            name="message"
            placeholder="Напишите сообщение..."
            className={cn(styles.contact__message)}
          ></textarea>
          <div className={cn(styles.author__footer__)}>
            <div className={cn(styles.footer__file)}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/45/45538.png"
                alt="file logo"
                width="24px"
                height="24px"
              />
              <div className={cn(styles.footer__text)}>
                <p className={cn(styles.footer__title)}>Прикрепить файл</p>
                <span className={cn(styles.footer__file_format)}>
                  Вы можете прикрепить файлы в формате: jpg, jpeg, png
                </span>
              </div>
            </div>
            <button className={cn(styles.footer__button)} disabled >Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MoreInfoAuthor;
