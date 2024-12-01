import { Empresa } from '@/app/types/empresa';
import './Cotizations.css'

interface CotizationsProps {
  empresas: Empresa[];
  onSelectEmpresa: (empresaId: string) => void;
}

export default function Cotizations({ empresas, onSelectEmpresa }: CotizationsProps) {
  return (
    <div className='containerCotizations'>
      {empresas.map((empresa) => (
        <div key={empresa.id} onClick={() => onSelectEmpresa(empresa.id)} className='divEmpresa'>
          {empresa.codEmpresa}
        </div>
      ))}
    </div>
  );
}
