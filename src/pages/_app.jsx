import Head from "next/head";
import styles from "../styles/Home.module.css";
import DonutChart from "../components/DonutChart";
import "../styles/DonutChart.css";

export default function App() {
  const data = [
    {
      period: "1M",
      personal: 150,
      shopping: 90,
      phone: 60,
      other: 80,
    },
    {
      period: "6M",
      personal: 320,
      shopping: 240,
      phone: 255,
      other: 298,
    },
    {
      period: "1Y",
      personal: 950,
      shopping: 930,
      phone: 738,
      other: 490,
    },
    {
      period: "ALL TIME",
      personal: 1800,
      shopping: 1420,
      phone: 1265,
      other: 1000,
    },
  ];
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
