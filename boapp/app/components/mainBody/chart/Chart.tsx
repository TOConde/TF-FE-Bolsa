import './Chart.css'
import { Chart } from "react-google-charts";

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

export const CanddleChart = ({ chartData }: { chartData: Array<any> }) => {
  return (
    <div className='chartContainer'>      
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
      />
    </div>
  );
}