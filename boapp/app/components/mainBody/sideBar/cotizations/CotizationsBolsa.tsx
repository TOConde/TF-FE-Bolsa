import { Bolsa } from "@/app/types/bolsa";
import './Cotizations.css'

interface CotizationsBolsasProps {
  bolsas: Bolsa[];
  onSelectBolsa: (bolsaId: string) => void;
}

export default function CotizationsBolsa({ bolsas, onSelectBolsa }: CotizationsBolsasProps) {
  return (
    <div className='containerCotizations'>
      {bolsas.map((bolsa) => (
        <div key={bolsa.id} onClick={() => onSelectBolsa(bolsa.id)}>
          {bolsa.code}
        </div>
      ))}
    </div>
  );
}
