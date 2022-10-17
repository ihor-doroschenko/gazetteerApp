import DividerContainer from 'components/DividerContainer/DividerContainer';
import React from 'react';
import { useSelector } from 'react-redux';
import { setIsMatchingEnabled } from 'redux/search-reducer';
import BinaryOption from './BinaryOption';
import BinaryOptionMatchingsContainerClasses from './BinaryOption.module.css';

const BinaryOptionMatchingsContainer = ({ resized }) => {
  const isMatchingEnabled = useSelector(setIsMatchingEnabled);
  return (
    <div className={BinaryOptionMatchingsContainerClasses.wrapperMatchingsContainer}>
      <DividerContainer header='Options' />
      <BinaryOption
        tooltipText={'tt_match'}
        optionName={'Matchings'}
        callback={setIsMatchingEnabled}
        value={isMatchingEnabled}
        resized={resized}
      />
    </div>
  );
};

export default BinaryOptionMatchingsContainer;
