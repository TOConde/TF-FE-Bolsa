import { Button } from 'react-bootstrap';
import './ButtonsSide.css'
import { useTranslation } from 'next-i18next';

interface ButtonsSideProps {
  onToggleView: (view: "empresa" | "bolsa") => void;
}

export default function ButtonsSide({ onToggleView }: ButtonsSideProps) {
  const { t } = useTranslation();

  return (
    <div className='containerButtonsSide'>
      <Button variant="primary" size="sm" onClick={() => onToggleView("empresa")}>
        {t('sideBar.buttons.empresas')}
      </Button>
      <Button variant="primary" size="sm" onClick={() => onToggleView("bolsa")}>
        {t('sideBar.buttons.indices')}
      </Button>
    </div>
  );
}
