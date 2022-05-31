import Maincategories from './components/maincategories/Maincategories';
import TopBarBaner from "./components/topbarbanner/topbarbaner";
import SearchMain from "./components/searchmain/searchmain";

const Home = () => {
  return (
    <>
      <section>
        <TopBarBaner />
      </section>
      <section>
        <SearchMain />
      </section>
      <section>
        <Maincategories />
      </section>
    </>
  )
}
export default Home;

