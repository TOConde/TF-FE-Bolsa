import { Dropdown, DropdownButton } from 'react-bootstrap';
import './LanguageBttn.css'
import { useState } from 'react';

export const LanguageBttn = () => {
  const [language, setLanguage] = useState<string>('Español');

  const handleSelect = (lang: string | null) => {
    if (lang !== null) {
      setLanguage(lang);
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