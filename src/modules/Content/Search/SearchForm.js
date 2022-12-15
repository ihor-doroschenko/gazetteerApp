import { Form } from 'antd';
import classNames from 'classnames';
import { useFilterGazetteersByEnabledValue } from 'Hooks/Filter/useFilterGazetteersByEnabledValue';
import { useSearchBottomDimensions } from 'Hooks/Search/useSearchBottomDimensions';
import React from 'react';
import Databases from './Databases/Databases';
import MatchingsEnabling from './Options/MatchingsEnabling';
import SearchClasses from './Search.module.css';
import SearchButton from './SearchButton/SearchButton';
import SearchController from './SearchController/SearchController';

// Wrapper component to contain antdesign form to handle search parameters. Can be adjusted visually depending on the view mode and resizing

const SearchForm = ({ form, onFinish, isNoDatabase, setIsNoDatabase, ...rest }) => {
  const defaultCheckedList = useFilterGazetteersByEnabledValue();
  const { resized } = useSearchBottomDimensions();
  return (
    <Form
      form={form}
      colon={false}
      initialValues={{
        databases: defaultCheckedList,
      }}
      onFinish={onFinish}>
      <div
        className={classNames(SearchClasses.mainWindowBottom, {
          [SearchClasses.mainResizedWindowBottom]: resized,
        })}>
        <SearchController {...rest} resized={resized} />
        <Databases
          setIsNoDatabase={setIsNoDatabase}
          isNoDatabase={isNoDatabase}
          resized={resized}
        />
        <MatchingsEnabling resized={resized} />
        {!resized && <SearchButton />}
      </div>
    </Form>
  );
};
export default SearchForm;
