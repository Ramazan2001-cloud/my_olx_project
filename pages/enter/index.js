import styles from "./enter.module.css";
import classNames from "classnames/bind";
let cn = classNames.bind(styles);

const Enter = () => {
  return (
    <section className={cn("enter")}>
      <div className={cn("enter__container", "container")}>
        <div className={cn("enter-block__container")}>
          <div className={cn("enter__and__reg")}>
            <a className={cn("enter__and__reg__text")}>Войти</a>
            <a className={cn("enter__and__reg__text")}>Регистрация</a>
          </div>
          <span className={cn("line")}></span>
          <a href="#" className={cn("enter-with__facebook")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="facebook_logo"
              width="30px"
              height="30px"
              className={cn("facebook__logo")}
            />
            <span className={cn("facebook__text")}> Вход с Facebook</span>
          </a>
          <div className={cn("or__block")}>
            <span className={cn("or__span")}></span>
            <p className={cn("or__text")}>или</p>
            <span className={cn("or__span")}></span>
          </div>
          <form className={cn("enter__form", "container")}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email или номер телефона
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Ваш текущий пароль от OLX
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className={cn("form__button")}>
              Войти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Enter;
