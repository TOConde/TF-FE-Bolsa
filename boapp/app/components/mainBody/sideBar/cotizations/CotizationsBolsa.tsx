import { Bolsa } from "@/app/types/bolsa";
import './Cotizations.css'
import { Form } from "react-bootstrap";

interface CotizationsBolsasProps {
  bolsas: Bolsa[];
  onSelectBolsa: (bolsaId: string) => void;
  selectedBolsas: Bolsa[];
}

export default function CotizationsBolsa({ bolsas, onSelectBolsa, selectedBolsas }: CotizationsBolsasProps) {
  return (
    <div className='containerCotizations'>
      <Form>
        {bolsas.map((bolsa) => (
          <div key={bolsa.id} className="mb-3 containerIndex">
            <Form.Check
              type="checkbox"
              id={`bolsa-${bolsa.id}`}
              label={bolsa.code}
              checked={selectedBolsas.some((b) => b.id === bolsa.id)}
              onChange={() => onSelectBolsa(bolsa.id)}
            />
          </div>
        ))}
      </Form>
      {/* {bolsas.map((bolsa) => (
        <div key={bolsa.id} onClick={() => onSelectBolsa(bolsa.id)}>
          {bolsa.code}
        </div>
      ))} */}
    </div>
  );
}
