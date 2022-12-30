import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeDetail } from 'redux/details-reducer';
import DetailsClasses from '../Details.module.css';

// Component to contain elements of the tab itself (under tab is here meant actual buttons to switch between tab panels with data). The functionalities are passed from previous wrapper components and are used here mainly to handle closing of the tab

const DetailsTab = ({
  index,
  tabIndex,
  el,
  setTabIndex,
  currentPageLength,
  setCurrentPage,
  currentPage,
}) => {
  const dispatch = useDispatch();
  const closeTab = event => {
    event.stopPropagation();
    setTabIndex(0);
    dispatch(removeDetail(el.detail.id));
    if (currentPageLength === 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={DetailsClasses.windowWrapper}>
      <div>
        <p>{el.detail.internId ? el.detail.internId : index}</p>
      </div>
      {index === tabIndex && (
        <div onClick={event => closeTab(event)}>
          <TooltipContainer placement='top' text='tt_close_detail' icon={faTimes} delay={true} />
        </div>
      )}
    </div>
  );
};

export default DetailsTab;
