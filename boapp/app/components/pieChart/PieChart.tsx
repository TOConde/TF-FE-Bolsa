import Chart from 'react-google-charts';
import './PieChart.css'
import { useEffect, useState } from 'react';
import { getAllEmpresas, getUltimaCotizacion } from '@/app/services/Empresa';
import { useTranslation } from 'next-i18next';
import SideLegend from './sideLegend/SideLegend';

export const PieChart = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<(string | number)[][]>([]);

  const fetchEmpresasData = async () => {
    try {
      const empresas = await getAllEmpresas();

      const valoresTotales = await Promise.all(
        empresas.map(async (empresa) => {
          const ultimaCotizacion = await getUltimaCotizacion(empresa.codEmpresa);
          const valorTotal = ultimaCotizacion * empresa.cantidadAcciones;
          return { nombre: empresa.codEmpresa, valorTotal };
        })
      );

      const datosParaGraficoTorta = [
        ["Empresa", "Valor Total"],
        ...valoresTotales
          .sort((a, b) => b.valorTotal - a.valorTotal)
          .map((empresa) => [empresa.nombre, empresa.valorTotal]),
      ];

      setData(datosParaGraficoTorta);
    } catch (error) {
      console.error("Error al obtener datos para el gráfico torta:", error);
    }
  }

  useEffect(() => {
    fetchEmpresasData();
  }, []);

  const options = {
    title: t('piechart.titulo'),
    is3D: false,
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0, // Hides slices
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A", "#FFB6C1", "#FFD700"],
    backgroundColor: "transparent",
  };

  return (
    <div className='mainContainerPieChart'>
      <div className='containerGraficoPieChart'>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <SideLegend data={data} />
    </div>
  );
}