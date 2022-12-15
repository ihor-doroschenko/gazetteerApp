import { useTabIndex } from 'Hooks/Tabs/useTabIndex';
import TabContainer from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/TabContainer/TabContainer';
import TabSwitchButton from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/TabSwitchButtons/TabSwitchButton';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { setDetailsStatusesOfGazetteerToPassive, switchDetailsStatus } from 'redux/details-reducer';
import { getExternEntities } from 'selectors/simple-selectors/results-selectors';
import { checkStatus } from 'utils/validators/checkStatus';
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
  firstIndexOfCurrentTab,
  firstIndexOfNextTab,
  pages,
  entries,
}) => {
  const dispatch = useDispatch();
  const { tabIndex, setTabIndex } = useTabIndex(detailsFiltered);
  const AreSeparateEntries = checkStatus(actualState, 'separate');
  const externEntities = useSelector(getExternEntities);
  const detailTabs = detailsFiltered.map((el, index) => {
    return (
      <TabContainer
        el={el}
        index={index + 1}
        tabIndex={tabIndex}
        currentPageLength={currentPageLength}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTabIndex={setTabIndex}
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
          onClick={() => dispatch(setDetailsStatusesOfGazetteerToPassive(gazName))}>
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
          : detailTabs.slice(firstIndexOfCurrentTab, firstIndexOfNextTab)}
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
          entries={!AreSeparateEntries ? entries : externEntities[gazName]}
        />
      </TabPanel>
      {detailTabPanel}
    </Tabs>
  );
};

export default TabsWrapper;
