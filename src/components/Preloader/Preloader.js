import preloaderGif from 'assets/Preloader.gif';
import classNames from 'classnames';
import React from 'react';
import PreloaderClasses from './Preloader.module.css';

const Preloader = ({ gazName, message, heightValue }) => {
  return (
    <div
      className={classNames(PreloaderClasses.wrapper, {
        [PreloaderClasses.noHeight]: heightValue,
      })}>
      <img src={preloaderGif} alt='Waiting for data...' />
      <>{gazName ? <p>Waiting for the data from {gazName}</p> : <p>{message}</p>}</>
    </div>
  );
};

export default Preloader;
