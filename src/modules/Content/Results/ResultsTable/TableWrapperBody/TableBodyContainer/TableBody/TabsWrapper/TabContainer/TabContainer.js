import classNames from 'classnames';
import React from 'react';
import { Tab } from 'react-tabs';
import { getKey } from 'utils/TextHandlers/getKey';
import DetailsTab from '../Details/DetailsTab/DetailsTab';
import TabContainerClasses from './TabContainer.module.css';

// Wrapper component to contain tab from react-tabs (under tab is here meant actual buttons to switch between tab panels with data) for the DetailsTab component

const TabContainer = props => {
  const { el } = props;
  const key = getKey(el.detail.id, 'tab');
  return (
    <Tab
      key={key}
      className={classNames('react-tabs__tab', TabContainerClasses.tab, {
        [TabContainerClasses.tabSelected]: props.index === props.tabIndex,
      })}>
      <DetailsTab {...props} />
    </Tab>
  );
};

TabContainer.tabsRole = 'Tab';

export default TabContainer;
