import { Empresa } from '@/app/types/empresa';
import './Cotizations.css'
import { useState } from 'react';

interface CotizationsProps {
  empresas: Empresa[];
  onSelectEmpresa: (empresaId: string) => void;
}

export default function Cotizations({ empresas, onSelectEmpresa }: CotizationsProps) {
  const [selectedEmpresaId, setSelectedEmpresaId] = useState<string | null>(null);

  const handleEmpresaClick = (empresaId: string) => {
    setSelectedEmpresaId(empresaId);
    onSelectEmpresa(empresaId);
  };

  return (
    <div className='containerCotizations'>
      {empresas.map((empresa) => (
        <div key={empresa.id} onClick={() => handleEmpresaClick(empresa.id)} className={`divEmpresa ${selectedEmpresaId === empresa.id ? 'selected' : ''}`}>
          {empresa.codEmpresa}
        </div>
      ))}
    </div>
  );
}
