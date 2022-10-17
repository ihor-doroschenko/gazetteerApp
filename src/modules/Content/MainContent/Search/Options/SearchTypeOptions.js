import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { getSearchTypeOptions } from 'constants/getOptions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchType } from 'redux/search-reducer';
import { getSearchType } from 'selectors/simple-selectors/search-selectors';
import BinaryOptionClasses from './BinaryOption.module.css';

const SearchTypeOptions = ({ resized }) => {
  const dispatch = useDispatch();
  const searchType = useSelector(getSearchType);
  const options = getSearchTypeOptions();
  const radioButtons = options.map(el => (
    <Radio key={el.text} value={el.value}>
      {el.text}
    </Radio>
  ));
  return (
    <div
      className={classNames(BinaryOptionClasses.radioOptionsContainer, {
        [BinaryOptionClasses.radioOptionsContainerResized]: resized,
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
        {radioButtons}
      </Radio.Group>
    </div>
  );
};

export default SearchTypeOptions;
