import { useEffect, useState } from 'react';
import { data, LineChart } from './chart/Chart';
import './MainBody.css'
import SideBar from './sideBar/SideBar';
import { getAllEmpresas } from '@/app/services/Empresa';
import { Empresa } from '@/app/types/empresa';

export const MainBody = () => {
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

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

  const handleSelectEmpresa = (id: string) => {
    const empresa = empresas.find((e) => e.id === id);
    setSelectedEmpresa(empresa || null);
  };
  
  return (
    <div id='home' className='mainContainer'>
      <div className='containerGrafico'>
        <LineChart /* selectedEmpresa={selectedEmpresa} */ />
      </div>
      <SideBar empresas={empresas} onSelectEmpresa={handleSelectEmpresa} selectedEmpresa={selectedEmpresa} />
    </div>
  );
}