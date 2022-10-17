import classNames from 'classnames';
import DetailsTab from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsTab/DetailsTab';
import React from 'react';
import { Tab } from 'react-tabs';
import TabContainerClasses from './TabContainer.module.css';

const TabContainer = props => {
  const { el } = props;
  const key = el.details.id;
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
