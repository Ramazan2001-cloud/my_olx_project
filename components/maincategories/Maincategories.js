import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
let cn = classNames.bind(styles);

const Maincategories = () => {
  // Здесь массив я брал для примера потом сделаю с помощью json и api
  const ListCategories = [
    "Услуги",
    "Недвижимость",
    "Электроника",
    "Дом и сад",
    "Работа",
    "Мода и стиль",
    "Детский мир",
    "Хобби, отдых и спорт",
    "Транспорт",
    "Животные",
    "Отдам даром",
    "Товаров и авто",
    "Строительство и ремонт",
  ];

  // let a = 5;
  // let b = 4;
  // [a, b] = [b, a];
  // console.log(a, b);

  const elements = ListCategories.map((item, i) => {
    return <Categories key={i} name={item} />;
  });
  return (
    <div className={cn("maincategories__container", "container")}>
      <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
      <ul className={cn("maincategories__list", "list__reset")}>
				{elements}
			</ul>
    </div>
  );
};
export default Maincategories;


