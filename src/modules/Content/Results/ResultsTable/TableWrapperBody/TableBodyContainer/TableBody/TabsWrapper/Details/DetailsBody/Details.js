import classNames from 'classnames';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useDetailsData } from 'Hooks/Details/useDetailsData';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import DetailsClasses from '../Details.module.css';
import DetailsTable from './DetailsTable/DetailsTable';
import PartOfGraphEnlargedWrapper from './DetailsTable/DetailValue/PartOf/PartOfGraphEnlargedWrapper';
import MainDetailsWindowHead from './MainDetailsWindowHead/MainDetailsWindowHead';

// Wrapper to contain condition to show enlarged part of picture if needed or details table with its header

const Details = props => {
  const detailsToRender = useDetailsData(props.details);
  const isSideSwitched = useSelector(getIsSideSwitched);
  return (
    <div
      className={classNames(DetailsClasses.mainDetailsWindow, {
        [DetailsClasses.mainDetailsBottom]: isSideSwitched,
      })}>
      {props.details.hasOwnProperty('image') && props.details.image.isEnlarged ? (
        <PartOfGraphEnlargedWrapper
          info={props.details.image.info}
          id={props.details.detail.id}
          name={props.details.detail.name}
        />
      ) : (
        <>
          <MainDetailsWindowHead details={props.details} data={detailsToRender} />
          <DetailsTable details={props.details} data={detailsToRender} />
        </>
      )}
    </div>
  );
};

export default withReactMemo(Details);
