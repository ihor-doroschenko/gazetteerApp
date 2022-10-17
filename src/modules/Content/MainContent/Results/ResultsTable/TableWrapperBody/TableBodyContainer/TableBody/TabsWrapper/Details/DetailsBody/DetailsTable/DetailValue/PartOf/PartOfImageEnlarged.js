import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import DetailsHeader from 'components/Header/DetailsHeader';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import Zoom from 'react-img-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { changePartOfIsEnlarged } from 'redux/details-reducer';
import { getResultsBlockRightWidth } from 'selectors/simple-selectors/table-state-selectors';
import GOVInfoText from './GOVInfoText/GOVInfoText';
import PartOfClasses from './PartOf.module.css';

const PartOfImageEnlarged = ({ info, id, name }) => {
  const dispatch = useDispatch();
  const resultsBlockRightWidth = useSelector(getResultsBlockRightWidth);
  return (
    <div className={PartOfClasses.dialog}>
      <div>
        <div onClick={() => dispatch(changePartOfIsEnlarged(id, false))}>
          <TooltipContainer icon={faArrowCircleLeft} text='tt_go_back_part_of_image' />
        </div>
        <DetailsHeader name={name} id={id} />
      </div>
      <Zoom
        key={`${name}and${resultsBlockRightWidth}`}
        img={info}
        zoomScale={5}
        width={resultsBlockRightWidth}
        height={300}
      />
      <GOVInfoText />
    </div>
  );
};

export default PartOfImageEnlarged;
