import styles from './categoryLists.module.css';
import cn from 'classnames';
import Link from 'next/link';
import CategoryCounts from "../categoryCounts/categoryCounts";

const CategoryLists = ({categoryCount}) => {
  const elements1 = categoryCount.map((item,i) => {
    return <CategoryCounts key={i} name={item.nameCategory} count={100000}/>;
  });
  
  return (
    <div className={cn(styles.content__lists)}>
      <div>
        <span className={cn(styles.line)}></span>
        <span className={cn(styles.text)}>
          OLX.kz сервис объявлений Казахстана: купля/продажа товаров и
          недвижимости, оказание услуг, трудоустройство на OLX.kz
        </span>
      </div>
      <div className={cn(styles.sort)}>
        <Link href="/">
          <a className={cn(styles.home_link)}>Главная</a>
        </Link>
        <div className={cn(styles.price__select_block)}>
          <p className={cn(styles.text__sort)}>Сортировать по:</p>
          <select
            name="price"
            defaultValue={"default"}
            className={cn(styles.select)}
          >
            <option value="Самые дешевые">Самые дешевые</option>
            <option value="Самые дорогие">Самые дорогие</option>
            <option value="default">Самые новые</option>
            <option value="Рекомендованное вам">Рекомендованное вам</option>
          </select>
          <img
            src="https://cdn-icons-png.flaticon.com/128/6474/6474035.png"
            alt="rows logo"
            className={cn(styles.rows__block)}
            width="30px"
            height="30px"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747327.png"
            alt="rows and columns logo"
            className={cn(styles.row_col__block)}
            width="30px"
            height="30px"
          />
        </div>
      </div>
      <ul className={cn(styles.categoryCount__list, styles.list__reset)}>{elements1}</ul>
    </div>
  );
}
export default CategoryLists;

