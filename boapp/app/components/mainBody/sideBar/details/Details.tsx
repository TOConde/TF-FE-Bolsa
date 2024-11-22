import './Details.css'

interface DetailsProps {
  company: string | null;
}

export default function Details({ company }: DetailsProps) {

  return (
    <div className='containerDetails'>
      <h3>Detalles de {company}</h3>
    </div>
  );
}
