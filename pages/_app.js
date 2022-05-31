import "bootstrap/dist/css/bootstrap.css";
import Header from './components/header/header';
import { useEffect } from "react";


const MyApp = ({Component,pageProps}) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps}/>
    </>
  );
};
export default MyApp;

