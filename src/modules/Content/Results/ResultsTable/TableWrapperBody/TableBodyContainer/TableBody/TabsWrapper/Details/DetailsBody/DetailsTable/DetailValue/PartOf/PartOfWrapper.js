import CustomBreadcrumb from 'components/CustomBreadcrumb/CustomBreadcrumb';
import DetailCellWrapper from 'components/DetailCell/DetailCellWrapper';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import PartOf from './PartOf';
import PartOfClasses from './PartOf.module.css';

// Wrapper component to contain bread crumb element and the condition to switch between graph and text view for the part-of attribute of the GOV entity

const PartOfWrapper = ({ id, image, value }) => {
  return (
    <div className={PartOfClasses.govBildSwitch}>
      <CustomBreadcrumb id={id} image={image} />
      {image && image.isOpened ? (
        <PartOf image={image} id={id} />
      ) : (
        <DetailCellWrapper values={value || ''} limit={5} />
      )}
    </div>
  );
};

export default withReactMemo(PartOfWrapper);
