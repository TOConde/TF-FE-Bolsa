import { useTranslation } from 'next-i18next';
import './SideLegend.css'

export default function SideLegend({ data }: { data: (string | number)[][] }) {
  const { t } = useTranslation();
  
  return (
    <div className='containerSideLegend'>
      <h3>{t('piechart.sideBarTitulo')}</h3>
      <ul>
        {data.slice(1).map(([nombre, valorTotal]) => (
          <li key={nombre as string}>
            {nombre}: ${valorTotal.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}