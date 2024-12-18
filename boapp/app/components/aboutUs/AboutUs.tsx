import './AboutUs.css'
import { useTranslation } from 'next-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className='containerAboutUs'>
      <h1 id='about-us'>{t('sobreNosotrosTitulo')}</h1>
      <div>
        <p>{t('sobreNosotrosP1')}</p>
        <p>{t('sobreNosotrosP2')}</p>
        <p>{t('sobreNosotrosP3')}</p>
        <p>{t('sobreNosotrosP4')}</p>
      </div>
    </div>
  );
}
