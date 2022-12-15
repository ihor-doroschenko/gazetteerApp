import React from 'react';
import HeaderClasses from './Header.module.css';
import Headline from './Headline/Headline';
import Info from './Info/Info';
import Logos from './Logos/Logos';

// Wrapper component to contain three elements of the header of the app: icons wrapper, headline, and info wrapper

const Header = () => {
  return (
    <nav className={HeaderClasses.header}>
      <Logos />
      <Headline />
      <Info />
    </nav>
  );
};

export default Header;
