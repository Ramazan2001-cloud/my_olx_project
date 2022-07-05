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
import AnimalsCategory from "./animalsCategory/animalsCategory";
// import Link from "next/link";
import { useState } from "react";
let cn = classNames.bind(styles);

const Maincategories = ({ categories, lastcategories, subcategories }) => {
  const [subCategory, setSubCategory] = useState(false);
  delete categories[9];
  const categoryImageLogo = [
    "https://categories.olxcdn.com/assets/categories/olxkz/uslugi-7-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/nedvizhimost-1-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/dom-i-sad-899-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/rabota-6-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/moda-i-stil-891-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/detskiy-mir-36-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/hobbi-otdyh-i-sport-903-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxkz/transport-3-2x.png",
  ];
  
  const elements = categories.map((item,i) => {
    const visibleSubCategory = () => {
      setSubCategory((prev) => {
        if (prev == item.id) {
          return !prev;
        }
        prev = "";
        return prev + item.id;
      });
    };
    return (
      <Categories
        key={item.id}
        name={item.name}
        image={categoryImageLogo[i]}
        visibleSubCategoryActive={visibleSubCategory}
        idCategory={item.id}
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
      {subCategory === "1" && <ServicesCategory subCat={subcategories} />}
      {subCategory === "2" && <RealEstateCategory subCat={subcategories} />}
      {subCategory === "3" && <ElectronicsCategory subCat={subcategories} />}
      {subCategory === "4" && <HomeGardenCategory subCat={subcategories} />}
      {subCategory === "5" && <JobCategory subCat={subcategories} />}
      {subCategory === "6" && <FashionStylesCategory subCat={subcategories} />}
      {subCategory === "7" && <ChildrenWorldCategory subCat={subcategories} />}
      {subCategory === "8" && (
        <HobbyRelaxSportCategory subCat={subcategories} />
      )}
      {subCategory === "9" && <TransportCategory subCat={subcategories} />}
      <ul className={cn("maincategories__last-list", "list__reset")}>
        {lastcategories.map((item) => {
          const visibleSubCategory = () => {
            setSubCategory((prev) => {
              if (prev == item.id) {
                return !prev;
              }
              prev = "";
              return prev + item.id;
            });
          };
          return (
            <Categories
              key={item.id}
              name={item.nameCategory}
              image={item.img}
              visibleSubCategoryActive={visibleSubCategory}
              idCategory={item.id}
            />
          );
        })}
      </ul>
      {subCategory === "10" && <AnimalsCategory subCat={subcategories} />}
    </div>
  );
};
export default Maincategories;
