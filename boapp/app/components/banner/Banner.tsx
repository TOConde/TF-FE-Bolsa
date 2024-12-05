import './Banner.css'
import { InfoTabs } from './infoTabs/InfoTabs';
import { LanguageBttn } from './languageBttn/LanguageBttn';

export const Banner = () => {
  return (
    <div className='banner fixed-top'>
      <a href="#home"><img className='logoBanner' src="./img/BIST.png" /></a>
      <InfoTabs />
      <LanguageBttn />
    </div>
  );
}