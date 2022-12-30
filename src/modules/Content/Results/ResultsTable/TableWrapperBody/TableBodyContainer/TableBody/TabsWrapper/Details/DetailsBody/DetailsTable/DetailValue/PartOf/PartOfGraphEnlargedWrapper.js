import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import DetailsHeader from 'components/Header/DetailsHeader';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePartOfImageProperty } from 'redux/details-reducer';
import GOVInfoText from './GOVInfoText/GOVInfoText';
import PartOfClasses from './PartOf.module.css';
import PartOfGraphEnlarged from './PartOfGraphEnlarged';

// Wrapper component to wrap additional elements (header, info text, tooltip) for the enlarged part-of graph of the GOV-entity

const PartOfGraphEnlargedWrapper = ({ info, id, name }) => {
  const dispatch = useDispatch();
  return (
    <div className={PartOfClasses.dialog}>
      <div>
        <div onClick={() => dispatch(changePartOfImageProperty(id, 'isEnlarged', false))}>
          <TooltipContainer icon={faArrowCircleLeft} text='tt_go_back_part_of_image' />
        </div>
        <DetailsHeader name={name} id={id} />
      </div>
      <PartOfGraphEnlarged info={info} />
      <GOVInfoText />
    </div>
  );
};

export default PartOfGraphEnlargedWrapper;
