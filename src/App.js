import useWindowDimensions from 'Hooks/useWindowDimensions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setWindowDimensions } from 'redux/table-state-reducer';
import './App.css';
import Content from './modules/Content/Content';
import Header from './modules/Header/Header';

const App = props => {
  const dispatch = useDispatch();
  dispatch(setWindowDimensions(useWindowDimensions()));
  return (
    <div className='appwrapper'>
      <Header />
      <Content />
    </div>
  );
};

export default App;
