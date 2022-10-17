import { Form } from 'antd';
import classNames from 'classnames';
import { useSearchBottomDimensions } from 'Hooks/Search/useSearchBottomDimensions';
import { useSearchWidth } from 'Hooks/Search/useSearchWidth';
import useWindowDimensions from 'Hooks/useWindowDimensions';
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
import Databases from './Databases/Databases';
import BinaryOptionMatchingsContainer from './Options/BinaryOptionMatchingsContainer';
import SearchClasses from './Search.module.css';
import SearchBottomClasses from './SearchBottom.module.css';
import SearchButton from './SearchButton/SearchButton';
import SearchController from './SearchController/SearchController';

const Search = ({ form, defaultCheckedList, onFinish, setIsNoDatabase, isNoDatabase, ...rest }) => {
  const dispatch = useDispatch();
  const isSatellite = useSelector(getIsSatellite);
  const isSearch = useSelector(getIsSearch);
  const { resized, actualHeight } = useSearchBottomDimensions();
  const { searchWidth, setSearchWidth } = useSearchWidth();
  let { width, height } = useWindowDimensions();
  const isSideSwitched = useSelector(getIsSideSwitched);
  return (
    <ResizableBox
      onResize={(e, data) => {
        setSearchWidth(data.size.width);
        dispatch(setSearchGlobalWidth(data.size.width));
      }}
      resizeHandles={['e']}
      width={searchWidth}
      height={isSideSwitched ? (height * 95) / 100 - actualHeight : Infinity}
      // standard search width of 30% of window width
      minConstraints={[(30 * width) / 100, Infinity]}
      maxConstraints={[(30 * width) / 100 + 200, Infinity]}
      style={{ marginLeft: !isSearch && `-${searchWidth}px` }}
      className={classNames({
        [addNoShadow(SearchClasses.mainWindowWrapper, isSatellite)]: !isSideSwitched,
        [addNoShadow(SearchBottomClasses.searchBottom, isSatellite)]: isSideSwitched,
        [SearchBottomClasses.searchBottomResized]: isSideSwitched && resized,
      })}
      handle={<span className={SearchClasses.resizer}></span>}>
      <Form
        form={form}
        colon={false}
        initialValues={{
          databases: defaultCheckedList,
        }}
        onFinish={onFinish}>
        <div
          className={classNames(SearchBottomClasses.mainWindow, {
            [SearchBottomClasses.mainResizedWindow]: resized,
          })}>
          <SearchController {...rest} resized={resized} />
          <Databases
            setIsNoDatabase={setIsNoDatabase}
            isNoDatabase={isNoDatabase}
            resized={resized}
          />
          <BinaryOptionMatchingsContainer resized={resized} />
          {!resized && <SearchButton />}
        </div>
      </Form>
    </ResizableBox>
  );
};

export default Search;
