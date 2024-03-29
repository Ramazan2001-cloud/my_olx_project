import styles from "../favorites.module.scss";
import Container from "../../container";
import homestyles from "../../../styles/Home.module.css";
import Link from "next/link";
import cn from "classnames";

const Search = () => {
  return (
    <main>
      <Container>
        <h2 className={styles.favorites__title}>Недавно просмотренные</h2>
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
          <li className={cn(styles.favorites__item)}>
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
          <li
            className={cn(styles.favorites__item, styles.favorites__item__here)}
          >
            <Link href="/lastseen">
              <a
                className={cn(
                  styles.favorites__link,
                  styles.favorites__link__here
                )}
              >
                Недавно просмотренные
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </main>
  );
};
export default Search;
