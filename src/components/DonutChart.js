import React, { useEffect, useState } from "react";

const DonutChart = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data[0]);
  const [totalValue, setTotalValue] = useState(0);
  const [cssString, setCssString] = useState("");
  const [chartArr, setChartArr] = useState([]);

  return <div className="donut-chart-container"></div>;
};

export default DonutChart;
