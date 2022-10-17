import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import CompareTool from 'modules/Content/MainContent/Results/Compare/CompareTool';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDetail } from 'redux/details-reducer';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';

const MatchingArrow = ({ gazName, id }) => {
  const dispatch = useDispatch();
  const usedGazetteers = useSelector(getGazetteers).map(g => g.gazName);
  return (
    <>
      {usedGazetteers.some(el => el === gazName) && (
        <div className='flexCenter'>
          <CompareTool gazName={gazName} id={id} />
          <div onClick={() => dispatch(handleDetail(gazName, id))}>
            <TooltipContainer placement='left' icon={faArrowCircleRight} text='tt_go_to_details' />
          </div>
        </div>
      )}
    </>
  );
};

export default MatchingArrow;
