import './SideLegend.css'

export default function SideLegend({ data }: { data: (string | number)[][] }) {
  return (
    <div className='containerSideLegend'>
      <h3>Detalle de Empresas</h3>
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