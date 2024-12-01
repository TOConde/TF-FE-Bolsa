import { useTranslation } from 'next-i18next';
import './Details.css'

interface DetailsProps {
  codEmpresa: string;
}

export default function Details({ codEmpresa }: DetailsProps) {
  const { t } = useTranslation();
  
  return (
    <div className='containerDetails'>
      <h3>{t('sideBar.detalles')}</h3>
      <p className='containerDetailsEmpresa'>{t(`sideBar.${codEmpresa}`)}</p>
    </div>
  );
}
