import styles from "../favorites.module.scss";
import Container from "../../container";
import homestyles from "../../../styles/Home.module.css";
import Link from "next/link";
import cn from "classnames";
import FavoritesPage from "../../../components/favoritescomponents/favoritespage/favoritespage";

const Search = () => {
  const image =
    "https://static.olx.kz/static/olxkz/packed/font/2ffba693dfa8accb512ba48fe4cc53a230.svg";
  const title = "Нет избранных результатов поиска";
  const description1 =
    "Вы можете сохранить результаты поиска снизу на странице списка объявлений, а также сверху в блоке поиска";
  const description2 =
    "Избранные результаты поиска сохраняются в вашем профиле, после того, как вы вошли в Мои объявления";
  return (
    <main>
      <Container>
        <h2 className={styles.favorites__title}>Избранные результаты поиска</h2>
        <ul className={cn(styles.favorites__list, homestyles.list__reset)}>
          <li className={styles.favorites__item}>
            <Link href="/favorites">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__other
                )}
              >
                Избранные объявления
              </a>
            </Link>
          </li>

          <li
            className={cn(styles.favorites__item, styles.favorites__item__here)}
          >
            <Link href="/search">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__here
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
export default Search;
