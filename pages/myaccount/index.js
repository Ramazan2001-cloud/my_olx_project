import styles from "./myaccount.module.css";
import cn from "classnames";
import MyAccountPage from "../../components/my_account_components/my_account_page";


export const getStaticProps = async () => {
  const response1 = await fetch("http://localhost:3000/api/get-content-myaccount");
  const data1 = await response1.json();
  return {
    props: {
      data1
    },
  };
};

const MyAccount = ({data1}) => {
  // console.log(data1);
  return (
    <main className={cn(styles.myaccount_main)}>
      <MyAccountPage myAccountInfo={data1} />
    </main>
  );
};
export default MyAccount;
