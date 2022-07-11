import styles from "./additional.module.scss";
import AdditionalServices from "./additional_services/additional_services";
import cn from "classnames";
// Услуги 
const AdditionalInformation = () => {
  return (
		<div className={cn(styles.additional__container)}>
			<AdditionalServices/>
		</div>
	);
};
export default AdditionalInformation;
