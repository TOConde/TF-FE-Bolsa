import { Dropdown, DropdownButton } from 'react-bootstrap';
import './LanguageBttn.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; //'next-i18next' cambio

export const LanguageBttn = () => {
  const [language, setLanguage] = useState<string>('Español');
  const { i18n } = useTranslation();

  const handleSelect = (lang: string | null) => {
    if (lang !== null) {
      setLanguage(lang);
      
      switch (lang) {
        case 'Español':
          i18n.changeLanguage('es');
          break;
        case 'English':
          i18n.changeLanguage('en');
          break;
        case 'Türkçe':
          i18n.changeLanguage('tur');
          break;
        default:
          i18n.changeLanguage('es');
          break;
      }
    }
  };

  return (
    <DropdownButton className='dropDownBttn' id="dropdown-basic-button" title={language} onSelect={handleSelect}>
      <Dropdown.Item eventKey="Español">Español</Dropdown.Item>
      <Dropdown.Item eventKey="English">English</Dropdown.Item>
      <Dropdown.Item eventKey="Türkçe">Türkçe</Dropdown.Item>
    </DropdownButton>
  );
}