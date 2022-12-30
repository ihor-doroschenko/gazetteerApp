import { withReactMemo } from 'HOCs/withReactMemo';
import { useTabIndex } from 'Hooks/Tabs/useTabIndex';
import TabContainer from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/TabContainer/TabContainer';
import TabSwitchButton from 'modules/Content/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/TabSwitchButtons/TabSwitchButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { setDetailsStatusesOfGazetteerToPassive, switchDetailsStatus } from 'redux/details-reducer';
import { getKey } from 'utils/TextHandlers/getKey';
import DetailTabPanel from './Details/DetailTabPanel';
import SubTableDataContainer from './SubTables/SubTableDataContainer';
import TabsWrapperClasses from './TabsWrapper.module.css';

// Wrapper component to contain elements of the tabs from react-tabs with assigning of the custom functionalities from previous wrapper (TableBody)

const TabsWrapper = ({
  detailsFiltered,
  setCurrentPage,
  currentPageLength,
  currentPage,
  gazName,
  tabsPerPage,
  firstIndexOfCurrentTab,
  firstIndexOfNextTab,
  pages,
}) => {
  const dispatch = useDispatch();
  const { tabIndex, setTabIndex } = useTabIndex(detailsFiltered);
  const detailTabs = detailsFiltered.map((el, index) => {
    return (
      <TabContainer
        key={getKey(el.detail.id, 'tabContainer')}
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
  return (
    <Tabs
      selectedIndex={tabIndex}
      forceRenderTabPanel={false}
      onSelect={index => {
        const newIndex = index !== 0 ? (currentPage - 1) * tabsPerPage + index : index;
        const details = detailsFiltered[newIndex - 1];
        if (details) {
          dispatch(switchDetailsStatus(gazName, details.detail.id));
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
        <SubTableDataContainer gazName={gazName} />
      </TabPanel>
      {detailsFiltered.map(el => {
        const key = getKey(el.detail.id, 'TabsWrapperDetails');
        return (
          <TabPanel key={key}>
            <DetailTabPanel el={el} gazName={gazName} />
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default withReactMemo(TabsWrapper);
