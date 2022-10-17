import TabContainer from 'components/Tabs/TabContainer/TabContainer';
import TabSwitchButton from 'components/Tabs/TabSwitchButtons/TabSwitchButton';
import { useTabIndex } from 'Hooks/Tabs/useTabIndex';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { setDetailsStatusToPassive, switchDetailsStatus } from 'redux/details-reducer';
import { getSeparateEntries } from 'selectors/simple-selectors/results-selectors';
import DetailTabPanel from './DetailTabPanel';
import SubTableDataContainer from './SubTables/SubTableDataContainer';
import TabsWrapperClasses from './TabsWrapper.module.css';

const TabsWrapper = ({
  detailsFiltered,
  actualState,
  setCurrentPage,
  currentPageLength,
  currentPage,
  gazName,
  tabsPerPage,
  indexOfFirstTodo,
  indexOfLastTodo,
  pages,
  entries,
  color,
}) => {
  const dispatch = useDispatch();
  const { tabIndex, setTabIndexWrapper } = useTabIndex(detailsFiltered);
  const AreSeparateEntries = actualState === 'separate';
  const separateEntries = useSelector(getSeparateEntries);
  const detailTabs = detailsFiltered.map((el, index) => {
    return (
      <TabContainer
        el={el}
        index={index + 1}
        tabIndex={tabIndex}
        currentPageLength={currentPageLength}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTabIndexWrapper={setTabIndexWrapper}
      />
    );
  });

  const detailTabPanel = detailsFiltered.map(el => {
    return (
      <TabPanel key={el.details.id}>
        <DetailTabPanel el={el} gazName={gazName} />
      </TabPanel>
    );
  });
  return (
    <Tabs
      selectedIndex={tabIndex}
      forceRenderTabPanel={false}
      onSelect={index => {
        const newIndex = index !== 0 ? (currentPage - 1) * tabsPerPage + index : index;
        const details = detailsFiltered[newIndex - 1];
        if (details) {
          dispatch(switchDetailsStatus(gazName, details.details.id));
        }
      }}>
      <TabList className={TabsWrapperClasses.tabListBackground}>
        <Tab
          selectedClassName={TabsWrapperClasses.tabSelected}
          onClick={() => dispatch(setDetailsStatusToPassive(gazName))}>
          Results
        </Tab>
        <TabSwitchButton
          length={detailsFiltered.length}
          value={tabsPerPage}
          pages={1}
          role='previous'
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {detailsFiltered.length === tabsPerPage
          ? detailTabs
          : detailTabs.slice(indexOfFirstTodo, indexOfLastTodo)}
        <TabSwitchButton
          length={detailsFiltered.length}
          value={tabsPerPage}
          pages={pages}
          role='next'
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </TabList>
      <TabPanel forceRender={true}>
        <SubTableDataContainer
          gazName={gazName}
          entries={!AreSeparateEntries ? entries : separateEntries}
          color={color}
        />
      </TabPanel>
      {detailTabPanel}
    </Tabs>
  );
};

export default TabsWrapper;
