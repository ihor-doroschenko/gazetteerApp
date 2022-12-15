import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleDetail } from 'redux/details-reducer';

const MatchingsArrow = ({ gazName, id }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(handleDetail(gazName, id))}>
      <TooltipContainer placement='left' icon={faArrowCircleRight} text='tt_go_to_details' />
    </div>
  );
};
export default MatchingsArrow;
