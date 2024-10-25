import './Chart.css'
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

export const LineChart = () => {

  return (
    <div>
      <Chart
        chartType="LineChart"
        data={[
          ["Age", "Weight"],
          [4, 16],
          [8, 25],
          [12, 40],
          [16, 55],
          [20, 70],
        ]}
        options={{
          title: "Average Weight by Age",
        }}
        legendToggle
      />
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}