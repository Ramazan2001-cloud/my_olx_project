import MyApp from './_app';

const Home = () => {
  const t = useTranslations('home')
  return (
    <>
      <MyApp/>
      <h1> {t('welcome')} </h1>
    </>
  )
}
export default Home;

export function GetStaticProps({lacale}){
  return {
    props : {
      message: require(`../lang/${locale}.json`),
    }
  }
}
