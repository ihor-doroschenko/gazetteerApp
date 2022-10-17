import { Checkbox, Form } from 'antd';
import classNames from 'classnames';
import DividerContainer from 'components/DividerContainer/DividerContainer';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import parse from 'html-react-parser';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGazetteerValue } from 'redux/search-reducer';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';
import DatabasesClasses from './Databases.module.css';
import SelectDeselect from './SelectDeselect';

const Databases = ({ setIsNoDatabase, isNoDatabase, resized }) => {
  const dispatch = useDispatch();
  const gazetteers = useSelector(getGazetteers);
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
          {gazetteers.map(gazetteer => {
            return (
              <Checkbox
                key={gazetteer.id}
                value={gazetteer.gazName}
                checked={gazetteer.value}
                onChange={e => dispatch(setGazetteerValue(e.target.value, e.target.checked))}>
                <TooltipContainer
                  placement='right'
                  text={`tt_${gazetteer.gazName}`}
                  customElement={<p>{parse(gazetteer.text)}</p>}
                />
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default Databases;
