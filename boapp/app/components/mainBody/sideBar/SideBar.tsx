import { Empresa } from '@/app/types/empresa';
import ButtonsSide from './buttonsSide/ButtonsSide';
import Cotizations from './cotizations/Cotizations';
import Details from './details/Details';
import './SideBar.css'
import { Bolsa } from '@/app/types/bolsa';
import CotizationsBolsa from './cotizations/CotizationsBolsa';
import DetailsBolsa from './details/DetailsBolsa';

interface SideBarProps {
  empresas: Empresa[];
  bolsas: Bolsa[];
  onSelectEmpresa: (empresaId: string) => void;
  onSelectBolsa: (bolsaId: string) => void;
  selectedEmpresa: Empresa | null;
  selectedBolsa: Bolsa | null;
  isBolsaActive: boolean;
  onToggleView: (view: "empresa" | "bolsa") => void;
}

export default function SideBar({ empresas, bolsas, onSelectEmpresa, onSelectBolsa, selectedEmpresa, selectedBolsa, isBolsaActive, onToggleView }: SideBarProps) {
  return (
    <div className='containerSideBar'>
      <ButtonsSide onToggleView={onToggleView} />
      {isBolsaActive ? (
        <CotizationsBolsa bolsas={bolsas} onSelectBolsa={onSelectBolsa} />
      ) : (
        <Cotizations empresas={empresas} onSelectEmpresa={onSelectEmpresa} />
      )}
      {isBolsaActive && selectedBolsa && <DetailsBolsa name={selectedBolsa.name} />}
      {!isBolsaActive && selectedEmpresa && <Details codEmpresa={selectedEmpresa.codEmpresa} />}
    </div>
  );
}
