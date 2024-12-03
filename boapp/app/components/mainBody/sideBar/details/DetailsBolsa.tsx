import { useTranslation } from 'next-i18next';
import './Details.css'

interface DetailsBolsaProps {
  name: string[];
}

export default function DetailsBolsa({ name }: DetailsBolsaProps) {
  const { t } = useTranslation();

  return (
    <div className='containerDetails'>
      <h3>{t('indiceSeleccionado')}</h3>
      <div className='containerDetailsBolsas'>
        {name.map((n, index) => (
          <p className='nombreBolsa' key={index}>{n}</p>
        ))}
      </div>
    </div>
  );
}
