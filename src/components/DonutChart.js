import React, { useEffect, useState } from "react";
import { generateRandomDeepColor } from "../utils/generateRandomDeepColor";
import { convertToDegrees } from "../utils/convertToDegrees";
import { convertToPercent } from "../utils/convertToPercent";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { formatNumberWithCommas } from "../utils/formatNumberWithCommas";
import { removeLeadingZero } from "./../utils/removeLeadingZero";

const DonutChart = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data[0]);
  const [totalValue, setTotalValue] = useState(0);
  const [cssString, setCssString] = useState("");
  const [chartArr, setChartArr] = useState([]);

  useEffect(() => {
    const arrForChart = convertObjectToArray(currentTab);
    let total =
      arrForChart.length > 0
        ? arrForChart.reduce((a, b) => a + b.value, 0).toFixed(2)
        : 0;
    setTotalValue(total);
    let cssStr = generateCssString(arrForChart, total);
    setCssString(cssStr);
    setChartArr(arrForChart);
  }, [currentTab]);

  const generateCssString = (arr, total) => {
    let generatedStr = arr
      .reduce((items, item, index, array) => {
        items.push(item);
        item.count = item.count || 0;
        item.count += array[index - 1]?.count || item.count;
        item.startValue = array[index - 1]?.count ? array[index - 1].count : 0;
        item.endValue = item.count += item.value;
        item.startPercent = convertToPercent(item.startValue, total);
        item.endPercent = convertToPercent(item.endValue, total);
        item.startDegrees = convertToDegrees(item.startPercent);
        item.endDegrees = convertToDegrees(item.endPercent);
        item.backgroundColor = generateRandomDeepColor();

        return items;
      }, [])
      .map((chart, index) => {
        const { startDegrees, endDegrees, backgroundColor } = chart;
        return ` ${backgroundColor} ${startDegrees}deg ${endDegrees}deg`;
      })
      .join();
    return generatedStr;
  };

  const convertObjectToArray = (obj) => {
    const arr = [];
    for (const key in obj) {
      if (key !== "period") {
        arr.push({ name: key, value: obj[key] });
      }
    }
    return arr;
  };

  console.log(chartArr);
  return (
    <div className="donut-chart-container">
      <div className="tab">
        {data.map((el, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentTab(el)}
            className={currentTab.period === el.period ? "btn-active" : ""}
          >
            {el.period}
          </button>
        ))}
      </div>
      <div className="chart-wrapper">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="chart-svg"
        >
          <clipPath id="hole">
            <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64" />
          </clipPath>

          <foreignObject
            x="0"
            y="0"
            width="100"
            height="100"
            clipPath="url(#hole)"
          >
            <div
              className="chart-inner"
              style={{
                background: `conic-gradient(${cssString})`,
              }}
            ></div>
          </foreignObject>
          <text
            text-anchor="middle"
            alignment-baseline="middle"
            x="50"
            y="50"
            stroke-width="1px"
            font-variant="all-small-caps"
            font-size="12"
            font-weight="bold"
            fill="#111"
          >
            ${formatNumberWithCommas(Math.floor(totalValue))}
            <tspan alignment-baseline="middle" fill="#AFADFE" font-size="8">
              {removeLeadingZero((totalValue % 1).toFixed(2))}
            </tspan>
          </text>
        </svg>
      </div>

      <div className="details">
        {chartArr.length > 0 &&
          chartArr.map((el, idx) => (
            <div key={el?.period || idx}>
              <span
                className="pill"
                style={{ backgroundColor: el?.backgroundColor }}
              ></span>
              <span className="description">
                {capitalizeFirstLetter(el.name)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DonutChart;
