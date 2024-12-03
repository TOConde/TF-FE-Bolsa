import './Chart.css'
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
  line: {
    curveType: 'function',
    pointSize: 5,
  },
  hAxis: {
    title: 'Fecha',
  },
  vAxis: {
    title: 'Valor (1U$D 34.66₺)',
  }
};

export const CanddleChart = ({ chartData, chartType }: { chartData: Array<any>; chartType: GoogleChartWrapperChartType; }) => {
  return (
    <div className='chartContainer'>
      <Chart
        chartType={chartType}
        width="100%"
        height="100%"
        data={chartData}
        options={options}
      />
    </div>
  );
}