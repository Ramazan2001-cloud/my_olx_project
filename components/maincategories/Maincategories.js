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
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryBoolean1, setSubCategoryBoolen1] = useState(false);
  // const [subCategoryBoolean2, setSubCategoryBoolen2] = useState(false);
  // const [subCategoryBoolean3, setSubCategoryBoolen3] = useState(false);
  // const [subCategoryBoolean4, setSubCategoryBoolen4] = useState(false);
  // const [subCategoryBoolean5, setSubCategoryBoolen5] = useState(false);
  // const [subCategoryBoolean6, setSubCategoryBoolen6] = useState(false);
  // const [subCategoryBoolean7, setSubCategoryBoolen7] = useState(false);
  // const [subCategoryBoolean8, setSubCategoryBoolen8] = useState(false);
  // const [subCategoryBoolean9, setSubCategoryBoolen9] = useState(false);

  // const VisibleSubCategoryBoolen1 = () => {
  //   setSubCategoryBoolen1((prev) => !prev);
  // }
  // const VisibleSubCategoryBoolen2 = () => {
  //   setSubCategoryBoolen2((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen3 = () => {
  //   setSubCategoryBoolen3((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen4 = () => {
  //   setSubCategoryBoolen4((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen5 = () => {
  //   setSubCategoryBoolen5((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen6 = () => {
  //   setSubCategoryBoolen6((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen7 = () => {
  //   setSubCategoryBoolen7((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen8 = () => {
  //   setSubCategoryBoolen8((prev) => !prev);
  // };
  // const VisibleSubCategoryBoolen9 = () => {
  //   setSubCategoryBoolen9((prev) => !prev);
  // };
  // const arrSubCategory = [
  //   VisibleSubCategoryBoolen1,
  //   VisibleSubCategoryBoolen2,
  //   VisibleSubCategoryBoolen3,
  //   VisibleSubCategoryBoolen4,
  //   VisibleSubCategoryBoolen5,
  //   VisibleSubCategoryBoolen6,
  //   VisibleSubCategoryBoolen7,
  //   VisibleSubCategoryBoolen8,
  //   VisibleSubCategoryBoolen9,
  // ];
  
  const elements = categories.map((item, i) => {
     const visibleSubCategory = () => {
       setSubCategory((prev) => {
         prev = "";
         return prev + item.id;
       });
       setSubCategoryBoolen1((prev) => {
         prev = false;
         return !!!prev;
       });
     };
    return (
      <Categories
        key={i}
        name={item.nameCategory}
        image={item.img}
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
      {subCategory === "1" && subCategoryBoolean1 && (
        <ServicesCategory subCat={subcategories} />
      )}
      {subCategory === "2" && subCategoryBoolean1 && (
        <RealEstateCategory subCat={subcategories} />
      )}
      {subCategory === "3" && subCategoryBoolean1 && (
        <ElectronicsCategory subCat={subcategories} />
      )}
      {subCategory === "4" && subCategoryBoolean1 && (
        <HomeGardenCategory subCat={subcategories} />
      )}
      {subCategory === "5" && subCategoryBoolean1 && (
        <JobCategory subCat={subcategories} />
      )}
      {subCategory === "6" && subCategoryBoolean1 && (
        <FashionStylesCategory subCat={subcategories} />
      )}
      {subCategory === "7" && subCategoryBoolean1 && (
        <ChildrenWorldCategory subCat={subcategories} />
      )}
      {subCategory === "8" && subCategoryBoolean1 && (
        <HobbyRelaxSportCategory subCat={subcategories} />
      )}
      {subCategory === "9" && subCategoryBoolean1 && (
        <TransportCategory subCat={subcategories} />
      )}
    </div>
  );
};
export default Maincategories;
