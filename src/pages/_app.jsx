import Head from "next/head";
import styles from "../styles/Home.module.css";
import DonutChart from "../components/DonutChart";
import "../styles/DonutChart.css";
import expenseData from "../Json/expenseJson.json";

export default function App() {
  const data = [...expenseData];
  return (
    <div className={styles.container}>
      <Head>
        <title>expense-chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DonutChart data={data} />;
    </div>
  );
}
