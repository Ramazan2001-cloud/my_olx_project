import styles from "./more_info_characteristic.module.scss";
import cn from "classnames";

const MoreInfoChartacteristic = ({name}) => {
	return (
		<li className={cn(styles.more_info_chrsc__item)}>
			<span className={cn(styles.chrsc__span)}>
				{name}
			</span>
		</li>
	)
}
export default MoreInfoChartacteristic;