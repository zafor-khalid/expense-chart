import Head from "next/head";
import styles from "../styles/Home.module.css";
import DonutChart from "../components/DonutChart";
import "../styles/DonutChart.css";
import "../styles/global.css";
import expenseData from "../Json/expenseJson.json";

export default function App() {
  const data = [...expenseData];
  return (
    <div className={styles.container}>
      <Head>
        <title>expense-chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Expense Chart</h1>
      <div className={styles.card}>
        <h2 className={styles["sub-title"]}>Expense Chart</h2>
        <DonutChart data={data} />;
      </div>
    </div>
  );
}
