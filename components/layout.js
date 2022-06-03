import Header from "./header/header";
import LastContent from "./lastContent/lastContent";
import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
// let cn = classNames.bind(styles);

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <LastContent/>
    </>
  );
}

