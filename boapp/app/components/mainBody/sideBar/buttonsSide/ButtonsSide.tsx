import { Button } from 'react-bootstrap';
import './ButtonsSide.css'
import { useTranslation } from 'next-i18next';

export default function ButtonsSide() {
  const { t } = useTranslation();

  return (
    <div className='containerButtonsSide'>
      <Button variant="primary" size="sm">
        {t('sideBar.buttons.empresas')}
      </Button>
      <Button variant="primary" size="sm">
        {t('sideBar.buttons.indices')}
      </Button>
    </div>
  );
}
