import { Checkbox, Form } from 'antd';
import classNames from 'classnames';
import DividerContainer from 'components/DividerContainer/DividerContainer';
import { gazetteerInfo } from 'constants/getGazetteerInfo';
import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import DatabaseElement from './DatabaseElement';
import DatabasesClasses from './Databases.module.css';
import SelectDeselect from './SelectDeselect';

// Wrapper component to contain gazetteer selection subarea in the search area. It includes two buttons for selection or deselection of all gazetteers and checkboxes for each gazetteer

const Databases = ({ setIsNoDatabase, isNoDatabase, resized }) => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const theLowestValidResolution = useTheLowestValidResolution();
  return (
    <div
      className={classNames(DatabasesClasses.databasesWrapper, {
        [DatabasesClasses.databasesResizedWrapper]: resized,
      })}>
      <div className={DatabasesClasses.databasesHeader}>
        <DividerContainer header='Gazetteers' />
        <SelectDeselect setIsNoDatabase={setIsNoDatabase} resized={resized} />
      </div>
      <Form.Item
        name='databases'
        validateStatus={isNoDatabase ? 'error' : 'success'}
        help={isNoDatabase && 'Please select at least one gazetteer!'}
        onChange={() => setIsNoDatabase(false)}>
        <Checkbox.Group
          className={classNames(DatabasesClasses.databasesGroup, {
            [DatabasesClasses.databasesGroupResized]: resized,
            [DatabasesClasses.databasesGroupSide]: !isSideSwitched && theLowestValidResolution,
          })}>
          {Object.keys(gazetteerInfo).map(el => (
            <DatabaseElement gazetteer={el} />
          ))}
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default Databases;
