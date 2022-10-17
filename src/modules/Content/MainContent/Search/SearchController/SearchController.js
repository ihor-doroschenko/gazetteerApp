import classNames from 'classnames';
import DividerContainer from 'components/DividerContainer/DividerContainer.js';
import DynamicHelpIcon from 'components/DynamicHelpIcon/DynamicHelpIcon.js';
import TooltipContainer from 'components/Tooltip/TooltipContainer.js';
import React from 'react';
import { useSelector } from 'react-redux';
import { setOnlySettlements } from 'redux/search-reducer';
import { getOnlySettlements } from 'selectors/simple-selectors/search-selectors.js';
import BinaryOption from '../Options/BinaryOption.js';
import SearchTypeOptions from '../Options/SearchTypeOptions.js';
import SearchButton from '../SearchButton/SearchButton.js';
import BoundingBox from './BoundingBox/BoundingBox.js';
import SearchControllerClasses from './SearchController.module.css';
import SearchMenuSwitcher from './SearchMenuSwitcher/SearchMenuSwitcher.js';
import SearchParametersInputFormContainer from './SearchParametersInputForm/SearchParametersInputFormContainer';

const SearchController = ({ resized, ...other }) => {
  const onlySettlements = useSelector(getOnlySettlements);
  return (
    <div className={SearchControllerClasses.searchController}>
      <div>
        <DividerContainer header='Search parameters' />
        <DynamicHelpIcon title='search' />
        <SearchMenuSwitcher />
      </div>
      <div className={SearchControllerClasses.placeNameWrapper}>
        <div
          className={classNames(SearchControllerClasses.placeName, {
            [SearchControllerClasses.placeNameResized]: resized,
          })}>
          <div>
            <TooltipContainer
              placement='right'
              text={`tt_search_place_name`}
              customElement={<p className='wordBreak'>Place name</p>}
            />
          </div>
          <SearchParametersInputFormContainer {...other} resized={resized} />
          {resized && <SearchButton />}
        </div>
        {!resized && <SearchTypeOptions />}
      </div>
      <div className={classNames({ [SearchControllerClasses.resizedSearchOptions]: resized })}>
        {resized && <SearchTypeOptions resized={resized} />}
        <div>
          <div
            className={classNames(SearchControllerClasses.boundingBox, {
              [SearchControllerClasses.boundingBoxResized]: resized,
            })}>
            <div>
              <TooltipContainer
                placement='right'
                text={`tt_search_bounding_box`}
                customElement={<p className='wordBreak'>Bounding Box</p>}
              />
            </div>
            <BoundingBox />
          </div>
          <div
            className={classNames(SearchControllerClasses.boundingBox, {
              [SearchControllerClasses.boundingBoxResized]: resized,
            })}>
            <div>
              <TooltipContainer
                placement='right'
                text={`tt_search_filter_type`}
                customElement={<p className='wordBreak'>Filter type</p>}
              />
            </div>
            <BinaryOption
              tooltipText={'tt_settlements'}
              optionName={'Settlements'}
              callback={setOnlySettlements}
              value={onlySettlements}
              resized={resized}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchController;
