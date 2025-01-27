import { NextPage } from "next";
import styles from './page.module.scss';
import Page from "../../components/Page";

const Home: NextPage = () => {

  return (
    <div className={styles.topPage}>
      <Page />
    </div>
  );
};

export default Home;
