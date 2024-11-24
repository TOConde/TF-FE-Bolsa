import { Empresa } from '@/app/types/empresa';
import ButtonsSide from './buttonsSide/ButtonsSide';
import Cotizations from './cotizations/Cotizations';
import Details from './details/Details';
import './SideBar.css'

interface SideBarProps {
  empresas: Empresa[];
  onSelectEmpresa: (empresaId: string) => void;
  selectedEmpresa: Empresa | null;
}

export default function SideBar({ empresas, onSelectEmpresa, selectedEmpresa }: SideBarProps) {

  return (
    <div className='containerSideBar'>
      <ButtonsSide />
      <Cotizations empresas={empresas} onSelectEmpresa={onSelectEmpresa} />
      {selectedEmpresa && <Details codEmpresa={selectedEmpresa.codEmpresa} />}
    </div>
  );
}
