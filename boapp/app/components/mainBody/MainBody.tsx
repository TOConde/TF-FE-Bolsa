import { LineChart } from './chart/Chart';
import './MainBody.css'
import { NavBar } from './navBar/NavBar';

export const MainBody = () => {
  return (
    <div id='home' className='mainContainer'>
      <LineChart />
      <NavBar />
    </div>
  );
}