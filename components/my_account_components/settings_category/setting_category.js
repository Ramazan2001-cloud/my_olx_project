import classNames from "classnames/bind";
import styles from "./settings_category.module.scss";
let cn = classNames.bind(styles);
const SettingsCategory = () => {
  return (
    <div>
      <div
        className={cn("accordion", "accordion_container")}
        id="accordionExample"
      >
        <div className={cn("accordion-item")}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={cn("accordion-button", "accordion-button_item")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Изменить контактные данные
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form action="#" method="post" id="form1">
                <fieldset>
                  <span className={cn("line")}></span>
                  <p>
                    <label className={cn("settings_label")}>
                      Выбрать город
                    </label>
                    <input type="text" className={cn("settings_input")} />
                  </p>
                  <span className={cn("line")}></span>
                  <p>
                    <label className={cn("settings_label")}>
                      Контактное лицо
                    </label>
                    <input
                      type="text"
                      className={cn("settings_input")}
                      defaultValue="Эдвард"
                    />
                  </p>
                  <p>
                    <label className={cn("settings_label")}>
                      Номер телефона
                    </label>
                    <input type="text" className={cn("settings_input")} />
                  </p>
                  <div className={cn("settings_checkbox-block")}>
                    <input
                      type="checkbox"
                      className={cn("settings_checkbox")}
                    />
                    <label className={cn("settings_label")}>
                      Не показывать все объявления на странице моего объявления
                    </label>
                  </div>
                </fieldset>
              </form>
              <div>
                <button
                  type="submit"
                  form="form1"
                  defaultValue="Сохранить"
                  className={cn("settings__button")}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("accordion-item")}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={cn(
                "accordion-button",
                "collapsed",
                "accordion-button_item"
              )}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Уведомления
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <form action="#" id="form2">
                <div className={cn("settings__email_block")}>
                  <span className={cn("settings__span")}> Email </span>
                  <span className={cn("settings__span")}> Телефон </span>
                </div>
                <ul className={cn("settings__list", "list__reset")}>
                  <span className={cn("line")}></span>
                  <li className={cn("settings__item")}>
                    <div className={cn("settings__item_block")}>
                      <div className={cn("settings__content")}>
                        <strong className="settings__text">
                          Советы от OLX.
                        </strong>
                        <p className={cn("settings__descr")}>
                          Полезные советы, интересные предложения, рекомендации
                          и новинки на OLX
                        </p>
                      </div>
                      <div className={cn("settings__input__blocks")}>
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                      </div>
                    </div>
                    <span className={cn("line")}></span>
                  </li>
                  <li className={cn("settings__item")}>
                    <div className={cn("settings__item_block")}>
                      <div>
                        <strong className="settings__text">Акции.</strong>
                        <p className={cn("settings__descr")}>
                          Персональные скидки и специальные предложения
                        </p>
                      </div>
                      <div className={cn("settings__input__blocks")}>
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                      </div>
                    </div>
                    <span className={cn("line")}></span>
                  </li>
                  <li className={cn("settings__item")}>
                    <div className={cn("settings__item_block")}>
                      <div>
                        <strong className="settings__text">Сообщения.</strong>
                        <p className={cn("settings__descr")}>
                          Новые ответы на объявления
                        </p>
                      </div>
                      <div className={cn("settings__input__blocks")}>
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                      </div>
                    </div>
                    <span className={cn("line")}></span>
                  </li>
                  <li className={cn("settings__item")}>
                    <div className={cn("settings__item_block")}>
                      <div>
                        <strong className="settings__text">
                          Новые объявления.
                        </strong>
                        <p className={cn("settings__descr")}>
                          Новые предложения в Избранных поисках
                        </p>
                      </div>
                      <div className={cn("settings__input__blocks")}>
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                      </div>
                    </div>
                    <span className={cn("line")}></span>
                  </li>
                  <li className={cn("settings__item")}>
                    <div className={cn("settings__item_block")}>
                      <div>
                        <strong className="settings__text">
                          Скидка на товар.
                        </strong>
                        <p className={cn("settings__descr")}>
                          Снижение цены на объявление, добавленное в Избранные
                        </p>
                      </div>
                      <div className={cn("settings__input__blocks")}>
                        <input
                          type="checkbox"
                          className={cn("settings_checkbox")}
                        />
                      </div>
                    </div>
                    <span className={cn("line")}></span>
                  </li>
                </ul>
              </form>
              <div>
                <button
                  type="submit"
                  form="form2"
                  defaultValue="Сохранить"
                  className={cn("settings__button")}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("accordion-item")}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className={cn(
                "accordion-button",
                "collapsed",
                "accordion-button_item"
              )}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Логотип и баннер
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <form action="#" id="form3">
                  <p>
                    <label>Логотип</label>
                    <input type="file" className={cn("form3__input")} />
                  </p>
                  <p>
                    <label>Баннер</label>
                    <input type="file" className={cn("form3__input")} />
                  </p>
                </form>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsCategory;
