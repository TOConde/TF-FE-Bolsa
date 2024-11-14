import Cotizations from './cotizations/Cotizations';
import Details from './details/Details';
import './SideBar.css'

interface SideBarProps {
  onSelectCompany: (company: string) => void;
  selectedCompany: string | null;
}

export default function SideBar({ onSelectCompany, selectedCompany }: SideBarProps) {

  return (
    <div className='containerSideBar'>
      <Cotizations onSelectCompany={onSelectCompany} />
      <Details company={selectedCompany} />
    </div>
  );
}
