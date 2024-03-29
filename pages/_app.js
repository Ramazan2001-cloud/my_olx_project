import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Layout from "../components/layout";

const MyApp = ({Component,pageProps}) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
