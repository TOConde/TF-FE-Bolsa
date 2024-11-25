import { useEffect, useState } from 'react';
import { CanddleChart } from './chart/Chart';
import './MainBody.css'
import SideBar from './sideBar/SideBar';
import { getAllEmpresas, getCotizacionesEmpresa } from '@/app/services/Empresa';
import { Empresa } from '@/app/types/empresa';
import { Cotizacion } from '@/app/types/cotizaciones';

export const MainBody = () => {
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [chartData, setChartData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const data = await getAllEmpresas();
        setEmpresas(data);
        if (data.length > 0) {
          setSelectedEmpresa(data[0])
        }
      } catch (error) {
        console.error('Error fetching empresas:', error);
      }
    }

    fetchEmpresas();
  }, []);

  useEffect(() => {
    const fetchCotizaciones = async () =>{
      if (selectedEmpresa) {
        try {
          const fechaDesde = '2024-10-01';
          const fechaHasta = '2024-10-07';
          const escala = 'mes';
          const cotizaciones = await getCotizacionesEmpresa(selectedEmpresa.codEmpresa, fechaDesde, fechaHasta, escala);

          const formattedData = [
            ["Label", "Min-Max, Open-Close", "", "", ""],
            ...cotizaciones.map((c: Cotizacion) => [
              c.fecha,
              parseFloat(c.minimo.toString()), 
              parseFloat(c.apertura.toString()), 
              parseFloat(c.cierre.toString()), 
              parseFloat(c.maximo.toString()),
            ])
          ]
          setChartData(formattedData);
        } catch (error) {
          console.error('Error fetching cotizaciones:', error);
        }
      }
    }

    fetchCotizaciones();
  }, [selectedEmpresa])

  const handleSelectEmpresa = (id: string) => {
    const empresa = empresas.find((e) => e.id === id);
    setSelectedEmpresa(empresa || null);
  };
  
  return (
    <div id='home' className='mainContainer'>
      <div className='containerGrafico'>
        <CanddleChart chartData={chartData} />
      </div>
      <SideBar empresas={empresas} onSelectEmpresa={handleSelectEmpresa} selectedEmpresa={selectedEmpresa} />
    </div>
  );
}