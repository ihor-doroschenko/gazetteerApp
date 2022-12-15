import { Button } from 'antd';
import 'antd/lib/radio/style/index.css';
import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deselectAllGazetteers, selectAllGazetteers } from 'redux/search-reducer';
import DatabasesClasses from './Databases.module.css';

// Wrapper component to contain two buttons for selection or deselection of all gazetteers

const SelectDeselect = ({ setIsNoDatabase, resized }) => {
  const dispatch = useDispatch();
  const handleSelect = e => {
    dispatch(selectAllGazetteers());
    setIsNoDatabase(false);
  };
  const handleDeselect = e => {
    dispatch(deselectAllGazetteers());
  };
  return (
    <div
      className={classNames(DatabasesClasses.buttonsWrapper, {
        [DatabasesClasses.resizedSelectAllGroup]: resized,
      })}>
      <Button onClick={handleSelect} size={resized && 'small'}>
        Select All
      </Button>
      <Button onClick={handleDeselect} size={resized && 'small'}>
        Deselect All
      </Button>
    </div>
  );
};

export default SelectDeselect;
