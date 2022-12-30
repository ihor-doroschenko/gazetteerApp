import classNames from 'classnames';
import { useSearchBottomDimensions } from 'Hooks/Search/useSearchBottomDimensions';
import { useSearchDimensions } from 'Hooks/Search/useSearchDimensions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { setSearchGlobalWidth } from 'redux/table-state-reducer';
import {
  getIsSatellite,
  getIsSearch,
  getIsSideSwitched,
} from 'selectors/simple-selectors/nav-selectors';
import { addNoShadow } from 'utils/Styling/addNoShadow';
import SearchClasses from './Search.module.css';
import SearchForm from './SearchForm';

// Wrapper component to contain functionalities to handle and control resizing of the search area

const SearchResizingContainer = props => {
  const dispatch = useDispatch();
  const isSideSwitched = useSelector(getIsSideSwitched);
  const isSatellite = useSelector(getIsSatellite);
  const isSearch = useSelector(getIsSearch);
  const { resized } = useSearchBottomDimensions();
  const {
    searchWidth,
    sideSearchHeight,
    setSearchWidth,
    searchHeight,
    searchMinWidth,
    searchMaxWidth,
  } = useSearchDimensions();
  return (
    <ResizableBox
      onResize={(e, data) => {
        setSearchWidth(data.size.width);
        dispatch(setSearchGlobalWidth(data.size.width));
      }}
      resizeHandles={['e']}
      width={searchWidth}
      height={isSideSwitched ? searchHeight : sideSearchHeight}
      minConstraints={[searchMinWidth, Infinity]}
      maxConstraints={[searchMaxWidth, Infinity]}
      style={{ marginLeft: !isSearch && `-${searchWidth}px` }}
      className={classNames({
        [addNoShadow(SearchClasses.mainWindowWrapper, isSatellite)]: !isSideSwitched,
        [addNoShadow(SearchClasses.searchBottom, isSatellite)]: isSideSwitched,
        [SearchClasses.searchBottomResized]: isSideSwitched && resized,
      })}
      handle={<span className={SearchClasses.resizer}></span>}>
      <SearchForm {...props} />
    </ResizableBox>
  );
};

export default SearchResizingContainer;
