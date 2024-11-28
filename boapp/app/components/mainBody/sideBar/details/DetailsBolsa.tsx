import { useTranslation } from 'next-i18next';
import './Details.css'

interface DetailsBolsaProps {
  name: string;
}

export default function DetailsBolsa({ name }: DetailsBolsaProps) {
  const { t } = useTranslation();
  
  return (
    <div className='containerDetails'>
      <h3>{t('sideBar.detalles')}</h3>
      <p>{name}</p>
    </div>
  );
}
