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
  selectedBolsas: Bolsa[];
  isBolsaActive: boolean;
  onToggleView: (view: "empresa" | "bolsa") => void;
}

export default function SideBar({ empresas, bolsas, onSelectEmpresa, onSelectBolsa, selectedEmpresa, selectedBolsas, isBolsaActive, onToggleView }: SideBarProps) {
  return (
    <div className='containerSideBar'>
      <ButtonsSide onToggleView={onToggleView} />
      {isBolsaActive ? (
        <CotizationsBolsa bolsas={bolsas} onSelectBolsa={onSelectBolsa} selectedBolsas={selectedBolsas}/>
      ) : (
        <Cotizations empresas={empresas} onSelectEmpresa={onSelectEmpresa} />
      )}
      {isBolsaActive && selectedBolsas && <DetailsBolsa name={selectedBolsas.map((bolsa) => bolsa.name)} />}
      {!isBolsaActive && selectedEmpresa && <Details codEmpresa={selectedEmpresa.codEmpresa} />}
    </div>
  );
}
