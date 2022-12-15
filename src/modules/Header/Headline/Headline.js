import React from 'react';
import HeaderClasses from '../Header.module.css';

// Component to contain name of the app

const Headline = () => {
  return (
    <div className={HeaderClasses.headline}>
      <div> gazetteers.net </div>
    </div>
  );
};

export default Headline;
