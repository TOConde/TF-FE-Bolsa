import { useState } from 'react';
import { LineChart } from './chart/Chart';
import './MainBody.css'
import SideBar from './sideBar/SideBar';

export const MainBody = () => {
  const companies = ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5',  'Empresa 6', 'Empresa 7'];
  const [selectedCompany, setSelectedCompany] = useState<string | null>(companies[0]);
  
  return (
    <div id='home' className='mainContainer'>
      <div className='containerGrafico'>
        <LineChart />
      </div>
      <SideBar onSelectCompany={setSelectedCompany} selectedCompany={selectedCompany} />
    </div>
  );
}