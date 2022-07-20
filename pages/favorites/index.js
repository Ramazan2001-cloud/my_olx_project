import styles from "./favorites.module.scss";
import Container from "../container";
import homestyles from "../../styles/Home.module.css";
import Link from "next/link";
import cn from "classnames";
import FavoritesPage from "../../components/favoritescomponents/favoritespage/favoritespage";

const Favorites = () => {
  const image =
    "https://static.olx.kz/static/olxkz/packed/font/2fca9562851a1aa214ccd012f6f619d249.svg";
  const title = "Нет избранных объявлений";
  const description1 =
    "Добавить в избранное можно со страницы объявления либо со страницы списка объявлений";
  const description2 =
    "Теперь избранные объявления всегда доступны на любом компьютере, а также на мобильной версии сайта, после входа в Мои объявления";

  return (
    <main>
      <Container>
        <h2 className={styles.favorites__title}>Избранные объявления</h2>
        <ul className={cn(styles.favorites__list, homestyles.list__reset)}>
          <li
            className={cn(styles.favorites__item, styles.favorites__item__here)}
          >
            <Link href="/favorites">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__here
                )}
              >
                Избранные объявления
              </a>
            </Link>
          </li>
          <li className={styles.favorites__item}>
            <Link href="/favorites/search">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__other
                )}
              >
                Избранные результаты поиска
              </a>
            </Link>
          </li>
          <li className={styles.favorites__item}>
            <Link href="/favorites/lastseen">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__other
                )}
              >
                Недавно просмотренные
              </a>
            </Link>
          </li>
        </ul>
      </Container>
      <FavoritesPage
        image={image}
        title={title}
        description1={description1}
        description2={description2}
      />
    </main>
  );
};
export default Favorites;
