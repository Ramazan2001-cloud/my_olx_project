import styles from "./additional.module.scss";
import AdditionalServices from "./additional_services/additional_services";
import cn from "classnames";

// Услуги
const AdditionalInformation = ({ isBoolean }) => {
  return (
    <div className={cn(styles.additional__container)}>
      {isBoolean  ? <AdditionalServices /> : undefined}
      
    </div>
  );
};
export default AdditionalInformation;
