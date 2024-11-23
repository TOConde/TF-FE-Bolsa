import './Details.css'

interface DetailsProps {
  empresaDetails: string;
}

export default function Details({ empresaDetails }: DetailsProps) {

  return (
    <div className='containerDetails'>
      <h3>Detalles</h3>
      <p>{empresaDetails}</p>
    </div>
  );
}
