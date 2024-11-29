import { useEffect, useState } from 'react';
import { CanddleChart } from './chart/Chart';
import './MainBody.css'
import SideBar from './sideBar/SideBar';
import { getAllEmpresas, getCotizacionesEmpresa } from '@/app/services/Empresa';
import { Empresa } from '@/app/types/empresa';
import { Cotizacion } from '@/app/types/cotizaciones';
import { Bolsa } from '@/app/types/bolsa';
import { getAllBolsas, getCotizacionesBolsa } from '@/app/services/Bolsa';

export const MainBody = () => {
  const [isBolsaActive, setIsBolsaActive] = useState(false);
  const [selectedBolsas, setSelectedBolsas] = useState<Bolsa[]>([]);
  const [bolsas, setBolsa] = useState<Bolsa[]>([]);
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [chartData, setChartData] = useState<Array<any>>([]);

  const handleToggleView = (view: "empresa" | "bolsa") => {
    setIsBolsaActive(view === "bolsa");
  };

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
    const fetchBolsas = async () => {
      try {
        const data = await getAllBolsas();
        setBolsa(data);
        if (data.length > 0) {
          setSelectedBolsas(data)
        }
      } catch (error) {
        console.error('Error fetching bolsas:', error);
      }
    }

    fetchBolsas();
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      if (isBolsaActive) {
        if (selectedBolsas.length === 0) {
          setChartData([]);
          return;
        }
        try {
          const fechaDesde = '2024-06-01';
          const fechaHasta = '2024-10-07';
          const escala = 'mes';

          const allCotizaciones = await Promise.all(
            selectedBolsas.map((bolsa) =>
              getCotizacionesBolsa(bolsa.code, fechaDesde, fechaHasta, escala)
            )
          );

          const formattedData = [
            ["Label", "Min-Max, Open-Close", "", "", ""],
            ...allCotizaciones.flatMap((cotizaciones, index) =>
              cotizaciones.map((c) => [
                `${c.fecha} (${selectedBolsas[index].code})`,
                parseFloat(c.minimo.toString()),
                parseFloat(c.apertura.toString()),
                parseFloat(c.cierre.toString()),
                parseFloat(c.maximo.toString()),
              ])
            )
          ];
          setChartData(formattedData);
        } catch (error) {
          console.error('Error fetching bolsas data:', error);
        }
      } else if (selectedEmpresa) {
        try {
          const fechaDesde = '2024-10-01';
          const fechaHasta = '2024-10-07';
          const escala = 'mes';

          const cotizaciones = await getCotizacionesEmpresa(
            selectedEmpresa.codEmpresa,
            fechaDesde,
            fechaHasta,
            escala
          );

          const formattedData = [
            ["Label", "Min-Max, Open-Close", "", "", ""],
            ...cotizaciones.map((c: Cotizacion) => [
              c.fecha,
              parseFloat(c.minimo.toString()),
              parseFloat(c.apertura.toString()),
              parseFloat(c.cierre.toString()),
              parseFloat(c.maximo.toString()),
            ])
          ];
          setChartData(formattedData);
        } catch (error) {
          console.error('Error fetching empresa data:', error);
        }
      }
    };

    fetchChartData();
  }, [isBolsaActive, selectedEmpresa, selectedBolsas]);

  const handleSelectEmpresa = (id: string) => {
    const empresa = empresas.find((e) => e.id === id);
    setSelectedEmpresa(empresa || null);
  };

  const handleSelectBolsa = (id: string) => {
    const bolsa = bolsas.find((b) => b.id === id);
    if (!bolsa) return;

    setSelectedBolsas((prev) => {
      const alreadySelected = prev.find((b) => b.id === id);
      if (alreadySelected) {
        return prev.filter((b) => b.id !== id);
      }
      return [...prev, bolsa];
    });
  };

  return (
    <div id='home' className='mainContainer'>
      <div className='containerGrafico'>
        <CanddleChart chartData={chartData} />
      </div>
      <SideBar
        empresas={empresas}
        bolsas={bolsas}
        onSelectEmpresa={handleSelectEmpresa}
        onSelectBolsa={handleSelectBolsa}
        selectedEmpresa={selectedEmpresa}
        selectedBolsas={selectedBolsas}
        isBolsaActive={isBolsaActive}
        onToggleView={handleToggleView}
      />
    </div>
  );
}