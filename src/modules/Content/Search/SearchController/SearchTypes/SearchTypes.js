import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import classNames from 'classnames';
import BinaryOptionClasses from 'components/BinaryOptions/BinaryOption.module.css';
import RadioButton from 'components/RadioButton/RadioButton';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { getSearchTypes } from 'constants/getSearchTypes';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchType } from 'redux/search-reducer';
import { getSearchType } from 'selectors/simple-selectors/search-selectors';
import { getKey } from 'utils/TextHandlers/getKey';
import SearchTypesClasses from './SearchTypes.module.css';

// Wrapper component to contain search type options

const SearchTypes = ({ resized }) => {
  const dispatch = useDispatch();
  const searchType = useSelector(getSearchType);
  const options = getSearchTypes();
  return (
    <div
      className={classNames(BinaryOptionClasses.radioOptionsContainer, {
        [SearchTypesClasses.radioOptionsContainerResized]: resized,
      })}>
      <TooltipContainer
        placement='right'
        text='tt_options_search_type'
        customElement={<p style={{ cursor: 'pointer' }}>Search type</p>}
      />
      <Radio.Group
        defaultValue={searchType}
        onChange={e => {
          dispatch(setSearchType(e.target.value));
        }}
        size={resized && 'small'}>
        {options.map(el => (
          <RadioButton key={getKey(el.text, 'searchTypes')} el={el} />
        ))}
      </Radio.Group>
    </div>
  );
};
export default SearchTypes;
