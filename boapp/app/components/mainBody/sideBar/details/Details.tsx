import './Details.css'

interface DetailsProps {
  company: string | null;
}

export default function Details({ company }: DetailsProps) {

  return (
    <div>
      <h2>Detalles de {company}</h2>
    </div>
  );
}
