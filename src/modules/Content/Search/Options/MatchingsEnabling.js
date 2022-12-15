import BinaryOption from 'components/BinaryOptions/BinaryOption';
import DividerContainer from 'components/DividerContainer/DividerContainer';
import React from 'react';
import { useSelector } from 'react-redux';
import { setIsMatchingEnabled } from 'redux/search-reducer';
import MatchingsEnablingClasses from './MatchingsEnabling.module.css';

// Wrapper component to contain option selection subarea in the search area. It includes checkbox to enable/disable matchings parameter for the search

const MatchingsEnabling = ({ resized }) => {
  const isMatchingEnabled = useSelector(setIsMatchingEnabled);
  return (
    <div className={MatchingsEnablingClasses.wrapperMatchingsContainer}>
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

export default MatchingsEnabling;
