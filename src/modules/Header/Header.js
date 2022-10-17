import React from 'react';
import HeaderClasses from './Header.module.css';
import Headline from './Headline/Headline';
import Icons from './Icons/Icons';
import InfoHelp from './InfoHelp/InfoHelp';

const Headerabove = () => {
  return (
    <nav className={HeaderClasses.header}>
      <Icons />
      <Headline />
      <InfoHelp />
    </nav>
  );
};

export default Headerabove;
