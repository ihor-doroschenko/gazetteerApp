import iconGießen from 'assets/Logos/Gießen.jpg';
import iconHerder from 'assets/Logos/Herder.jpg';
import iconIfL from 'assets/Logos/IfL.jpg';
import iconLeibniz from 'assets/Logos/Leibniz.jpg';
import React from 'react';
import HeaderClasses from '../Header.module.css';

const Icons = () => {
  return (
    <div className={HeaderClasses.icons}>
      <a href='https://www.herder-institut.de'>
        <img className={HeaderClasses.icon} src={iconHerder} alt='Herder Institute' />
      </a>
      <a href='https://www.ifl-leipzig.de/'>
        <img className={HeaderClasses.icon} src={iconIfL} alt='IfL' />
      </a>
      <a href='https://www.uni-giessen.de'>
        <img className={HeaderClasses.icon} src={iconGießen} alt='University of Gießen' />
      </a>
      <a href='https://www.leibniz-gemeinschaft.de'>
        <img className={HeaderClasses.icon} src={iconLeibniz} alt='Leibniz' />
      </a>
    </div>
  );
};

export default Icons;
