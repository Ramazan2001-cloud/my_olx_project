import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react';
import Header from './components/header/header';
import TopBarBaner from './components/topbarbanner/topbarbaner';
import {NextIntlProvider} from 'next-intl';

const MyApp = () => {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[]);
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>

      </NextIntlProvider>
      <Header/>
      <section>
        <TopBarBaner/>
      </section>
    </>
  );
  
}

export default MyApp;
