import styles from './vip_content';
import className from 'classname/bind';
import VipContentCards from './vip_content__cards/vip_content__cards';


let cn = className.bind(styles);

const VipContent = () => {
	let listVipCards = 
	[
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
		{title:'',address:'',price:''},
	];

	return (
		<>
			<div className={cn('vip_content__container','container')}>
				
				<VipContent/>
			</div>
		</>
	)
}
export default VipContent;