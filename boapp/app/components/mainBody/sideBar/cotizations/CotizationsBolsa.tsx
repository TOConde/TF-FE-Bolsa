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
        <div className="row">
          {bolsas.map((bolsa) => (
            <div key={bolsa.id} className="col-md-6 mb-3 containerIndex">
              <Form.Check
                type="checkbox"
                id={`bolsa-${bolsa.id}`}
                label={bolsa.code}
                checked={selectedBolsas.some((b) => b.id === bolsa.id)}
                onChange={() => onSelectBolsa(bolsa.id)}
              />
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
}
