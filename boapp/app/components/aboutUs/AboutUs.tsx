import './AboutUs.css'
import { useTranslation } from 'next-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className='containerAboutUs'>
      <h1>{t('sobreNosotrosTitulo')}</h1>
      <p>{t('sobreNosotrosP1')}</p>
      <p>{t('sobreNosotrosP2')}</p>
      <p>{t('sobreNosotrosP3')}</p>
      <p>{t('sobreNosotrosP4')}</p>
    </div>
  );
}
