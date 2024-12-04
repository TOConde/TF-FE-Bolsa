import { useTranslation } from 'next-i18next';
import './Chart.css'
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";

export const CanddleChart = ({ chartData, chartType }: { chartData: Array<any>; chartType: GoogleChartWrapperChartType; }) => {
  const { t } = useTranslation();

  const options = {
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
      title: t('ejeGraf.fecha'),
      textPosition: 'out',
      slantedText: false,
      maxTextLines: 2,
    },
    vAxis: {
      title: t('ejeGraf.valor'),
      textPosition: 'out',
      viewWindow: {
        min: 0, // Ajusta el rango del eje vertical si es necesario
      },
    },
    chartArea: {
      left: 130,
      top: 160,
      right: 200,
      bottom: 100,
    },
  };
  
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