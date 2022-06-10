import styles from "./maincategories.module.css";
import classNames from "classnames/bind";
import Categories from "./categories/categories";
import ServicesCategory from "./servicesCategory/servicesCategory";
import RealEstateCategory from "./realEstateCategory/realEstateCategory";
import ElectronicsCategory from "./electronicsCategory/electronicsCategory";
import HomeGardenCategory from "./home_gardenCategory/home_gardenCategory";
import JobCategory from "./jobCategory/jobCategory";
import FashionStylesCategory from "./fashion_stylesCategory/fashion_stylesCategory";
import ChildrenWorldCategory from "./children-worldCategory/children-worldCategory";
import HobbyRelaxSportCategory from "./hobby-relax-sportCategory/hobby-relax-sportCategory";
import TransportCategory from "./transportCategory/transportCategory";
// import Link from "next/link";
import { useState } from "react";
let cn = classNames.bind(styles);

const Maincategories = ({ categories, subcategories }) => {

  const [subCategory, setSubCategory] = useState(0);
  const visibleSubCategory = () => {
    setSubCategory(subCategory);
  };
  
  const elements = categories.map((item, i) => {
    return (
      <Categories
        key={i}
        name={item.nameCategory}
        image={item.img}
        visibleSubCategoryActive={visibleSubCategory}
      />
    );
  });
  
  return (
    <div className={cn("maincategories", "container")}>
      <div className={cn("maincategories__container", "container")}>
        <h1 className={cn("maincategories__title")}>Главные рубрики</h1>
        <ul className={cn("maincategories__list", "list__reset")}>
          {elements}
        </ul>
      </div>
      {subCategory && <ServicesCategory subCat={subcategories} />}
      {subCategory && <RealEstateCategory subCat={subcategories} />}
      {subCategory && <ElectronicsCategory subCat={subcategories} />}
      {subCategory && <HomeGardenCategory subCat={subcategories} />}
      {subCategory && <JobCategory subCat={subcategories} />}
      {subCategory && <FashionStylesCategory subCat={subcategories} />}
      {subCategory && <ChildrenWorldCategory subCat={subcategories} />}
      {subCategory && <HobbyRelaxSportCategory subCat={subcategories} />}
      {subCategory && <TransportCategory subCat={subcategories} />}
    </div>
  );
};
export default Maincategories;
