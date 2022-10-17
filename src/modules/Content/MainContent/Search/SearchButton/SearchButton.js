import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import SearchButtonClasses from './SearchButton.module.css';

const SearchButton = () => {
  return (
    <div className={SearchButtonClasses.wrapper}>
      <TooltipContainer
        placement='top'
        text='tt_search'
        customElement={
          <button type='submit' className='buttons'>
            <p>Search</p>
          </button>
        }
        delay={true}
      />
    </div>
  );
};

export default SearchButton;
