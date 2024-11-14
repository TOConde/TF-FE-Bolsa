import './Cotizations.css'

interface CotizationsProps {
  onSelectCompany: (company: string) => void;
}

export default function Cotizations({ onSelectCompany }: CotizationsProps) {
  const companies = ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5',  'Empresa 6', 'Empresa 7'];// get de las empresas

  return (
    <div>
      {companies.map((company) => (
        <div key={company} onClick={() => onSelectCompany(company)}>
          {company}
        </div>
      ))}
    </div>
  );
}
