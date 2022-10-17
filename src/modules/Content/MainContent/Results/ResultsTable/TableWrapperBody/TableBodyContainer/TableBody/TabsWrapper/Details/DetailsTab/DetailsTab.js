import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromDetails } from 'redux/details-reducer';
import DetailsClasses from '../Details.module.css';

const DetailsTab = props => {
  const dispatch = useDispatch();
  const { focus, id, index, panelId, selected, tabRef, tabIndex, el, ...other } = props;
  const closeTab = event => {
    event.stopPropagation();
    dispatch(removeFromDetails(el.gazName, el.details.id));
    other.setTabIndexWrapper(0);
    if (other.currentPageLength === 1 && other.currentPage !== 1) {
      other.setCurrentPage(other.currentPage - 1);
    }
  };
  return (
    <div className={DetailsClasses.windowWrapper}>
      <div>
        <p>{el.details.internId ? el.details.internId : index}</p>
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
