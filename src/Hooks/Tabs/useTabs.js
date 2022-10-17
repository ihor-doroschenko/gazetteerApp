import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getFirstAndLastPages } from 'utils/Helpers/TabHelpers/getFirstAndLastPages';
import { getWidthOfTabs } from 'utils/Helpers/TabHelpers/getWidthOfTabs';
//TODO
export function useTabs(detailsFiltered, elementWidth) {
  const isSideSwitched = useSelector(getIsSideSwitched);

  const [currentPage, setCurrentPage] = useState(1);
  const [tabsPerPage, setTabsPerPage] = useState(5);
  const [pages, setPages] = useState(1);
  const [currentPageLength, setCurrentPageLength] = useState(0);

  function changePageParametersOnDetailsChange() {
    const newPages = Math.ceil(detailsFiltered.length / tabsPerPage);
    setPages(newPages);
    setCurrentPageLength(
      detailsFiltered.length === tabsPerPage ? tabsPerPage : detailsFiltered.length % tabsPerPage
    );
    if (detailsFiltered.length > tabsPerPage && currentPage !== newPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePageParametersOnResizing() {
    let [averageTabWidth, resultsTabWidth] = getWidthOfTabs(detailsFiltered.length);
    const newTabsPerPage = Math.ceil((elementWidth - resultsTabWidth) / averageTabWidth);
    setCurrentPageLength(
      detailsFiltered.length === newTabsPerPage
        ? newTabsPerPage
        : detailsFiltered.length % newTabsPerPage
    );
    setTabsPerPage(newTabsPerPage);
    let amountPages = Math.ceil(detailsFiltered.length / newTabsPerPage);
    if (currentPage > amountPages && amountPages !== 0) {
      setCurrentPage(currentPage - 1);
    }
    setPages(amountPages);
  }

  useEffect(() => {
    changePageParametersOnDetailsChange();
  }, [detailsFiltered.length]);

  useEffect(() => {
    changePageParametersOnResizing();
  }, [elementWidth, isSideSwitched]);

  const [indexOfFirstTodo, indexOfLastTodo] = getFirstAndLastPages(currentPage, tabsPerPage);
  return {
    detailsFiltered,
    currentPageLength,
    currentPage,
    tabsPerPage,
    pages,
    indexOfFirstTodo,
    indexOfLastTodo,
    setCurrentPage,
  };
}
