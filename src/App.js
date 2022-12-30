import useWindowDimensions from 'Hooks/useWindowDimensions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setWindowDimensions } from 'redux/table-state-reducer';
import AppClasses from './App.module.css';
import Content from './modules/Content/Content';
import Header from './modules/Header/Header';

// Starting point of the app containing header and the content base wrapper components

const App = props => {
  const dispatch = useDispatch();
  dispatch(setWindowDimensions(useWindowDimensions()));
  return (
    <div className={AppClasses.appWrapper}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
