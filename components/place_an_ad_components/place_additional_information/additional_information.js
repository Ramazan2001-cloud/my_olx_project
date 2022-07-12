import styles from "./additional.module.scss";
import AdditionalServices from "./additional_services/additional_services";
import { nameCat } from "../place_ad_modal/modal_categories/modal_categories";
import {nName} from "../test/test";
import cn from "classnames";

// Услуги
const AdditionalInformation = () => {

  
  console.log(nName.name);

  return (
    <div className={cn(styles.additional__container)}>
      {nName.name ? <AdditionalServices /> : null}
    </div>
  );
};
export default AdditionalInformation;
