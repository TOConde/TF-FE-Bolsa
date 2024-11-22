import { Button } from 'react-bootstrap';
import './ButtonsSide.css'

export default function ButtonsSide() {

  return (
    <div className='containerButtonsSide'>
      <Button variant="primary" size="sm">
        Empresas
      </Button>
      <Button variant="primary" size="sm">
        Indices
      </Button>
    </div>
  );
}
