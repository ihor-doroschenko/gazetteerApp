import { logosList } from 'constants/logosList';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import HeaderClasses from '../Header.module.css';

// Wrapper component to contain logos of the institutions related to the app

const Logos = () => {
  const logosElements = logosList.map(el => {
    return (
      <a href={el.link} key={getKey(el.alt, 'logos')}>
        <img className={HeaderClasses.icon} src={el.logo} alt={el.alt} />
      </a>
    );
  });

  return <div className={HeaderClasses.icons}>{logosElements}</div>;
};

export default Logos;
