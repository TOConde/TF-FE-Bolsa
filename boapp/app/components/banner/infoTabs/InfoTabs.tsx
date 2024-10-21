import './InfoTabs.css'
import { useTranslation } from 'react-i18next';

export const InfoTabs = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='infoTabsContainer'>
      <a href='#about-us' className='tabs'>Sobre nosotros</a>
      <a href='#contact' className='tabs'>{t('buttons.contacto')}</a>
    </div>
  );
}