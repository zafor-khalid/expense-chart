import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>expense-chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
